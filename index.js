const { ApolloServer, gql } = require('apollo-server');
const models = require('./models');

const typeDefs = gql`
  type Episode {
    id: ID
    name: String
    description: String
    show: Show
    season: Int
    episode: Int
    duration: Int
    releaseDate: String
  }

  type Show {
    id: ID
    name: String
    description: String
    episodes: [Episode]
  }

  type Query {
    shows(from: Int, limit: Int): [Show!]
    episodes: [Episode]
    show(showId: ID!): Show!
    episode(episodeId: ID!): Episode!
  }
`;

const resolvers = {
  Query: {
    async show(root, args, { models }) {
      return models.Show.findByPk(args.showId);
    },
    async shows(root, args, { models }) {
      return models.Show.findAll({
        offset: args.from,
        limit: args.limit,
        include: models.Episode,
      });
    },
    async episode(root, args, { models }) {
      return models.Episode.findByPk(args.episodeId);
    },
    async episodes(root, args, { models }) {
      return models.Episode.findAll({
        offset: args.from,
        limit: args.limit,
      });
    },
  },
  Show: {
    async episodes(show) {
      return show.getEpisodes();
    },
  },
  Episode: {
    async show(episode) {
      return episode.getShow();
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
  context: { models },
});

console.log('Start v2');

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

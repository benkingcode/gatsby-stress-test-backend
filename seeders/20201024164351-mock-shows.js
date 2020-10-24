'use strict';

const now = new Date();

const showsData = [
  {
    name: 'Under the Dome',
    description:
      "<p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.</p>",
  },
  {
    name: 'Person of Interest',
    description:
      "<p>You are being watched. The government has a secret system, a machine that spies on you every hour of every day. I know because I built it. I designed the Machine to detect acts of terror but it sees everything. Violent crimes involving ordinary people. People like you. Crimes the government considered \"irrelevant\". They wouldn't act so I decided I would. But I needed a partner. Someone with the skills to intervene. Hunted by the authorities, we work in secret. You'll never find us. But victim or perpetrator, if your number is up, we'll find you.</p>",
  },
  {
    name: 'Bitten',
    description:
      '<p>Based on the critically acclaimed series of novels from Kelley Armstrong. Set in Toronto and upper New York State, <b>Bitten</b> follows the adventures of 28-year-old Elena Michaels, the world\'s only female werewolf. An orphan, Elena thought she finally found her "happily ever after" with her new love Clayton, until her life changed forever. With one small bite, the normal life she craved was taken away and she was left to survive life with the Pack.</p>',
  },
  {
    name: 'Arrow',
    description:
      '<p>After a violent shipwreck, billionaire playboy Oliver Queen was missing and presumed dead for five years before being discovered alive on a remote island in the Pacific. He returned home to Starling City, welcomed by his devoted mother Moira, beloved sister Thea and former flame Laurel Lance. With the aid of his trusted chauffeur/bodyguard John Diggle, the computer-hacking skills of Felicity Smoak and the occasional, reluctant assistance of former police detective, now beat cop, Quentin Lance, Oliver has been waging a one-man war on crime.</p>',
  },
  {
    name: 'True Detective',
    description:
      '<p>Touch darkness and darkness touches you back. <b>True Detective</b> centers on troubled cops and the investigations that drive them to the edge. Each season features a new cast and a new case.</p>',
  },
  {
    name: 'The 100',
    description:
      '<p>Ninety-seven years ago, nuclear Armageddon decimated planet Earth, destroying civilization. The only survivors were the 400 inhabitants of 12 international space stations that were in orbit at the time. Three generations have been born in space, the survivors now number 4,000, and resources are running out on their dying "Ark" - the 12 stations now linked together and repurposed to keep the survivors alive. Draconian measures including capital punishment and population control are the order of the day, as the leaders of the Ark take ruthless steps to ensure their future, including secretly exiling a group of 100 juvenile prisoners to the Earth\'s surface to test whether it\'s habitable.</p>',
  },
  {
    name: 'Homeland',
    description:
      '<p>The winner of 6 Emmy Awards including Outstanding Drama Series, <b>Homeland</b> is an edge-of-your-seat sensation. Marine Sergeant Nicholas Brody is both a decorated hero and a serious threat. CIA officer Carrie Mathison is tops in her field despite being bipolar. The delicate dance these two complex characters perform, built on lies, suspicion, and desire, is at the heart of this gripping, emotional thriller in which nothing short of the fate of our nation is at stake.</p>',
  },
  {
    name: 'Glee',
    description:
      '<p><b>Glee </b>is a musical comedy about a group of ambitious and talented young adults in search of strength, acceptance and, ultimately, their voice.</p>',
  },
  {
    name: 'Revenge',
    description:
      '<p>This is not a story about forgiveness; <b>Revenge</b> is a show about retribution. Meet Emily Thorne, the newest resident of The Hamptons. When she was a little girl (and known as Amanda Clarke) her father, David Clarke, was framed for a horrific crime and subsequently sent to prison. While serving his time, the conspirators plotted and murdered David in order to prevent the truth from coming out. Emily is now back with a new identity and ready to take vengeance on the people that murdered her father and stole her childhood.</p>',
  },
  {
    name: 'Grimm',
    description:
      '<p><b>Grimm </b>is a drama series inspired by the classic Grimm Brothers\' Fairy Tales. After Portland homicide detective Nick Burkhardt discovers he\'s descended from an elite line of criminal profilers known as "Grimms", he increasingly finds his responsibilities as a detective at odds with his new responsibilities as a Grimm.</p>',
  },
  {
    name: 'Gotham',
    description:
      "<p>The good. The evil. The beginning.</p><p>Everyone knows the name Commissioner Gordon. He is one of the crime world's greatest foes, a man whose reputation is synonymous with law and order. But what is known of Gordon's story and his rise from rookie detective to Police Commissioner? What did it take to navigate the multiple layers of corruption that secretly ruled Gotham City, the spawning ground of the world's most iconic villains? And what circumstances created them – the larger-than-life personas who would become Catwoman, The Penguin, The Riddler, Two-Face and The Joker?</p><p><b>Gotham </b>is an origin story of the great DC Comics Super-Villains and vigilantes, revealing an entirely new chapter that has never been told. It follows one cop's rise through a dangerously corrupt city teetering between good and evil, and chronicles the birth of one of the most popular super heroes of our time.</p>",
  },
  {
    name: 'Lost Girl',
    description:
      '<p><b>Lost Girl</b> follows supernatural seductress Bo, a Succubus who feeds on the sexual energy of humans. Growing up with human parents, Bo had no reason to believe she was anything other than the girl next door — until she drained her boyfriend to death in their first sexual encounter. Now she has hit the road alone and afraid. <br> She discovers she is one of the Fae, creatures of legend and folklore, who pass as humans while feeding off them secretly and in different ways, as they have for millennia. Relieved yet horrified to find out that she is not alone, Bo decides to take the middle path between the humans and the Fae while embarking on a personal mission to unlock the secrets of her origin.</p><p>With the help of her human sidekick, Kenzi, and Dyson, a sexy police detective, Bo takes on a challenge every week helping a Fae or human client who comes to her to solve a mystery, or to right a wrong.</p>',
  },
  {
    name: 'The Flash',
    description:
      '<p>After a particle accelerator causes a freak storm, CSI Investigator Barry Allen is struck by lightning and falls into a coma. Months later he awakens with the power of super speed, granting him the ability to move through Central City like an unseen guardian angel. Though initially excited by his newfound powers, Barry is shocked to discover he is not the only "meta-human" who was created in the wake of the accelerator explosion -- and not everyone is using their new powers for good. Barry partners with S.T.A.R. Labs and dedicates his life to protect the innocent. For now, only a few close friends and associates know that Barry is literally the fastest man alive, but it won\'t be long before the world learns what Barry Allen has become...The Flash!</p>',
  },
  {
    name: 'Continuum',
    description:
      "<p><b>Continuum </b>is a one-hour police drama centered on Kiera Cameron, a regular cop from 65 years in the future who finds herself trapped in present day Vancouver. She is alone, a stranger in a strange land, and has eight of the most ruthless criminals from the future, known as Liber8, loose in the city.</p><p>Lucky for Kiera, through the use of her CMR (cellular memory recall), a futuristic liquid chip technology implanted in her brain, she connects with Alec Sadler, a seventeen-year-old tech genius. When Kiera calls and Alec answers, a very unique partnership begins.</p><p>Kiera's first desire is to get \"home.\" But until she figures out a way to do that, she must survive in our time period and use all the resources available to her to track and capture the terrorists before they alter history enough to change the course of the future. After all, what's the point of going back if the future isn't the one you left?</p>",
  },
  {
    name: 'Constantine',
    description:
      "<p>Based on the wildly popular comic book series \"Hellblazer\" from DC Comics, seasoned demon hunter and master of the occult John Constantine is armed with a ferocious knowledge of the dark arts and a wickedly naughty wit. He fights the good fight - or at least he did. With his soul already damned to hell, he's decided to abandon his campaign against evil until a series of events thrusts him back into the fray, and he'll do whatever it takes to protect the innocent. With the balance of good and evil on the line‎, <b>Constantine </b>will use his skills to travel the country, find the supernatural terrors that threaten our world and send them back where they belong. After that, who knows... maybe there's hope for him and his soul after all.</p>",
  },
  {
    name: 'Penny Dreadful',
    description:
      "<p>Some of literature's most terrifying characters, including Dr. Frankenstein and his monster, Dorian Gray, and iconic figures from the novel Dracula are lurking in the darkest corners of Victorian London. They are joined by a core of original characters in a complex, frightening new narrative. <b>Penny Dreadful </b>is a psychological thriller filled with dark mystery and suspense, where personal demons from the past can be stronger than vampires, evil spirits and immortal beasts.</p>",
  },
  {
    name: 'The Amazing Race',
    description:
      '<p><b>The Amazing Race </b>is an adventure reality show in which 10-12 teams race around the world and compete vs each other in very difficult tasks. Each team consists of two racers. At the end the winning team is granted 1 Million Dollars. The show is hosted by Phil Keoghan.</p>',
  },
  {
    name: 'Supernatural',
    description:
      '<p>The show follows brothers Sam and Dean Winchester, who travel across America in a black 1967 Chevy Impala investigating and combating paranormal events and other unexplained occurrences, many of them based on American urban legends and folklore as well as classic supernatural creatures such as vampires, werewolves, and ghosts.</p>',
  },
  {
    name: 'The Strain',
    description:
      '<p><b>The Strain</b> is a high-concept thriller that tells the story of Dr. Ephraim Goodweather, the head of the Center for Disease Control Canary Team in New York City. He and his team are called upon to investigate a mysterious viral outbreak with hallmarks of an ancient and evil strain of vampirism. As the strain spreads, Goodweather, his team, and an assembly of everyday New Yorkers wage war for the fate of humanity itself.</p>',
  },
  {
    name: 'The Last Ship',
    description:
      "<p>Their mission is simple: Find a cure. Stop the virus. Save the world. When a global pandemic wipes out eighty percent of the planet's population, the crew of a lone naval destroyer must find a way to pull humanity from the brink of extinction.</p>",
  },
  {
    name: 'True Blood',
    description:
      '<p><b>True Blood </b>is a horror/drama based on a series of novels called <i>The Southern American Vampires Mysteries</i>. It focuses on Sookie Stackhouse and her various encounters with vampires and other supernatural beings. The show is centred in the small town of Bon Temps in Louisiana. The show focuses heavily on the co-existence of humans with vampires. The show also touches on several other controversial issues involving equal rights, violence, discrimination and religion.</p>',
  },
  {
    name: 'Once Upon a Time in Wonderland',
    description:
      "<p>In Victorian England, the young and beautiful Alice tells a tale of a strange new land that exists on the other side of a rabbit hole. An invisible cat, a hookah smoking caterpillar and playing-cards that talk are just some of the fantastic things she's seen during this impossible adventure. Surely this troubled girl must be insane, and her doctors aim to cure her with a treatment that will make her forget everything. Alice seems ready to put it all behind her, especially the painful memory of the genie she fell in love with and lost forever -- the handsome and mysterious Cyrus . But deep down Alice knows this world is real, and just in the nick of time the sardonic Knave of Hearts and the irrepressible White Rabbit arrive to save her from a doomed fate. Together the trio will take a tumble down the rabbit hole to this Wonderland where nothing is impossible.</p>",
  },
  {
    name: 'Hawaii Five-0',
    description:
      "<p><b>Hawaii Five-0</b> is a contemporary take on the classic series about a new elite federalized task force whose mission is to wipe out the crime that washes up on the Islands' sun-drenched beaches. Detective Steve McGarrett, a decorated Naval officer-turned-cop, returned to Oahu to investigate his father's murder and stayed after Hawaii's former governor persuaded him to head up the new team: his rules, no red tape and full blanket authority to hunt down the biggest \"game\" in town. Joining McGarrett is Detective Danny \"Danno\" Williams, a relocated ex-New Jersey cop - a working man in paradise who prefers skyscrapers to the coastline - but who's committed to keeping the Islands safe for his young daughter; Chin Ho Kelly, an ex-Honolulu police detective and former protégé of McGarrett's father who was wrongly accused of corruption; Dr. Max Bergman, the quirky coroner; Chin's cousin, Kono Kalakaua, a beautiful and fearless native; and Captain Lou Grover, who formerly headed Hawaii's SWAT unit. Joining them is Jerry Ortega, a former classmate of Chin's and the Island's local conspiracy theorist. The state's brash FIVE-0 unit, who may spar and jest among themselves, remain determined to eliminate the seedy elements from the 50th state.</p>",
  },
  {
    name: 'Hellsing',
    description:
      "<p><b>Hellsing </b>is a 13-part anime based on the manga of the same name. The plot is significantly difficult to that of the the manga although the characters are the same. The show mainly focuses on the hellsing institute that houses the anti-hero named Alucard who swore loyalty to the Helsing family many years before. Alucard being the first ever vampire takes on a new apprentice named Sera's.</p>",
  },
  {
    name: 'Hellsing Ultimate',
    description:
      "<p><b>Hellsing Ultimate</b>, unlike the 13-part <i>Hellsing</i> series, follows the manga of the same name very closely. Alucard being the main protagonist and anti-hero/vampire. <i>Hellsing Ultimate</i> is a 10-part series of OVAs whereby Alucard turns Sera's into a vampire. The main focus of the plot being on an enemy neo-nazi group.</p>",
  },
  {
    name: 'Berserk',
    description:
      '<p><b>Berserk </b>is a 25-part anime set in a dark fantasy/horror environment whereby the series focuses on the main character guts; a lone swordman who later meets up with a group of mercenaries called the band of the hawk. The leader of this band holds a strange necklace called a behelit that will only lead to evil.</p>',
  },
  {
    name: 'Californication',
    description:
      '<p><b>Californication </b>is a comedy/drama series based around the writer Hank Moody. He moves to California and suffers a writers block as well as many other family and personal issues. His drinking and generally unhealthy lifestyle interrupts his relationships with his long term lover Karen and his daughter Becca as he struggles with his manager Charlie Runkle.</p>',
  },
  {
    name: 'Vikings',
    description:
      '<p><b>Vikings</b> transports us to the brutal and mysterious world of Ragnar Lothbrok, a Viking warrior and farmer who yearns to explore - and raid - the distant shores across the ocean.</p>',
  },
  {
    name: 'American Horror Story',
    description:
      '<p><b>American Horror Story </b>is an horror television anthology series. Each season is conceived as a self-contained miniseries, following a disparate set of characters and settings, and a storyline with its own beginning, middle, and end. While some actors appear for more than one year, they play completely different roles in each season.</p>',
  },
  {
    name: "Marvel's Agents of S.H.I.E.L.D.",
    description:
      '<p>Phil Coulson heads an elite team of fellow agents with the worldwide law-enforcement organization known as S.H.I.E.L.D. (Strategic Homeland Intervention Enforcement and Logistics Division), as they investigate strange occurrences around the globe. Its members -- each of whom brings a specialty to the group -- work with Coulson to protect those who cannot protect themselves from extraordinary and inconceivable threats.</p>',
  },
  {
    name: 'Fargo',
    description:
      '<p><b>Fargo </b>is an American crime drama with some dark comical elements inspired by the film <i>Fargo</i> written by the Coen brothers. It was met with considerable acclaim as insurance salesman Lester Nygaard faces off against the psychopath Lorne Malvo.</p>',
  },
  {
    name: 'Hemlock Grove',
    description:
      '<p>Secrets are just a part of daily life in the small Pennsylvania town of <b>Hemlock Grove</b>, where the darkest evils hide in plain sight.</p>',
  },
  {
    name: 'Helix',
    description:
      '<p><b>Helix </b>is a science fiction thriller that focuses on a CDC expedition into the arctic. They go there to investigate the potential outbreak of a disease with no idea what they are getting themselves into. They encounter an almost zombie-like threat that could threaten mankind itself whilst the operator of the facility seems to know more than what he is saying.</p>',
  },
  {
    name: 'The Killing',
    description:
      '<p><b>The Killing </b>is a crime drama television series based on the Danish series Forbrydelsen. It follows detectives Stephen Holder and Sarah Linden and their work as detectives investigating murders. Sarah Linden takes cases very seriously and has issues keeping her work and family separate, as she pairs up with recovering addict Stephen Holder to solve dark murders.</p>',
  },
  {
    name: 'Intruders',
    description:
      '<p>A contemporary, chilling, paranormal tale set in the moody Pacific Northwest, the series spins a fascinating and complex web of drama. As strange, apparently unrelated events start happening, multiple story-lines - a missing wife, an assassin covering his crimes, a child on the run - begin to intertwine to reveal a conspiracy that will forever change our understanding of human nature.</p>',
  },
  {
    name: 'Z Nation',
    description:
      "<p><b>Z Nation</b> starts three years after the zombie virus has gutted the country, a team of everyday heroes must transport the only known survivor of the plague from New York to California, where the last functioning viral lab waits for his blood. Although the antibodies he carries are the world's last, best hope for a vaccine, he hides a dark secret that threatens them all. With humankind's survival at stake, the ragtag band embarks on a journey of survival across three thousand miles of rusted-out post-apocalyptic America.</p>",
  },
  {
    name: 'Resurrection',
    description:
      "<p>The people of Arcadia, Missouri are forever changed when their deceased loved ones suddenly start to reappear. An 8-year-old American boy wakes up alone in a rice paddy in a rural Chinese province with no idea how he got there. Details start to emerge when the boy, who calls himself Jacob, recalls that his hometown is Arcadia, and an Immigration agent, J. Martin Bellamy, takes him there. The home he claims as his own is occupied by a 60-year-old couple, Henry and Lucille Langston, who lost their son, Jacob, more than 30 years ago. While they look different, young Jacob recognizes them as his parents. Lucille is overjoyed at the seeming miracle of her son's reappearance. Henry is reluctant to accept that Jacob is back. Those closest to the family want answers, including Sheriff Fred Langston, whose wife Barbara drowned 30 years ago while trying to save Jacob, and Fred's daughter, Maggie, a local doctor. Pastor Tom Hale seeks a spiritual reason for what's happening in his community. When things take an even more shocking turn, Maggie's life-long friend, Elaine Richards, finds herself drawn into Arcadia's growing mystery. Bellamy, an outsider in the town, joins forces with Maggie to figure out why the unexplainable is happening in Arcadia. As their investigation plays out, Maggie learns some unsettling truths about her own past. Will they be able to solve the mystery of Arcadia before the rest of the world catches on to events there? And will they be able to protect Jacob from forces beyond their control?</p>",
  },
  {
    name: 'Death Note',
    description:
      "<p><b>Death Note </b>is an anime series based around a manga of the same name whereby a human finds a death god's notebook. Any person's name written in this notebook will die. The main character who finds this noteboook is Light Yagami who faces off against an unfaced character named L who tries to challenge him.</p>",
  },
  {
    name: 'Last Man Standing',
    description:
      '<p><b>Last Man Standing</b> follows Mike Baxter, a married father of three girls, who tries to maintain his manliness, despite being surrounded by women.</p>',
  },
  {
    name: 'Sleepy Hollow',
    description:
      '<p><b>Sleepy Hollow</b> is a thrilling mystery-adventure drama series spanning two and a half centuries, in which a resurrected Ichabod Crane pairs up with a present-day police lieutenant to save the enigmatic town of Sleepy Hollow--and the world--from unprecedented evil.</p>',
  },
  {
    name: 'Outlander',
    description:
      "<p><b>Outlander </b>follows the story of Claire Randall, a married combat nurse from 1945 who is mysteriously swept back in time to 1743, where she is immediately thrown into an unknown world where her life is threatened. When she is forced to marry Jamie, a chivalrous and romantic young Scottish warrior, a passionate affair is ignited that tears Claire's heart between two vastly different men in two irreconcilable lives.</p><p>The <i>Outlander</i> series, adapted from Diana Gabaldon's international best-selling books, spans the genres of romance, science fiction, history and adventure into one epic tale.</p>",
  },
  {
    name: 'Scorpion',
    description:
      "<p><b>Scorpion</b>, inspired by a true story, is a high-octane drama about eccentric genius Walter O'Brien and his team of brilliant misfits who comprise the last line of defense against complex, high-tech threats of the modern age. As Homeland Security's new think tank, O'Brien's \"Scorpion\" team includes Toby Curtis an expert behaviorist who can read anyone; Happy Quinn, a mechanical prodigy; and Sylvester Dodd, a statistics guru. Pooling their extensive technological knowledge to solve mind-boggling predicaments amazes federal agent Cabe Gallo, who shares a harrowing history with O'Brien. However, while this socially awkward group is comfortable with each other's humor and quirks, life outside their circle confounds them, so they rely on Paige Dineen, who has a young, gifted son, to translate the world for them. At last, these nerdy masterminds have found the perfect job: a place where they can apply their exceptional brainpower to solve the nation's crises, while also helping each other learn how to fit in.</p>",
  },
  {
    name: 'NCIS: New Orleans',
    description:
      '<p><b>NCIS: New Orleans </b>is a drama about the local field office that investigates criminal cases involving military personnel in The Big Easy, a city known for its music, entertainment and decadence. Leading the team is Special Agent Dwayne Pride, a.k.a. "King," a native of New Orleans who is driven by his need to do what is right. Working with Pride is Special Agent Christopher LaSalle, who plays hard but works harder and former ATF agent Sonja Percy, who is still adjusting to the team after years of solo undercover assignments. Supporting them is coroner Dr. Loretta Wade, who is as eccentric as she is smart; her brilliant, quirky Forensic Scientist, Sebastian Lund; and Investigative Computer Specialist Patton Plame, an animated and talented hacker. New to the team is Special Agent Tammy Gregorio, a tough, acerbic FBI agent with a mysterious past in New Orleans, who is sent from D.C. to investigate the NCIS team, but also work with Pride when high-risk cases threaten the city. This colorful city that harbors a dark side is a magnet for service personnel on leave, and when overindulgence is followed by trouble, Pride\'s team is at its best</p>',
  },
  {
    name: 'Forever',
    description:
      "<p>Doctor Henry Morgan, New York City's star medical examiner, has a secret. He doesn't just study the dead to solve criminal cases, he does it to solve the mystery that has eluded him for 200 years - the answer to his own inexplicable immortality. This long life has given Henry remarkable observation skills which impresses his new partner, Detective Jo Martinez. Each week, a new case and their budding friendship will reveal layers of Henry's long and colorful past. Only his best friend and confidant, Abe knows Henry's secret.</p>",
  },
  {
    name: 'Witches of East End',
    description:
      "<p>Based on Melissa de la Cruz's best-selling novel, <b>Witches of East End</b> centers on the mysterious Beauchamp family who live in the secluded seaside town of East End. Free-spirited artist Joanna Beauchamp is the mother of wild-child bartender Freya and shy librarian Ingrid, who are both gifted -- and cursed -- with a magic birthright, of which they are unaware. Freya notices bizarre occurrences in her life when she inexplicably finds herself drawn to the troubled brother of her wealthy fiance. But it isn't until Joanna's estranged sister appears with a warning that could change the family's fate that the matriarch must reveal to her daughters that they are immortal witches with untapped powers, a revelation that turns their small-town life upside down.</p>",
  },
  {
    name: 'Madam Secretary',
    description:
      '<p><b>Madam Secretary</b> follows Elizabeth McCord, the shrewd, determined, newly appointed Secretary of State who drives international diplomacy, battles office politics and circumvents protocol as she negotiates global and domestic issues, both at the White House and at home. A college professor and a brilliant former CIA analyst who left for ethical reasons, Elizabeth returns to public life at the request of the President following the suspicious death of her predecessor. The President values her apolitical leanings, her deep knowledge of the Middle East, her flair for languages and her ability to not just think outside the box, but to not even acknowledge there is a box.</p>',
  },
  {
    name: 'Brooklyn Nine-Nine',
    description:
      "<p><b>Brooklyn Nine-Nine</b> is an ensemble comedy about a talented-but-carefree detective, a by-the-book police captain and their precinct colleagues. While based in the workplace, Brooklyn Nine-Nine is not really about the job – it's about the men and women behind the badge.</p>",
  },
  {
    name: 'The Lottery',
    description:
      '<p>Set within a dystopian future driven by a global fertility crisis, <b>The Lottery </b>reveals a world staring down the barrel of impending extinction as women have mysteriously stopped bearing children. After years of research, Dr. Alison Lennon and her team remarkably fertilize 100 embryos. However, her victory is short-lived when the Director of the U.S. Fertility Commission, Darius Hayes, takes government control of the lab and informs the President of the monumental scientific breakthrough. To determine which women will carry the prized embryos to term, Chief of Staff Vanessa Keller convinces the President to hold a national lottery and a battle over the control of the 100 embryos begins.</p>',
  },
  {
    name: 'The Knick',
    description:
      '<p>New York City, 1900: The Knickerbocker Hospital is home to groundbreaking surgeons, nurses and staff who push the boundaries of medicine in a time of astonishingly high mortality rates and zero antibiotics. The newly appointed leader of the surgery staff is the brilliant, arrogant renegade Dr. John Thackery, whose addiction to cocaine and opium is trumped only by his ambition for medical discovery and renown among his peers. Into the all-white staff and patient hospital comes the equally gifted Harvard graduate Dr. Algernon Edwards, who must fight for respect while trying to navigate the racially charged city. Trying to maintain its reputation for quality care while realizing a profit, the Knickerbocker makes an effort to attract wealthy clientele, while literally struggling to keep the lights on.</p>',
  },
  {
    name: 'How to Get Away with Murder',
    description:
      '<p>The brilliant, charismatic and seductive Professor Annalise Keating gets entangled with four law students from her class, <b>How to Get Away with Murder</b>. Little do they know that they will have to apply what they learned to real life, in this masterful, sexy, suspense-driven legal thriller.</p>',
  },
  {
    name: 'Nashville',
    description:
      "<p><b>Nashville</b> is set against the backdrop of the city's music scene and follows Rayna Jaymes and Juliette Barnes. Both women face personal and professional challenges as they navigate their paths as artists and individuals. Surrounding them, and often complicating their lives, are their family, friends and, in some cases, lovers, as well as the up-and-coming performers and songwriters trying to get ahead in the business. Music City can mean so many things to different people. In Nashville, musicians and songwriters are at the heart of the storm driven by their own ambitions. Some are fueled by their creativity and passion for fame. Others struggle to cope with the pressures of success and are doing everything in their power to stay on top.</p>",
  },
  {
    name: 'Legends',
    description:
      "<p>Sean Bean stars in <b>Legends, </b>a suspense-filled drama based on the award-winning book by master spy novelist Robert Littell. Bean plays Martin Odum, an undercover agent working for the FBI's Deep Cover Operations (DCO) division. Martin has the uncanny ability to transform himself into a completely different person for each job. But he begins to question his own identity when a mysterious stranger suggests that Martin isn't the man he believes himself to be.</p>",
  },
  {
    name: 'Red Band Society',
    description:
      '<p>What if a hospital was your high school, boarding school and summer camp rolled into one? What if it was the place where you fell in love for the first time and made friendships that lasted a lifetime? And what if it was all weirdly hilarious and the most fun you ever had in your entire life? This is the world of <b>Red Band Society</b>.</p>',
  },
  {
    name: 'Chicago P.D.',
    description:
      "<p>District 21 of the Chicago Police Department is made up of two distinctly different groups. There are the uniformed cops who patrol the beat and go head to head with the city's street crimes. And there's the Intelligence Unit, the team that combats the city's major offenses - organized crime, drug trafficking, high profile murders and beyond. These are their stories.</p>",
  },
  {
    name: 'black-ish',
    description:
      "<p>Andre 'Dre' Johnson has a great job, a beautiful wife, Rainbow, four kids, and a colonial home in the 'burbs. But has success brought too much assimilation for this black family? With a little help from his dad, Dre sets out to establish a sense of cultural identity for his family that honors their past while embracing the future.</p>",
  },
  {
    name: 'New Girl',
    description:
      '<p><b>New Girl</b> is a single-camera ensemble comedy starring Zooey Deschanel as Jess, an offbeat girl who - after a bad breakup - moves in with three single guys and essentially sets a bomb off in their lives.</p>',
  },
  {
    name: 'Chicago Fire',
    description:
      '<p>No job is more stressful, dangerous or exhilarating than those of the Firefighters, Rescue Squad and Paramedics of Chicago Firehouse 51. These are the courageous men and women who forge headfirst into danger when everyone else is running the other way and whose actions make the difference between life and death. These are their stories.</p>',
  },
  {
    name: 'NCIS',
    description:
      "<p><b>NCIS</b> (Naval Criminal Investigative Service) is more than just an action drama. With liberal doses of humor, it's a show that focuses on the sometimes complex and always amusing dynamics of a team forced to work together in high-stress situations. Leroy Jethro Gibbs, a former Marine gunnery sergeant, whose skills as an investigator are unmatched, leads this troupe of colorful personalities. Rounding out the team are Anthony DiNozzo, an ex-homicide detective whose instincts in the field are unparalleled and whose quick wit and humorous take on life make him a team favorite; the youthful and energetic forensic specialist Abby Sciuto, a talented scientist whose sharp mind matches her Goth style and eclectic tastes; Caitlin Todd, an ex-Secret Service Agent; and Timothy McGee, an MIT graduate whose brilliance with computers far overshadows his insecurities in the field; Assisting the team is medical examiner Dr. Donald \"Ducky\" Mallard, who knows it all because he's seen it all, and he's not afraid to let you know. From murder and espionage to terrorism and stolen submarines, these special agents travel the globe to investigate all crimes with Navy or Marine Corps ties.</p>",
  },
  {
    name: 'Orphan Black',
    description:
      '<p><b>Orphan Black</b> is about Sarah, an outsider and orphan whose life changes dramatically after witnessing the suicide of a woman, "Beth", who looks just like her. Sarah takes her identity, her boyfriend and her money. But instead of solving her problems, the street-smart chameleon is thrust headlong into a kaleidoscopic mystery. She makes the dizzying discovery that she and the dead woman are clones... but are they the only ones? Sarah quickly finds herself caught in the middle of a deadly conspiracy, racing to find answers.</p>',
  },
  {
    name: 'The Originals',
    description:
      '<p><b>The Originals</b> is a spin-off show from the supernatural drama <i>The Vampire Diaries</i>. It is based in the city of New Orleans where the originals represent the original vampires. The show is primarily based around conflict between vampires, werewolves and witches in the city.</p>',
  },
  {
    name: 'The Vampire Diaries',
    description:
      '<p><b>The Vampire Diaries</b> is a supernatural drama/romance based around Elena Gilbert who falls in love with a 163 year old vampire.</p><p>Based on a novel series by L.J. Smith.</p>',
  },
  {
    name: 'Utopia',
    description:
      "<p><b>Utopia</b> is a British crime/thriller/action show based initially around a small group of people who find a rare manuscript of the same name. This leads the group to be targeted by a large organisation with little knowledge of the manuscript's relevance or importance.</p>",
  },
  {
    name: 'Bones',
    description:
      '<p>F.B.I. Agent Seeley Booth is teamed up with forensic anthropologist Dr. Temperance "Bones" Brennan to solve some of the most baffling and bizarre crimes ever. Booth depends on clues from the living, witnesses and suspects, while Brennan gathers evidence from the dead, relying on her uncanny ability to read clues left behind in the bones of the victims.</p>',
  },
  {
    name: 'The Big Bang Theory',
    description:
      '<p><b>The Big Bang Theory</b> is a comedy about brilliant physicists, Leonard and Sheldon, who are the kind of "beautiful minds" that understand how the universe works. But none of that genius helps them interact with people, especially women. All this begins to change when a free-spirited beauty named Penny moves in next door. Sheldon, Leonard\'s roommate, is quite content spending his nights playing Klingon Boggle with their socially dysfunctional friends, fellow Cal Tech scientists Wolowitz and Koothrappali. However, Leonard sees in Penny a whole new universe of possibilities... including love.</p>',
  },
  {
    name: "Grey's Anatomy",
    description:
      "<p>The doctors of Grey Sloan Memorial Hospital deal with life-or-death consequences on a daily basis -- it's in one another that they find comfort, friendship and, at times, more than friendship. Together they're discovering that neither medicine nor relationships can be defined in black and white. Real life only comes in shades of grey.</p>",
  },
  {
    name: 'Castle',
    description:
      "<p><b>Castle</b> follows Rick Castle who is one of the world's most successful crime authors. But when his rock star lifestyle isn't enough, this bad boy goes looking for new trouble and finds it working with smart, beautiful Detective Kate Beckett. Inspired by her professional record and intrigued by her buttoned-up personality, Castle's found the model for his bold new character whether she likes it or not. Now with the mayor's permission, Castle is helping solve crime with his own twist.</p>",
  },
  {
    name: 'The Blacklist',
    description:
      '<p><b>The Blacklist</b> is a crime drama involving a former government agent who turned into a high-profile criminal turning himself in to the FBI offering to help catch criminals.</p>',
  },
  {
    name: 'The Voice',
    description:
      '<p><b>The Voice</b> is a reality singing competition show where the idea is to find new singing talent via a series of auditions.</p>',
  },
  {
    name: 'Dancing with the Stars',
    description:
      '<p><b>Dancing with the Stars</b> is an american dance competition show and especially the american version of the british show <i>Strictly Come Dancing</i>.</p>',
  },
  {
    name: 'NCIS: Los Angeles',
    description:
      "<p><b>NCIS: Los Angeles</b> is a drama about the high-stakes world of a division of NCIS that is charged with apprehending dangerous and elusive criminals that pose a threat to the nation's security. By assuming false identities and utilizing the most advanced technology, this team of highly-trained agents goes deep undercover, putting their lives on the line in the field to bring down their targets.</p>",
  },
  {
    name: 'The Walking Dead',
    description:
      '<p><b>The Walking Dead</b> tells the story of the months and years that follow after a zombie apocalypse. It follows a group of survivors, led by former police officer Rick Grimes, who travel in search of a safe and secure home. As the world overrun by the dead takes its toll on the survivors, their interpersonal conflicts present a greater danger to their continuing survival than the walkers that roam the country. Over time, the characters are changed by the constant exposure to death and some grow willing to do anything to survive.</p><p>Based on the comic book series of the same name by Robert Kirkman, Tony Moore, and Charlie Adlard.</p>',
  },
  {
    name: 'Hell on Wheels',
    description:
      '<p><b>Hell on Wheels</b> is an American Western television series about the construction of the First Transcontinental Railroad across the United States. The series follows the Union Pacific Railroad and its surveyors, laborers, prostitutes, mercenaries, and others who lived, worked and died in the mobile encampment called "Hell on Wheels" that followed the railhead west across the Great Plains. In particular, the story focuses on Cullen Bohannon, a former Confederate soldier who, while working as foreman and chief engineer on the railroad, initially attempts to track down the Union soldiers who murdered his wife and young son during the American Civil War.</p>',
  },
  {
    name: 'The Mindy Project',
    description:
      '<p><b>The Mindy Project</b> is a single-camera comedy series which follows a skilled OB/GYN navigating the tricky waters of both her personal and professional life.</p>',
  },
  {
    name: 'Sons of Anarchy',
    description:
      '<p><b>Sons of Anarchy</b> is an American television drama series created by Kurt Sutter, about the lives of a close-knit outlaw motorcycle club operating in Charming, a fictional town in California\'s Central Valley. The show centers on protagonist Jackson "Jax" Teller (Charlie Hunnam), initially the vice president of the club, who begins questioning the club and himself.</p>',
  },
  {
    name: 'The Middle',
    description:
      "<p>Forget about athletes, movie stars and politicians. Parents are the real heroes - but we think Frankie Heck, must be some kind of superhero. A loving wife and mother of three, she's middle class in the middle of the country and is rapidly approaching middle age.</p><p>Frankie and her husband, Mike, have lived in Orson, Indiana, their whole lives. A man of few words (every one a zinger), Mike is a manager at the town quarry and Frankie is the third-best used car salesman (out of the three) at the local dealership. She may not be a high-powered career woman, but when it comes to her family, she'll go to just about any length. And with kids like these, she had better. There's Axl, her semi-nudist teenage son conceived while under the influence of Guns N' Roses; Sue, the awkward teenage daughter who fails at everything... but with the utmost of gusto; and their seven-year-old son Brick, whose best friend is his backpack.</p><p>Sometimes it seems like everyone is trying to get to the top, or struggling not to hit bottom, but we think Frankie and her family will find a lot of love, and a lot of laughs, somewhere in <b>The Middle</b>.</p>",
  },
  {
    name: 'The Mysteries of Laura',
    description:
      '<p>Laura Diamond is a brilliant NYPD homicide detective who balances her "Columbo" day job with a crazy family life that includes two unruly twin boys and a soon-to-be ex-husband - also a cop - who just can\'t seem to sign the divorce papers. Between cleaning up after her boys and cleaning up the streets, she\'d be the first to admit she has her "hot mess" moments in this hilariously authentic look at what it really means to be a working mom today. Somehow, she makes it all work with the help of her sexy and understanding partner, and things becomes even more complicated when her husband becomes her boss at the precinct. For Laura, every day is a high-wire balancing act.</p>',
  },
  {
    name: 'The Goldbergs',
    description:
      '<p>Before there were parenting blogs, trophies for showing up and peanut allergies, there was a simpler time called the \'80s. For geeky and movie obsessed youngest child Adam, these were his wonder years, and he faced them armed with a video camera to capture all the crazy. <b>The Goldbergs</b> are a loving family like any other -- just with a lot more yelling. Mom Beverly is a classic "smother," an overbearing, overprotective matriarch who loves her delicious kids, but still rules this brood with 100% authority and zero sense of boundaries. Dad Murray is gruff and sometimes oblivious, parenting with half his attention span but all his heart. Sister Erica is popular and terrifying, doing her best to cover up that she\'s the smartest of the clan. Barry is a passionate dreamer, who maybe dreams a little too big and who always gets the short end of the stick. Adam is the youngest, a camera-wielding future director who\'s navigating first love, and growing up with his family. Rounding out the family is beloved grandfather Al "Pops" Solomon, the wild man of the clan, a shameless Don Juan who\'s learning as much from his family as he teaches them.</p>',
  },
  {
    name: 'Modern Family',
    description:
      "<p><b>Modern Family</b> revolves around three different types of families (nuclear, step- and same-sex) living in the Los Angeles area, who are interrelated through Jay Pritchett and his children, Claire Dunphy (née Pritchett) and Mitchell Pritchett. Patriarch Jay is remarried to a much younger woman, Gloria Delgado Pritchett (née Ramirez), a passionate Colombian with whom he has an infant son, Fulgencio (Joe) Pritchett, and a son from Gloria's previous marriage, Manny Delgado.</p><p>Jay's daughter Claire was a homemaker, but has returned to the business world. She is now the chief executive of her father's previous business, Pritchett's Closets and Blinds. She is married to Phil Dunphy, a realtor and self-professed \"cool dad\". They have three children: Haley Dunphy, a stereotypical ditzy teenage girl; Alex Dunphy, a nerdy, smart middle child; and Luke Dunphy, the off-beat only son.</p><p>Jay's lawyer son Mitchell and his husband Cameron Tucker have one daughter, Lily Tucker-Pritchett. As the name suggests, this family represents a modern-day family, and episodes are comically based on situations which many families encounter in real life.</p>",
  },
  {
    name: 'Criminal Minds',
    description:
      "<p><b>Criminal Minds</b> revolves around an elite team of FBI profilers who analyze the country's most twisted criminal minds, anticipating their next moves before they strike again.</p>",
  },
  {
    name: 'Game of Thrones',
    description:
      '<p>Based on the bestselling book series <i>A Song of Ice and Fire</i> by George R.R. Martin, this sprawling new HBO drama is set in a world where summers span decades and winters can last a lifetime. From the scheming south and the savage eastern lands, to the frozen north and ancient Wall that protects the realm from the mysterious darkness beyond, the powerful families of the Seven Kingdoms are locked in a battle for the Iron Throne. This is a story of duplicity and treachery, nobility and honor, conquest and triumph. In the <b>Game of Thrones</b>, you either win or you die.</p>',
  },
  {
    name: 'The Simpsons',
    description:
      '<p><b>The Simpsons</b> is the longest running scripted show in US television history. It captures the adventures of Homer, Marge, Maggie, Bart and Lisa who are living in a fictional town called Springfield.</p>',
  },
  {
    name: 'Family Guy',
    description:
      "<p><b>Family Guy</b> follows Peter Griffin the endearingly ignorant dad, and his hilariously offbeat family of middle-class New Englanders in Quahog, RI. Lois is Peter's wife, a stay-at-home mom with no patience for her family's antics. Then there are their kids: 18-year-old Meg is an outcast at school and the Griffin family punching bag; 13-year-old Chris is a socially awkward teen who doesn't have a clue about the opposite sex; and one-year-old Stewie is a diabolically clever baby whose burgeoning sexuality is very much a work in progress. Rounding out the Griffin household is Brian the family dog and a ladies' man who is one step away from AA.</p>",
  },
  {
    name: 'Stalker',
    description:
      "<p><b>Stalker</b> is a psychological thriller about detectives who investigate stalking incidents - including voyeurism, cyber harassment and romantic fixation - for the Threat Assessment Unit of the LAPD. Det. Jack Larsen is a recent transfer to the Unit from New York City's homicide division, whose confidence, strong personality and questionable behavior has landed him in trouble before - but whose past behavior may also prove valuable in his new job. His boss, Lt. Beth Davis, is strong, focused and an expert in the field, driven by her traumatic personal experience as a victim. With the rest of their team, young but eager Det. Ben Caldwell and deceptively smart Det. Janice Lawrence Larsen and Davis assess the threat level of cases and respond before the stalking and intimidation spirals out of control, all while trying to keep their personal obsessions at bay.</p>",
  },
  {
    name: 'The Bridge',
    description:
      '<p>When the body of a cartel member is found on US soil, Sonya Cross from El Paso PD and her Mexican counterpart, Marco Ruiz must work together to solve the case.</p>',
  },
  {
    name: 'Reign',
    description:
      "<p>Hidden between the lines of the history books is the story of Mary Stuart, the young woman the world would come to know as Mary, Queen of Scots. Queen of Scotland since she was six days old, the teenage Mary is already a headstrong monarch - beautiful, passionate, and poised at the very beginning of her tumultuous rise to power. Arriving in France with four close friends as her ladies-in-waiting, Mary has been sent to secure Scotland's strategic alliance by formalizing her arranged engagement to the French king's dashing son, Prince Francis. But the match isn't signed and sealed, it depends more on politics, religion and secret agendas than affairs of the heart. With danger and sexual intrigue around every dark castle corner, Mary rallies her ladies-in-waiting and steels herself, ready to rule the new land and balance the demands of her country and her heart.</p>",
  },
  {
    name: 'Unforgettable',
    description:
      "<p><b>Unforgettable</b> follows Carrie Wells, an enigmatic former police detective with a rare condition that makes her memory so flawless that every place, every conversation, every moment of joy and every heartbreak is forever embedded in her mind. It's not just that she doesn't forget anything - she can't; except for one thing: the details that would help solve her sister's long-ago murder. Carrie has tried to put her past behind her, but she's unexpectedly reunited with her ex-boyfriend and partner, NYPD Detective Al Burns when she consults on a homicide case.</p>",
  },
  {
    name: 'Haven',
    description:
      '<p>When FBI Special Agent Audrey Parker is dispatched to the small town of <b>Haven</b>, Maine, on a routine case, she soon finds herself increasingly involved in the return of "The Troubles", a plague of supernatural afflictions that have occurred in the town at least twice before. With an openness to the possibility of the paranormal, she also finds a more personal link in Haven that may lead her to the mother she has never known.</p><p>She and her partner, police detective Nathan Wuornos, find themselves frequently facing problems caused by both the effects of the Troubles, as well as the activities of town folk who take more drastic measures against those who are Troubled.</p>',
  },
  {
    name: 'Bad Judge',
    description:
      "<p>No excuses, no apologies, no compromises. Wild child Rebecca Wright knows how to have a good time, but she also happens to be one of L.A.'s toughest and most respected criminal court judges. She has a reputation for unorthodox behavior in the courtroom, including creative rulings and saying exactly what's on her mind. Her private life, on the other hand, is anything but innocent. She parties too much and rocks out on the drums in a band with her best friend, Jenny. While there's no shortage of male admirers who would love to spend time with her, she's not ready to settle down... except when an 8-year-old boy - whose parents were put in jail by Rebecca - needs her help. He may, in fact, be the one thing that starts to tame this <b>Bad Judge</b>.</p>",
  },
  {
    name: 'A to Z',
    description:
      "<p>This is the <b>A to Z</b> story of Andrew and Zelda - a pair that almost wasn't - and all that happened from the day they met. Andrew has always been a secret romantic... not above crooning to Celine Dion while driving to work, with dreams of finding \"the one.\" He imagines her to be just like that shimmering beauty he spotted that night in that silver dress at that concert two years ago. Zelda, having grown up with a hippie mom who believed the universe would provide for everything, rebelled into a no-nonsense practical lawyer who prefers the control of online dating. But when a computer glitch sends her a total mismatch, she's asked to come in for an interview at the Internet dating site where Andrew works, and this is where it all begins. Andrew and Zelda meet for the first time and despite their differences, sparks fly. She thinks it's chance. He thinks it's fate. After all, he's convinced she's the shimmering girl in the silver dress. Is it true love forever or just a detour in destiny?</p>",
  },
  {
    name: 'Parenthood',
    description:
      '<p><b>Parenthood</b> is the critically acclaimed one-hour drama inspired by the box office hit of the same name. This reimagined and updated Universal Television/Imagine Entertainment production follows the trials and tribulations of the very large, colorful and imperfect Braverman family. Sarah Braverman is a single mother with two kids - the bright but rebellious Amber who is living on her own, and sullen and sensitive Drew who returns to Berkeley this year.</p>',
  },
  {
    name: 'Defiance',
    description:
      "<p>Set on a future Earth, <b>Defiance</b> introduces players and viewers to a world where humans and aliens live together on a planet ravaged by decades of war and transformed by alien terra-forming machines. It centers on Jeb Nolan, the law-keeper in a bustling frontier boomtown that is one of the new world's few oasis of civility and inclusion. Nolan is a former Marine who fought in the alien conflict and suffered the loss of his wife and child in the war. The trauma transformed him into a lone wanderer in the wilds of this new and dangerous world.</p>",
  },
  {
    name: 'Falling Skies',
    description:
      "<p>The series tells the story of the aftermath of a global invasion by several races of extraterrestrials that neutralizes the world's power grid and technology, quickly destroys the combined militaries of all the world's countries, and apparently kills over 90% of the human population within a few days.</p>",
  },
  {
    name: 'Manhattan Love Story',
    description:
      '<p>Have you ever wondered what your date was thinking? This romantic comedy exposes the differences between men and women through the unfiltered thoughts, and often contradictory actions, of a new couple who have just begun dating.</p>',
  },
  {
    name: 'The Biggest Loser',
    description:
      '<p>NBC\'s <b>The Biggest Loser</b>, a show known for its incredible weight loss makeovers, will reveal an exciting makeover of its own when the popular series returns on Monday, January 4 (9-11 p.m. ET) with new host Bob Harper, a new "Temptation" theme, an updated state-of-the-art gym, a new logo, fun format changes and a return to the popular team vs. team competition. Dolvett Quince and Jen Widerstrom return to train eight contestant teams of two, all with compelling stories. Seven teams (spouses, parent/adult child, siblings, relatives, best friends) will know each other, but one team will be two strangers - former "Celebrity Apprentice" contestant and the original "Survivor" winner, Richard Hatch, and \'The Voice\' season two semi-finalist Erin Willett. Having both been in the NBC family previously, the two share the same goal as the other 14 contestants - to change their lives and get healthy. The renovated "Biggest Loser" gym, featuring a new interior and exterior branded with the new logo, has modernized equipment to help contestants better achieve their fitness goals, including eight high-tech monitors on the walls of each side of the gym that will track contestants\' calorie burns as well as heart rates. Half of the gym will be dedicated to Team Dolvett and the other half dedicated to Team Jen. The weigh-in will be very different this season with a new look and double scales, so contestants on opposing teams can weigh-in side by side, making the weigh-in even more compelling to watch. The contestant house is also getting a whole new look for season 17.</p>',
  },
  {
    name: 'Scandal',
    description:
      '<p>Everyone has secrets… and Olivia Pope has dedicated her life to protecting and defending the public images of the nation\'s elite by keeping those secrets under wraps. Pope\'s team are at the top of their game when it comes to getting the job done for their clients, but it becomes apparent that these "gladiators in suits", who specialize in fixing the lives of other people, have trouble fixing those closest at hand -- their own.</p>',
  },
  {
    name: "America's Next Top Model",
    description:
      "<p>Created by supermodel Tyra Banks, <b>America's Next Top Model</b> follows a group of young women of various backgrounds, shapes and sizes who live together in a loft and vie for a modeling contract. The show exposes the transformation of everyday young women into potentially fierce supermodels, with participants facing weekly tests that determine who can make the cut. With mentoring by supermodel Tyra Banks and exposure to high-profile fashion-industry gurus, the finalists compete in a highly accelerated modeling boot camp--a crash course to supermodel fame.<br /><br /> Originally hosted by Tyra Banks for it's first 22 seasons, the 23rd season will move from The CW, to VH1 and will be hosted by Rita Ora, who heads up the new judging panel of Ashley Graham, Law Roach and Drew Elliott.</p>",
  },
  {
    name: 'Blue Bloods',
    description:
      '<p><b>Blue Bloods </b>is a drama about a multi-generational family of cops dedicated to New York City law enforcement. Frank Reagan is the New York Police Commissioner and heads both the police force and the Reagan brood. He runs his department as diplomatically as he runs his family, even when dealing with the politics that plagued his unapologetically bold father, Henry, during his stint as Chief. A source of pride and concern for Frank is his eldest son Danny, a seasoned detective, family man and Iraq War vet who on occasion uses dubious tactics to solve cases with his loyal and tough partner, Detective Jackie Curatola. The Reagan women in the family include Erin, a N.Y. Assistant D.A., who also serves as the legal compass for her siblings and father, and single parent to her teenage daughter Nicky; and Linda, Danny\'s supportive wife. Jamie is the youngest Reagan, a recent grad of Harvard Law and the family\'s "golden boy." Unable to deny the family tradition, Jamie has decided to give up a lucrative future in law and follow in the family footsteps as a cop.</p>',
  },
  {
    name: 'The Good Wife',
    description:
      "<p><b>The Good Wife</b> follows Alicia Florrick, a wife and mother who boldly assumes full responsibility for her family and re-enters the workforce after her husband's very public sex and political corruption scandal lands him in jail. Pushing aside the betrayal and crushing public humiliation caused by her husband Peter, Alicia starts over by pursuing her original career as a defense attorney.</p>",
  },
  {
    name: 'Boardwalk Empire',
    description:
      "<p>As the country struggles to cope with the Great Depression and the end of Prohibition looms, Nucky Thompson looks to legitimize himself through alliances with liquor producers, while rivals Lucky Luciano and Meyer Lansky seek to consolidate their power in the wake of Arnold Rothstein's death and eliminate all competition - by any means necessary on <b>Boardwalk Empire</b>.</p>",
  },
  /*{
    name: 'Law & Order: Special Victims Unit',
    description:
      '<p>In the criminal justice system, sexually-based offenses are considered especially heinous. In New York City, the dedicated detectives who investigate these vicious felonies are members of an elite squad known as the Special Victims Unit. These are their stories.</p>',
  },*/
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      'Shows',
      showsData.map((show) => ({
        ...show,
        createdAt: now,
        updatedAt: now,
      })),
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Shows', null, {});
  },
};

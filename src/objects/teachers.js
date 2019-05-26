const teachers = {
  English: [
    {
      id: 1,
      photo: 'http://concord-assets.oss-cn-beijing.aliyuncs.com/about__fei.jpg',
      name: 'Feifan Oh',
      role: 'Founder / Director',
      bio: 'Fei is the founder and Executive Director of Concord Music. As a graduate of New York’s Manhattan School of Music (Bachelor of Music) and New York University (Master of Music), Fei is not only a passionate piano pedagogue but also an active concert pianist who has performed across the globe (USA, Europe, the Philippines and Malaysia). She has written and published My Musical Animals; a unique method book for piano and keyboard group lessons catering to the needs of young children. She is the leader of Concord teaching team and provides trainings to teachers with the goal to carry out the school’s core belief which is to make the school a space where musical interests are nurtured by professionals.'
    },
    {
      id: 2, 
      photo: 'https://concord-assets.oss-cn-beijing.aliyuncs.com/Diane%20Kim.jpeg',
      name: 'Dr. Diane Kim',
      role: 'Head of Piano Program',
      bio: 'Diane graduated from University of Michigan with a Doctoral in Musical Arts degree in Piano Performance. She has established a career as a professional solo pianist and chamber musician. One of her top highlights was having a debut with New York Concerti Symphonietta as a concerto soloist and also as a solo pianist at Carnegie Weill Hall. She has more than 10 years of experience in helping students to prepare for RCM and ABRSM piano examination. She is able to help students to expand their potentials through appropriate repertoire selection. Diane is currently teaching at Concord Music while she leads and trains the piano faculty as the Head of Piano Program.'
    },
    {
      id: 13,
      photo: 'https://concord-assets.oss-cn-beijing.aliyuncs.com/Yong%20Wei%20Ho.jpeg',
      name: 'Yong-Wei Ho',
      role: 'Violin/Viola Instructor',
      bio: 'Yong-Wei or known as Wei by his students, was a regular member at the Malaysian Philharmonic Youth Orchestra (MPYO). He received his Bachelor of Music and Master in Music at Tunghai University (Taichung, Taiwan) at 2017. He studied viola performance with Professors Yih-Chyuan Wang and also served as the teaching assistant in various music history and music theory courses. Wei has played in various master classes, including those taught by professors Dao-Chang Yu ,Allie Su, Hausmann Quartet and Sayaka Kobuko. During summer 2017, Ho was invited to perform with Formosa Philharmonic Orchestra (Taiwan) in Les Rencontres Musicales de Chaon at France. In 2017, he was selected as a member of Thailand Philharmonic Orchestra. Wei is loved by his students for his patience and systematic approach in teaching while able to remain positive and encouraging.'
    },
    {
      id: 7,
      photo: 'http://concord-assets.oss-cn-beijing.aliyuncs.com/about__gavin.jpg',
      name: 'Gavin Stewart',
      role: 'Piano Instructor',
      bio: 'Gavin, a Scottish pianist who began his musical education at age of five, initially studying keyboard and later piano before going on to study music at Edinburg Napier University and B.C.U Birmingham Conservatoire. After graduating with a graduate degree from Birminghan Conservatorie, he worked as a pianist, accompanist and teacher in and around Ayrshire. He was also trained in theYamaha method and began teaching at a local Yamaha music school. In September 2013, he was hired as a piano teacher at Academy of Performing Arts at the British School of Bahrain. He is now a full-time piano and group class instructor at Concord Music. Gavin’s aim is to empower students with the skills and knowledge they need in order to become independent learners.'
    },
    {
      id: 5,
      photo: 'http://concord-assets.oss-cn-beijing.aliyuncs.com/about__annie.jpg',
      name: 'Xixi',
      role: 'Violin Instructor',
      bio: 'Xixi, a Malaysian-Chinese violinist, with musical training background from the Shanghai Conservatory of Music (Bachelor in Music) was a member of the Malaysian Philharmonic Youth Orchestra, led by Maestro Kevin Field. She has her own string quartet in Shanghai and performs actively around the city. She passed the ATCL examination of Trinity College with distinction, which is the highest credit. Wenxi - or also known as Ms. Xixi by her students - enjoys teaching violin and sharing her experience in violin, particularly with children. Her students enjoy studying with her because of her warm personality and energetic teaching style. Because of her nationality background, she is able to conduct lessons in both Chinese and English fluently.'
    },
    {
      id: 3,
      photo: 'http://concord-assets.oss-cn-beijing.aliyuncs.com/about__michi.jpg',
      name: 'Michi',
      role: 'Vocal Instructor / Choir Conductor',
      bio: 'Michi has performed in many different concerts and opera productions. In year 2015 to 2016 he studied at the Shanghai Conservatory of Music with Professor Chen Qilian. Special moments during this time were his appearance as a soloist for concerts at the Shanghai Music Hall and the Shanghai Symphony Hall. He has a bachelor degree in musicology from the University of Vienna, with a focus on music history and musical analysis. 2017 he graduated from the University of Music and Performing Arts Vienna with honours. Michi is also a professional choir conductor, he has led a children french choir “Petite Brise” to perform in several public venues in Shanghai.'
    },
    {
      id: 11,
      photo: 'https://concord-assets.oss-cn-beijing.aliyuncs.com/Travis%20Lu.jpeg',
      name: 'Travis Lu',
      role: 'Guitar Instructor',
      bio: 'Travis has established himself as a jazz guitarist and is an active performer in the jazz scenes of Shanghai. He has appeared frequently in JZ Club, Wooden Box and 696 Bar. He has taken masterclasses with legendary bassist and Grammy award winner and other famous jazz musicians such as Eddie Gomez, Antonio Hart and Sefan Karisson. Travis also received trainings in voice, saxophone and jazz drum. He now focuses on jazz guitar and improvisation. He shares similar passion in teaching and he hopes to inspire his students in becoming musicians who would have their own styles.  '
    },
    {
      id: 9,
      photo: 'https://concord-assets.oss-cn-beijing.aliyuncs.com/Jenny%20Wu.jpeg',
      name: 'Jenny Wu',
      role: 'Clarinet Instructor',
      bio: 'Jenny Wu studied music at University of the Arts of Tainan National Music Institute and is currently pursuing professional doctorate in Anthropology at Shanghai Conservatory of Music. She has been awarded scholarship for outstanding student  and served as principal Clarinet and Orchestra, and graduated with honorary award in Music Education.'
    },
    {
      id: 8,
      photo: 'https://concord-assets.oss-cn-beijing.aliyuncs.com/Irene%20Huang.png',
      name: 'Irene Huang', 
      role: 'Flute Instructor',
      bio: 'Irene Huang, majored in both flute and piano in Taiwan and has obtained her Master in Music degree at Shanghai Conservatory of Music. She received the CEYO European Youth Orchestra scholarship and performed with the Shanghai Philharmonic Orchestra to great acclaim.'
    },
    {
      id: 12,
      photo: 'https://concord-assets.oss-cn-beijing.aliyuncs.com/Victor%20Noskov.jpeg',
      name: 'Viktor Noskov',
      role: 'Drums Instructor',
      bio: 'Viktor, an Ukrainian drummer, graduated from the National University of Culture and Arts in Kiev (Ukraine) and has earned a Master degree in Percussion and Drums Performing with teaching certificate. He is also the co-founder of several percussion and drums projects and group such a modern drumming group “Fire Beat” and an ethnical percussion project “Mama-Africana”. Viktor is also an experienced drum teacher and has the experience of helping his students to prepare for Rockschool examination.  '
    },
    {
      id: 10,
      photo: 'https://concord-assets.oss-cn-beijing.aliyuncs.com/Keego%20pic.jpg',
      name: 'Keegan Govender',
      role: 'Drums Instructor',
      bio: 'Keego comes from a musical family. He started music at the age of 8 in his family band called Starlight Entertainers. He graduated at Sumbavanie School of Drum in December 2011 with prestigious results and at age of 29, he won the National Percussion Competition in South Africa. He has established himself as an excellent drum player with several awards in competitions such as the Soweto Jazz Festival. Keego is a versatile musician who can play different types of drums: Indian drums, African drums, jazz drums, etc. He is able to inspire students of different ages and throughout his many years of teaching, he has developed his own teaching materials and method. '
    },
    {
      id: 6,
      photo: 'https://concord-assets.oss-cn-beijing.aliyuncs.com/Annie.png',
      name: 'Annie Tang',
      role: 'Piano Instructor',
      bio: 'Annie started piano at the age of five with Professor Hong Huang. Annie was a double major in Music Education and Piano Performance at the Shanghai Conservatory of Music. She is an experienced piano teacher and has taught piano at Shanghai Ping He Bilingual School and and at Zhang Xiao Feng Music Center where she helped students to prepare for precollege studies of music conservatories. Annie was a trained and certified Yamaha teacher to teach music foundation group classes and piano foundation group classes. She taught as a trained and approved 1-on-1 instructor at Yamaha for 2 years. She is experienced in helping her students with the ABRSM examinations while keeping their studies engaged. She is liked by her students for her patience and gentleness in teaching.',
    },
    {
      id: 15,
      photo: 'https://concord-assets.oss-cn-beijing.aliyuncs.com/Kevin.jpeg',
      name: 'Kevin Marsh', 
      role: 'Guitar Instructor',
      bio: 'Canadian guitarist Kevin Marsh is an exquisite performer, teacher and composer. He formed the Rosette Guitar Duo and began composing, recording and performing their unique style of Canadian guitar music. He has also performed in notable venues such as the Chan Center for the Arts in Vancouver, British Columbia, The EPCOR Center in Calgary, Alberta and the Francis Ford Winspear Center in Edmonton. Kevin is a master teacher who has been joyfully educating students of the guitar for nearly twenty years. His passion for music and the guitar is exemplified through the success and accomplishments of his students. In 2013, Kevin was recognised and awarded by the Royal Conservatory of Music as an outstanding teacher, having one of his pupils receive a gold medal for highest marks on a performance exam.'
    }, 
    {
      id: 16,
      photo: 'https://concord-assets.oss-cn-beijing.aliyuncs.com/beely.jpeg',
      name: 'Beely Lee', 
      role: 'Head of Administration & Branch Manager',
      bio: 'Lee leads Concord team as the Head of Administration and Branch Manager. With her previous experience as a language teacher and as the principal’s senior assistant of a 2000-students school, she is an experienced leader in team management and in education administration. Lee helps each customer with understanding and offers fluent communication in Cantonese, Mandarin and English. She enjoys her work and being a great chef is her secret talent.'
    }, 
    {
      id: 17, 
      photo: 'https://concord-assets.oss-cn-beijing.aliyuncs.com/Fiona.jpeg',
      name: 'Fiona Oung',
      role: 'Administration and Scheduling Manager',
      bio: 'Fiona has worked as an admin and scheduling assistant for more than 3 years. Fiona offers fluent communication in Cantonese, Mandarin and English. She is quick and responsive in work, great with kids, enjoys rock climbing and extreme sports and she always smile!'
    },
    {
      id: 18, 
      photo: 'https://concord-assets.oss-cn-beijing.aliyuncs.com/Leon.jpeg',
      name: 'Leon Chen',
      role: 'Admissions Advisor & Marketing Manager',
      bio: 'Leon offers professional opinions to all new incoming students and help each parent and student in selecting course(s) that would meet their expectations and needs. He is also an experienced piano teacher and has taught for over 11 years. Other than that, he sings as a baritone and performs actively in his choral group name “Balance Vocal Band”. He works full-time at Concord and almost full-time at the gym too - he enjoys working out and marathon as his hobby.'
    }
  ],
  Chinese: [
    {
      id: 1,
      photo: 'http://concord-assets.oss-cn-beijing.aliyuncs.com/about__fei.jpg',
      name: 'Fei',
      role: '创始人 / 艺术总监',
      bio: '胡老师是搿艺音乐的创始人和总监。她毕业于曼哈顿音乐学院（音乐学士）和纽约大学（音乐硕士）。她不仅是一名充满激情的钢琴教育家，同时也是世界级的钢琴演奏家,并在多国国际音乐厅演奏过（美国、欧洲、菲律宾和马来西亚）。胡老师撰写并出版的钢琴启蒙教材《我的音乐宠物》迎合4-6岁儿童集体课和一对一学习的钢琴启蒙。她给予搿艺的老师们进行培训，并监督教学和课程质量，持续不断地坚持搿艺最初创办的理念：以专业的精神培养学生们对音乐的兴趣'
    },
    {
      id: 2, 
      photo: 'https://concord-assets.oss-cn-beijing.aliyuncs.com/Diane%20Kim.jpeg',
      name: '金度延博士',
      role: '钢琴教学部主任',
      bio: '来自韩国的Diane博士是一位名副其实的钢琴独奏家和室内乐演奏家。Diane博士常年在美国、欧洲和亚洲的各种音乐节日和音乐场所进行演出，足迹遍布全球。在学习期间，Diane博士应邀作为艺术家参加了“特邀艺术家系列”和“交流艺术家系列”，并在伊士曼音乐学院、辛辛那提音乐学院、奥柏林音乐学院等全美顶尖音乐学院进行演出。2010年，她作为协奏曲独奏家和卡内基威尔音乐厅的钢琴独奏家，在纽约与纽约协奏曲交响乐团（New York Concerti Symphonietta）进行首次合作。她有超过10年的教学经验，去帮助孩子们准备并通过RCM和ABRSM的钢琴考级。Diane博士能够通过选择合适的演奏曲目去挖掘学生们的音乐潜能。目前Diane博士在搿艺音乐进行任教，同时作为钢琴教学部主任去领导和培训搿艺的钢琴教师团队。'
    },
    {
      id: 11,
      photo: 'https://concord-assets.oss-cn-beijing.aliyuncs.com/Yong%20Wei%20Ho.jpeg',
      name: '何永威',
      role: '小提琴／中提琴老师',
      bio: '出生于马来西亚，何永威于2010年至2011年曾担任马来西亚爱乐附属交响乐团中提琴演奏员。留学期间，永威的导师们包含王意权教授、张睿洲教授、王弈萱教授。永威也曾任教学助教的工作，其中教学科目包含西洋音乐史。永威于2017年获选为泰国爱乐乐团中提琴演奏员，同年随甫福尔摩沙爱乐管弦乐团到法国演出。留台期间与国内外音乐家合作，包括钢琴家Sandra Wright Shen、Daniel Petrica Ciobanu，低音管演奏家小山昭雄 (Akio Koyama)、小山莉绘 (Rie Koyama)、Sergio Azzolini等音乐家。永威老师因他耐心的态度和良好的教学体系深受学生们喜爱，并时刻保持着热诚，给予学生们鼓励。 '
    },
    {
      id: 13,
      photo: 'http://concord-assets.oss-cn-beijing.aliyuncs.com/about__gavin.jpg',
      name: 'Gavin Stewart',
      role: '钢琴老师',
      bio: 'Gavin老师来自英国苏格兰埃尔郡，从5岁开始学习音乐。赴爱丁堡纳皮尔大学和伯明翰艺术学院学习音乐之前他首先学习电子琴和钢琴。从爱丁堡纳皮尔大学（学士）毕业后，他便在埃尔郡从事钢琴家、伴奏家和教师的工作。他也受过最新的雅马哈教学法培训并在当地的雅马哈音乐学院授课。2013年9月，他受聘为巴林英国学校表演艺术学院的钢琴老师。他现在是搿艺音乐全职钢琴和集体课导师。他上课的目标是培养学生的技巧和知识，以让他们成为一位独立的学习者。他坚信唯有通过富有创意性的音乐元素体验，才能完全建立起对音乐的理解。'
    },
    {
      id: 5,
      photo: 'http://concord-assets.oss-cn-beijing.aliyuncs.com/about__annie.jpg',
      name: 'Xixi',
      role: '小提琴老师',
      bio: 'Xixi（希希）老师是一位来自马来西亚的华裔小提琴家，毕业于上海音乐学院（音乐硕士），马来西亚爱乐青年管弦乐团成员，师从Maestro Kevin Field。她在上海拥有自己的弦乐四重奏室内乐团，活跃在沪上进行各类演出。她以优异的成绩通过三一学院的ATCL考试。Xixi老师非常喜欢教授小提琴并分享她在小提琴方面学习的经验。由于她充满温暖的个性和活力十足的教学风格，她的学生们非常喜欢与她一起学习和进步。由于Xixi老师的国籍背景，她能够用流利的英文或中文进行教学。'
    },
    {
      id: 3,
      photo: 'http://concord-assets.oss-cn-beijing.aliyuncs.com/about__michi.jpg',
      name: 'Michi',
      role: '声乐老师 / 合唱指挥',
      bio: 'Michi老师曾出台参与音乐会和歌剧的表演。他是上海音乐学院陈琦连教授的学生，曾在上海音乐厅和上海交响乐大厅以主唱的身份参与表演。2017他以最佳成绩毕业于维也纳音乐和表演艺术大学，获取学士学位双专业文凭（专业为音乐史和音乐分析）。Michi老师也是合唱指挥，曾带领“小小分贝”少儿法语合唱在上海进行多次演出。'
    },
    {
      id: 9,
      photo: 'https://concord-assets.oss-cn-beijing.aliyuncs.com/Travis%20Lu.jpeg',
      name: '陆津烁',
      role: '吉他 / 尤克里里老师 ',
      bio: '陆老师在上海著名的爵士演奏台上多次演出（JZ爵士俱乐部，Wooden Box, 696酒吧）。他现专修爵士吉他演奏，先后跟随中国逐渐成长起来的爵士乐环境中的重量级人物，爵士吉他演奏家教育家顾忠山(Jz School校长)、廖季文教授(上海音乐学院)、戴育廷(Jz School)、张雄关(上海音乐学院)和爵士小号演奏家教育家李晓川(上海音乐学院)学习爵士吉他与即兴演奏。自幼学习钢琴、声乐，后又涉及萨克斯、爵士鼓等多种乐器。Travis接受了多位爵士乐名家的指导， 如传奇低音贝斯演奏家、两次格莱美获奖者Eddie Gomez, 爵士萨克斯演奏家Antonio Hart, 爵士钢琴演奏家Stefan Karlsson, 爵士吉他演奏家Sheryl Bailey，爵士吉他演奏家Ola Bengtsson等。陆老师在教学上也具有一样的热情，他希望可以帮助学生找到属于自己的音乐表达方式。 '
    },
    {
      id: 7,
      photo: 'https://concord-assets.oss-cn-beijing.aliyuncs.com/Jenny%20Wu.jpeg',
      name: '吳珀元',
      role: '单簧管老师',
      bio: '吴老师就读台湾实践大学音乐系、台南艺术大学民族音乐学研究所，以音乐人类学专业获得上海音学院博士学位。求学期间曾获各项优秀学生奖学金，与担任乐团单簧管首席，并以管乐第一名的优异成绩毕业于实践大学音乐系。'
    },
    {
      id: 6,
      photo: 'https://concord-assets.oss-cn-beijing.aliyuncs.com/Irene%20Huang.png',
      name: '黃弈涵', 
      role: '长笛老师',
      bio: '黄老师来自台湾，主修长笛和钢琴，毕业于上海音乐学院并获得音乐硕士学位。她获得了CEYO欧洲青年管弦乐团的奖学金，并与上海爱乐乐团合作演出，获得众多好评。 '
    },
    {
      id: 10,
      photo: 'https://concord-assets.oss-cn-beijing.aliyuncs.com/Victor%20Noskov.jpeg',
      name: 'Viktor Noskov',
      role: '架子鼓老师',
      bio: 'Viktor老师是一位来自于乌克兰的鼓手，毕业于基辅国立文化艺术大学（乌克兰），并获得了具有教学证书的打击乐和鼓的硕士学位。他也是联合创始人几个打击乐器和鼓项目和集团这样的现代鼓组“火鼓”和民族打击乐项目“非洲妈妈”。Viktor是一位资深的架子鼓老师，并且具有帮助学生准备Rockschool考试的经历（Rockschool是一项英式考级系统）。'
    },
    {
      id: 8,
      photo: 'https://concord-assets.oss-cn-beijing.aliyuncs.com/Keego%20pic.jpg',
      name: 'Keegan Govender',
      role: '架子鼓老师',
      bio: 'Keego老师出生于音乐世家。8岁时，他在他的家庭乐队“星光艺人”开始了他的音乐生涯。他在2011年12月以优秀的成绩毕业于世界著名的架子鼓学院 - Sumbavanied。在他29岁的那一年，成了全南非打击乐比赛的冠军。他获得了多个比赛冠军后成为了专业的鼓手，其中比赛包括著名的Soweto爵士音乐节。Keego老师是个多才多艺的老师，他掌握各种鼓种，如印度鼓，非洲鼓，爵士鼓等。并且他拥有多年教授不同年龄段的学生的教学经验，从中整合出自己一套独特的教学方式和教学系统。'
    },
    {
      id: 12,
      photo: 'https://concord-assets.oss-cn-beijing.aliyuncs.com/Annie.png',
      name: '唐莹',
      role: '钢琴老师',
      bio: '唐莹，5岁开始跟随现任上海⾳乐学院钢琴系教授黄泓习琴，2004年考⼊上海⾳乐学院⾳乐教育系，次年考⼊上海⾳乐学院钢琴系，同时专修钢琴演奏，⽬前持有上⾳的⾳乐教育本科⽂凭和钢琴演奏本科⽂凭。唐⽼师曾在上海平和双语国际学校教授钢琴，也曾在杭州张晓峰艺术中⼼担任助教，协助中央⾳乐学院教授张晓峰辅导附⼩，附中的考⽣。2012年，参加上海雅马哈⾳乐中⼼的研修班，学习⽇本先进的幼教集体课理念，成为2岁半⾄5岁的幼⼉⾳乐⼩组课⽼师，后通过雅马哈的钢琴基础课程研修，成为1对1个⼈课⽼师, 在雅马哈授课2年。'
    },
    {
      id: 15,
      photo: 'https://concord-assets.oss-cn-beijing.aliyuncs.com/Kevin.jpeg',
      name: 'Kevin Marsh', 
      role: '吉他老师',
      bio: 'Kevin Marsh来自加拿大，是一位技艺精湛的吉他演奏家、老师和作曲家。他创立“Rosette Guitar”乐队，进行创作、录制和表演风格独特的加拿大吉他音乐。他曾在著名的演出场所进行演出，比如温哥华的Chan Center for the Arts，卡尔加里的EPCOR中心, 埃德蒙德的Francis Ford Winspear Center等。Kevin老师是一位优秀的吉他老师，具有近20年的吉他教学经验，他非常热爱音乐和吉他，教授出一批又一批具有成就的学生。2013年，Kevin老师被英国皇家音乐学院评为优秀教师，并且他的学生在以演奏最高分的成绩获得演出金牌。'
    }, 
    {
      id: 16,
      photo: 'https://concord-assets.oss-cn-beijing.aliyuncs.com/beely.jpeg',
      name: '吕率瑄', 
      role: '行政主管',
      bio: '吕老师以行政主管和分公司经理的身份领导着搿艺团队。吕老师曾是位语言老师，也曾担任2000多学生学校的校长特助，因此她在团队管理和教育行政管理方面是一位经验丰富的领导者。吕老师负责帮助每一位客户理解所需要的内容，并可以提供流利的粤语、普通话和英文进行沟通。她非常热爱她的工作，励志成为一名伟大的厨师是她隐藏多年的秘密。'
    }, 
    {
      id: 17, 
      photo: 'https://concord-assets.oss-cn-beijing.aliyuncs.com/Fiona.jpeg',
      name: '翁清莉',
      role: '行政经理 ',
      bio: 'Fiona老师在日常行程和行政方面已经有3年多的经验。Fiona老师可以提供流利的粤语、普通话和英文进行交流。她在日常工作中反应迅速，与孩子相处融洽。她也热衷于攀岩和极限运动，并总是乐观开朗，面带微笑！'
    },
    {
      id: 18, 
      photo: 'https://concord-assets.oss-cn-beijing.aliyuncs.com/Leon.jpeg',
      name: '陈旭',
      role: '招生顾问 & 市场部经理',
      bio: 'Leon老师为所有入学的新学生提供非常专业的课程意见，并帮助每一位家长和学生去选择符合他们所期望的课程。他也是一位经验丰富的钢琴老师，任教超过11年。除此之外，他以男中音的身份进行演唱和演出，并在他的阿卡贝拉乐团 - “Balance vocal band”中积极表演。他全职工作在搿艺音乐，也可能全职工作在健身房—他喜欢健身和马拉松作为他全部的业余爱好。'
    }
  ]
}

export default teachers

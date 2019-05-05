const teachers = {
  English: [
    {
      id: 1,
      photo: 'http://concord-assets.oss-cn-beijing.aliyuncs.com/about__fei.jpg',
      name: 'Fei',
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
      id: 3,
      photo: 'http://concord-assets.oss-cn-beijing.aliyuncs.com/about__michi.jpg',
      name: 'Michi',
      role: 'Vocal / Choral',
      bio: 'Michael Feigl has performed in many different concerts and opera productions. In year 2015 to 2016 he studied at the Shanghai Conservatory of Music with Professor Chen Qilian. Special moments during this time were his appearance as a soloist for concerts at the Shanghai Music Hall and the Shanghai Symphony Hall. He has a bachelor degree in musicology from the University of Vienna, with a focus on music history and musical analysis. 2017 he graduated from the University of Music and Performing Arts Vienna with honours.'
    },
    {
      id: 4,
      photo: 'http://concord-assets.oss-cn-beijing.aliyuncs.com/about__maggie.jpg',
      name: 'Maggie',
      role: 'Flute & Piano Instructor',
      bio: 'Maggie, born and raised in Taiwan, studied classical flute at the age of 11. She was admitted to Tainan University of Technology in 2009 with a Bachelor degree of Music, majored in flute and minored in piano. She had been touring around East Asia with the orchestra during the years of her studying in the college. At 2014, she went to Berkelee College of Music in US to pursue a higher education, majored in the Professional Music degree program which has covered the areas of Film Scoring, Performance and Music Education.'
    },
    {
      id: 5,
      photo: 'http://concord-assets.oss-cn-beijing.aliyuncs.com/about__annie.jpg',
      name: 'Xixi',
      role: 'Violin Instructor',
      bio: 'Xixi, a Malaysian-Chinese violinist, with musical training background from the Shanghai Conservatory of Music (Bachelor in Music) was a member of the Malaysian Philharmonic Youth Orchestra, led by Maestro Kevin Field. She has her own string quartet in Shanghai and performs actively around the city. She passed the ATCL examination of Trinity College with distinction, which is the highest credit. Wenxi - or also known as Ms. Xixi by her students - enjoys teaching violin and sharing her experience in violin, particularly with children. Her students enjoy studying with her because of her warm personality and energetic teaching style. Because of her nationality background, she is able to conduct lessons in both Chinese and English fluently.'
    },
    {
      id: 6,
      photo: 'https://concord-assets.oss-cn-beijing.aliyuncs.com/Annie.png',
      name: 'Annie Tang',
      role: 'Piano Instructor',
      bio: 'Annie started piano at the age of five with Professor Hong Huang. Annie was a double major in Music Education and Piano Performance at the Shanghai Conservatory of Music. She is an experienced piano teacher and has taught piano at Shanghai Ping He Bilingual School and and at Zhang Xiao Feng Music Center where she helped students to prepare for precollege studies of music conservatories. Annie was a trained and certified Yamaha teacher to teach music foundation group classes and piano foundation group classes. She taught as a trained and approved 1-on-1 instructor at Yamaha for 2 years. She is experienced in helping her students with the ABRSM examinations while keeping their studies engaged. She is liked by her students for her patience and gentleness in teaching.',
    },
    {
      id: 7,
      photo: 'http://concord-assets.oss-cn-beijing.aliyuncs.com/about__gavin.jpg',
      name: 'Gavin',
      role: 'Piano Instructor',
      bio: 'Gavin, a Scottish pianist who began his musical education at age of five, initially studying keyboard and later piano before going on to study music at Edinburg Napier University and B.C.U Birmingham Conservatoire. After graduating with a graduate degree from Birminghan Conservatorie, he worked as a pianist, accompanist and teacher in and around Ayrshire. He was also trained in theYamaha method and began teaching at a local Yamaha music school. In September 2013, he was hired as a piano teacher at Academy of Performing Arts at the British School of Bahrain. He is now a full-time piano and group class instructor at Concord Music. Gavin’s aim is to empower students with the skills and knowledge they need in order to become independent learners.'
    },
    {
      id: 8,
      photo: 'https://concord-assets.oss-cn-beijing.aliyuncs.com/Irene%20Huang.png',
      name: 'Irene Huang', 
      role: 'Flute Instructor',
      bio: 'Irene Huang, majored in both flute and piano in Taiwan and has obtained her Master in Music degree at Shanghai Conservatory of Music. She received the CEYO European Youth Orchestra scholarship and performed with the Shanghai Philharmonic Orchestra to great acclaim.'
    },
    {
      id: 9,
      photo: 'https://concord-assets.oss-cn-beijing.aliyuncs.com/Jenny%20Wu.jpeg',
      name: 'Jenny Wu',
      role: 'Clarinet Instructor',
      bio: 'Jenny Wu studied music at University of the Arts of Tainan National Music Institute and is currently pursuing professional doctorate in Anthropology at Shanghai Conservatory of Music. She has been awarded scholarship for outstanding student  and served as principal Clarinet and Orchestra, and graduated with honorary award in Music Education.'
    },
    {
      id: 10,
      photo: 'https://concord-assets.oss-cn-beijing.aliyuncs.com/Keegan%20Govender.jpeg',
      name: 'Keegan Govender',
      role: 'Drums Instructor',
      bio: ' Keego comes form a musical family. He started music at the age of 8 in his family band called Starlight Entertainers. He graduated at Sumbavanie School of Drum in December 2011 with prestigious results and at age of 29, he won the National Percussion Competition in South Africa. He has established himself as an excellent drum player with several awards in competitions such as the Soweto Jazz Festival, Tamil Esteddfods and National Arts and Culture Competition. Keego has developed his own teaching method as a teacher which simplifies the drum technique for better understanding.'
    },
    {
      id: 11,
      photo: 'https://concord-assets.oss-cn-beijing.aliyuncs.com/Travis%20Lu.jpeg',
      name: 'Travis Lu',
      role: 'Guitar Instructor',
      bio: 'Travis has established himself as a jazz guitarist and is an active performer in the jazz scenes of Shanghai. He has appeared frequently in JZ Club, Wooden Box and 696 Bar. He has taken masterclasses with legendary bassist and Grammy award winner and other famous jazz musicians such as Eddie Gomez, Antonio Hart and Sefan Karisson. Travis also received trainings in voice, saxophone and jazz drum. He now focuses on jazz guitar and improvisation. He shares similar passion in teaching and he hopes to inspire his students in becoming musicians who would have their own styles.  '
    },
    {
      id: 12,
      photo: 'https://concord-assets.oss-cn-beijing.aliyuncs.com/Victor%20Noskov.jpeg',
      name: 'Victor Noskov',
      role: 'Drums Instructor',
      bio: 'Viktor, an ukrainian drummer, graduated from the National University of Culture and Arts in Kiev (Ukraine) and has earned a Master degree in Percussion and Drums Performing with teaching certificate. He is also the co-founder of several percussion and drums projects and group such a modern drumming group “Fire Beat” and an ethnical percussion project “Mama-Africana”. Viktor is also an experienced drum teacher and has the experience of helping his students to prepare for Rock School examination.'
    },
    {
      id: 13,
      photo: 'https://concord-assets.oss-cn-beijing.aliyuncs.com/Yong%20Wei%20Ho.jpeg',
      name: 'Yong-Wei Ho',
      role: 'Violin / Viola Instructor',
      bio: 'Yong-Wei or known as Wei by his students, was a regular member at the Malaysian Philharmonic Youth Orchestra (MPYO). He received his Bachelor of Music and Master in Music at Tunghai University (Taichung, Taiwan) at 2017. He studied viola performance with Professors Yih-Chyuan Wang and also served as the teaching assistant in various music history and music theory courses. Wei has played in various master classes, including those taught by professors Dao-Chang Yu ,Allie Su, Hausmann Quartet and Sayaka Kobuko. During summer 2017, Ho was invited to perform with Formosa Philharmonic Orchestra (Taiwan) in Les Rencontres Musicales de Chaon at France. In 2017, he was selected as a member of Thailand Philharmonic Orchestra. Wei is loved by his students for his patience and systematic approach in teaching while able to remain positive and encouraging.'
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
      bio: 'Lee leads Concord team as the Head of Administration and Branch Manager. With her prior experience as ___, she is an experienced leader in team management and in administration. Lee helps each customer with understanding and offers fluent communication in Cantonese, Mandarin and English. She enjoys her work and being a great chef is her secret talent.'
    }, 
    {
      id: 17, 
      photo: 'https://concord-assets.oss-cn-beijing.aliyuncs.com/Fiona.jpeg',
      name: 'Fiona Oung',
      role: 'Administration and Scheduling Manager',
      bio: 'Fiona has worked as an admin and scheduling assistant for more than 4 years. Fiona offers fluent communication in Cantonese, Mandarin and English. She is quick and responsive in work, great with kids, enjoys rock climbing and extreme sports and she always smile!'
    },
    {
      id: 18, 
      photo: 'https://concord-assets.oss-cn-beijing.aliyuncs.com/Leon.jpeg',
      name: 'Leon Chen',
      role: 'Admissions Advisor & Marketing Manager',
      bio: 'Leon offers professional opinions to all new incoming students and help each parent and student in selecting course(s) that would meet their expectations and needs. He is also an experienced piano teacher and has taught for over ____ years. Other than that, he sings as a baritone and performs actively in his choral group name “____”. He works full-time at Concord and almost full-time at the gym too - he enjoys working out and marathon as his hobby.'
    }
  ],
  Chinese: [
    {
      id: 1,
      photo: 'http://concord-assets.oss-cn-beijing.aliyuncs.com/about__fei.jpg',
      name: 'Fei',
      role: '创始人',
      bio: '胡老师是搿艺音乐的创始人兼行政总监。她毕业于曼哈顿音乐学院（音乐学士）和纽约大学（音乐硕士）。她不仅是一名充满激情的钢琴教育家，同时也是世界级的钢琴演奏家（美国、欧洲、菲律宾和马来西亚）。基于在纽约大学作为一名电子琴合奏和即兴课堂的钢琴指导经验下，她撰写并发表《我的音乐宠物》一书，一本迎合4-6岁儿童需要的的钢琴和电子琴集体课的教科书。'
    },
    {
      id: 2, 
      photo: 'https://concord-assets.oss-cn-beijing.aliyuncs.com/Diane%20Kim.jpeg',
      name: 'Diane Kim',
      role: '钢琴教学主任',
      bio: '来自韩国的Doyeon Diane Kim是一位名副其实的钢琴独奏家和室内乐演奏家，Diane博士常年在美国、欧洲和亚洲的各种音乐节日和音乐场所进行演出，足迹遍布全球。在学习期间，Diane博士应邀作为艺术家参加了“特邀艺术家系列”和“交流艺术家系列”，并在伊士曼音乐学院、辛辛那提音乐学院、奥柏林音乐学院等全美顶尖音乐学院进行演出。2010年，她作为协奏曲独奏家和卡内基威尔音乐厅的钢琴独奏家，在纽约与纽约协奏曲交响乐团（New York Concerti Symphonietta）进行首次合作。'
    },
    {
      id: 3,
      photo: 'http://concord-assets.oss-cn-beijing.aliyuncs.com/about__michi.jpg',
      name: 'Michi',
      role: '声乐老师',
      bio: 'Michael Feigl曾出台参与音乐会和歌剧的表演。在2015到2016年间，他在上海音乐学院与陈琦连教授一起学习。他曾在上海音乐厅和上海交响乐大厅以主唱的身份参与表演。他学士学位的专业是音乐史和音乐分析。2017他以最佳成绩毕业于维也纳音乐和表演艺术大学。'
    },
    {
      id: 4,
      photo: 'http://concord-assets.oss-cn-beijing.aliyuncs.com/about__maggie.jpg',
      name: 'Maggie',
      role: '钢琴老师',
      bio: '出生台湾台南，11岁开始学习古典长笛, 2009年考取台南应用科技大学音乐系，主修长笛，副修钢琴。2014年1月赴美就读伯克利音乐学院，在校主修音乐专业，专攻于电影音乐、演奏和音乐教育。2016年底归国後持续往幼儿教育发展，除了幼儿长笛个别课、钢琴启蒙课、2-6岁音乐启蒙课教学以及成人教學，也參與了flute duet / trio演奏、室内乐团、婚礼室内乐演奏等演出。 2017年初移居上海，於早教机构从事幼儿音乐教育，专精于个别长笛、钢琴授课、团体钢琴启蒙课、基础乐理课、幼儿音乐启蒙亲子和团体课教学。'
    },
    {
      id: 5,
      photo: 'http://concord-assets.oss-cn-beijing.aliyuncs.com/about__annie.jpg',
      name: 'Wenxi Khor',
      role: '小提琴老师',
      bio: 'Wenxi, a Malaysian-Chinese violinist, with musical training background from the Shanghai Conservatory of Music (Bachelor in Music) was a member of the Malaysian Philharmonic Youth Orchestra, led by Maestro Kevin Field. She has her own string quartet in Shanghai and performs actively around the city. She passed the ATCL examination of Trinity College with distinction, which is the highest credit. Wenxi - or also known as Ms. Xixi by her students - enjoys teaching violin and sharing her experience in violin, particularly with children. Her students enjoy studying with her because of her warm personality and energetic teaching style. Because of her nationality background, she is able to conduct lessons in both Chinese and English fluently.'
    },
    {
      id: 6,
      photo: 'https://concord-assets.oss-cn-beijing.aliyuncs.com/Irene%20Huang.png',
      name: 'Irene Huang', 
      role: '长笛老师',
      bio: 'Irene来自台湾，主修长笛和钢琴，于上海音乐学院获得音乐硕士学位。她获得了CEYO欧洲青年管弦乐团的奖学金，并与上海爱乐乐团合作演出，获得好评。'
    },
    {
      id: 7,
      photo: 'https://concord-assets.oss-cn-beijing.aliyuncs.com/Jenny%20Wu.jpeg',
      name: 'Jenny Wu',
      role: '单簧管老师',
      bio: '吴老师就读台湾实践大学音乐系、台南艺术大学民族音乐学研究所，以音乐人类学专业获得上海音学院博士学位。求学期间曾获各项优秀学生奖学金，与担任乐团单簧管首席，并以管乐第一名的优异成绩毕业于实践大学音乐系。'
    },
    {
      id: 8,
      photo: 'https://concord-assets.oss-cn-beijing.aliyuncs.com/Keegan%20Govender.jpeg',
      name: 'Keegan',
      role: '鼓老师',
      bio: ' Keegan来自一个音乐世家。8岁时，他在一个名为“星光艺人”的家庭乐队开始了1993岁的音乐创作。他在2011年12月与著名的结果sumbavanie鼓学校，在29岁的时候他就在南非全国打击乐比赛毕业。他已经确立了自己作为一个在比赛中如索韦托爵士音乐节的多个奖项的优秀鼓手，泰米尔esteddfods和民族艺术文化的竞争。'
    },
    {
      id: 9,
      photo: 'https://concord-assets.oss-cn-beijing.aliyuncs.com/Travis%20Lu.jpeg',
      name: 'Travis Lu',
      role: '吉他老师',
      bio: 'Travis，吉他演奏家和老师，在上海著名的爵士演奏台上多次演出（JZ爵士俱乐部，Wooden Box, 696酒吧）。他现专修爵士吉他演奏，先后跟随中国逐渐成长起来的爵士乐环境中的重量级人物，爵士吉他演奏家教育家顾忠山(Jz School校长)、廖季文教授(上海音乐学院)、戴育廷(Jz School)、张雄关(上海音乐学院)和爵士小号演奏家教育家李晓川(上海音乐学院)学习爵士吉他与即兴演奏。自幼学习钢琴、声乐，后又涉及萨克斯、爵士鼓等多种乐器。Travis接受了多位爵士乐名家的指导， 如传奇低音贝斯演奏家、两次格莱美获奖者Eddie Gomez, 爵士萨克斯演奏家Antonio Hart, 爵士钢琴演奏家Stefan Karlsson, 爵士吉他演奏家Sheryl Bailey，爵士吉他演奏家Ola Bengtsson等。'
    },
    {
      id: 10,
      photo: 'https://concord-assets.oss-cn-beijing.aliyuncs.com/Victor%20Noskov.jpeg',
      name: 'Victor Noskov',
      role: '鼓老师',
      bio: '维克托，乌克兰鼓手，毕业于基辅国立文化艺术大学（乌克兰），并获得了具有教学证书的打击乐和鼓的硕士学位。他也是联合创始人几个打击乐器和鼓项目和集团这样的现代鼓组“火鼓”和民族打击乐项目“非洲妈妈” '
    },
    {
      id: 11,
      photo: 'https://concord-assets.oss-cn-beijing.aliyuncs.com/Yong%20Wei%20Ho.jpeg',
      name: 'Yong-Wei Ho',
      role: '小提琴老师',
      bio: '出生于马来西亚，何永威于2010年至2011年曾担任马来西亚爱乐附属交响乐团中提琴演奏员。留学期间，永威的导师们包含王意权教授、张睿洲教授、王弈萱教授。永威也曾任教学助教的工作，其中教学科目包含西洋音乐史。永威于2017年获选为泰国爱乐乐团中提琴演奏员，同年随甫福尔摩沙爱乐管弦乐团到法国演出。留台期间与国内外音乐家合作，包括钢琴家Sandra Wright Shen、Daniel Petrica Ciobanu，低音管演奏家小山昭雄 (Akio Koyama)、小山莉绘 (Rie Koyama)、Sergio Azzolini等音乐家。 '
    },
    {
      id: 12,
      photo: 'https://concord-assets.oss-cn-beijing.aliyuncs.com/Annie.png',
      name: '唐莹',
      role: '钢琴老师',
      bio: '唐莹，5岁开始跟随现任上海⾳乐学院钢琴系教授黄泓习琴，2004年考⼊上海⾳乐学院⾳乐教育系，次年考⼊上海⾳乐学院钢琴系，同时专修钢琴演奏，⽬前持有上⾳的⾳乐教育本科⽂凭和钢琴演奏本科⽂凭。唐⽼师曾在上海平和双语国际学校教授钢琴，也曾在杭州张晓峰艺术中⼼担任助教，协助中央⾳乐学院教授张晓峰辅导附⼩，附中的考⽣。2012年，参加上海雅马哈⾳乐中⼼的研修班，学习⽇本先进的幼教集体课理念，成为2岁半⾄5岁的幼⼉⾳乐⼩组课⽼师，后通过雅马哈的钢琴基础课程研修，成为1对1个⼈课⽼师, 在雅马哈授课2年。'
    },
    {
      id: 13,
      photo: 'http://concord-assets.oss-cn-beijing.aliyuncs.com/about__gavin.jpg',
      name: 'Gavin',
      role: '钢琴老师',
      bio: 'Gavin老师来自英国苏格兰埃尔郡，从5岁开始学习音乐。赴爱丁堡纳皮尔大学和伯明翰艺术学院学习音乐之前他首先学习电子琴和钢琴。从爱丁堡纳皮尔大学（学士）毕业后，他便在埃尔郡从事钢琴家、伴奏家和教师的工作。他也受过最新的雅马哈教学法培训并在当地的雅马哈音乐学院授课。2013年9月，他受聘为巴林英国学校表演艺术学院的钢琴老师。他现在是搿艺音乐全职钢琴和集体课导师。他上课的目标是培养学生的技巧和知识以让他们成为一位独立的学习者。他坚信唯有通过富有创意性的音乐元素体验，我们才能完全建立起对音乐的理解。'
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
      name: '吕率萱', 
      role: '行政主管 ',
      bio: 'Lee leads Concord team as the Head of Administration and Branch Manager. With her prior experience as ___, she is an experienced leader in team management and in administration. Lee helps each customer with understanding and offers fluent communication in Cantonese, Mandarin and English. She enjoys her work and being a great chef is her secret talent.'
    }, 
    {
      id: 17, 
      photo: 'https://concord-assets.oss-cn-beijing.aliyuncs.com/Fiona.jpeg',
      name: '翁清莉',
      role: '行政经理 ',
      bio: 'Fiona has worked as an admin and scheduling assistant for more than 4 years. Fiona offers fluent communication in Cantonese, Mandarin and English. She is quick and responsive in work, great with kids, enjoys rock climbing and extreme sports and she always smile!'
    },
    {
      id: 18, 
      photo: 'https://concord-assets.oss-cn-beijing.aliyuncs.com/Leon.jpeg',
      name: '陈旭',
      role: '招生顾问 & 市场部经理 ',
      bio: 'Leon offers professional opinions to all new incoming students and help each parent and student in selecting course(s) that would meet their expectations and needs. He is also an experienced piano teacher and has taught for over ____ years. Other than that, he sings as a baritone and performs actively in his choral group name “____”. He works full-time at Concord and almost full-time at the gym too - he enjoys working out and marathon as his hobby.'
    }
  ]
}

export default teachers

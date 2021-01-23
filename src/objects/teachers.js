const teachers = {
  English: [
    {
      photo: 'http://concord-assets.oss-cn-beijing.aliyuncs.com/about__fei.jpg',
      name: 'Feifan Oh',
      role: 'Founder / Director',
      bio: 'Fei is the founder and Executive Director of Concord Music. As a graduate of New York’s Manhattan School of Music (Bachelor of Music) and New York University (Master of Music), Fei is not only a passionate piano pedagogue but also an active concert pianist who has performed across the globe (USA, Europe, the Philippines and Malaysia). She has written and published My Musical Animals; a unique method book for piano and keyboard group lessons catering to the needs of young children. She is the leader of Concord teaching team and provides trainings to teachers with the goal to carry out the school’s core belief which is to make the school a space where musical interests are nurtured by professionals.'
    },
    {
      photo: 'https://concord-assets.oss-cn-beijing.aliyuncs.com/Diane%20Kim.jpeg',
      name: 'Dr. Diane Kim',
      role: 'Head of Piano Program',
      bio: 'Diane graduated from University of Michigan with a Doctoral in Musical Arts degree in Piano Performance. She has established a career as a professional solo pianist and chamber musician. One of her top highlights was having a debut with New York Concerti Symphonietta as a concerto soloist and also as a solo pianist at Carnegie Weill Hall. She has more than 10 years of experience in helping students to prepare for RCM and ABRSM piano examination. She is able to help students to expand their potentials through appropriate repertoire selection. Diane is currently teaching at Concord Music while she leads and trains the piano faculty as the Head of Piano Program.'
    },
    {
      photo: 'https://concord-assets.oss-cn-beijing.aliyuncs.com/Yong%20Wei%20Ho.jpeg',
      name: 'Yong-Wei Ho',
      role: 'Violin/Viola Instructor',
      bio: 'Yong-Wei or known as Wei by his students, was a regular member at the Malaysian Philharmonic Youth Orchestra (MPYO). He received his Bachelor of Music and Master in Music at Tunghai University (Taichung, Taiwan) at 2017. He studied viola performance with Professors Yih-Chyuan Wang and also served as the teaching assistant in various music history and music theory courses. Wei has played in various master classes, including those taught by professors Dao-Chang Yu ,Allie Su, Hausmann Quartet and Sayaka Kobuko. During summer 2017, Ho was invited to perform with Formosa Philharmonic Orchestra (Taiwan) in Les Rencontres Musicales de Chaon at France. In 2017, he was selected as a member of Thailand Philharmonic Orchestra. Wei is loved by his students for his patience and systematic approach in teaching while able to remain positive and encouraging.'
    },
    {
      photo: 'https://concord-assets.oss-cn-beijing.aliyuncs.com/191111_ryan.png',
      name: 'Ryan Yeap',
      role: 'Piano, Violin & Viola Instructor',
      bio: 'Ryan pursuit his musical education at the University of Huddersfield in year 2014. Upon completing his Bachelor’s Degree with Piano Performance as his major, he went to the Royal Welsh College of Music and Drama (RWCMD) in Cardiff for his postgraduate studies, majored in Viola Performance and studied with Rebecca Jones, the principal violist of BBC National Orchestra of Wales. During his time in the UK, Ryan had the chance of performing with different orchestras including the BBC National Orchestra of Wales, Slaithwaite Philharmonic Orchestra, The National Video Game Orchestra of Wales, Young Musician Symphony Orchestra (YMSO) and Yorkshire Symphony Orchestra. Ryan also took part in different masterclasses by Rachel Podger, Jane Rogers, Dorothea Vogel of Allegri Quartet, as well as received coaching from Tamsin Waley-Cohen and Rosie Ventris of Albion Quartet. Ryan is now a piano, violin and viola instructor at Concord Music.'
    },
    {
      photo: 'https://concord-assets.oss-cn-beijing.aliyuncs.com/191111_jessa.png',
      name: 'Jessa Xiao',
      role: 'Early-years music teacher, Piano, and Vocal Instructor',
      bio: 'Jessa Xiao received her Master’s Degree in Piano Performance at Mannes School of Music in New York City on May 2018. She was an exchange student at Peabody Conservatory at the Johns Hopkins University during the school year of 2014 to 2015 before she graduated from Wuhan Conservatory of Music in China with Bachelor’s Degree. Jessa has had many years of teaching experience. She has taught one-on-one piano and voice lessons, early childhood music course and music theory in both China and the USA. Her students’ age ranged from 3 to 18. Her 1-on-1 students have achieved distinction in ABRSM and RCM exams. Over time, she has developed a unique teaching method that approaches every student differently with passion, enthusiasm and profession. She is currently a full-time teacher teaching Early-Years music classes and 1-on-1 piano and vocal lessons at Concord Music. Jessa is now a early-years music teacher, piano, and vocal instructor at Concord Music.'
    },
    {
      photo: 'https://concord-assets.oss-cn-beijing.aliyuncs.com/191111_max.png',
      name: 'Max Gao',
      role: 'Flute Instructor',
      bio: 'Max has been instructed by Professor Carol Wencenc from the Juilliard School, Paolo Taballion, the flute principal of Bayerische Staatsope, Sarah Louvion, the flute principal of hr-Sinfonieorchester Frankfurt, famous Swiss Flutist Philippe Jundt, Korean flutist Joohee Lee, and flutist Yihui Lin from Taiwan, China. Besides his excellent performance in orchestras and learning experience with world-class flutists,  Xing Gao has also shown his capability in “Shengqi He International Flute Summer Camp”. He has won a first place in individual, a first place in group round, and a third place in the total ranking. Max served as a group class instructor for a year at Changdao Middle School, High School Affiliated to East China University of Political Science and Law, and Zicheng Experimental School. He also had 3 years of experience as a 1-1 individual program instructor.'
    },
    {
      photo: 'https://concord-assets.oss-cn-beijing.aliyuncs.com/Travis%20Lu.jpeg',
      name: 'Travis Lu',
      role: 'Guitar Instructor',
      bio: 'Travis has established himself as a jazz guitarist and is an active performer in the jazz scenes of Shanghai. He has appeared frequently in JZ Club, Wooden Box and 696 Bar. He has taken masterclasses with legendary bassist and Grammy award winner and other famous jazz musicians such as Eddie Gomez, Antonio Hart and Sefan Karisson. Travis also received trainings in voice, saxophone and jazz drum. He now focuses on jazz guitar and improvisation. He shares similar passion in teaching and he hopes to inspire his students in becoming musicians who would have their own styles. '
    },
    {
      photo: 'https://concord-assets.oss-cn-beijing.aliyuncs.com/Jenny%20Wu.jpeg',
      name: 'Jenny Wu',
      role: 'Clarinet Instructor',
      bio: 'Jenny Wu studied music at University of the Arts of Tainan National Music Institute and is currently pursuing professional doctorate in Anthropology at Shanghai Conservatory of Music. She has been awarded scholarship for outstanding student  and served as principal Clarinet and Orchestra, and graduated with honorary award in Music Education.'
    },
    {
      photo: 'https://concord-assets.oss-cn-beijing.aliyuncs.com/Annie.png',
      name: 'Annie Tang',
      role: 'Piano Instructor',
      bio: 'Annie started piano at the age of five with Professor Hong Huang. Annie was a double major in Music Education and Piano Performance at the Shanghai Conservatory of Music. She is an experienced piano teacher and has taught piano at Shanghai Ping He Bilingual School and and at Zhang Xiao Feng Music Center where she helped students to prepare for precollege studies of music conservatories. Annie was a trained and certified Yamaha teacher to teach music foundation group classes and piano foundation group classes. She taught as a trained and approved 1-on-1 instructor at Yamaha for 2 years. She is experienced in helping her students with the ABRSM examinations while keeping their studies engaged. She is liked by her students for her patience and gentleness in teaching.',
    },
    {
      photo: 'https://concord-assets.oss-cn-beijing.aliyuncs.com/Kevin.jpeg',
      name: 'Kevin Marsh',
      role: 'Guitar Instructor',
      bio: 'Canadian guitarist Kevin Marsh is an exquisite performer, teacher and composer. He formed the Rosette Guitar Duo and began composing, recording and performing their unique style of Canadian guitar music. He has also performed in notable venues such as the Chan Center for the Arts in Vancouver, British Columbia, The EPCOR Center in Calgary, Alberta and the Francis Ford Winspear Center in Edmonton. Kevin is a master teacher who has been joyfully educating students of the guitar for nearly twenty years. His passion for music and the guitar is exemplified through the success and accomplishments of his students. In 2013, Kevin was recognised and awarded by the Royal Conservatory of Music as an outstanding teacher, having one of his pupils receive a gold medal for highest marks on a performance exam.'
    },
    {
      photo: 'https://concord-assets.oss-cn-beijing.aliyuncs.com/Anne%20Koss.jpeg',
      name: 'Anne Koss ',
      role: 'Vocal Instructor',
      bio: 'Anne obtained a China government full scholarship to study a Master Degree program in Bel Canto at the Shanghai Conservatory of Music. She was part of a cross-cultural choir called “Voice of the world”. As a soloist and member of this choir, Anne learned and performed many different songs styles from all over the world. Other than singing, Anne can play guitar accompaniment and some percussion instruments. She graduated from the Shanghai Conservatory of Music with a Master Degree and is going to continue her career as a vocal teacher in Shanghai.  Anne believes that all children are unique and have special potentials that need to be discovered and mentored. Therefore they must have a stimulating environment where they can grow physically, mentally, emotionally, and socially. Her desire is to create this type of educational atmosphere where students can meet their full potential.'
    },
    {
      photo: 'https://concord-assets.oss-cn-beijing.aliyuncs.com/william%20liu.png',
      name: 'William Liu',
      role: 'Violin Teacher',
      bio: 'William Liu graduated from Shih Chien University Taipei - Master in Music. He started learning violin from young ages. He is lucky that he had a great teacher then. He was inspired by his teacher who taught him that learning music should an enjoyable path, because only then he will seek to inspire others with his music. So, this has became his philosophy of teaching as well. During his studies he has attended several international festivals and had the opportunities to study with great violin maestros such as Miranda Cuckson, Christof Huebner, Anton Miller. After his master studies, he studied with Professor Liu who worked as the vice principal of Taiwan National Symphony Orchestra.  He believes that learning violin should be a process that cannot be rushed. One should take it easy, one step a time and allow much space for the learning interest to grow steadily.'
    },
    {
      photo: 'https://concord-assets.oss-cn-beijing.aliyuncs.com/Yi%20Jun%20Kao.png',
      name: 'Yi-Jun Kao ',
      role: 'Trumpet Instructor',
      bio: 'Yi-Jun Kao, a young modern trumpeter from Taiwan shared the stage with famous jazz artists such as Michael Dease, Richard Sussman, Joe Magnarelli, Conrad Herwig, Ralf Bowen, Victor Lewis and Antonio Hart. He has performed in famous jazz venues around the world such as Blue Note New York, JZ Club, House of blues and jazz, Pearl club and participated in jazz festivals in Shanghai. Mr. Kao is also an educator of a new generation. He is currently the instructor of jazz trumpet in Nanjing University of Arts. He holds a Bachelor of Music degree from Chinese Culture University (Taiwan) and Master of Music from Rutgers University (USA). Yi-Jun is a very dedicated teacher. He also coaches teen band and jazz band. He is able to help students form their own band by cultivating good listening skills.'
    },
    {
      photo: 'https://concord-assets.oss-cn-beijing.aliyuncs.com/Shirly%20Xu.jpeg',
      name: 'Shirley Xu',
      role: 'Vocal and Choir Instructor',
      bio: "Shirley graduated from Shanghai Normal University majoring in art and preschool education. Choral singing was the reason she fell in love with music and it brought her infinite musical inspiration. Soon she achieved Bel Canto LEVEL 6, Piano Level 8 and clarinet Level 10. Shirley has been an outstanding musician since her college years. She served as the deputy head of the Chorus of Shanghai Normal University and won the gold medal of A cappella chorus competition sponsored by Shanghai Musicians Association. Year 2016, She graduated from Shanghai Normal University with excellent grades and started her music dream and life goal from then on.  Shirley’s passion of teaching lies in the early years music education. Over the years, she has devoted herself to helping children build a musical foundation, encouraging them to feel music, develop their music interests and guiding them to find their unique understanding of music so as to discover the subtle beauty of music. This exquisite beauty is pure and natural, which can not only enrich children's language ability, but also promote children's memory and creativity. These early abilities will benefit children for a lifetime."
    },
    {
      photo: 'https://concord-assets.oss-cn-beijing.aliyuncs.com/vitalii.jpeg',
      name: 'Vitalii Sodoma',
      role: 'Drum / Percussion Instructor',
      bio: "Vitalii, a professional drummer from Ukraine started learning classical percussion at the age of 15. He received his Master degree of Music from Ukrainian Music Academy M. Lysenko. During his studies, He studied drum set and had great interest in various styles such as fusion and jazz. Therefore, He exposed himself to a wide range of genre, including rock, pop, funky and Latin music. He took part in TV shows and music festival. Since 2012, he has been performing in China. Based on his skills and knowledge, he could make music more interesting and groovier. He also taught in the Khmelnitskii State College of Music in Ukraine. Vitalii believes that music is the only real magic in this world because it is not illusion; it can evoke emotion, giving the right feeling at the right moment. Vitalii is an experienced teacher with the British syllabus, Rock School. He uses the Rock School method books, with added pieces that are interest of students. He is also able to help ambitious students prepare for the Rock School examinations."
    },
    {
      photo: 'https://concord-assets.oss-cn-beijing.aliyuncs.com/191111_evelyn.png',
      name: 'Evelyn Lee',
      role: 'Administration Manager',
      bio: 'Evelyn has worked as an admin assistant for more than 3 years. She is in charge of all scheduling, payment and general communication with parents at Concord. Evelyn offers fluent communication in Malay, Hokkien, Mandarin and English. She is responsible in work, great with kids, and she carries great vibe!'
    },
    {
      photo: 'https://concord-assets.oss-cn-beijing.aliyuncs.com/beely-2.jpeg',
      name: 'Beely Lee',
      role: 'Administration Director',
      bio: 'Lee leads Concord team as the Head of Administration and Branch Manager. With her previous experience as a language teacher and as the principal’s senior assistant of a 2000-students school, she is an experienced leader in team management and in education administration. Lee helps each customer with understanding and offers fluent communication in Cantonese, Mandarin and English. She enjoys her work and being a great chef is her secret talent.'
    },
  ],
  Chinese: [
    {
      photo: 'http://concord-assets.oss-cn-beijing.aliyuncs.com/about__fei.jpg',
      name: '胡斐凡',
      role: '创始人 / 艺术总监',
      bio: '胡老师是搿艺音乐的创始人和总监。她毕业于曼哈顿音乐学院（音乐学士）和纽约大学（音乐硕士）。她不仅是一名充满激情的钢琴教育家，同时也是世界级的钢琴演奏家,并在多国国际音乐厅演奏过（美国、欧洲、菲律宾和马来西亚）。胡老师撰写并出版的钢琴启蒙教材《我的音乐宠物》迎合4-6岁儿童集体课和一对一学习的钢琴启蒙。她给予搿艺的老师们进行培训，并监督教学和课程质量，持续不断地坚持搿艺最初创办的理念：以专业的精神培养学生们对音乐的兴趣'
    },
    {
      photo: 'https://concord-assets.oss-cn-beijing.aliyuncs.com/Diane%20Kim.jpeg',
      name: '金度延',
      role: '钢琴教学部主任',
      bio: '来自韩国的Diane博士是一位名副其实的钢琴独奏家和室内乐演奏家。Diane博士常年在美国、欧洲和亚洲的各种音乐节日和音乐场所进行演出，足迹遍布全球。在学习期间，Diane博士应邀作为艺术家参加了“特邀艺术家系列”和“交流艺术家系列”，并在伊士曼音乐学院、辛辛那提音乐学院、奥柏林音乐学院等全美顶尖音乐学院进行演出。2010年，她作为协奏曲独奏家和卡内基威尔音乐厅的钢琴独奏家，在纽约与纽约协奏曲交响乐团（New York Concerti Symphonietta）进行首次合作。她有超过10年的教学经验，去帮助孩子们准备并通过RCM和ABRSM的钢琴考级。Diane博士能够通过选择合适的演奏曲目去挖掘学生们的音乐潜能。目前Diane博士在搿艺音乐进行任教，同时作为钢琴教学部主任去领导和培训搿艺的钢琴教师团队。'
    },
    {
      photo: 'https://concord-assets.oss-cn-beijing.aliyuncs.com/Yong%20Wei%20Ho.jpeg',
      name: '何永威',
      role: '小提琴／中提琴老师',
      bio: '出生于马来西亚，何永威于2010年至2011年曾担任马来西亚爱乐附属交响乐团中提琴演奏员。留学期间，永威的导师们包含王意权教授、张睿洲教授、王弈萱教授。永威也曾任教学助教的工作，其中教学科目包含西洋音乐史。永威于2017年获选为泰国爱乐乐团中提琴演奏员，同年随甫福尔摩沙爱乐管弦乐团到法国演出。留台期间与国内外音乐家合作，包括钢琴家Sandra Wright Shen、Daniel Petrica Ciobanu，低音管演奏家小山昭雄 (Akio Koyama)、小山莉绘 (Rie Koyama)、Sergio Azzolini等音乐家。永威老师因他耐心的态度和良好的教学体系深受学生们喜爱，并时刻保持着热诚，给予学生们鼓励。 '
    },
    {
      photo: 'https://concord-assets.oss-cn-beijing.aliyuncs.com/191111_ryan.png',
      name: '叶柏恒',
      role: '钢琴、小提琴及中提琴教学老师',
      bio: 'Ryan 老师2014年开始在英国哈德斯菲尔德大学就读钢琴演奏，本科毕业后即前往卡尔迪夫就读皇家威尔士音乐戏剧学院(RWCMD)的硕士课程，并在英国广播公司威尔士国家管弦乐队(BBC National Orchestra of Wales)首席中提琴家Rebecca Jones的教导下学习中提琴演奏。Ryan老师在英国深造期间，曾加入许多海外知名弦乐团参与演出，包括英国广播公司威尔士国家管弦乐队(BBC National Orchestra of Wales)、斯莱维特爱乐乐团 (Slaithwaite Philharmonic Orchestra)、青年音乐家交响乐团(YMSO)、约克郡交响乐团(Yorkshire Symphony Orchestra)。Ryan 也曾在多位大师的教导下学习精进，包括Rachel Podger, Jane Rogers, Allegri四重奏的Dorothea Vogel of Allegri Quartet，Albon四重奏的Tamsin Waley-Cohen和Rosie Ventris。Ryan老师目前在Concord教学钢琴、小提琴及中提琴。'
    },
    {
      photo: 'https://concord-assets.oss-cn-beijing.aliyuncs.com/191111_jessa.png',
      name: '肖杰予',
      role: '钢琴、集体启蒙课教师',
      bio: '作为⼀个非常有经验的教学者和演奏者，肖杰予老师于2018年五月从纽约曼尼斯⾳乐学院取得钢琴演奏硕⼠学位，她在2014⾄2015年期间被武汉⾳乐学院选拔前往⽪博迪音乐学院进⾏交换学习。肖老师在中美两地有多年的教学经验。她曾教授钢琴及声乐一对⼀课程，幼儿⾳乐启蒙课程以及乐理课程。她的学⽣包含各个年龄阶层。在她的辅导下，⼀些⼀对⼀学⽣在英国皇家⾳乐学院考级和加拿⼤皇家音乐学院考级中取得杰出的好成绩。对于音乐教学，她有⾃⼰理解。她善于因材施教，以及⽤兴趣作为⿎励去启发每⼀个学⽣。肖老师⽬前是搿艺⾳乐的全职老师，授课⾳乐启蒙课和⼀对⼀钢琴和声乐课。Jessa老师目前在Concord教学钢琴、声乐及幼儿启蒙课。'
    },
    {
      photo: 'https://concord-assets.oss-cn-beijing.aliyuncs.com/191111_max.png',
      name: '高兴',
      role: '长笛教师',
      bio: '他曾先后受到过茱莉亚音乐学院（The Juilliard School）教授 Carol Wencenc，巴伐利亚歌剧院交响乐团（Bayerische Staatsoper）长笛首席 Paolo Taballion，法兰克福广播交响乐团（hr-Sinfonieorchester Frankfurt）长笛首席 Sarah Louvion，著名瑞士长笛家 Philippe Jundt，中国台湾长笛家林薏蕙（Yihui Lin）老师，以及韩国长笛家 JooHee Lee 等长笛名家的指导。个人方面曾在何声奇长笛夏季训练营去的团体第一，个人独奏第一以及总分第三的成绩高兴老师在长岛中学，华东政法大学附属小学以及，莘城实验学校，担任集体课教师一年。同时也有三年一对一长笛课程的教学经验。'
    },
    {
      photo: 'https://concord-assets.oss-cn-beijing.aliyuncs.com/Travis%20Lu.jpeg',
      name: '陆津烁',
      role: '吉他 / 尤克里里老师 ',
      bio: '陆老师在上海著名的爵士演奏台上多次演出（JZ爵士俱乐部，Wooden Box, 696酒吧）。他现专修爵士吉他演奏，先后跟随中国逐渐成长起来的爵士乐环境中的重量级人物，爵士吉他演奏家教育家顾忠山(Jz School校长)、廖季文教授(上海音乐学院)、戴育廷(Jz School)、张雄关(上海音乐学院)和爵士小号演奏家教育家李晓川(上海音乐学院)学习爵士吉他与即兴演奏。自幼学习钢琴、声乐，后又涉及萨克斯、爵士鼓等多种乐器。Travis接受了多位爵士乐名家的指导， 如传奇低音贝斯演奏家、两次格莱美获奖者Eddie Gomez, 爵士萨克斯演奏家Antonio Hart, 爵士钢琴演奏家Stefan Karlsson, 爵士吉他演奏家Sheryl Bailey，爵士吉他演奏家Ola Bengtsson等。陆老师在教学上也具有一样的热情，他希望可以帮助学生找到属于自己的音乐表达方式。 '
    },
    {
      photo: 'https://concord-assets.oss-cn-beijing.aliyuncs.com/Jenny%20Wu.jpeg',
      name: '吳珀元',
      role: '单簧管老师',
      bio: '吴老师就读台湾实践大学音乐系、台南艺术大学民族音乐学研究所，以音乐人类学专业获得上海音学院博士学位。求学期间曾获各项优秀学生奖学金，与担任乐团单簧管首席，并以管乐第一名的优异成绩毕业于实践大学音乐系。'
    },
    {
      photo: 'https://concord-assets.oss-cn-beijing.aliyuncs.com/Annie.png',
      name: '唐莹',
      role: '钢琴老师',
      bio: '唐莹，5岁开始跟随现任上海⾳乐学院钢琴系教授黄泓习琴，2004年考⼊上海⾳乐学院⾳乐教育系，次年考⼊上海⾳乐学院钢琴系，同时专修钢琴演奏，⽬前持有上⾳的⾳乐教育本科⽂凭和钢琴演奏本科⽂凭。唐⽼师曾在上海平和双语国际学校教授钢琴，也曾在杭州张晓峰艺术中⼼担任助教，协助中央⾳乐学院教授张晓峰辅导附⼩，附中的考⽣。2012年，参加上海雅马哈⾳乐中⼼的研修班，学习⽇本先进的幼教集体课理念，成为2岁半⾄5岁的幼⼉⾳乐⼩组课⽼师，后通过雅马哈的钢琴基础课程研修，成为1对1个⼈课⽼师, 在雅马哈授课2年。'
    },
    {
      photo: 'https://concord-assets.oss-cn-beijing.aliyuncs.com/Kevin.jpeg',
      name: 'Kevin Marsh',
      role: '吉他老师',
      bio: 'Kevin Marsh来自加拿大，是一位技艺精湛的吉他演奏家、老师和作曲家。他创立“Rosette Guitar”乐队，进行创作、录制和表演风格独特的加拿大吉他音乐。他曾在著名的演出场所进行演出，比如温哥华的Chan Center for the Arts，卡尔加里的EPCOR中心, 埃德蒙德的Francis Ford Winspear Center等。Kevin老师是一位优秀的吉他老师，具有近20年的吉他教学经验，他非常热爱音乐和吉他，教授出一批又一批具有成就的学生。2013年，Kevin老师被英国皇家音乐学院评为优秀教师，并且他的学生在以演奏最高分的成绩获得演出金牌。'
    },
    {
      photo: 'https://concord-assets.oss-cn-beijing.aliyuncs.com/Anne%20Koss.jpeg',
      name: '安妮柯斯',
      role: '声乐老师',
      bio: '安妮老师获得中国政府全额奖学金为了在上海音乐学院读美声唱法专业硕士学位。她在上音加入了名为’世界之声’的一个跨文化合唱团。在那合唱团当唱与合唱员之一，她学习并演唱了来自世界各地的许多不同歌曲风格。。除了唱歌，老师还会弹吉他伴奏和打击乐器。安妮毕业于上海音乐学院，如今在上海积极发展他的表演和教学生涯。安妮认为，所有孩子都是独一无二的，每个孩子的潜能需要被发掘和引导。因此，他们必须拥有一个令人振奋的环境和熏陶，使他们在身体，心理，情感和社交上都能成长。我的愿望是营造一种这样的教育氛围，使学生能够充分发挥其潜能。'
    },
    {
      photo: 'https://concord-assets.oss-cn-beijing.aliyuncs.com/william%20liu.png',
      name: '刘威哲',
      role: '小提琴老师',
      bio: '刘威哲毕业于台湾实践⼤学- ⾳乐硕⼠。⾃幼开始学⼩提琴，威哲很庆幸的在初学阶段就遇到耐⼼指导的教师，⽼师给他的理念是，在学琴过程中要以愉快的⼼情去学习，唯独坚持不断的练习，这样才能演奏出动⼈的旋律。 这也成为了刘老师本身的教学理念，因为是他的亲身体验。研究所期间，刘老师荣获台湾教育部『学海筑梦计划』 参与美国纽约音乐节，並接受Miranda Cuckson，Christof Huebner，Anton Miller等⼩提琴大师指导．研究所毕业后，追随台湾国家交响乐团副⾸席邓皓敦⽼師学习琴艺。  刘老师认为学音乐的路上沒有终点。所以他教琴的理念是慢慢的培养对小提琴喜爱，才能学的稳健。'
    },
    {
      photo: 'https://concord-assets.oss-cn-beijing.aliyuncs.com/Yi%20Jun%20Kao.png',
      name: '高翊鈞 ',
      role: '小号老师 ',
      bio: '高老师是来自于台湾，年轻现代的小号演奏家。他曾和著名的小号演奏家同台演出，其中包括Michael Dease, Richard Sussman, Joe Magnarelli, Conrad Herwig, Ralf Bowen, Victor Lewis 和 Antonio Hart。他曾在Blue Note 爵士俱乐部、JZ 俱乐部、蓝调爵士之家、珍珠俱乐部等世界著名的爵士乐演出场所演出，并参加了上海的爵士乐节。高先生也是新一代的教育工作者。现任南京艺术大学和上海JZ 学校小号教员。他拥有中国文化大学（台湾）音乐学士学位和罗格斯大学（美国）音乐硕士学位。  高老师是一位非常敬业的老师。他也是青少年乐队和爵士乐队的导师。他能够通过培养良好的听力技能来帮助学生组建自己的乐队。'
    },
    {
      photo: 'https://concord-assets.oss-cn-beijing.aliyuncs.com/Shirly%20Xu.jpeg',
      name: '徐丽烨 ',
      role: '声乐老师/ 合唱指挥家 ',
      bio: '徐丽烨毕业于上海师范大学，艺术和幼儿教育专业。作为一名艺术能力与教学能力都备受认可的老师。合唱让她爱上音乐，并带给她无限的音乐灵感，很快她获得了成人美声六级，钢琴八级，单簧管十级的目标。徐丽烨在音乐方面的才华，在大学期间就展露无疑。不单担任了上海师范大学合唱团副团长，更是带领团队，获得了上海音乐家协会主办的无伴奏合唱比赛金奖。徐老师并以优异的成绩毕业于上海师范大学，也自此开启了她的音乐梦想和人生目标。徐老师对教学的热情在于幼儿音乐启蒙。多年来，她致力于帮助孩子们建立音乐基础，鼓励他们去感受音乐，发展音乐兴趣，并引导他们找到对音乐的独特理解，从而发现音乐的微妙之美。这种精美的美是纯净自然的，不仅可以丰富儿童的语言表达能力，而且可以促进儿童的记忆力和创造力。这些早期能力将使儿童终生受益。'
    },
    {
      photo: 'https://concord-assets.oss-cn-beijing.aliyuncs.com/vitalii.jpeg',
      name: '维他利伊 索多玛',
      role: '架子鼓 / 敲击乐老师',
      bio: "Vitalii老师是一名来自乌克兰的鼓手和打击乐手。他从15岁开始学习打击乐，于乌克兰的M. Lysenko 音乐学院毕业并获得音乐硕士文凭。求学期间，他开始对不同的曲风有着浓厚的兴趣，如爵士、融合音乐。因此，他让自己接触大量的曲风，其中包含了摇滚、流行、放克音乐、拉丁音乐等。他也曾参加电视节目演出和音乐节，并从2012年迄已在中国演出。以他的能力与知识，他能够让音乐更有生命力。Vitalii老师也曾在乌克兰的赫梅利尼茨斯州音乐学院任教。  Vitalii老师相信⾳乐是这个世界上唯⼀真实存在的魔法, 因为⾳乐能触发出你⼼⾥最真实的情感，⽽不是虚幻的假象。Vitalii老师对英国考级系统Rock School具有一定的经验，教学上以Rock School大纲和教材为主，附加学生感兴趣的曲目, 兴趣结合系统学习。 Vitalii老师当然也可以帮愿意接受挑战的学生准备Rock School考级。"
    },
    {
      photo: 'https://concord-assets.oss-cn-beijing.aliyuncs.com/191111_evelyn.png',
      name: '李綵翎',
      role: '行政经理',
      bio: '綵翎老师在日常行程和行政方面已经有3年多的经验。李老师在搿艺负责所有排课，缴费和沟通。綵翎老师可以提供流利的马来语、闽南语、普通话和英文进行交流。她在日常工作中负责任，与孩子相处融洽，并总是乐观开朗！'
    },
    {
      photo: 'https://concord-assets.oss-cn-beijing.aliyuncs.com/beely-2.jpeg',
      name: '吕率瑄',
      role: '行政总监',
      bio: '吕老师以行政主管和分公司经理的身份领导着搿艺团队。吕老师曾是位语言老师，也曾担任2000多学生学校的校长特助，因此她在团队管理和教育行政管理方面是一位经验丰富的领导者。吕老师负责帮助每一位客户理解所需要的内容，并可以提供流利的粤语、普通话和英文进行沟通。她非常热爱她的工作，励志成为一名伟大的厨师是她隐藏多年的秘密。'
    },
  ]
}

export default teachers

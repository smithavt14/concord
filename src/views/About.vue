<script>
import translation from '@/translations/translation'
import globalData from '@/main'

export default {
  name: 'about',

  data () {
    return {
      center: { lng: 121.399865, lat: 31.204689 },
      zoom: 15,
      show: false,
      showInfo: null,
      reasons: {
        English: [
          {
            id: 0,
            icon: 'https://res.cloudinary.com/dbbfpai4q/image/upload/v1543234794/number-one-in-a-circle.png',
            title: 'World Class Faculty',
            description: 'We provide high-quality music education to students of all levels and ages.'
          },
          {
            id: 1,
            icon: 'https://res.cloudinary.com/dbbfpai4q/image/upload/v1543234794/number-two-in-a-circle.png',
            title: 'Unique Teaching Style',
            description: 'We combine traditional Western methods with an innovative approach to music pedagogy.'
          },
          {
            id: 2,
            icon: 'https://res.cloudinary.com/dbbfpai4q/image/upload/v1543234793/number-three-in-a-circle.png',
            title: 'Diverse Course Options',
            description: 'We tailor our programs to meet different needs and interests, while provided a well rounded learning experience for all.'
          },
          {
            id: 3,
            icon: 'https://res.cloudinary.com/dbbfpai4q/image/upload/v1543234793/number-four-in-circular-button.png',
            title: 'More Performance Opportunities',
            description: 'We ensure continued progress and keep our students engaged and inspired throughout their music studies.'
          },
          {
            id: 4,
            icon: 'https://res.cloudinary.com/dbbfpai4q/image/upload/v1543234794/number-five-in-circular-button.png',
            title: 'Lifelong Interest in Learning',
            description: 'We strive to cultivate a lifelong interest in music among our students at Concord Music.'
          }
        ],
        Chinese: [
          {
            id: 0,
            icon: 'https://res.cloudinary.com/dbbfpai4q/image/upload/v1543234794/number-one-in-a-circle.png',
            title: '专业的国际师资团队',
            description: '为不同年龄段和水平的学生提供高质量的音乐教育'
          },
          {
            id: 1,
            icon: 'https://res.cloudinary.com/dbbfpai4q/image/upload/v1543234794/number-two-in-a-circle.png',
            title: '我们独特的教学方式',
            description: '结合西式教学和创新的教学方式'
          },
          {
            id: 2,
            icon: 'https://res.cloudinary.com/dbbfpai4q/image/upload/v1543234793/number-three-in-a-circle.png',
            title: '丰富的课程选择',
            description: '针对不同的兴趣，我们提供全面的学习经验'
          },
          {
            id: 3,
            icon: 'https://res.cloudinary.com/dbbfpai4q/image/upload/v1543234793/number-four-in-circular-button.png',
            title: '演奏机会',
            description: '为了提供更多的动力和鼓励，我们为每位学生提供足够的演奏机会'
          },
          {
            id: 4,
            icon: 'https://res.cloudinary.com/dbbfpai4q/image/upload/v1543234794/number-five-in-circular-button.png',
            title: '培育长期和有持续性的音乐兴趣',
            description: '是我们团队的使命'
          }
        ]
      },
      team: {
        English: [
          {
            id: 0,
            photo: 'https://res.cloudinary.com/dbbfpai4q/image/upload/v1543363851/Joanne.jpg',
            name: 'Joanne',
            role: 'Piano Instructor',
            bio: 'Joanne is an active pianist, educator and lecturer. She is born and raised in Taiwan and later earned her Master of Music degree at New York University and Bachelor of Music degree at Manhattan School of Music in New York on piano performance. She has performed in Taiwan, Malaysia, Spain, and the United States in addition to receiving distinguished awards from multiple piano competitions. Besides performing and teaching, Joanne also collaborates with artists from different fields as a composer. A former adjunct piano faculty at New York University and Tamkang High School in Taiwan, Joanne teaches students at all levels and all ages. Her teaching scope ranges from classical, pop, to improvisation. On top of building strong foundations, she encourages students to explore different music genres and art forms. Joanne believes learning the piano is a gateway to opening up new ways of thinking.'
          },
          {
            id: 1,
            photo: 'https://res.cloudinary.com/dbbfpai4q/image/upload/v1543384678/Fei.jpg',
            name: 'Fei',
            role: 'Founder / Director',
            bio: 'Feifan is the founder and Executive Director of Concord Music. As a graduate of New York’s Manhattan School of Music (Bachelor of Music) and New York University (Master of Music), she is not only a passionate piano pedagogue, but also an active concert pianist who has performed across the globe (USA, Europe, the Philippines and Malaysia). Based on her experience as a piano instructor for the keyboard harmonization and improvisation class at New York University, she wrote and published My Musical Animals; a unique method book for piano and keyboard group lessons catering to the needs of young children. She leads the teaching team of Concord Music by providing trainings to teachers with goal to carry out the slogan which is to make the school a space where musical interests are nurtured by professionals. '
          },
          {
            id: 2,
            photo: 'https://res.cloudinary.com/dbbfpai4q/image/upload/v1543363849/michi.jpg',
            name: 'Michi',
            role: 'Vocal / Choral',
            bio: 'Michael Feigl has performed in many different concerts and opera productions. In year 2015 to 2016 he studied at the Shanghai Conservatory of Music with Professor Chen Qilian. Special moments during this time were his appearance as a soloist for concerts at the Shanghai Music Hall and the Shanghai Symphony Hall. He has a bachelor degree in musicology from the University of Vienna, with a focus on music history and musical analysis. 2017 he graduated from the University of Music and Performing Arts Vienna with honours.'
          },
          {
            id: 3,
            photo: 'https://res.cloudinary.com/dbbfpai4q/image/upload/v1543363849/Maggie.jpg',
            name: 'Maggie',
            role: 'Flute & Piano Instructor',
            bio: 'Maggie, born and raised in Taiwan, studied classical flute at the age of 11. She was admitted to Tainan University of Technology in 2009 with a Bachelor degree of Music, majored in flute and minored in piano. She had been touring around East Asia with the orchestra during the years of her studying in the college. At 2014, she went to Berkelee College of Music in US to pursue a higher education, majored in the Professional Music degree program which has covered the areas of Film Scoring, Performance and Music Education.'
          },
          {
            id: 4,
            photo: 'https://res.cloudinary.com/dbbfpai4q/image/upload/v1543363853/Annie.jpg',
            name: 'Annie',
            role: 'Piano Instructor',
            bio: 'Annie started piano at the age of five with Professor Hong Huang and made it into Shanghai Conservatory of Music in year 2004. She was a double major in Music Education and Piano Performance. She continued his studies with Professor Hong Huang throughout her undergraduate studies. Annie has taught piano at Shanghai Ping He Bilingual School and she was also the Teaching Assistant at Zhang Xiao Feng Music Center where she helped students to prepare for precollege studies of music conservatories. Annie moved back to Shanghai and started teaching at Yamaha. She was a trained and certified yamaha teacher to teach music foundation group classes and piano foundation group classes. She was also a trained and approved 1-on-1 instructor there. She has 10 years of experience and her strength is to teach in simple yet interesting ways that young children can understand. She likes to use stories and imagination to teach music.'
          },
          {
            id: 5,
            photo: 'https://res.cloudinary.com/dbbfpai4q/image/upload/v1543363849/Gavin.jpg',
            name: 'Gavin',
            role: 'Piano Instructor',
            bio: 'Gavin comes from Ahyrshire in Scotland, nationality is United Kingdom. He began his musical education at age of five, initially studying keyboard and later piano before going on to study music at Edinburg Napier University and B.C.U Birmingham Conservatoire. After graduating with a graduate degree from Birminghan Conservatorie, he worked as a pianist, accompanist and teacher in and around Ayrshire. He was also trained in the renewed Yamaha method and began teaching at a local yamaha music school. In September 2013, he was hired as a piano teacher at Academy of Performing Arts at the British School of Bahrain. He is now a full-time piano and group class instructor at Concord Music. Gavin’s aim is to empower students with the skills and knowledge they need in order to become independent learners. He believes it is through experiencing musical elements in a creative way that we truly develop our understanding.'
          },
          {
            id: 6,
            photo: 'https://res.cloudinary.com/dbbfpai4q/image/upload/v1543363850/PG.jpg',
            name: 'PG',
            role: 'Guitar Instructor',
            bio: 'PG, an accomplished Taiwanese jazz guitarist who has studied with famous guitar maestros such as John Wilkins, Richie Hart and Tim Miller. He studied in the United States since year 2013 and graduated with best grade award at Berkeley College of Music where he earned his Master in Guitar Performance. After her graduation, he moved to New York for a year and worked as a freelance performer and often jammed with famous musicians, including Peter Bernstein.'
          }
        ],
        Chinese: [
          {
            id: 0,
            photo: 'https://res.cloudinary.com/dbbfpai4q/image/upload/v1543363851/Joanne.jpg',
            name: 'Joanne',
            role: '钢琴老师',
            bio: '陈楚安，钢琴家、音乐教育家和讲师。陈老师出生于台湾，毕业于纽约大学（音乐硕士；钢琴专业）和曼哈顿音乐学院（本科；钢琴专业）。她曾经在台湾，马来西亚，西班牙和美国演奏，也赢过钢琴比赛和奖项。除了热衷于演奏和教学，她也和作曲家合作，表演他们的曲子。陈老师曾经在纽约大学担任助教，也曾在台湾的一所高中担任音乐老师。她擅于和不同年龄的孩子沟通，可教的音乐风格也相当广发，从古典至现代流行音乐，甚至是即兴。她注重学生的基础能力，也鼓励学生探寻不同的音乐风格和艺术熏陶。她相信音乐是打开新想法的渠道。'
          },
          {
            id: 1,
            photo: 'https://res.cloudinary.com/dbbfpai4q/image/upload/v1543384678/Fei.jpg',
            name: 'Fei',
            role: '创始人',
            bio: '胡老师是搿艺音乐的创始人兼行政总监。她毕业于曼哈顿音乐学院（音乐学士）和纽约大学（音乐硕士）。她不仅是一名充满激情的钢琴教育家，同时也是世界级的钢琴演奏家（美国、欧洲、菲律宾和马来西亚）。基于在纽约大学作为一名电子琴合奏和即兴课堂的钢琴指导经验下，她撰写并发表《我的音乐宠物》一书，一本迎合4-6岁儿童需要的的钢琴和电子琴集体课的教科书。'
          },
          {
            id: 2,
            photo: 'https://res.cloudinary.com/dbbfpai4q/image/upload/v1543363849/michi.jpg',
            name: 'Michi',
            role: '',
            bio: 'Michael Feigl曾出台参与音乐会和歌剧的表演。在2015到2016年间，他在上海音乐学院与陈琦连教授一起学习。他曾在上海音乐厅和上海交响乐大厅以主唱的身份参与表演。他学士学位的专业是音乐史和音乐分析。2017他以最佳成绩毕业于维也纳音乐和表演艺术大学。'
          },
          {
            id: 3,
            photo: 'https://res.cloudinary.com/dbbfpai4q/image/upload/v1543363849/Maggie.jpg',
            name: 'Maggie',
            role: '钢琴老师',
            bio: '出生台湾台南，11岁开始学习古典长笛, 2009年考取台南应用科技大学音乐系，主修长笛，副修钢琴。2014年1月赴美就读伯克利音乐学院，在校主修音乐专业，专攻于电影音乐、演奏和音乐教育。2016年底归国後持续往幼儿教育发展，除了幼儿长笛个别课、钢琴启蒙课、2-6岁音乐启蒙课教学以及成人教學，也參與了flute duet / trio演奏、室内乐团、婚礼室内乐演奏等演出。 2017年初移居上海，於早教机构从事幼儿音乐教育，专精于个别长笛、钢琴授课、团体钢琴启蒙课、基础乐理课、幼儿音乐启蒙亲子和团体课教学。'
          },
          {
            id: 4,
            photo: 'https://res.cloudinary.com/dbbfpai4q/image/upload/v1543363853/Annie.jpg',
            name: 'Annie',
            role: '钢琴老师',
            bio: '唐莹，5岁开始跟随现任上海音乐学院钢琴系教授黄泓习琴，2004年考入上海音乐学院音乐教育系，次年考入上海音乐学院钢琴系，攻读音乐表演，在大学里继续跟着黄泓教授学习至今。唐老师曾在上海平和双语国际学校教授钢琴， 也曾在杭州张晓峰艺术中心担任助教，协助中央音乐学院教授张晓峰辅导附小，附中的考生。2012年回到上海，参加雅马哈音乐中心作为研修班半年，学习日本先进的幼教集体课理念，成为2岁半至5岁的幼儿音乐小组课老师，后通过雅马哈的钢琴基础课程研修，成为1对1个人课老师。授课至今10年，擅长把难懂的乐理知识以小朋友的角度用简单易懂的语言教授，喜欢把故事与曲子结合在一起讲给小朋友听。'
          },
          {
            id: 5,
            photo: 'https://res.cloudinary.com/dbbfpai4q/image/upload/v1543363849/Gavin.jpg',
            name: 'Gavin',
            role: '钢琴老师',
            bio: 'Gavin老师来自英国苏格兰埃尔郡，从5岁开始学习音乐。赴爱丁堡纳皮尔大学和伯明翰艺术学院学习音乐之前他首先学习电子琴和钢琴。从爱丁堡纳皮尔大学（学士）毕业后，他便在埃尔郡从事钢琴家、伴奏家和教师的工作。他也受过最新的雅马哈教学法培训并在当地的雅马哈音乐学院授课。2013年9月，他受聘为巴林英国学校表演艺术学院的钢琴老师。他现在是搿艺音乐全职钢琴和集体课导师。他上课的目标是培养学生的技巧和知识以让他们成为一位独立的学习者。他坚信唯有通过富有创意性的音乐元素体验，我们才能完全建立起对音乐的理解。'
          },
          {
            id: 6,
            photo: 'https://res.cloudinary.com/dbbfpai4q/image/upload/v1543363850/PG.jpg',
            name: 'PG',
            role: '吉他 / 尤克里里老师',
            bio: 'PG，杰出的台湾爵士吉他演奏家曾于著名吉他老师如John Wilkins, Richie Hart, Tim Miller等学习爵士乐。2013年赴美就读，2015年以最优异成绩取得伯克利音乐学院的硕士学位。毕业后移居纽约一年，期间经常在各大演出场地表演，师事爵士吉他名家Peter Bernstein。'
          }
        ]
      }
    }
  },

  computed: {
    translation () {
      return translation.about[globalData.language]
    },
    translatedReasons () {
      return this.reasons[globalData.language]
    },
    translatedTeam () {
      return this.team[globalData.language]
    }
  },

  methods: {
    infoWindowOpen () {
      this.show = true
    },
    infoWindowClose () {
      this.show = false
    }
  }
}

</script>

<template>
  <div class="about__wrapper">

    <!-- Banner -->
    <div class="about__banner"></div>
    <div class="about__banner-bar">
      <div class="about__banner-bar-link">{{translation.philosophy}}</div>
      <div class="about__banner-bar-link">{{translation.location}}</div>
      <div class="about__banner-bar-link">{{translation.reasons}}</div>
      <div class="about__banner-bar-link">{{translation.team}}</div>
      <div class="about__banner-bar-link">{{translation.offsite}}</div>

      <!-- Mobile Banner Link -->
      <div class="about__banner-bar-link dropDown">{{translation.dropDown}}</div>
    </div>

    <!-- Our Philosophy -->
    <div class="about__OP-container">
      <div class="about__OP-container-left">
        <div class="about__OP-container-left-subtitle">{{translation.OPsubtitle}}</div>
        <div class="about__OP-container-left-title">{{translation.OPtitle}}</div>
        <div class="about__OP-container-left-content">{{translation.OPcontent}}</div>
      </div>
      <div class="about__OP-container-right">
        <div class="about__OP-container-right-image"></div>
      </div>
    </div>

    <!-- Map of Concord -->
    <div class="about__map-wrapper">
      <div class="about__subtitle">{{translation.mapTitle}}</div>
      <baidu-map :center="center" :zoom="zoom" class="about__map-container">
        <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
        <bm-marker :position="center" :dragging="true" @click="infoWindowOpen">
          <bm-info-window :show="show" @close="infoWindowClose" @open="infoWindowOpen">
            <div class="about__map-title">Concord Music</div>
            <div class="about__map-content">
              <div><strong>Address: </strong>Gubei Lu 678, Tongquan Building, Suite 803</div>
              <div><strong>地址: </strong>古北路678号，同诠大厦，803室</div>
            </div>
          </bm-info-window>
        </bm-marker>
        <div class="about__map-overlay">
          <div class="about__map-overlay-title">Concord Music</div>
          <div><strong>Address: </strong></div>
          <div>Gubei Lu 678, Tongquan Building, Suite 803</div>
          <div><strong>地址: </strong></div>
          <div>古北路678号，同诠大厦，803室</div>
          <div><strong>Contact Us / 联系我们: </strong></div>
          <div>021-5235-7398</div>
          <div>156-1839-1413</div>
        </div>
      </baidu-map>
    </div>

    <!-- 5 Reasons to Choose Concord -->
    <div class="about__5R-wrapper">
      <div class="about__subtitle">{{translation.reasonsTitle}}</div>
      <b-container class="about__5R-container">
        <b-row class="about__5R-bootstrap-row">
          <b-col v-for="item in translatedReasons" :key="item.id" class="about__5R-item" sm="6" md="4" lg="2">
            <img :src="item.icon" class="about__5R-item-icon">
            <div class="about__5R-item-title">{{item.title}}</div>
            <div class="about__5R-item-description">{{item.description}}</div>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <!-- OUR TEAM -->
    <div class="about__OT-wrapper">
      <div class="about__subtitle">OUR TEAM</div>
      <b-container class="about__OT-container">
        <b-row class="about__OT-bootstrap-row">
          <b-col v-for="item in translatedTeam" :key="item.id" class="about__OT-item" sm="12" md="6" lg="4">
            <div class="about__OT-item-container">
              <img :src="item.photo" class="about__OT-item-photo" :data-key="item.id">
              <div class="about__OT-item-info-container">
                <div class="about__OT-item-name">{{item.name}}</div>
                <div class="about__OT-item-role">{{item.role}}</div>
                <div class="about__OT-item-bio">{{item.bio}}</div>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <!-- OUR PARTNERSHIPS -->
    <div class="about__OPA-wrapper">
      <div class="about__OPA-left">
        <div class="about__OPA-left-subtitle">{{translation.OPAsubtitle}}</div>
        <div class="about__OPA-left-title">{{translation.OPAtitle}}</div>
        <div class="about__OPA-left-content">{{translation.OPAcontent}}</div>
      </div>
      <div class="about__OPA-right">
        <div class="about__OPA-right-image"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../assets/styles.scss';

.about__wrapper {
  width: 100vw;
  max-width: 1220px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

.about__banner {
  background-image: url('https://res.cloudinary.com/dbbfpai4q/image/upload/v1542545920/front_desk.jpg');
  background-size: cover;
  background-position: center;
  height: 50vh;
  max-height: 750px;
  width: 100%;
}

.about__banner-bar {
  height: 80px;
  width: 100%;
  background-color: $concord-orange;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.about__subtitle {
  color: $concord-orange;
  font-size: 15px;
  margin: 15px;
}

.about__OP-container-right-image {
  background-image: url('https://res.cloudinary.com/dbbfpai4q/image/upload/v1542545920/teacher_with_student.jpg');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  height: 90%;
  width: 90%;
}

.about__OP-container-left-subtitle {
  color: $concord-orange;
  font-size: 15px;
  margin-bottom: 5px;
}

.about__OP-container-left-title {
  font-size: 25px;
  margin-bottom: 5px;
}

.about__OP-container-left-content {
  font-size: 15px;
  color: gray;
  margin-bottom: 10px;
}

.about__map-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  box-shadow: 5px 5px 50px #EEEEEE;
  margin: 15px 0;
}

.about__map-container {
  margin-bottom: 30px;
  height: 300px;
  width: 90%;
  position: relative;
}

.about__map-title {
  font-size: 20px;
  font-weight: bold;
}

.about__map-overlay-title {
  color: $concord-orange;
  font-size: 20px;
}

.about__5R-wrapper {
  background: white;
  box-shadow: 5px 5px 50px #EEEEEE;
  width: 100%;
  margin: 15px 0;
}

.about__5R-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 25px;
}

.about__5R-title {
  color: $concord-orange;
  font-size: 15px;
  margin: 15px 0;
}

.about__5R-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.about__5R-item-icon {
  height: 75px;
  width: 75px;
  object-fit: cover;
}

.about__5R-item-title {
  width: 150px;
  height: 45px;
  font-weight: bold;
  margin: 5px 0;
}

.about__5R-item-description {
  width: 200px;
  height: 125px;
  font-size: 15px;
}

.about__5R-bootstrap-row {
  display: flex;
  justify-content: space-around;
}

.about__OT-bootstrap-row {
  display: flex;
  justify-content: center;
}

.about__OT-wrapper {
  width: 100%;
  background: white;
  box-shadow: 5px 5px 50px #EEEEEE;
  margin: 15px 0;
}

.about__OT-title {
  color: $concord-orange;
  font-size: 15px;
  margin: 15px 0;
}

.about__OT-item-container {
  display: flex;
  margin: 20px 0;
  background: $light-gray;
  padding: 10px;
}

.about__OT-item-photo {
  width: 125px;
  height: 200px;
  object-fit: cover;
  object-position: center;
  border-radius: 5px;
}

.about__OT-item-info-container {
  width: 185px;
  height: 200px;
  text-align: left;
  margin-left: 10px;
  overflow: hidden;
}

.about__OT-item-name {
  font-size: 25px;
}

.about__OT-item-role {
  font-size: 14px;
  color: $concord-orange;
}

.about__OT-item-bio {
  font-size: 12px;
  color: gray;
  height: 70%;
  overflow: auto;
}

.about__OPA-left-subtitle {
  color: $concord-orange;
  font-size: 15px;
  margin-bottom: 5px;
}

.about__OPA-left-title {
  font-size: 25px;
  margin-bottom: 5px;
}

.about__OPA-left-content {
  font-size: 15px;
  color: gray;
  margin-bottom: 10px;
}

.about__OPA-right-image {
  background-image: url('https://res.cloudinary.com/dbbfpai4q/image/upload/v1543409153/Group_2_3.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  height: 90%;
  width: 90%;
}

/*--------------- Large Screen Style ---------------*/

@media screen and (min-width: 751px) {
  .about__OP-container {
    width: 100%;
    height: 400px;
    background-color: white;
    box-shadow: 5px 5px 50px #EEEEEE;
    display: flex;
    justify-content: center;
    margin: 15px 0;
  }

  .about__OP-container-left {
    height: 100%;
    width: 50%;
    max-width: 450px;
    padding: 20px;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .about__OP-container-right {
    height: 100%;
    width: 50%;
    max-width: 450px;
    max-width: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .about__banner-bar-link {
    &:hover {
      border-bottom: 3px solid white;
    }
  }

  .dropDown {
    display: none;
  }

  .about__map-overlay {
    height: 250px;
    width: 250px;
    position: absolute;
    left: 20px;
    top: 25px;
    background: white;
    border-radius: 5px;
    text-align: left;
    padding: 10px;
  }

  .about__OPA-wrapper {
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    background-color: white;
    box-shadow: 5px 5px 50px #EEEEEE;
    margin: 25px 0;
  }

  .about__OPA-left {
    height: 100%;
    width: 50%;
    max-width: 450px;
    padding: 20px;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 15px;
  }

  .about__OPA-right {
    height: 100%;
    width: 50%;
    max-width: 450px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}

/*--------------------------------------------------*/

/*--------------- Small Screen Style ---------------*/

@media screen and (max-width: 750px) {
  .about__OP-container {
    width: 95%;
    background-color: white;
    margin: 25px 0;
    display: flex;
    flex-direction: column;
  }

  .about__OP-container-left {
    height: 100%;
    padding: 20px;
    width: 100%;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .about__OP-container-right {
    height: 100%;
    padding: 20px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .about__banner-bar {
    justify-content: center;
  }

  .about__banner-bar-link {
    display: none;
    &:hover {
      border-bottom: 3px solid white;
    }
  }

  .about__map-overlay {
   display: none;
  }

  .dropDown {
    display: flex;
    font-size: 25px;
  }

  .about__OPA-wrapper {
    width: 95%;
    background-color: white;
    box-shadow: 5px 5px 50px #EEEEEE;
    margin: 25px 0;
    display: flex;
    flex-direction: column;
  }

  .about__OPA-left {
    height: 100%;
    padding: 20px;
    width: 100%;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .about__OPA-right {
    height: 100%;
    padding: 20px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
}

/*--------------------------------------------------*/

</style>

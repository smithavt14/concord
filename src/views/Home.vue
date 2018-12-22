<script>
import translation from '@/translations/translation'
import globalData from '@/main'
import {Howl, Howler} from 'howler'

export default {
  name: 'home',

  computed: {
    translation () {
      return translation.home[globalData.language]
    },
    translatedProgramLinks () {
      return this.programLinks[globalData.language]
    }
  },

  methods: {
    playMusic() {
      var sound = new Howl({
        src: ['https://res.cloudinary.com/dbbfpai4q/video/upload/v1542508252/The_J.B._s_-_Gimme_Some_More_Single_Version.mp3'],
        html5: true,
      })
    },

    // getAppSecret() {
    //   const appId = 'wx697043c8d4552e7a'
    //   const appSecret = 'f20236e55dd9783b264d6d515bb09cd7'
    //   console.log('Launch getAppSecret')
    //   const apiBase = 'https://cors-anywhere.herokuapp.com'
    //   fetch(`${apiBase}/https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${appId}&appsecret=${appSecret}`, {
    //     method: 'GET',
    //     mode: "cors",
    //     dataType: 'jsonp',
    //     headers: {  'Access-Control-Allow-Origin': '54.159.160.145' }
    //   })
    //     .then(data => console.log(JSON.stringify(data)))
    // },

    getWeChatArticles() {
      fetch('')
    },
  },

  created() {
    // this.getAppSecret()
  },

  // https请求方式: GET
  // https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET

  // APP ID: wx697043c8d4552e7a
  // APP Secret: f20236e55dd9783b264d6d515bb09cd7

  // http请求方式: POST
  // https://api.weixin.qq.com/cgi-bin/material/batchget_material?access_token=ACCESS_TOKEN

  // Help Link: https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1444738734

  data () {
    return {
      appId: 'wx697043c8d4552e7a',
      appSecret: 'f20236e55dd9783b264d6d515bb09cd7',
      WeChatlinks: [
        {
          title: 'Piano Solo Recital: A Night of Spanish Music',
          date: 'November 11, 2018',
          link: 'https://mp.weixin.qq.com/s/tAEMXO6vjO0pW3aTJDf2Vw',
          photo: 'https://res.cloudinary.com/dbbfpai4q/image/upload/v1542025192/article_111118.png',
          id: 1
        },
        {
          title: 'Concord Music Group Schedule (November Term)',
          date: 'November 08, 2018',
          link: 'https://mp.weixin.qq.com/s/lND74dEWY8A51A2ccqrpig',
          photo: 'https://res.cloudinary.com/dbbfpai4q/image/upload/v1542026420/article_110818.png',
          id: 2
        },
        {
          title: 'Piano Teachers Workshop | 钢琴教师工作坊',
          date: 'November 06, 2018',
          link: 'https://mp.weixin.qq.com/s/TuYBO9JRilsVY0gD6UcDJA',
          photo: 'https://res.cloudinary.com/dbbfpai4q/image/upload/v1542026420/article_110618.png',
          id: 3
        },
        {
          title: 'Little Symphony | 音乐赏析工作坊',
          date: 'November 02, 2018',
          link: 'https://mp.weixin.qq.com/s/R3zgQLnUuwTkenoWZixCtg',
          photo: 'https://res.cloudinary.com/dbbfpai4q/image/upload/v1542026430/article_110218.png',
          id: 4
        }
      ],
      programLinks: {
        English: [
          {
            title: 'Private 1-on-1 Lessons',
            age: 'Ages 3+',
            photo: 'https://res.cloudinary.com/dbbfpai4q/image/upload/v1542113380/BA4A1634.jpg',
            description: 'We offer a well-rounded musical experience in our private lessons which cover 5 fundamental elements of music learning: performing skills, music theory, music history and appreciation, ear training, and sight-reading.',
            id: 1
          },
          {
            title: 'Little Notes Music Foundation',
            age: 'Ages 3 - 4',
            photo: 'https://res.cloudinary.com/dbbfpai4q/image/upload/v1542113738/BA4A1598.jpg',
            description: 'This is a fun introduction to music for children aged 3-4. The goal of the course is to instil an early interest in music and to give the students a solid music foundation.',
            id: 2
          },
          {
            title: 'Group Classes for Children',
            age: 'All ages',
            photo: 'https://res.cloudinary.com/dbbfpai4q/image/upload/v1542114344/group-classes.jpg',
            description: 'Group classes provide opportunities for ensemble playing and group activities which not only encourage social interaction, but can also boost leadership spirit, discipline, and good attitude towards sharing and team work.',
            id: 3
          },
          {
            title: 'Concord Choir',
            age: 'Ages 6+',
            photo: 'https://res.cloudinary.com/dbbfpai4q/image/upload/v1542114344/Concord-singing.jpg',
            description: 'Concord welcomes all singing lovers to join our choir! This is a long-term project to cultivate an interest in singing. Training includes sight singing, ear training, breathing exercise, diction and harmonisation singing.',
            id: 4
          }
        ],
        Chinese: [
          {
            title: '私人 一对一的课',
            age: '3岁+',
            photo: 'https://res.cloudinary.com/dbbfpai4q/image/upload/v1542113380/BA4A1634.jpg',
            description: '我们的私教课程为孩子提供全面的音乐体验，它涵盖了5个音乐学习要素：表演技巧、音乐理论、音乐史与欣赏、听力训练和视奏能力.',
            id: 1
          },
          {
            title: '“小小音符” 音乐启蒙课',
            age: '3 - 4岁',
            photo: 'https://res.cloudinary.com/dbbfpai4q/image/upload/v1542113738/BA4A1598.jpg',
            description: '小小音符音乐启蒙课程为3-4岁的孩子打开音乐之殿的大门，激发幼孩的音乐兴趣，作为1对1乐器课程前的铺垫和启蒙，让孩子以快乐的方式开始他们的音乐兴趣。',
            id: 2
          },
          {
            title: '儿童团课',
            age: '2岁+',
            photo: 'https://res.cloudinary.com/dbbfpai4q/image/upload/v1542114344/group-classes.jpg',
            description: '集体课为孩子提供合奏与互动的机会，这不仅促进沟通还能增强孩子的领导能力、纪律、分享及合作精神.',
            id: 3
          },
          {
            title: '搿艺合唱团',
            age: '6岁+',
            photo: 'https://res.cloudinary.com/dbbfpai4q/image/upload/v1542114344/Concord-singing.jpg',
            description: '搿艺欢迎爱唱歌的小朋友加入搿艺合唱! 这是搿艺为了培养歌唱兴趣的一个长期计划。学生在学习过程中，除了学会歌唱技巧，也可以培养团体精神。训练内容包括：视唱练耳、呼吸练习、语音能力训练和和声训练。',
            id: 4
          }
        ]
      }
    }
  }
};

</script>

<template>
  <div class="home__wrapper">
    <div class="home__banner"></div>
    <div class="home__banner-bar">
      <div class="home__banner-bar-title">{{translation.bannerBarTitle}}</div>
      <div class="home__banner-bar-text">{{translation.bannerBarText}}</div>
      <router-link to="/programs" class="home__banner-bar-btn">{{translation.learnMore}}</router-link>
    </div>

    <!-- Who Are We -->
    <div class="home__WAW-container">
      <div class="home__WAW-container-left">
        <div class="home__WAW-container-left-subtitle">{{translation.WAWsubtitle}}</div>
        <div class="home__WAW-container-left-title">{{translation.WAWtitle}}</div>
        <div class="home__WAW-container-left-content">{{translation.WAWcontent}}</div>
        <router-link to="/apply" class="home__WAW-container-left-signup">{{translation.WAWsignup}}</router-link>
      </div>
      <div class="home__WAW-container-right">
        <img src="../assets/images/instruments.jpeg" alt="" class="home__WAW-container-right-instruments">
      </div>
    </div>

    <!-- From our WeChat Account -->
    <div class="home__FOB-container">
      <div class="home__FOB-title">{{translation.FOBtitle}}</div>
      <div class="home__FOB-card-container">
        <div v-for="post in WeChatlinks" :key="post.id" class="home__FOB-card">
          <a :href="post.link"><img :src="post.photo" :href="post.link" class="home__FOB-card-photo"></a>
          <div class="home__FOB-card-title">{{ post.title }}</div>
          <div class="home__FOB-card-date">{{ post.date }}</div>
        </div>
      </div>
    </div>

    <!-- Our Programs -->
    <div class="home__OP-container">
      <div class="home__OP-title">{{translation.OPtitle}}</div>
      <b-container class="home__OP-programs-container">
        <b-row>
          <b-col v-for="program in translatedProgramLinks" :key="program.id" sm="12" md="6">
            <div class="home__OP-program">
              <img :src="program.photo" class="home__OP-program-photo">
              <div class="home__OP-program-title">{{program.title}}</div>
              <div class="home__OP-program-age">{{program.age}}</div>
              <div class="home__OP-program-description">{{program.description}}</div>
              <router-link to="/programs" class="home__OP-program-btn">{{translation.learnMore}}</router-link>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<style lang="scss">
@import '../assets/styles.scss';

.home__wrapper {
  width: 100vw;
  max-width: 1220px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

.home__banner {
  background-image: url('../assets/images/home-banner.jpeg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: calc(100vh - 130px);
  max-height: 750px;
  width: 100%;
}

.home__banner-bar {
  width: 100%;
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: $concord-orange;
  color: white
}

.home__banner-bar-title {
  font-size: 25px;
  font-weight: bold;
}

.home__banner-bar-btn {
  width: 120px;
  font-size: 18px;
  padding: 10px 0;
  border: 2px solid white;
  border-radius: 50px;
  text-decoration: none;
  color: white;
  &:hover {
    background-color: white;
    color: $concord-orange;
    text-decoration: none;
  }
}

@media screen and (min-width: 751px) {
  .home__WAW-container {
    width: 95%;
    height: 500px;
    background-color: $light-gray;
    margin: 25px 0;
    display: flex;
  }

  .home__WAW-container-left {
    height: 100%;
    width: 50%;
    padding: 20px;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .home__WAW-container-right {
    height: 100%;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
}

@media screen and (max-width: 750px) {
  .home__WAW-container {
    width: 95%;
    background-color: $light-gray;
    margin: 25px 0;
    display: flex;
    flex-direction: column;
  }

  .home__WAW-container-left {
    height: 100%;
    padding: 20px;
    width: 100%;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .home__WAW-container-right {
    height: 100%;
    padding: 20px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

}

.home__WAW-container-left-subtitle {
  color: $concord-orange;
  font-size: 15px;
  margin-bottom: 5px;
}

.home__WAW-container-left-title {
  font-size: 25px;
  margin-bottom: 5px;
}

.home__WAW-container-left-content {
  font-size: 15px;
  color: gray;
  margin-bottom: 10px;
}

.home__WAW-container-left-signup {
  padding: 10px 20px;
  color: $concord-orange;
  border: 1px solid $concord-orange;
  border-radius: 50px;
  width: 100px;
  margin: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    text-decoration: none;
    color: white;
    background: $concord-orange;
  }
}

.left-signup-hover {
  color: white;
  background: $concord-orange;
  text-decoration: none;
}

.home__WAW-container-right-instruments {
  height: 90%;
  width: 90%;
}

@media screen and (min-width: 750px) {

  .home__banner-bar-text {
    width: 50%;
    text-align: left;
  }
}

@media screen and (max-width: 749px) {
  .home__banner-bar-text {
    display: none;
  }
}

.home__FOB-container {
  width: 100%;
  background-color: $light-gray;
  padding: 25px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.home__FOB-card-container {
  text-align: left;
  display: flex;
  overflow: auto;
  width: 100%;
  max-width: 1220px;
}

.home__FOB-card {
  margin: 0 20px;
  width: 300px;
}

.home__FOB-title {
  color: $concord-orange;
  font-size: 20px;
  margin-bottom: 20px;
}

.home__FOB-card-photo {
  height: 225px;
  width: 300px;
  object-fit: cover;
  box-shadow: 2px 2px 10px gray;
  margin-bottom: 10px;
}

.home__FOB-card-photo:hover {
  box-shadow: 5px 5px 20px gray;
}

.home__FOB-card-title {
  font-size: 20px;
  font-weight: bold;
}

.home__FOB-card-date {
  font-size: 15px;
  color: $concord-orange;
}

.home__OP-container {
  background-color: $light-gray;
  width: 95%;
  margin: 25px 0;
}

.home__OP-program {
  width: 100%;
  overflow: hidden;
  text-align: left;
  margin: 20px 0;
}

.home__OP-program-photo {
  height: 250px;
  width: 100%;
  object-fit: cover;
}

.home__OP-title {
  color: $concord-orange;
  font-size: 20px;
  margin: 10px;
}

.home__OP-program-title {
  font-size: 25px;
  font-weight: bold;
}

.home__OP-program-age {
  font-size: 15px;
  color: $concord-orange;
}

.home__OP-program-description {
  font-size: 15px;
  color: $half-black;
}

.home__OP-program-btn {
  font-size: 14px;
  border: 1px solid $concord-orange;
  padding: 10px;
  width: 100px;
  margin: 10px 0;
  color: $concord-orange;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  text-decoration: none;
  &:hover {
    background-color: $concord-orange;
    color: white;
    text-decoration: none;
  }
}

.home__test-audio {
  font-size: 14px;
  border: 1px solid $concord-orange;
  padding: 10px;
  width: 100px;
  margin: 100px 0;
  color: $concord-orange;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  text-decoration: none;
  &:hover {
    background-color: $concord-orange;
    color: white;
    text-decoration: none;
  }
}

</style>

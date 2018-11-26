<script>
import translation from '@/translations/translation'
import globalData from '@/main'

export default {
  name: 'about',

  data () {
    return {
      center: {lng: 121.399865, lat: 31.204689},
      zoom: 15,
      show: false,
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
      }
    }
  },

  computed: {
    translation () {
      return translation.about[globalData.language]
    },
    translatedReasons() {
      console.log(globalData.language)
      return this.reasons[globalData.language]
    }
  }, 

  methods: {
    infoWindowOpen() {
      this.show = true
    },
    infoWindowClose() {
      this.show = false
    }
  }
};
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
      <div class="about__banner-bar-link">{{translation.partners}}</div>
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
    <div class="about__map-container-title">{{translation.mapTitle}}</div>
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
    </baidu-map>

    <!-- 5 Reasons to Choose Concord -->
    <div class="about__5R-wrapper">
      <div class="about__5R-title">{{translation.reasonsTitle}}</div>
      <b-container class="about__5R-container">
        <b-row class="about__bootstrap-row">
          <b-col v-for="item in translatedReasons" :key="item.id" class="about__5R-item" sm="6" md="4" lg="2">
            <img :src="item.icon" class="about__5R-item-icon">
            <div class="about__5R-item-title">{{item.title}}</div>
            <div class="about__5R-item-description">{{item.description}}</div>
          </b-col>  
        </b-row>
      </b-container>
    </div>

    <!-- OUR TEAM -->
  </div>
</template>

<style lang="scss">
@import '../assets/styles.scss';

.about__wrapper {
  background-image: url('../assets/images/symphony.png');
  background-repeat: repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.about__banner {
  background-image: url('https://res.cloudinary.com/dbbfpai4q/image/upload/v1542545920/front_desk.jpg');
  background-size: cover;
  background-position: center;
  height: 50vh;
  width: 100%;
}

.about__banner-bar {
  height: 100px;
  width: 100vw;
  background-color: $concord-orange;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.about__banner-bar-link {
  &:hover {
    border-bottom: 3px solid white;
  }
}

@media screen and (min-width: 751px) {
  .about__OP-container {
    width: 90vw;
    height: 500px;
    background-color: $light-gray;
    margin: 25px 0;
    display: flex;
  }

  .about__OP-container-left {
    height: 100%;
    width: 50%;
    padding: 20px;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .about__OP-container-right {
    height: 100%;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
}

@media screen and (max-width: 750px) {
  .about__OP-container {
    width: 90vw;
    background-color: $light-gray;
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
    position: relative;
  }
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

.about__map-container {
  margin: 25px 0;
  height: 300px;
  width: 90vw;
}

.about__map-title {
  font-size: 20px;
  font-weight: bold;
}

.about__map-container-title  {
  color: $concord-orange;
  font-size: 15px;
}

.about__5R-wrapper {
  background:$light-gray;
  width: 100vw;
  margin: 15px;
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

.about__bootstrap-row {
  display: flex;
  justify-content: space-around;
}

</style>

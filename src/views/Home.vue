<script>
import translation from '../translations/translation'
import globalData from '../main'
import programCategories from '../objects/home_program_categories'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import strftime from 'strftime'

export default {
  components: {
    swiper,
    swiperSlide
  },

  name: 'home',

  computed: {
    translation () {
      return translation.home[globalData.language]
    },
    translatedProgramCategories () {
      return this.programCategories[globalData.language]
    },
    swiper () {
      return this.$refs.homeSwiper.swiper
    }
  },

  data () {
    return {
      programCategories: programCategories,
      swiperOptions: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: false
        }
      },
      stories: [],
      displayStories: false
    }
  },

  methods: {
    getWechatInfo () {
      const self = this
      fetch('https://r1rtg2nbcf.execute-api.us-east-1.amazonaws.com/dev/get/info', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      })
        .then(function (response) {
          return response.json()
        })
        .then(function (myJson) {
          self.processWechatInfo(myJson.item)
        })
    },

    processWechatInfo (response) {
      const self = this
      response.forEach(function (item) {
        var time, story
        story = item.content.news_item[0]
        time = new Date(item.content.update_time * 1000)
        story.update_time = strftime('%A, %B %d', time)
        story.media_id = item.media_id
        self.stories.push(story)
      })
      self.displayStories = true
    }
  },

  mounted () {
    this.getWechatInfo()
  }
}

</script>

<template>
  <div class="home__wrapper">
    <div class="home__banner"></div>
    <div class="home__banner-bar">
      <div class="home__banner-bar-title">{{translation.bannerBarTitle}}</div>
      <div class="home__banner-bar-text">{{translation.bannerBarText}}</div>
      <router-link to="/programs" class="home__banner-bar-btn">{{translation.learnMore}}</router-link>

      <!-- Mobile Banner Title -->
      <div class="banner-bar-link-mobile">{{translation.bannerMobileTitle}}</div>
    </div>

    <!-- Who Are We -->
    <div class="home__WAW-wrapper">
      <div class="home__WAW-container-left">
        <div class="home__WAW-container-left-subtitle">{{translation.WAWsubtitle}}</div>
        <div class="home__WAW-container-left-title">{{translation.WAWtitle}}</div>
        <div class="home__WAW-container-left-content">{{translation.WAWcontent}}</div>
        <router-link to="/apply" class="home__WAW-container-left-signup">{{translation.WAWsignup}}</router-link>
      </div>
      <div class="home__WAW-container-right">
        <img src="http://concord-assets.oss-cn-beijing.aliyuncs.com/home__instruments.jpg" alt="instruments-icon" class="home__WAW-container-right-instruments">
      </div>
    </div>

    <!-- Our Programs -->
    <div class="home__OP-wrapper">
      <div class="home__OP-title">{{translation.OPtitle}}</div>
      <b-container class="home__OP-programs-container">
        <b-row>
          <b-col v-for="program in translatedProgramCategories" :key="program.id" sm="12" md="6">
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
@import '../assets/swiper.css';

.story_container {
  width: 90%;
  max-width: 900px;
  margin: 10px 0;
  text-align: left;
  padding-bottom: 20px;
}

.border-bottom {
  border-bottom: solid 2px $light-gray;
}

.story_title {
  font-size: 20px;
  font-weight: bold;
}

.story_date {
  color: $concord-orange;
  margin-bottom: 10px;
}

.story_box {
  display: flex;
}

.story_link {
  color: unset !important;
  margin: 0;
  text-decoration: none !important;
}

.orange {
  color: orange;
}

.home__FOB-swiper-container {
  width: 90%;
  height: 400px;
  background: white;
}

.swiper-container {
  height: 100%;
  width: 100%;
}

.home__wrapper {
  width: 100vw;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

.home__banner {
  background-image: url('http://concord-assets.oss-cn-beijing.aliyuncs.com/Student%20Teacher%20Flute.jpeg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0 -30px;
  height: calc(100vh - 250px);
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
  color: white;
  margin-bottom: 15px;
}

/*----- Who Are We ----- */

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
  transition: .3s ease-in-out;
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
  width: 90%;
}

/* ----- From Our Blog ----- */

.home__FOB-wrapper {
  width: 100%;
  background-color: white;
  padding: 25px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 5px 50px #EEEEEE;
  margin: 15px 0;
}

.home__FOB-card-container {
  text-align: left;
  display: flex;
  overflow: auto;
  width: 100%;
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
  height: 75%;
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

/* ----- Our Programs ----- */

.home__OP-wrapper {
  background-color: white;
  width: 100%;
  box-shadow: 5px 5px 50px #EEEEEE;
  margin: 15px 0;
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
  margin: 20px 0 0 10px;
}

.home__OP-program-title {
  font-size: 25px;
  font-weight: bold;
  margin: 10px 0;
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
  transition: .3s ease-in-out;
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

/* ----------------- Large Screen Styles ------------------ */

@media screen and (min-width: 751px) {
  .home__WAW-wrapper {
    width: 100%;
    height: 500px;
    background-color: white;
    display: flex;
    justify-content: center;
    box-shadow: 5px 5px 50px #EEEEEE;
    margin: 15px 0;
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
    transition: .3s ease-in-out;
    &:hover {
      background-color: white;
      color: $concord-orange;
      text-decoration: none;
    }
  }

  .home__WAW-container-left {
    height: 90%;
    width: 50%;
    max-width: 450px;
    padding: 20px;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .home__WAW-container-right {
    height: 100%;
    width: 50%;
    max-width: 450px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .home__banner-bar-text {
    width: 50%;
    text-align: left;
  }

  .swiper-pagination {
    display: none;
  }
}

/* ----------------- Small Screen Styles ------------------ */

@media screen and (max-width: 750px) {

  .home__mobile-banner-title {
    font-size: 25px;
  }

  .home__banner {
    height: calc(100vh - 80px);
    background-position: -350px 0;
    transform: scale(.9);
  }

  .home__banner-bar {
    height: 80px;
    justify-content: center;
  }

  .home__banner-bar-title {
    display: none;
  }

  .home__banner-bar-btn {
    display: none
  }

  .home__FOB-card-photo {
    width: 100%;
    height: 100%;
  }

  .home__WAW-wrapper {
    width: 100%;
    background-color: white;
    box-shadow: 5px 5px 50px #EEEEEE;
    margin: 15px 0;
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

  .home__banner-bar-text {
    display: none;
  }

  .swiper-pagination {
    display: inherit;
  }

  .swiper-button-prev {
    display: none;
  }

  .swiper-button-next {
    display: none;
  }

  .FOB__swiper-slide {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 10px;
  }
}

/* ------------------------------------------------------- */

</style>

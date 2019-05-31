<script>
import translation from '../translations/translation'
import globalData from '../main'
import programCategories from '../objects/home_program_categories'

export default {
  name: 'home',

  computed: {
    translation () {
      return translation.home[globalData.language]
    },
    translatedProgramCategories () {
      return this.programCategories[globalData.language]
    },
  },

  data () {
    return {
      programCategories: programCategories,
    }
  },

  methods: {},
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
        <router-link to="/about?#team" class="home__WAW-container-left-signup" style="width: 200px;">{{translation.ourTeam}}</router-link>
      </div>
      <div class="home__WAW-container-right">
        <img src="https://concord-assets.oss-cn-beijing.aliyuncs.com/WAW-banner.jpeg" alt="instruments-icon" class="home__WAW-container-right-instruments">
      </div>
    </div>

    <!-- Add our WeChat -->
    <div class="home__WX-content-wrapper">
      <div class="home__WX-container-left">
        <img src="https://concord-assets.oss-cn-beijing.aliyuncs.com/concord-qr.png" style="height: 100%;" alt="Concord QR">
      </div>
      <div class="home__WX-container-right" style="align-items: flex-start;">
        <div class="subtitle WX">{{translation.wechatSubtitle}}</div>
        <div class="title WX">{{translation.wechatTitle}}</div>
        <div class="content WX">{{translation.wechatContent}}</div>
      </div>
    </div>

    <!-- Our Programs -->
    <div class="home__OP-wrapper">
      <div class="subtitle">{{translation.OPtitle}}</div>
      <b-container class="home__OP-programs-container">
        <b-row>
          <b-col v-for="program in translatedProgramCategories" :key="program.id" sm="12" md="6">
            <div class="home__OP-program">
              <img :src="program.photo" class="home__OP-program-photo" :class="{'top': program.route === '/programs#group', 'center': program.route === '/programs#supplemental'}">
              <div class="home__OP-program-title">{{program.title}}</div>
              <div class="home__OP-program-age">{{program.age}}</div>
              <div class="home__OP-program-description">{{program.description}}</div>
              <router-link :to="program.route" class="home__OP-program-btn">{{translation.learnMore}}</router-link>
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
  background-image: url('https://concord-assets.oss-cn-beijing.aliyuncs.com/home-banner-fei.jpg');
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
  white-space: pre-wrap;
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
  width: 98%;
  object-fit: cover;
}

/* ----- WeChat Official Accont ----- */

.home__WX-content-wrapper {
  width: 100%;
  background-color: white;
  padding: 25px 0;
  display: flex;
  /*flex-direction: column;*/
  justify-content: center;
  align-items: center;
  box-shadow: 5px 5px 50px #EEEEEE;
  margin: 15px 0;
}

.home__WX-container-left {
  width: 50%;
  max-width: 450px;
  padding: 20px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.home__WX-container-right {
  width: 50%;
  max-width: 450px;
  padding: 20px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.WX {
  width: 100%;
  text-align: left;
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
  object-position: bottom;
}

.top {
  object-position: top;
}

.center {
  object-position: center;
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

  .home__WX-content-wrapper {
    width: 100%;
    background-color: white;
    padding: 25px 0;
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    box-shadow: 5px 5px 50px #EEEEEE;
    margin: 15px 0;
  }

  .home__WX-container-left {
    width: 100%;
    max-width: 450px;
    padding: 20px;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .home__WX-container-right {
    width: 100%;
    max-width: 450px;
    padding: 0 20px;
    height: unset;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .WX {
    width: 100%;
    text-align: left;
  }
}

/* ------------------------------------------------------- */

</style>

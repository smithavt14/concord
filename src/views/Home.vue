<script>
import translation from '@/translations/translation'
import globalData from '@/main'
import homePrograms from '@/objects/home_programs'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

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
    translatedProgramLinks () {
      return this.programLinks[globalData.language]
    },
    swiper() {
      return this.$refs.homeSwiper.swiper
    }
  },

  data () {
    return {
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
      programLinks: homePrograms,
      swiperOptions: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: false
        },
      }
    }
  },

  mounted () {
    console.log('this is current swiper instance object', this.swiper)
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
      <div class="home__mobile-banner-logo"></div>
      <div class="home__mobile-banner-title">{{translation.bannerMobileTitle}}</div>
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
        <img src="../assets/images/instruments.jpeg" alt="" class="home__WAW-container-right-instruments">
      </div>
    </div>

    <!-- From our WeChat Account -->
    <div class="home__FOB-wrapper">
      <div class="home__FOB-title">{{translation.FOBtitle}}</div>
      <div class="home__FOB-swiper-container">
        <swiper :options="swiperOptions" ref="homeSwiper">
          <swiper-slide v-for="post in WeChatlinks" :key="post.id" class="FOB__swiper-slide">
            <a :href="post.link"><img :src="post.photo" :href="post.link" class="home__FOB-card-photo"></a>
            <div class="home__FOB-card-title">{{ post.title }}</div>
            <div class="home__FOB-card-date">{{ post.date }}</div>
          </swiper-slide>
          <!-- Navigation -->
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </div>
    <!-- Our Programs -->
    <div class="home__OP-wrapper">
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
@import '../assets/swiper.css';

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
    // display: none;
  }

  .home__banner {
    height: calc(100vh - 80px)
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

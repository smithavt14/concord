<script>
import translation from '@/translations/translation'
import globalData from '@/main'

export default {
  name: 'home',

  computed: {
    translation () {
      return translation.home[globalData.language]
    }
  },
};

</script>

<template>
  <div class="home__wrapper" v-on:scroll.passive="pagePosition">
    <div class="home__banner">
      <div class="home__banner-bar">
        <div class="home__banner-bar-title">{{translation.bannerBarTitle}}</div>
        <div class="home__banner-bar-text">{{translation.bannerBarText}}</div>
        <div class="home__banner-bar-btn">{{translation.bannerBarBtn}}</div>
      </div>
    </div>
    <div class="home__container">
    </div>
  </div>
</template>

<style lang="scss">
@import '../assets/styles.scss';

.home__wrapper {
  background-image: url('../assets/images/funkylines.png');
  background-repeat: repeat;
  width: 100vw;
}

.home__banner {
  background-image: url('../assets/images/home-banner.jpeg');
  background-size: cover;
  background-position: center;
  height: calc(100vh - 100px);
  width: 100%;
}

.home__banner-bar {
  width: 100vw;
  height: 100px;
  position: absolute;
  bottom: 0;
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

.home__banner-bar-text {
  width: 50%;
  text-align: left;
}

.home__banner-bar-btn {
  width: 120px;
  font-size: 18px;
  padding: 10px 0;
  border: 2px solid white;
  border-radius: 50px;
  &:hover {
    background-color: white;
    color: $concord-orange;
  }
}

.home__container {
  width: 100vw;
  height: 300vh;
}

</style>

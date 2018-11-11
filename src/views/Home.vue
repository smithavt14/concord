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
    <div class="home__banner"></div>
    <div class="home__banner-bar">
      <div class="home__banner-bar-title">{{translation.bannerBarTitle}}</div>
      <div class="home__banner-bar-text">{{translation.bannerBarText}}</div>
      <router-link to="/programs" class="home__banner-bar-btn">{{translation.bannerBarBtn}}</router-link>
    </div>
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
  </div>
</template>

<style lang="scss">
@import '../assets/styles.scss';

.home__wrapper {
  background-image: url('../assets/images/funkylines.png');
  background-repeat: repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
    width: 80vw;
    height: 500px;
    background-color: $light-gray;
    margin: 50px 0;
    display: flex;
  }
}

@media screen and (max-width: 750px) {
  .home__WAW-container {
    width: 80vw;
    background-color: $light-gray;
    margin: 50px 0;
    display: block;
  }

  .home__WAW-container-left {
    height: 100%;
    padding: 20px;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .home__WAW-container-right {
    height: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

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

.home__WAW-container-right {
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
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

</style>

<script>
import translation from '@/translations/translation'
import globalData from '@/main'

export default {
  name: 'HomeNavBar',
  props: {
  },

  computed: {
    translation () {
      return translation.navbar[globalData.language]
    }
  },

  data () {
    return {
      showNavbar: false
    }
  },

  methods: {
    changeLanguage () {
      globalData.language = globalData.language === 'English' ? 'Chinese' : 'English'
    },
    toggleNavBar () {
      this.showNavBar = !this.showNavBar
    }
  }
};
</script>

<template>
  <div class="HomeNavBar__wrapper">
    <div class="HomeNavBar__logo"></div>
    <!-- Large Devices -->
    <div class="HomeNavBar__tabs">
      <router-link to="/" class="active">{{translation.home}}</router-link>
      <router-link to="/about">{{translation.about}}</router-link>
      <router-link to="/experience">{{translation.experience}}</router-link>
      <router-link to="/programs">{{translation.programs}}</router-link>
      <router-link to="/apply">{{translation.apply}}</router-link>
      <b-button class="HomeNavBar__language-selector" @click="changeLanguage">{{translation.language}}</b-button>
    </div>
    <!-- Small Devices -->
    <div class="HomeNavBar__navbar-toggle"></div>
    <img src="../assets/images/hamburger-menu.svg" class="HomeNavBar__hamburger-icon" @click="toggleNavBar">
    <div v-if="showNavbar" class="HomeNavBar__mobile-navbar">
      <img src="../assets/images/times-solid.svg" class="HomeNavBar__mobile-navbar-exit" @click="toggleNavBar">
    </div>
  </div>
</template>

<style lang="scss">
@import '../assets/styles.scss';

.HomeNavBar__wrapper {
  height: 150px;
  width: 100%;
  background: $opaque;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 10;
  overflow: hidden;
}

.HomeNavBar__logo {
  background-image: url('../assets/images/logo.png');
  height: 150px;
  width: 175px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin: 0 20px;
}

@media screen and (min-width: 850px) {

  .HomeNavBar__tabs {
    display: flex;
    justify-content: space-between;
    margin: 0 20px;
    align-items: center;
    a {
      color: $half-black;
      text-decoration: none !important;
      margin: 15px;
    }
    a:hover {
      color: black;
    }
  }

  .HomeNavBar__language-selector {
    background-color: $concord-orange !important;
    color: white !important;
    border: none !important;
    margin: 20px;
  }

  .active {
    color: black !important;
  }

  .HomeNavBar__navbar-toggle {
    display: none;
  }

  .HomeNavBar__hamburger-icon {
    display: none;
  }
}

@media screen and (max-width: 850px) {
  .HomeNavBar__tabs {
    display: none;
  }

  .HomeNavBar__navbar-toggle {
    position: absolute;
    top: -100px;
    right: -100px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    width: 200px;
    border-radius: 50%;
    background-color: $concord-orange;
  }

  .HomeNavBar__hamburger-icon {
    position: absolute;
    top: 25px;
    right: 25px;
    height: 25px;
    width: 25px;
  }

  .HomeNavBar__mobile-navbar {
    height: 100vh;
    width: 80vw;
    position: fixed;
    background-color: $concord-orange;
    top: 0;
    right: 0;
  }

  .HomeNavBar__mobile-navbar-exit {
    height: 25px;
    width: 25px;
    position: absolute;
    top: 10px;
    left: 10px;
  }
}

</style>

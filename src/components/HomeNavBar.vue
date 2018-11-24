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
      showNavbar: false,
      pagePosition: 0,
      hideNavbar: false
    }
  },

  methods: {
    changeLanguage () {
      globalData.language = globalData.language === 'English' ? 'Chinese' : 'English'
    },

    toggleNavBar () {
      this.showNavbar = !this.showNavbar
    },

    handleScroll (event) {
        window.scrollY > this.pagePosition ? this.hideNavbar = true : this.hideNavbar = false
        this.pagePosition = window.scrollY
        // window.scrollY > window.innerHeight ? this.background = true : this.background = false
    }
  },

  created () {
    window.addEventListener('scroll', this.handleScroll);
  },

  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<template>
  <div class="HomeNavBar__wrapper" :class="{'HomeNavBar__hidden': hideNavbar, 'HomeNavBar__show': !hideNavbar }">
    <!-- Large Devices -->
    <div class="HomeNavBar__logo"></div>
    <div class="HomeNavBar__tabs">
      <router-link to="/">{{translation.home}}</router-link>
      <router-link to="/about">{{translation.about}}</router-link>
      <router-link to="/experience">{{translation.experience}}</router-link>
      <router-link to="/programs">{{translation.programs}}</router-link>
      <router-link to="/apply">{{translation.apply}}</router-link>
      <div class="HomeNavBar__language-selector" @click="changeLanguage">{{translation.language}}</div>
    </div>

    <!-- Small Devices -->
    <div class="HomeNavBar__navbar-toggle"></div>
    <img src="https://res.cloudinary.com/dbbfpai4q/image/upload/v1542156723/concord-logo-white.png" class="HomeNavBar__hamburger-icon" @click="toggleNavBar">
    <div v-if="showNavbar" class="HomeNavBar__mobile-navbar">
      <img src="../assets/images/cross-out.svg" class="HomeNavBar__mobile-navbar-exit" @click="toggleNavBar">
      <router-link to="/">{{translation.home}}</router-link>
      <router-link to="/about">{{translation.about}}</router-link>
      <router-link to="/experience">{{translation.experience}}</router-link>
      <router-link to="/programs">{{translation.programs}}</router-link>
      <router-link to="/apply">{{translation.apply}}</router-link>
      <div class="HomeNavBar__language-selector" @click="changeLanguage">{{translation.language}}</div>
    </div>
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

@media screen and (min-width: 751px) {

  .HomeNavBar__hidden {
    animation-name: slideUp;
    animation-duration: .25s;
    animation-timing-function: linear;
    margin-top: -150px;
  }

  .HomeNavBar__show {
    animation-name: slideDown;
    animation-duration: .25s;
    animation-timing-function: linear;
    margin-top: 0;
  }

  .HomeNavBar__tabs {
    display: flex;
    justify-content: space-between;
    margin-right: 20px;
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
    background: $concord-orange;
    padding: 10px 15px;
    border-radius: 5px;
    color: white;
    margin: 0 10px;
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

@media screen and (max-width: 750px) {
  .HomeNavBar__logo {
    display: none;
  }

  .HomeNavBar__active {
    background: none;
  }

  .HomeNavBar__tabs {
    display: none;
  }

  .HomeNavBar__navbar-toggle {
    position: absolute;
    top: -75px;
    right: -75px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 150px;
    width: 150px;
    border-radius: 50%;
    background-color: $concord-orange;
  }

  .HomeNavBar__hamburger-icon {
    position: absolute;
    top: 10px;
    right: 0px;
    height: 40px;
  }

  .HomeNavBar__mobile-navbar{
    width: 250px;
    position: fixed;
    border-radius: 0 0 0 5px;
    background-color: $concord-orange;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    text-align: right;
    padding-top: 40px;
    animation-name: expand;
    animation-duration: 1s;
    a {
      color: white;
      text-decoration: none !important;
      margin: 15px;
      font-size: 25px;
    }
    a:hover {
      color: black;
    }
  }

  .HomeNavBar__language-selector {
    color: white;
    margin: 15px;
    font-size: 25px;
  }

  .HomeNavBar__mobile-navbar-exit {
    height: 20px;
    width: 20px;
    position: absolute;
    top: 20px;
    left: 20px;
    fill: white;
  }
}

@keyframes slideDown {
  from {
    margin-top: -100px;
  }
  to {
    margin-top: 0;
  }
}

@keyframes slideUp {
  from {
    margin-top: 0;
  }
  to {
    margin-top: -100px;
  }
}

</style>

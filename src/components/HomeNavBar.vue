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
      hideNavbar: false,
      checked: undefined
    }
  },

  methods: {
    changeLanguage () {
      globalData.language = globalData.language === 'English' ? 'Chinese' : 'English'
    }, 
    
    closeMobileMenu () {
      this.checked = false
    }
  }
}

</script>

<template>
  <div>
    <!-- Large Devices -->
    <div class="HomeNavBar__wrapper" :class="{'HomeNavBar__hidden': hideNavbar, 'HomeNavBar__show': !hideNavbar, 'HomeNavBar__mobile': checked }">
      <div class="HomeNavBar__logo"></div>
      <div class="HomeNavBar__tabs">
        <router-link to="/">{{translation.home}}</router-link>
        <router-link to="/about">{{translation.about}}</router-link>
        <router-link to="/experience">{{translation.experience}}</router-link>
        <router-link to="/programs">{{translation.programs}}</router-link>
        <router-link to="/apply">{{translation.apply}}</router-link>
        <div class="HomeNavBar__language-selector" @click="changeLanguage">{{translation.language}}</div>
      </div>
    </div>

    <!-- Small Devices -->
    <label for="checkbox">
      <input type="checkbox" id="checkbox" v-model="checked" class="checkbox">
      <span class="menu">
        <span class="HomeNavBar__hamburger-icon"></span>
      </span>
      <ul v-if="checked">
        <div class="mobile-logo"></div>
        <li @click="closeMobileMenu"><router-link to="/" class="HomeNavBar__link">{{translation.home}}</router-link></li>
        <li @click="closeMobileMenu"><router-link to="/about" class="HomeNavBar__link">{{translation.about}}</router-link></li>
        <li @click="closeMobileMenu"><router-link to="/experience" class="HomeNavBar__link">{{translation.experience}}</router-link></li>
        <li @click="closeMobileMenu"><router-link to="/programs" class="HomeNavBar__link">{{translation.programs}}</router-link></li>
        <li @click="closeMobileMenu"><router-link to="/apply" class="HomeNavBar__link">{{translation.apply}}</router-link></li>
        <li @click="changeLanguage" class="HomeNavBar__link">{{translation.language}}</li>
      </ul>
    </label>
  </div>
</template>

<style lang="scss">
@import '../assets/styles.scss';

.HomeNavBar__wrapper {
  height: 120px;
  width: 100vw;
  max-width: 1440px;
  background: white;
  flex-direction: row-reverse;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  position: relative;
}

.HomeNavBar__mobile {
  height: 100vh;
  position: relative;
}

.HomeNavBar__logo {
  background-image: url('http://concord-assets.oss-cn-beijing.aliyuncs.com/navbar__logo.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 100px;
  width: 175px;
  margin: 0 20px;
  position: absolute;
  left: 0;
}

/* ----- Large Screen Styles ----- */

@media screen and (min-width: 751px) {

  label {
    display: none !important;
  }

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
      transform: scale(1.1);
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

  .menu {
    display: none;
  }

  .HomeNavBar__hamburger-icon {
    display: none;

  }
}

/* ----- Small Screen Styles -----*/

@media screen and (max-width: 750px) {

  .HomeNavBar__wrapper {
    background: $opaque;
  }

  .HomeNavBar__logo {
    display: none;
  }

  .mobile-logo {
    background-image: url('http://concord-assets.oss-cn-beijing.aliyuncs.com/navbar__logo.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    height: 100px;
    width: 175px;
    margin-bottom: 30px;
  }

  .HomeNavBar__active {
    background: none;
  }

  .HomeNavBar__tabs {
    display: none;
  }

  .menu {
    position: absolute;
    right: -100px;
    top: -100px;
    z-index: 100;
    width: 200px;
    height: 200px;
    background: #FFF;
    border-radius: 50% 50% 50% 50%;
    transition: .5s ease-in-out;
    box-shadow: 0 0 25px #FEFEFEFE;

    cursor: pointer;
  }

  .HomeNavBar__link {
    font-size: 30px;
    color: $concord-orange;
    &:hover {
      text-decoration: none;
      transform: scale(1.05);
      color: black;
    }
  }

  .HomeNavBar__hamburger-icon {
    position: absolute;
    top: 135px;
    left: 50px;
    width: 30px;
    height: 2px;
    background: $concord-orange;
    display: block;
    transform-origin: center;
    transition: .5s ease-in-out;
    &:after,
    &:before {
      transition: .5s ease-in-out;
      content: "";
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      background: $concord-orange;
    }

    &:before {
      top: -10px;
    }

    &:after {
      bottom: -10px;
    }
  }

  #checkbox {
    display: none;
  }

  input:checked + .menu {
    box-shadow: 0 0 0 100vw #FFF, 0 0 0 100vh #FFF;
    border-radius: 0;
    .HomeNavBar__hamburger-icon {
      transform: rotate(45deg);
      &:after {
        transform: rotate(90deg);
        bottom: 0;
      }
      &:before {
        transform: rotate(90deg);
        top: 0;
      }
    }
  }

  input:checked + .menu + ul {
    opacity: 1;
  }

  ul {
    z-index: 200;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    opacity: 0;
    transition: .25s 0s ease-in-out;
  }

  li {
    list-style-type: none;
  }

  a {
    margin-bottom: 1em;
    display: block;
    color: #000;
    text-decoration: none;
  }

  h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 80%;
    text-align: center;
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

<script>
import translation from '../translations/translation'
import globalData from '../main'

export default {
  name: 'HomeNavBar',
  props: {
  },

  computed: {
    translation () {
      return translation.navbar[globalData.language]
    },
    currentRoute () {
      return this.$route.name
    },
    activeLanguage () {
      return globalData.language
    }
  },

  data () {
    return {
      showNavbar: false,
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
    <div class="HomeNavBar__wrapper" :class="{'HomeNavBar__mobile': checked }">
      <router-link to="/" class="HomeNavBar__logo"></router-link>
      <div class="HomeNavBar__tabs" :class="{'HomeNavBar__large': activeLanguage === 'English', 'HomeNavBar__medium': activeLanguage === 'Chinese'}">
        <div id="link-home" class="link-box">
          <router-link to="/" class="HomeNavBar__tab" :class="{'HomeNavBar__tab_active': currentRoute === 'home'}">
            {{translation.home}}
          </router-link>
        </div>
        <div id="link-about" class="link-box">
          <router-link to="/about" class="HomeNavBar__tab" :class="{'HomeNavBar__tab_active': currentRoute === 'about'}">{{translation.about}}</router-link>
        </div>
        <div class="link-box" id="link-experience">
          <router-link to="/experience" class="HomeNavBar__tab" :class="{'HomeNavBar__tab_active': currentRoute === 'experience'}">{{translation.experience}}</router-link>
        </div>
        <div class="link-box" id="link-programs">
          <router-link to="/programs" class="HomeNavBar__tab" :class="{'HomeNavBar__tab_active': currentRoute === 'programs'}">{{translation.programs}}</router-link>
        </div>
        <div class="link-box" id="link-apply">
          <router-link to="/apply" class="HomeNavBar__tab" :class="{'HomeNavBar__tab_active': currentRoute === 'apply'}">{{translation.apply}}</router-link>
        </div>
        <div class="HomeNavBar__tab-underline" :class="{'underline-about-active': currentRoute === 'about', 'underline-experience-active': currentRoute === 'experience', 'underline-programs-active': currentRoute === 'programs', 'underline-apply-active': currentRoute === 'apply'}"></div>
      </div>
      <div class="HomeNavBar__language-selector" @click="changeLanguage">{{translation.language}}</div>
    </div>

    <!-- Small Devices -->
    <label for="checkbox">
      <input type="checkbox" id="checkbox" v-model="checked" class="checkbox">
      <span class="menu">
        <span class="HomeNavBar__hamburger-icon"></span>
      </span>
      <div v-if="checked" class="HomeNavBar__mobile-wrapper">
        <div class="mobile-logo"></div>
        <p @click="closeMobileMenu"><router-link to="/" :class="{'HomeNavBar__link_active': currentRoute === 'home'}">{{translation.home}}</router-link></p>
        <p @click="closeMobileMenu"><router-link to="/about" :class="{'HomeNavBar__link_active': currentRoute === 'about'}">{{translation.about}}</router-link></p>
        <p @click="closeMobileMenu"><router-link to="/experience" :class="{'HomeNavBar__link_active': currentRoute === 'experience'}">{{translation.experience}}</router-link></p>
        <p @click="closeMobileMenu"><router-link to="/programs" :class="{'HomeNavBar__link_active': currentRoute === 'programs'}">{{translation.programs}}</router-link></p>
        <p @click="closeMobileMenu"><router-link to="/apply" :class="{'HomeNavBar__link_active': currentRoute === 'apply'}">{{translation.apply}}</router-link></p>
        <p @click="changeLanguage">{{translation.language}}</p>
      </div>
    </label>
  </div>
</template>

<style lang="scss">
@import '../assets/styles.scss';

.HomeNavBar__wrapper {
  height: 120px;
  width: 100vw;
  padding: 0 2.5vw;
  max-width: 1440px;
  background: white;
  display: flex;
  justify-content: flex-end;
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
    margin-right: 20px;
    height: 120px;
    width: 50vw;
    display: flex;
    position: relative;
    a {
      color: $half-black;
      text-decoration: none !important;
    }
    a:hover {
      text-decoration: none !important;
      color: $concord-orange;
      animation: activeTab linear .5s;
    }
  }

  .link-box {
    height: 100%;
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .HomeNavBar__large {
    width: 60%;
  }

  .HomeNavBar__medium {
    width: 50%;
  }

  #link-home:hover ~ .HomeNavBar__tab-underline {
    left: 0;
    transition: .3s ease-in-out;
  }
  #link-about:hover ~ .HomeNavBar__tab-underline {
    left: 20%;
    transition: .3s ease-in-out;
  }
  #link-experience:hover ~ .HomeNavBar__tab-underline {
    left: 40%;
    transition: .3s ease-in-out;
  }
  #link-programs:hover ~ .HomeNavBar__tab-underline {
    left: 60%;
    transition: .3s ease-in-out;
  }
  #link-apply:hover ~ .HomeNavBar__tab-underline {
    left: 80%;
    transition: .3s ease-in-out;
  }

  .HomeNavBar__tab-underline {
    height: 2px;
    width: 20%;
    position: absolute;
    bottom: 0;
    left: 0;
    background: $concord-orange;
    transition: .3s ease-in-out;
  }

  .underline-about-active {
    left: 20%;
    transition: .3s ease-in-out;
  }

  .underline-experience-active {
    left: 40%;
    transition: .3s ease-in-out;
  }

  .underline-programs-active {
    left: 60%;
    transition: .3s ease-in-out;
  }

  .underline-apply-active {
    left: 80%;
    transition: .3s ease-in-out;
  }

  .HomeNavBar__tab_active {
    color: $concord-orange !important;
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

  .HomeNavBar__mobile-wrapper {
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 500;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    a {
      color: $half-black;
      font-size: 30px;
    }
    p {
      color: $half-black;
      font-size: 30px;
    }
  }

  .HomeNavBar__logo {
    display: none;
  }

  .mobile-logo {
    background-image: url('http://concord-assets.oss-cn-beijing.aliyuncs.com/navbar__logo.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    top: 30px;
    left: 10px;
    height: 75px;
    width: 150px;
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

  .HomeNavBar__link li {
    font-size: 30px;
    color: $half-black;
    a {
      color: $half-black;
    }
  }

  .HomeNavBar__link_active {
    color: $concord-orange !important;
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

@keyframes activeTab {
  from {
    color: $half-black;
  }
  to {
    color: $concord-orange;
  }
}

</style>

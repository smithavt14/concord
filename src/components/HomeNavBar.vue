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
    currentRoute() {
      return this.$route.name
    },
    activeLanguage() {
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
      <div class="HomeNavBar__language-selector" @click="changeLanguage">{{translation.language}}</div>
      <div class="HomeNavBar__tabs" :class="{'HomeNavBar__large': activeLanguage === 'English', 'HomeNavBar__medium': activeLanguage === 'Chinese'}">
        <router-link to="/" id="one" class="HomeNavBar__tab" :class="{'HomeNavBar__tab_active': currentRoute === 'home'}">
          {{translation.home}}
        </router-link>
        <router-link to="/about" id="two" class="HomeNavBar__tab" :class="{'HomeNavBar__tab_active': currentRoute === 'about'}">{{translation.about}}</router-link>
        <router-link to="/experience" id="three" class="HomeNavBar__tab" :class="{'HomeNavBar__tab_active': currentRoute === 'experience'}">{{translation.experience}}</router-link>
        <router-link to="/programs" id="four" class="HomeNavBar__tab" :class="{'HomeNavBar__tab_active': currentRoute === 'programs'}">{{translation.programs}}</router-link>
        <router-link to="/apply" id="five" class="HomeNavBar__tab" :class="{'HomeNavBar__tab_active': currentRoute === 'apply'}">{{translation.apply}}</router-link>
        <div class="HomeNavBar__tab-underline" :class="{'active-tab__two': currentRoute === 'about', 'active-tab__three': currentRoute === 'experience', 'active-tab__four': currentRoute === 'programs', 'active-tab__five': currentRoute === 'apply'}"></div>
      </div>
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
  display: flex;
  flex-direction: row-reverse;
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
    width: 50%;
    /*text-align: right;*/
    a {
      display: inline-block;
      width: 20%;
      color: $half-black;
      text-decoration: none !important;
      padding-bottom: 3px;
    }
    a:hover {
      text-decoration: none !important;
      color: $concord-orange;
      animation: activeTab linear .5s;
    }
  }

  .HomeNavBar__large {
    width: 60%;
  }

  .HomeNavBar__medium {
    width: 50%;
  }

  #one:hover ~ .HomeNavBar__tab-underline {
    margin-left: 5%;
  }

  #two:hover ~ .HomeNavBar__tab-underline {
    margin-left: 25%;
  }
  #three:hover ~ .HomeNavBar__tab-underline {
    margin-left: 45%;
  }
  #four:hover ~ .HomeNavBar__tab-underline {
    margin-left: 65%;
  }
  #five:hover ~ .HomeNavBar__tab-underline {
    margin-left: 85%;
  }

  .HomeNavBar__tab-underline {
    height: .10rem;
    width: 10%;
    margin: 0;
    background: $concord-orange;
    border: none;
    transition: .3s ease-in-out;
    margin-left: 5%;
  }

  .active-tab__two {
    margin-left: 25%;
  }

  .active-tab__three {
    margin-left: 45%;
  }

  .active-tab__four {
    margin-left: 65%;
  }

  .active-tab__five {
    margin-left: 85%;
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

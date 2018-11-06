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
      isActive: '',
      showNavbar: false
    }
  },

  methods: {
    toggleActive (e) {
      this.isActive = e.target.dataset.position
    },
    changeLanguage () {
      globalData.language = globalData.language === 'English' ? 'Chinese' : 'English'
    },
    pagePosition (e) {
      console.log(e)
    }
  }
};
</script>

<template>
  <div class="HomeNavBar__wrapper">
    <div class="HomeNavBar__logo"></div>
    <div class="HomeNavBar__tabs">
      <router-link to="/" class="active">{{translation.home}}</router-link>
      <router-link to="/about">{{translation.about}}</router-link>
      <router-link to="/experience">{{translation.experience}}</router-link>
      <router-link to="/programs">{{translation.programs}}</router-link>
      <router-link to="/apply">{{translation.apply}}</router-link>
      <div class="HomeNavBar__language-selector" @click="changeLanguage">{{translation.language}}</div>
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

.HomeNavBar__tabs {
  display: flex;
  justify-content: space-between;
  margin: 0 20px;
  align-items: center;

  a {
  color: $half-black;
  text-decoration: none;
  margin: 15px;
  }
  a:hover {
    color: black;
  }
}

.HomeNavBar__language-selector {
  color: $half-black;
  margin: 20px;
  &:hover {
    color: black;
  }
}

.active {
  color: black !important;
}

</style>

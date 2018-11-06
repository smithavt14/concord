<script>
import translation from '@/translations/translation'
import globalData from '@/main'

export default {
  name: 'BootstrapNavBar',
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
  <b-navbar class="HomeNavBar__wrapper">
    <b-navbar-brand class="HomeNavBar__logo"></b-navbar-brand>
    <b-collapse is-nav>
      <b-navbar-nav class="HomeNavBar__tabs">
        <b-nav-item to="/">{{translation.home}}</b-nav-item>
        <b-nav-item to="/about">{{translation.about}}</b-nav-item>
        <b-nav-item to="/experience">{{translation.experience}}</b-nav-item>
        <b-nav-item to="/programs">{{translation.programs}}</b-nav-item>
        <b-nav-item to="/apply">{{translation.apply}}</b-nav-item>
        <b-button class="HomeNavBar__language-selector" @click="changeLanguage">{{translation.language}}</b-button>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<style lang="scss">
@import '../assets/styles.scss';

.HomeNavBar__wrapper {
  height: 150px;
  width: 100%;
  background: $opaque;
  display: flex !important;
  justify-content: space-between !important;
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
  display: flex !important;
  justify-content: space-between !important;
  flex-direction: row !important;
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

</style>

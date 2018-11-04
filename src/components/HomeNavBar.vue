<script>
export default {
  name: 'HomeNavBar',
  props: {
  },

  data() {
    return {
    };
  },

  beforeMount() {
  },
};
</script>

<template>
  <div class="HomeNavBar__wrapper">
    <div class="HomeNavBar__logo"></div>
    <div class="HomeNavBar__tabs">
      <router-link to="/">HOME</router-link>
      <router-link to="/about">ABOUT</router-link>
      <a href="">EXPERIENCE</a>
      <a href="">PROGRAMS</a>
      <a href="">APPLY</a>
      <div class="HomeNavBar__language-selector">中文</div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../assets/styles.scss';

.HomeNavBar__wrapper {
  height: 150px;
  width: 100vw;
  background: $concord-orange;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  justify-content: space-around;
  margin: 0 20px;
  a {
  color: black;
  text-decoration: none;
  margin: 0 20px
  }

}

</style>

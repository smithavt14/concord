<script>
import translation from '@/translations/translation';
import globalData from '@/main'

export default {
  name: 'about',
  components: {
  },

  computed: {
    translation () {
      return translation.home[globalData.language]
    }
  }
};
</script>

<template>
  <div class="about__wrapper">
    <div class="about__banner"></div>
    <div class="about__banner-bar">
      <div class="about__banner-bar-link">{{translation.philosophy}}</div>
      <div class="about__banner-bar-link">{{translation.location}}</div>
      <div class="about__banner-bar-link">{{translation.reasons}}</div>
      <div class="about__banner-bar-link">{{translation.team}}</div>
      <div class="about__banner-bar-link">{{translation.offsite}}</div>
      <div class="about__banner-bar-link">{{translation.partners}}</div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../assets/styles.scss';

.about__wrapper {
  background-image: url('../assets/images/symphony.png');
  background-repeat: repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 150vh;
}

.about__banner {
  background-image: url('https://res.cloudinary.com/dbbfpai4q/image/upload/v1542545920/front_desk.jpg');
  background-size: cover;
  background-position: center;
  height: 33vh;
  width: 100%;
  margin-top: 150px;
}

.about__banner-bar {
  height: 100px;
  width: 100vw;
  background-color: $concord-orange;
  color: white;
}

</style>

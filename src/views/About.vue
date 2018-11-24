<script>
import translation from '@/translations/translation'
import globalData from '@/main'

export default {
  name: 'about',
  components: {},

  data () {
    return {
      center: {lng: 121.399865, lat: 31.204689},
      zoom: 15,
      show: false
    }
  },

  computed: {
    translation () {
      return translation.about[globalData.language]
    }
  }, 

  methods: {
    infoWindowOpen() {
      this.show = true
    },
    infoWindowClose() {
      this.show = false
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
    <div class="about__OP-container">
      <div class="about__OP-container-left">
        <div class="about__OP-container-left-subtitle">{{translation.OPsubtitle}}</div>
        <div class="about__OP-container-left-title">{{translation.OPtitle}}</div>
        <div class="about__OP-container-left-content">{{translation.OPcontent}}</div>
      </div>
      <div class="about__OP-container-right">
        <div class="about__OP-container-right-image"></div>
      </div>
    </div>
    <baidu-map :center="center" :zoom="zoom" class="about__map-container">
      <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
      <bm-marker :position="center" :dragging="true" @click="infoWindowOpen">
        <bm-info-window :show="show" @close="infoWindowClose" @open="infoWindowOpen">
          <div class="about__map-title">Concord Music</div>
          <div class="about__map-content">
            <div><strong>Address: </strong>Gubei Lu 678, Tongquan Building, Suite 803</div>
            <div><strong>地址: </strong>古北路678号，同诠大厦，803室</div>
          </div>
        </bm-info-window>
      </bm-marker>
    </baidu-map>
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
}

.about__banner {
  background-image: url('https://res.cloudinary.com/dbbfpai4q/image/upload/v1542545920/front_desk.jpg');
  background-size: cover;
  background-position: center;
  height: 50vh;
  width: 100%;
}

.about__banner-bar {
  height: 100px;
  width: 100vw;
  background-color: $concord-orange;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.about__banner-bar-link {
  &:hover {
    border-bottom: 3px solid white;
  }
}

@media screen and (min-width: 751px) {
  .about__OP-container {
    width: 90vw;
    height: 500px;
    background-color: $light-gray;
    margin: 25px 0;
    display: flex;
  }

  .about__OP-container-left {
    height: 100%;
    width: 50%;
    padding: 20px;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .about__OP-container-right {
    height: 100%;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
}

@media screen and (max-width: 750px) {
  .about__OP-container {
    width: 90vw;
    background-color: $light-gray;
    margin: 25px 0;
    display: flex;
    flex-direction: column;
  }

  .about__OP-container-left {
    height: 100%;
    padding: 20px;
    width: 100%;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .about__OP-container-right {
    height: 100%;
    padding: 20px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
}

.about__OP-container-right-image {
  background-image: url('https://res.cloudinary.com/dbbfpai4q/image/upload/v1542545920/teacher_with_student.jpg');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  height: 90%;
  width: 90%;
  }

.about__OP-container-left-subtitle {
  color: $concord-orange;
  font-size: 15px;
  margin-bottom: 5px;
}

.about__OP-container-left-title {
  font-size: 25px;
  margin-bottom: 5px;
}

.about__OP-container-left-content {
  font-size: 15px;
  color: gray;
  margin-bottom: 10px;
}

.about__map-container {
  margin: 25px 0;
  height: 300px;
  width: 90vw;
}

.about__map-title {
  font-size: 20px;
  font-weight: bold;
}

</style>

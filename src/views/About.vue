<script>
import translation from '@/translations/translation'
import globalData from '@/main'
import teachers from '@/objects/teachers'
import reasons from '@/objects/reasons'

export default {
  name: 'about',

  data () {
    return {
      center: { lng: 121.399865, lat: 31.204689 },
      zoom: 15,
      show: false,
      showInfo: null,
      reasons: reasons,
      team: teachers
    }
  },

  computed: {
    translation () {
      return translation.about[globalData.language]
    },
    translatedReasons () {
      return this.reasons[globalData.language]
    },
    translatedTeam () {
      return this.team[globalData.language]
    }
  },

  methods: {
    infoWindowOpen () {
      this.show = true
    },
    infoWindowClose () {
      this.show = false
    }
  }
}

</script>

<template>
  <div class="wrapper">

    <!-- Banner -->
    <div class="banner about__banner"></div>
    <div class="banner-bar">
      <div class="banner-bar-link">{{translation.philosophy}}</div>
      <div class="banner-bar-link">{{translation.location}}</div>
      <div class="banner-bar-link">{{translation.reasons}}</div>
      <div class="banner-bar-link">{{translation.team}}</div>
      <div class="banner-bar-link">{{translation.offsite}}</div>

      <!-- Mobile Banner Title -->
      <div class="banner-bar-link-mobile">{{translation.about}}</div>
    </div>

    <!-- Our Philosophy -->
    <div class="content-wrapper">
      <div class="about__OP-container">
        <div class="about__OP-container-left">
          <div class="subtitle">{{translation.OPsubtitle}}</div>
          <div class="about__OP-container-left-title">{{translation.OPtitle}}</div>
          <div class="about__OP-container-left-content">{{translation.OPcontent}}</div>
        </div>
        <div class="about__OP-container-right">
          <div class="about__OP-container-right-image"></div>
        </div>
      </div>
    </div>

    <!-- Map of Concord -->
    <div class="content-wrapper">
      <div class="title">{{translation.mapTitle}}</div>
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
        <div class="about__map-overlay">
          <div class="about__map-overlay-title">Concord Music</div>
          <div style="margin-top: 5px"><strong>Address / 地址 </strong></div>
          <div>Gubei Lu 678, Tongquan Building, Suite 803</div>
          <div>古北路678号，同诠大厦，803室</div>
          <div><strong>Contact Us / 联系我们: </strong></div>
          <div>021-5235-7398</div>
          <div>156-1839-1413</div>
        </div>
      </baidu-map>
    </div>

    <!-- 5 Reasons to Choose Concord -->
    <div class="content-wrapper">
      <div class="title">{{translation.reasonsTitle}}</div>
      <b-container class="about__5R-container">
        <b-row class="about__5R-bootstrap-row">
          <b-col v-for="item in translatedReasons" :key="item.id" class="about__5R-item" sm="6" md="4" lg="2">
            <img :src="item.icon" class="about__5R-item-icon">
            <div class="about__5R-item-title">{{item.title}}</div>
            <div class="about__5R-item-description">{{item.description}}</div>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <!-- OUR TEAM -->
    <div class="content-wrapper">
      <div class="title">我们的团队</div>
      <b-container class="about__OT-container">
        <b-row class="about__OT-bootstrap-row">
          <b-col v-for="item in translatedTeam" :key="item.id" class="about__OT-item" sm="12" md="6" lg="4">
            <div class="about__OT-item-container">
              <img :src="item.photo" class="about__OT-item-photo" :data-key="item.id">
              <div class="about__OT-item-info-container">
                <div class="about__OT-item-name">{{item.name}}</div>
                <div class="about__OT-item-role">{{item.role}}</div>
                <div class="about__OT-item-bio">{{item.bio}}</div>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <!-- OUR PARTNERSHIPS -->
    <div class="content-wrapper">
      <div class="about__OPA-content">
        <div class="about__OPA-left">
          <div class="subtitle">{{translation.OPAsubtitle}}</div>
          <div class="about__OPA-left-title">{{translation.OPAtitle}}</div>
          <div class="about__OPA-left-content">{{translation.OPAcontent}}</div>
        </div>
        <div class="about__OPA-right">
          <div class="about__OPA-right-image"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../assets/styles.scss';

.about__banner {
  background-image: linear-gradient(rgba(255, 255, 255, 0.20)), url('http://concord-assets.oss-cn-beijing.aliyuncs.com/about__banner.jpg');
  background-position: 25% 50%;
}

.about__OP-container-right-image {
  background-image: url('http://concord-assets.oss-cn-beijing.aliyuncs.com/experience__maggie-flute.jpg');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  width: 90%;
}

.about__OP-container-left-title {
  font-size: 25px;
  margin-bottom: 5px;
}

.about__OP-container-left-content {
  font-size: 15px;
  color: gray;
  margin-bottom: 10px;
  white-space: pre-line;
}

.about__map-container {
  margin-bottom: 30px;
  height: 300px;
  width: 90%;
  position: relative;
}

.about__map-title {
  font-size: 20px;
  font-weight: bold;
}

.about__map-overlay-title {
  color: $concord-orange;
  font-size: 20px;
}

.about__5R-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 25px;
}

.about__5R-title {
  color: $concord-orange;
  font-size: 15px;
  margin: 15px 0;
}

.about__5R-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.about__5R-item-icon {
  height: 75px;
  width: 75px;
  object-fit: cover;
}

.about__5R-item-title {
  width: 150px;
  height: 45px;
  font-weight: bold;
  margin: 5px 0;
}

.about__5R-item-description {
  width: 200px;
  height: 125px;
  font-size: 15px;
}

.about__5R-bootstrap-row {
  display: flex;
  justify-content: space-around;
}

.about__OT-bootstrap-row {
  display: flex;
  justify-content: center;
}

.about__OT-item-container {
  display: flex;
  margin: 20px 0;
  background: $light-gray;
  padding: 10px;
}

.about__OT-item-photo {
  width: 125px;
  height: 200px;
  object-fit: cover;
  object-position: center;
  border-radius: 5px;
}

.about__OT-item-info-container {
  width: 185px;
  height: 200px;
  text-align: left;
  margin-left: 10px;
  overflow: hidden;
}

.about__OT-item-name {
  font-size: 25px;
}

.about__OT-item-role {
  font-size: 14px;
  color: $concord-orange;
}

.about__OT-item-bio {
  font-size: 12px;
  color: gray;
  height: 70%;
  overflow: auto;
}

.about__OPA-left-title {
  font-size: 25px;
  margin-bottom: 5px;
}

.about__OPA-left-content {
  font-size: 15px;
  color: gray;
  margin-bottom: 10px;
}

.about__OPA-right-image {
  background-image: url('http://concord-assets.oss-cn-beijing.aliyuncs.com/about__partnerships.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  height: 90%;
  width: 100%;
}

/*--------------- Large Screen Style ---------------*/

@media screen and (min-width: 751px) {
  .about__OP-container {
    width: 100%;
    height: 500px;
    background-color: white;
    display: flex;
    justify-content: center;
    position: relative;
  }

  .about__OP-container-left {
    height: 100%;
    width: 50%;
    max-width: 450px;
    padding: 20px;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    white-space: pre-line;
  }

  .about__OP-container-right {
    height: 100%;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .about__mobile-banner-title {
    display: none;
  }

  .dropDown {
    display: none;
  }

  .about__map-overlay {
    height: 250px;
    width: 250px;
    position: absolute;
    left: 20px;
    top: 25px;
    background: white;
    border-radius: 5px;
    text-align: left;
    padding: 10px;
  }

  .about__OPA-content {
    width: 100%;
    height: 550px;
    display: flex;
    justify-content: center;
    background-color: white;
  }

  .about__OPA-left {
    height: 100%;
    width: 50%;
    max-width: 450px;
    padding: 20px;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 15px;
    white-space: pre-line;
  }

  .about__OPA-right {
    height: 100%;
    width: 50%;
    max-width: 450px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}

/*--------------- Small Screen Style ---------------*/

@media screen and (max-width: 750px) {
  .about__OP-container {
    width: 95%;
    background-color: white;
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
    height: 250px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .about__banner-bar {
    justify-content: center;
  }

  .about__map-overlay {
   display: none;
  }

  .dropDown {
    display: flex;
    font-size: 25px;
  }

  .about__OPA-content {
    width: 95%;
    background-color: white;
    display: flex;
    flex-direction: column;
  }

  .about__OPA-left {
    height: 100%;
    padding: 20px;
    width: 100%;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    white-space: pre-line;
  }

  .about__OPA-right {
    height: 375px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
}

</style>

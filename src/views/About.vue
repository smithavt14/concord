<script>
import translation from '@/translations/translation'
import globalData from '@/main'
import teachers from '@/utilities/teachers'
import reasons from '@/utilities/reasons'

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
  <div class="about__wrapper">

    <!-- Banner -->
    <div class="about__banner about__banner-dynamic-height"></div>
    <div class="about__banner-bar">
      <div class="about__banner-bar-link">{{translation.philosophy}}</div>
      <div class="about__banner-bar-link">{{translation.location}}</div>
      <div class="about__banner-bar-link">{{translation.reasons}}</div>
      <div class="about__banner-bar-link">{{translation.team}}</div>
      <div class="about__banner-bar-link">{{translation.offsite}}</div>

      <!-- Mobile Banner Link -->
      <div class="about__banner-bar-link dropDown">{{translation.dropDown}}</div>
    </div>

    <!-- Our Philosophy -->
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

    <!-- Map of Concord -->
    <div class="about__map-wrapper">
      <div class="about__subtitle">{{translation.mapTitle}}</div>
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
          <div><strong>Address: </strong></div>
          <div>Gubei Lu 678, Tongquan Building, Suite 803</div>
          <div><strong>地址: </strong></div>
          <div>古北路678号，同诠大厦，803室</div>
          <div><strong>Contact Us / 联系我们: </strong></div>
          <div>021-5235-7398</div>
          <div>156-1839-1413</div>
        </div>
      </baidu-map>
    </div>

    <!-- 5 Reasons to Choose Concord -->
    <div class="about__5R-wrapper">
      <div class="about__subtitle">{{translation.reasonsTitle}}</div>
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
    <div class="about__OT-wrapper">
      <div class="about__subtitle">OUR TEAM</div>
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
    <div class="about__OPA-wrapper">
      <div class="about__OPA-left">
        <div class="about__OPA-left-subtitle">{{translation.OPAsubtitle}}</div>
        <div class="about__OPA-left-title">{{translation.OPAtitle}}</div>
        <div class="about__OPA-left-content">{{translation.OPAcontent}}</div>
      </div>
      <div class="about__OPA-right">
        <div class="about__OPA-right-image"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../assets/styles.scss';

.about__wrapper {
  width: 100vw;
  max-width: 1220px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

.about__banner {
  background: linear-gradient(rgba(255, 255, 255, 0.20)), url('https://res.cloudinary.com/dbbfpai4q/image/upload/v1542545920/front_desk.jpg');
  background-size: cover;
  background-position: center;
  height: 50vh;
  width: 100%;
  max-width: 1220px;
}

.about__banner-bar {
  height: 80px;
  width: 100%;
  background-color: $concord-orange;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 15px;
}

.about__subtitle {
  color: $concord-orange;
  font-size: 15px;
  margin: 15px;
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

.about__map-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  box-shadow: 5px 5px 50px #EEEEEE;
  margin: 15px 0;
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

.about__5R-wrapper {
  background: white;
  box-shadow: 5px 5px 50px #EEEEEE;
  width: 100%;
  margin: 15px 0;
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

.about__OT-wrapper {
  width: 100%;
  background: white;
  box-shadow: 5px 5px 50px #EEEEEE;
  margin: 15px 0;
}

.about__OT-title {
  color: $concord-orange;
  font-size: 15px;
  margin: 15px 0;
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

.about__OPA-left-subtitle {
  color: $concord-orange;
  font-size: 15px;
  margin-bottom: 5px;
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
  background-image: url('https://res.cloudinary.com/dbbfpai4q/image/upload/v1543409153/Group_2_3.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  height: 90%;
  width: 90%;
}

/*--------------- Large Screen Style ---------------*/

@media screen and (min-width: 751px) {
  .about__OP-container {
    width: 100%;
    height: 400px;
    background-color: white;
    box-shadow: 5px 5px 50px #EEEEEE;
    display: flex;
    justify-content: center;
    margin: 15px 0;
  }

  .about__banner-dynamic-height {
    height: 25vh;
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
  }

  .about__OP-container-right {
    height: 100%;
    width: 50%;
    max-width: 450px;
    max-width: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .about__banner-bar-link {
    &:hover {
      border-bottom: 3px solid white;
    }
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

  .about__OPA-wrapper {
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    background-color: white;
    box-shadow: 5px 5px 50px #EEEEEE;
    margin: 25px 0;
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

/*--------------------------------------------------*/

/*--------------- Small Screen Style ---------------*/

@media screen and (max-width: 750px) {
  .about__OP-container {
    width: 95%;
    background-color: white;
    margin: 25px 0;
    display: flex;
    flex-direction: column;
  }

  .about__banner-dynamic-height {
    height: 50vh;
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
  }

  .about__banner-bar {
    justify-content: center;
  }

  .about__banner-bar-link {
    display: none;
    &:hover {
      border-bottom: 3px solid white;
    }
  }

  .about__map-overlay {
   display: none;
  }

  .dropDown {
    display: flex;
    font-size: 25px;
  }

  .about__OPA-wrapper {
    width: 95%;
    background-color: white;
    box-shadow: 5px 5px 50px #EEEEEE;
    margin: 25px 0;
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
  }

  .about__OPA-right {
    height: 100%;
    padding: 20px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
}

/*--------------------------------------------------*/

</style>

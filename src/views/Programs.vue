<script>
import translation from '../translations/translation'
import globalData from '../main'
import $ from 'jquery'
import 'fullcalendar'
import events from '../objects/events'
import instruments from '../objects/instruments'
import privateInstruments from '../objects/private_instruments'
import programs from '../objects/programs_programs'

export default {
  name: 'programs',
  components: {
  },

  data () {
    return {
      instruments: instruments[globalData.language],
      privateInstruments: privateInstruments
    }
  },

  computed: {
    translation () {
      return translation.programs[globalData.language]
    },

    programs () {
      return programs[globalData.language]
    },

    language () {
      return globalData.language
    }
  },

  mounted () {
    $('#calendar').fullCalendar({
      aspectRatio: 1,
      header: {
        left: 'title',
        center: '',
        right: 'today, prev,next'
      },
      defaultView: 'month',
      height: 415,
      eventSources: events.eventSources
    })
  }
}
</script>

<template>
  <div class="programs__wrapper">

    <!-- Banner -->
    <div class="programs__banner"></div>
    <div class="programs__banner-bar">
      <div class="programs__banner-bar-link">{{translation.newProgramsSubtitle}}</div>
      <div class="programs__banner-bar-link">{{translation.ourPrograms}}</div>
      <!-- Mobile Banner Title -->
      <div class="programs__mobile-banner-title">{{translation.programs}}</div>
    </div>

  <!-- Video -->
  <div class="content-wrapper">
    <div class="subtitle">{{translation.newProgramsSubtitle}}</div>
    <iframe frameborder="0" style="height: 400px; width: 90%;" src="https://v.qq.com/txp/iframe/player.html?vid=v0858ysdg5n" allowFullScreen="true"></iframe>
  </div>
    <!-- Courses -->
    <div class="content-wrapper">
      <div class="subtitle">{{translation.ourPrograms}}</div>
      <div class="programs__OC-description">{{translation.ourProgramsContent}}</div>
      <img
      v-if="language === 'English'"
      src="https://concord-assets.oss-cn-beijing.aliyuncs.com/bubble-map-en.jpeg"
      alt="concord-music-programs"
      class="programs__program-chart">
      <img
      v-else
      src="https://concord-assets.oss-cn-beijing.aliyuncs.com/bubble-map-cn.jpeg"
      alt="concord music programs"
      class="programs__program-chart">
    </div>

    <!-- Early Years -->
    <div class="programs__early-years-wrapper">
      <div class="programs__early-years-banner">
        <div class="programs__banner-content">{{translation.earlyYearsTitle}}</div>
      </div>

      <!-- Early Years | Program Cards -->
      <div class="programs__subtitle">{{translation.summary}}</div>
      <div class="programs__early-years-description">{{translation.earlyYearsProgramsContent}}</div>
      <div class="programs__early-years-title programs__subtitle">
        {{translation.programs}}
        <div class="scroll-indicator-container" style="display: flex;">
          <div class="scroll-arrow"></div>
          <div class="scroll-arrow"></div>
          <div class="scroll-arrow"></div>
        </div>
      </div>
      <div class="programs__early-years-program-container">
        <div v-for="program in programs.earlyYears" class="programs__program-container" :key="program.id">
          <div class="programs__program-container-img" :style="{backgroundImage: `url(${program.photo})`}">
            <div class="programs__program-container-name">
              {{program.title}}
            </div>
          </div>
          <div class="programs__program-container-bottom">
            <div class="programs__program-container-subtitle">{{translation.ageTitle}}</div>
            <div class="programs__program-container-age">{{program.age}}</div>
            <div class="programs__program-container-subtitle">{{translation.descriptionTitle}}</div>
            <div class="programs__program-container-description">{{program.description}}</div>
            <router-link to="/apply" class="programs__lessons-signup container-bottom">{{translation.signup}}</router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- Group Lessons -->
    <div class=programs__lessons-wrapper>
      <div class="programs__group-lessons-banner">
        <div class="programs__banner-content">{{translation.groupTitle}}</div>
      </div>
      <div class="programs__subtitle left">
        {{translation.instruments}}

        <!-- Mobile Scroll Indicator -->
        <div class="scroll-indicator-container instruments-title-right">
          <div class="scroll-arrow"></div>
          <div class="scroll-arrow"></div>
          <div class="scroll-arrow"></div>
        </div>
      </div>

      <!-- Group | Instruments -->
      <div class="programs__lessons-instrument-container">
        <div v-for="instrument in instruments" class="programs__lessons" :key="instrument.id">
          <div class="programs__lessons-img-container">
            <img :src="instrument.img" alt="" class="programs__lessons-img">
          </div>
          <div class="programs__lessons-title">{{instrument.name}}</div>
        </div>
      </div>

      <!-- Group | Summary -->
      <div class="programs__subtitle left">{{translation.summary}}</div>
      <div class="programs__lessons-description">{{translation.groupDescription}}</div>

      <!-- Group | Programs -->
      <div class="programs__early-years-title programs__subtitle">
        {{translation.programs}}
        <div class="scroll-indicator-container" style="display: flex;">
          <div class="scroll-arrow"></div>
          <div class="scroll-arrow"></div>
          <div class="scroll-arrow"></div>
        </div>
      </div>

      <div class="programs__early-years-program-container">
        <div v-for="program in programs.group" class="programs__program-container" :key="program.id">
          <div class="programs__program-container-img" :style="{backgroundImage: `url(${program.photo})`}">
            <div class="programs__program-container-name">
              {{program.title}}
            </div>
          </div>
          <div class="programs__program-container-bottom">
            <div class="programs__program-container-subtitle">{{translation.ageTitle}}</div>
            <div class="programs__program-container-age">{{program.age}}</div>
            <div class="programs__program-container-subtitle">{{translation.descriptionTitle}}</div>
            <div class="programs__program-container-description">{{program.description}}</div>
            <router-link to="/apply" class="programs__lessons-signup container-bottom">{{translation.signup}}</router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- Supplemental Group Courses -->
    <div class="wrapper">
      <div class="programs__supplemental-lessons-banner">
        <div class="programs__banner-content">{{translation.supplementalTitle}}</div>
      </div>
      <div class="programs__subtitle left">{{translation.summary}}</div>
      <div class="programs__lessons-description">{{translation.supplementalDescription}}</div>

      <div class="programs__early-years-title programs__subtitle">
        {{translation.programs}}
        <div class="scroll-indicator-container" style="display: flex;">
          <div class="scroll-arrow"></div>
          <div class="scroll-arrow"></div>
          <div class="scroll-arrow"></div>
        </div>
      </div>

      <div class="programs__early-years-program-container">
        <div v-for="program in programs.supplemental" class="programs__program-container" :key="program.id">
          <div class="programs__program-container-img" :style="{backgroundImage: `url(${program.photo})`}">
            <div class="programs__program-container-name">
              {{program.title}}
            </div>
          </div>
          <div class="programs__program-container-bottom">
            <div class="programs__program-container-subtitle">{{translation.ageTitle}}</div>
            <div class="programs__program-container-age">{{program.age}}</div>
            <div class="programs__program-container-subtitle">{{translation.descriptionTitle}}</div>
            <div class="programs__program-container-description">{{program.description}}</div>
            <router-link to="/apply" class="programs__lessons-signup container-bottom">{{translation.signup}}</router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- Private Lessons -->
    <div class="programs__lessons-wrapper">
      <div class="programs__lessons-banner">
        <div class="programs__banner-content">{{translation.privateLessonsTitle}}</div>
      </div>
      <div class="programs__subtitle left">
        {{translation.instruments}}

        <!-- Mobile Scroll Indicator -->
        <div class="scroll-indicator-container instruments-title-right">
          <div class="scroll-arrow"></div>
          <div class="scroll-arrow"></div>
          <div class="scroll-arrow"></div>
        </div>
      </div>
      <div class="programs__lessons-instrument-container">
        <div v-for="instrument in privateInstruments" class="programs__lessons" :key="instrument.id">
          <div class="programs__lessons-img-container">
            <img :src="instrument.img" alt="" class="programs__lessons-img">
          </div>
          <div class="programs__lessons-title">{{instrument.name}}</div>
        </div>
      </div>

      <!-- Summary and Description -->
      <div class="programs__subtitle left">{{translation.summary}}</div>
      <div class="programs__lessons-description">{{translation.privateLessonsDescription}}</div>
      <div class="programs__curriculum-container">
        <div class="programs__curriculum-box">
          <div class="programs__curriculum-title">{{translation.salpTitle}}</div>
          <div class="programs__curriculum-description">{{translation.salpDescription}}</div>
        </div>
        <div class="programs__curriculum-box">
          <div class="programs__curriculum-title">{{translation.sprTitle}}</div>
          <div class="programs__curriculum-description">{{translation.sprDescription}}</div>
        </div>
        <div class="programs__curriculum-box">
          <div class="programs__curriculum-title">{{translation.recitalTitle}}</div>
          <div class="programs__curriculum-description">{{translation.recitalDescription}}</div>
        </div>
      </div>

      <div class="programs__subtitle left">{{translation.privateLessonsDifferenceTitle}}</div>
      <div class="programs__lessons-description">{{translation.privateLessonsDifferenceDescription}}</div>
      <div class="programs__subtitle left">{{translation.privateLessonsRateTitle}}</div>
      <div class="programs__lessons-description">{{translation.privateLessonsRateDescription}}</div>

      <div class="programs__lessons-age-time-container">
        <div class="programs__lessons-age-time">
          <div class="programs__lessons-age">{{translation.age1}}</div>
          <div class="programs__lessons-time">{{translation.minutes1}}</div>
        </div>
        <div class="programs__lessons-age-time">
          <div class="programs__lessons-age">{{translation.age2}}</div>
          <div class="programs__lessons-time">{{translation.minutes2}}</div>
        </div>
        <div class="programs__lessons-age-time">
          <div class="programs__lessons-age">{{translation.age3}}</div>
          <div class="programs__lessons-time">{{translation.minutes3}}</div>
        </div>
      </div>
      <router-link to="/apply" class="programs__lessons-signup">{{translation.signup}}</router-link>
    </div>
  </div>
</template>

<style lang="scss">
@import '../assets/styles.scss';

.programs__OT-bootstrap-row {
  display: flex;
  justify-content: space-around;
}

.programs__wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  max-width: 1440px;
}

.programs__banner {
  background: linear-gradient(rgba(255, 255, 255, 0.20)), url('https://concord-assets.oss-cn-beijing.aliyuncs.com/programs__banner.jpg');
  background-size: cover;
  background-position: 0 -50px;
  height: 50vh;
  width: 100%;
  max-width: 1440px;
}

.programs__banner-bar {
  height: 80px;
  width: 100%;
  max-width: 1440px;
  background-color: $concord-orange;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
}

.programs__banner-bar-link-active {
  border-bottom: 3px solid white;
}

.programs__subtitle {
  color: $concord-orange;
  font-size: 15px;
  margin: 15px 0;
  display: flex;
  align-items: center;
  width: 75%;
}

.left {
  width: 75%;
  text-align: left;
  margin: 15px 0px;
}

.programs__calendar-wrapper {
  width: 100%;
  height: 500px;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  box-shadow: 5px 5px 50px #EEEEEE;
  margin: 15px 0;
}

.programs__courses-wrapper {
  width: 100%;
  background: white;
  box-shadow: 5px 5px 50px #EEEEEE;
  margin: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px 0px;
}

.programs__OC-description {
  width: 75%;
  text-align: left;
}

.programs__OC-category-title {
  font-size: 15px;
  color: $concord-orange;
  margin: 15px 0;
}

.programs__OC-category-image {
  width: 70%;
  margin: 15px 0;
}

.programs__lessons-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  box-shadow: 5px 5px 50px #EEEEEE;
  margin: 15px 0;
}

.programs__lessons-banner {
  width: 100%;
  height: 25vh;
  background: linear-gradient(rgba(0, 0, 0, 0.15)), url('http://concord-assets.oss-cn-beijing.aliyuncs.com/experience__fei-teaching.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.programs__supplemental-lessons-banner {
  width: 100%;
  height: 25vh;
  background: linear-gradient(rgba(0, 0, 0, 0.25)), url('https://concord-assets.oss-cn-beijing.aliyuncs.com/experience__drums.jpg');
  background-size: cover;
  background-position: 0 -200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.programs__group-lessons-banner {
  width: 100%;
  height: 25vh;
  background: linear-gradient(rgba(0, 0, 0, 0.15)), url('http://concord-assets.oss-cn-beijing.aliyuncs.com/home__group-classes-kids.jpg');
  background-size: cover;
  background-position: 10% 25%;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}

.programs__banner-content {
  font-size: 25px;
  color: white;
  font-weight: bold;
}

.programs__lessons-instrument-container {
  display: flex;
  width: 75%;
  justify-content: space-around;
  margin-bottom: 15px;
  position: relative;
  align-items: flex-start;
}

.programs__private-lessons {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.programs__lessons-img-container {
  height: 55px;
  width: 55px;
  border-radius: 50px;
  background: #F6F6F6;
  display: flex;
  justify-content: center;
  align-items: center;
}

.programs__lessons-img {
  height: 35px;
  margin: 0 15px;
}

.programs__lessons-description {
  width: 75%;
  text-align: left;
  margin-bottom: 15px;
  white-space: pre-line;
}

.programs__lessons-age-time-container {
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0;
}

.programs__lessons-age-time {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.programs__lessons-age {
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.programs__lessons-time {
  width: 100%;
  height: 50px;
  border-top: 2px solid $concord-orange;
  display: flex;
  justify-content: center;
  align-items: center;
}

.programs__lessons-signup {
  padding: 10px 20px;
  color: $concord-orange;
  border: 2px solid $concord-orange;
  border-radius: 50px;
  width: 115px;
  margin: 15px 0 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  transition: .3s ease-in-out;
  &:hover {
    text-decoration: none;
    color: white;
    background: $concord-orange;
  }
}

.programs__program-chart {
  width: 70%;
  object-fit: contain;
  object-position: center;
  margin: 25px 0 0 0;
  border-radius: 10px;
}

.programs__lessons {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center
}

.programs__early-years-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  box-shadow: 5px 5px 50px #EEEEEE;
  margin: 15px 0;
}

.programs__early-years-banner {
  width: 100%;
  height: 25vh;
  background: linear-gradient(rgba(0, 0, 0, 0.15)), url('http://concord-assets.oss-cn-beijing.aliyuncs.com/home__little-notes-music-foundation.jpg');
  background-size: cover;
  background-position: 0 -300px;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}

.programs__early-years-program-container {
  display: flex;
  justify-content: space-between;
  width: 75%;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
}

.programs__program-container {
  border: 1px solid $light-gray;
  border-radius: 6px;
  overflow: hidden;
  margin: 15px 25px;
  flex-shrink: 0;
  width: 450px;
  box-shadow: 5px 5px 25px #EEEEEE;
}

.programs__program-container-img {
  height: 150px;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 8px;
}

.programs__program-container-name {
  font-size: 18px;
  color: white;
  width: 95%;
  text-align: left;
  font-weight: bold;
}

.programs__early-years-title {
  margin: 15px 0 0 0;
  width: 75%;
  text-align: center;
  display: flex;
  justify-content: space-between;
}

.programs__early-years-description {
  width: 75%;
  text-align: left;
}

.programs__program-container-bottom {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 8px;
}

.programs__program-container-subtitle {
  width: 95%;
  text-align: left;
  margin: 15px 0 0 0;
  color: $concord-orange;
  font-size: 15px;
  display: flex;
  align-items: center;
}

.programs__program-container-description {
  height: 250px;
  display: flex;
  justify-content: center;
  width: 95%;
  text-align: left;
  overflow: auto;
  white-space: pre-line;
}

.programs__program-container-age {
  width: 95%;
  text-align: left;
}

$animation-delay: .1s;

.scroll-arrow {
  width: 12px;
  height: 12px;
  transform: rotate(-45deg);
  border-right: 2px solid $concord-orange;
  border-bottom: 2px solid $concord-orange;
  animation: arrow-wave 1s infinite;
  animation-direction: alternate;
  @for $i from 1 through 3 {
    &:nth-child(#{$i}) {
      animation-delay: $animation-delay*$i;
    }
  }
}

.programs__curriculum-container {
  display: flex;
  justify-content: space-around;
  width: 80%;
}

.programs__curriculum-box {
  height: 150px;
  width: 150px;
  background-color: $concord-orange;
  border-radius: 5px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: .2s linear;
  &:hover {
    background: white;
    color: $concord-orange;
    border: 2px solid $concord-orange;
  }
}

.programs__curriculum-title {
  font-weight: bold;
  white-space: pre-line;  
  .programs__curriculum-box:hover & {
    display: none;
  }
}

.programs__curriculum-description {
  display: none;
  font-size: 12px;
  .programs__curriculum-box:hover & {
    display: unset;
  };
}

/* ---------- Large Screen Styles ----------*/

@media screen and (min-width: 751px) {
  .programs__banner-bar-link {
    margin: 0 25px;
  }

  .programs__mobile-banner-title {
    display: none;
  }

  #calendar {
    width: 75%;
    overflow: hidden;
  }

  .scroll-indicator-container {
    display: none;
  }
}

/* ---------- Small Screen Styles ----------*/

@media screen and (max-width: 750px) {
  .programs__banner-bar-link {
    display: none;
  }

  .programs__mobile-banner-title {
    color: white;
    font-size: 25px;
  }

  #calendar {
    width: 90%;
  }

  .programs__OC-description {
    width: 90%;
  }

  .programs__OC-category-image {
    width: 95%;
    margin: 15px 0;
  }

  .left {
    width: 90%;
  }

  .programs__lessons-instrument-container {
    overflow: auto;
    width: 90%;
  }

  .programs__lessons {
    margin: 0 15px;
  }

  .programs__lessons-description {
    width: 90%;
    white-space: pre-line;
  }

  .programs__program-container {
    width: 350px;
    margin: 15px 15px 15px 0;
  }

  .scroll-indicator-container {
    display: flex;
  }

  .instruments-title-right {
    position: absolute;
    right: 15px;
  }

  .programs__early-years-title {
    width: 90%;
    text-align: left;
    display: flex;
    align-items: center;
  }

  .programs__early-years-program-container {
    width: 90%;
  }

  .programs__lessons-age-time-container {
    width: 90%;
    flex-direction: column;
  }

  .programs__early-years-description {
    width: 90%;
    text-align: left;
  }

  .programs__early-years-banner {
    background-position: unset;
  }

  .programs__subtitle {
    width: 90%;
  }

  .programs__program-chart {
    width: 95%;
  }
}

@keyframes arrow-wave {
  0% {
    opacity: 0;
  }
  50% {
    opacity: .5;
  }
  100% {
    opacity: 1;
  }
}

</style>

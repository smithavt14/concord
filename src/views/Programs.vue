<script>
import translation from '@/translations/translation'
import globalData from '@/main'
import $ from 'jquery'
import 'fullcalendar'
import events from '@/utilities/events'
import instruments from '@/utilities/instruments'
import programs from '@/utilities/programs_programs'

export default {
  name: 'programs',
  components: {
  },

  data () {
    return {
     instruments: instruments[globalData.language]
    }
  },

  computed: {
    translation () {
      return translation.programs[globalData.language]
    },

    translatedPrograms() {
      return programs[globalData.language]
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
      <div class="programs__banner-bar-link">{{translation.calendar}}</div>
      <div class="programs__banner-bar-link">{{translation.earlyYearsPrograms}}</div>
      <div class="programs__banner-bar-link">{{translation.privateLessons}}</div>
      <div class="programs__banner-bar-link">{{translation.groupLessons}}</div>
      <div class="programs__banner-bar-link">{{translation.camps}}</div>

      <!-- Mobile Banner Title -->
      <div class="programs__mobile-banner-title">{{translation.programs}}</div>
    </div>

    <!-- Calendar -->
    <div class="programs__calendar-wrapper">
      <div class="programs__subtitle">{{translation.calendarTitle}}</div>
      <div id='calendar'></div>
    </div>

    <!-- Courses -->
    <div class="programs__courses-wrapper">
      <div class="programs__subtitle">{{translation.ourPrograms}}</div>
      <div class="programs__OC-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, repellendus voluptas quod odio consequuntur ducimus dolorum non, quis, veniam voluptatibus commodi!</div>
      <div class="programs__OC-category-title">{{translation.ocTitle}}</div>
      <img src="https://res.cloudinary.com/dbbfpai4q/image/upload/v1547296631/early-years.png" alt="" class="programs__OC-category-image">
      <img src="https://res.cloudinary.com/dbbfpai4q/image/upload/v1547296635/foundation.png" alt="" class="programs__OC-category-image">
      <img src="https://res.cloudinary.com/dbbfpai4q/image/upload/v1547296645/foundation2.png" alt="" class="programs__OC-category-image">
      <img src="https://res.cloudinary.com/dbbfpai4q/image/upload/v1547296649/supplemental.png" alt="" class="programs__OC-category-image">
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
        <div v-for="instrument in instruments" class="programs__lessons" :key="instrument.id">
          <div class="programs__lessons-img-container">
            <img :src="instrument.img" alt="" class="programs__lessons-img">  
          </div>
          <div class="programs__lessons-title">{{instrument.name}}</div>
        </div>
      </div>
      <div class="programs__lessons-description">{{translation.privateLessonsDescription1}}</div>
      <div class="programs__lessons-description">{{translation.privateLessonsDescription2}}</div>
      <div class="programs__lessons-description">{{translation.privateLessonsDescription3}}</div>
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
          <div class="programs__lessons-time">{{translation.minutes2}}</div>
        </div>
      </div>
      <router-link to="/apply" class="programs__lessons-signup">{{translation.signup}}</router-link>
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
      <div class="programs__lessons-instrument-container">
        <div v-for="instrument in instruments" class="programs__lessons" :key="instrument.id">
          <div class="programs__lessons-img-container">
            <img :src="instrument.img" alt="" class="programs__lessons-img">  
          </div>
          <div class="programs__lessons-title">{{instrument.name}}</div>
        </div>
      </div>
      <div class="programs__lessons-description">{{translation.groupDescription}}</div>
      <router-link to="/apply" class="programs__lessons-signup">{{translation.signup}}</router-link>
    </div>

    <!-- Early Years -->
    <div class="programs__early-years-wrapper">
      <div class="programs__early-years-banner">
        <div class="programs__banner-content">{{translation.earlyYearsTitle}}</div>
      </div>

      <!-- Program Cards -->
      <div class="programs__early-years-title programs__subtitle">
        {{translation.programs}}

        <!-- Mobile Scroll Indicator -->
        <div class="scroll-indicator-container instruments-title-right">
          <div class="scroll-arrow"></div>
          <div class="scroll-arrow"></div>
          <div class="scroll-arrow"></div>
        </div>
      </div>
      <div class="programs__early-years-program-container">
        <div v-for="program in translatedPrograms" class="programs__program-container" :key="program.id">
          <div class="programs__program-container-img" :style="{backgroundImage: `url(${program.photo})`}">
            <div class="programs__program-container-name">
              {{program.title}}
            </div>
          </div>
          <div class="programs__program-container-bottom">
            <div class="programs__program-container-subtitle programs__subtitle">{{translation.ageTitle}}</div>
            <div class="programs__program-container-age">{{program.age}}</div>
            <div class="programs__program-container-subtitle programs__subtitle">{{translation.descriptionTitle}}</div>
            <div class="programs__program-container-description">{{program.description}}</div>
            <router-link to="/apply" class="programs__lessons-signup container-bottom">{{translation.signup}}</router-link>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style lang="scss">
@import '../assets/styles.scss';
@import '../assets/fullcalendar.css';

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
  background: linear-gradient(rgba(255, 255, 255, 0.20)), url('https://res.cloudinary.com/dbbfpai4q/image/upload/v1546515353/girl_reading.jpg');
  background-size: cover;
  background-position: center;
  height: 25vh;
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
  margin: 5px;
  display: flex;
  align-items: center;
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
  font-size: 15px;
  color: gray;
  width: 70%;
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
  background: linear-gradient(rgba(0, 0, 0, 0.15)), url('https://res.cloudinary.com/dbbfpai4q/image/upload/v1547298621/BA4A1645_1.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}

.programs__group-lessons-banner {
  width: 100%;
  height: 25vh;
  background: linear-gradient(rgba(0, 0, 0, 0.15)), url('https://res.cloudinary.com/dbbfpai4q/image/upload/v1547875702/BA4A1584.jpg');
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
  justify-content: space-between;
  margin-bottom: 15px;
  position: relative;
  align-items: start;
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
  &:hover {
    text-decoration: none;
    color: white;
    background: $concord-orange;
  }
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
  background: linear-gradient(rgba(0, 0, 0, 0.15)), url('https://res.cloudinary.com/dbbfpai4q/image/upload/v1544007919/Experience_Banner.jpg');
  background-size: cover;
  background-position: 10% 25%;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}

.programs__early-years-program-container {
  display: flex;
  justify-content: space-between;
  width: 75%;
  overflow: auto;
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
}

.programs__program-container-description {
  height: 200px;
  display: flex;
  justify-content: center;
  width: 95%;
  text-align: left;
  overflow: auto;
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

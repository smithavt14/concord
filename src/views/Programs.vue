<script>
import translation from '@/translations/translation'
import globalData from '@/main'
import $ from 'jquery'
import 'fullcalendar'
import events from '@/utilities/events'
import instruments from '@/utilities/instruments'

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
      <div class="programs__banner-bar-link">{{translation.earlyYears}}</div>
      <div class="programs__banner-bar-link">{{translation.privateLessons}}</div>
      <div class="programs__banner-bar-link">{{translation.groupLessons}}</div>
      <div class="programs__banner-bar-link">{{translation.camps}}</div>
    </div>
    <div class="programs__calendar-wrapper">
      <div class="programs__subtitle">{{translation.calendarTitle}}</div>
      <div id='calendar'></div>
    </div>
    <div class="programs__courses-wrapper">
      <div class="programs__subtitle">OUR COURSES</div>
      <div class="programs__OC-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, repellendus voluptas quod odio consequuntur ducimus dolorum non, quis, veniam voluptatibus commodi!</div>
      <div class="programs__OC-category-title">Early Years Music Programs</div>
      <img src="https://res.cloudinary.com/dbbfpai4q/image/upload/v1547296631/early-years.png" alt="" class="programs__OC-category-image">
      <img src="https://res.cloudinary.com/dbbfpai4q/image/upload/v1547296635/foundation.png" alt="" class="programs__OC-category-image">
      <img src="https://res.cloudinary.com/dbbfpai4q/image/upload/v1547296645/foundation2.png" alt="" class="programs__OC-category-image">
      <img src="https://res.cloudinary.com/dbbfpai4q/image/upload/v1547296649/supplemental.png" alt="" class="programs__OC-category-image">
    </div>
    <div class="programs__private-lessons-wrapper">
      <div class="programs__private-lessons-banner">
        <div class="programs__private-lessons-banner-content">1-1 PRIVATE LESSONS</div>
      </div>
      <div class="programs__subtitle">INSTRUMENTS</div>
      <div class="programs__private-lessons-instrument-container">
        <div v-for="instrument in instruments" class="programs__private-lessons" :key="instrument.id">
          <img :src="instrument.img" alt="" class="programs__private-lessons-img">
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../assets/styles.scss';
@import '../assets/fullcalendar.css';

.programs__wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  max-width: 1220px;
}

.programs__banner {
  background: linear-gradient(rgba(255, 255, 255, 0.20)), url('https://res.cloudinary.com/dbbfpai4q/image/upload/v1546515353/girl_reading.jpg');
  background-size: cover;
  background-position: center;
  height: 25vh;
  width: 100%;
  max-width: 1220px;
}

.programs__banner-bar {
  height: 80px;
  width: 100%;
  max-width: 1220px;
  background-color: $concord-orange;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.programs__banner-bar-link-active {
  border-bottom: 3px solid white;
}

.programs__subtitle {
  color: $concord-orange;
  font-size: 15px;
  margin: 5px;
}

.programs__calendar-wrapper {
  width: 100%;
  height: 500px;
  max-width: 1220px;
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

.programs__OC-image {
  height: 500px;
  margin: 15px 0;
}

.programs__OC-category-image {
  width: 70%;
  margin: 15px 0;
}

.programs__private-lessons-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  box-shadow: 5px 5px 50px #EEEEEE;
  margin: 15px 0;
}

.programs__private-lessons-banner {
  width: 100%;
  height: 15vh;
  background: linear-gradient(rgba(0, 0, 0, 0.15)), url('https://res.cloudinary.com/dbbfpai4q/image/upload/v1547298621/BA4A1645_1.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}

.programs__private-lessons-banner-content {
  font-size: 25px;
  color: white;
  font-weight: bold;
}

.programs__private-lessons-instrument-container {
  display: flex;
  width: 75%;
  justify-content: space-around;
  margin: 15px 0;
}

.programs__private-lessons-img {
  height: 40px;
  margin: 0 15px;
}


/* ---------- Large Screen Styles ----------*/

@media screen and (min-width: 751px) {
  .programs__banner-bar-link {
    margin: 0 25px;
  }

  #calendar {
    width: 75%;
    overflow: hidden;
  }
}

/* ---------- Small Screen Styles ----------*/

@media screen and (max-width: 750px) {
  .programs__banner-bar-link {
    display: none;
  }

  #calendar {
    width: 90%;
  }
}

</style>

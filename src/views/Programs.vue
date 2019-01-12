<script>
import translation from '@/translations/translation'
import globalData from '@/main'
import $ from 'jquery'
import 'fullcalendar'
import events from '@/utilities/events'

export default {
  name: 'programs',
  components: {
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
    <div class="programs__calendar dynamic-width">
      <div class="programs__calendar-title">{{translation.calendarTitle}}</div>
      <div id='calendar'></div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../assets/styles.scss';
@import '../assets/fullcalendar.css';

.programs__wrapper {
  background-color: #FAFAFA;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.programs__banner {
  background-image: url('https://res.cloudinary.com/dbbfpai4q/image/upload/v1546515353/girl_reading.jpg');
  background-size: cover;
  background-position: center;
  height: 50vh;
  width: 100%;
  max-width: 1220px;
}

.programs__banner-bar {
  height: 80px;
  width: 100vw;
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

.programs__calendar-title {
  color: $concord-orange;
  font-size: 15px;
  margin: 5px;
}

.programs__calendar {
  margin: 25px 0;
  width: 100vw;
  height: 500px;
  max-width: 1220px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
}

@media screen and (min-width: 751px) {
  .programs__banner-bar-link {
    margin: 0 25px;
  }

  #calendar {
    width: 75%;
    overflow: hidden;
  }

  .dynamic-width {
    width: 80vw;
  }
}

@media screen and (max-width: 750px) {
  .programs__banner-bar-link {
    display: none;
  }

  #calendar {
    width: 95%;
  }

  .dynamic-width {
    width: 100vw;
    border: 0;
  }
}

</style>

<script>
import translation from '@/translations/translation'
import globalData from '@/main'
import $ from 'jquery'
import 'fullcalendar'

export default {
  name: 'programs',
  components: {
  },

  computed: {
    translation () {
      return translation.programs[globalData.language]
    }
  },

  mounted() {
   $('#calendar').fullCalendar({
     defaultView: 'month',
     aspectRatio: 1.5,
     render: true
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
    <div id='calendar'></div>
  </div>
</template>

<style lang="scss">
@import '../assets/styles.scss';

.programs__wrapper {
  background-image: url('../assets/images/symphony.png');
  background-repeat: repeat;
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

#calendar {
  height: 500px;
  width: 500px;

}

.programs__banner-bar-link-active {
  border-bottom: 3px solid white;
}

@media screen and (min-width: 751px) {
  .programs__banner-bar-link {
    margin: 0 25px;
  }
}

@media screen and (max-width: 750px) {
  .programs__banner-bar-link {
    display: none;
  }
}

</style>

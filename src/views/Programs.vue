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
      <div class="programs__banner-bar-link">{{translation.earlyYears}}</div>
      <div class="programs__banner-bar-link">{{translation.privateLessons}}</div>
      <div class="programs__banner-bar-link">{{translation.groupLessons}}</div>
      <div class="programs__banner-bar-link">{{translation.camps}}</div>
    </div>

    <!-- Calendar -->
    <div class="programs__calendar-wrapper">
      <div class="programs__subtitle">{{translation.calendarTitle}}</div>
      <div id='calendar'></div>
    </div>

    <!-- Courses -->
    <div class="programs__courses-wrapper">
      <div class="programs__subtitle">OUR COURSES</div>
      <div class="programs__OC-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, repellendus voluptas quod odio consequuntur ducimus dolorum non, quis, veniam voluptatibus commodi!</div>
      <div class="programs__OC-category-title">Early Years Music Programs</div>
      <img src="https://res.cloudinary.com/dbbfpai4q/image/upload/v1547296631/early-years.png" alt="" class="programs__OC-category-image">
      <img src="https://res.cloudinary.com/dbbfpai4q/image/upload/v1547296635/foundation.png" alt="" class="programs__OC-category-image">
      <img src="https://res.cloudinary.com/dbbfpai4q/image/upload/v1547296645/foundation2.png" alt="" class="programs__OC-category-image">
      <img src="https://res.cloudinary.com/dbbfpai4q/image/upload/v1547296649/supplemental.png" alt="" class="programs__OC-category-image">
    </div>

    <!-- Private Lessons -->
    <div class="programs__lessons-wrapper">
      <div class="programs__lessons-banner">
        <div class="programs__banner-content">1-1 PRIVATE LESSONS</div>
      </div>
      <div class="programs__subtitle left">INSTRUMENTS</div>
      <div class="programs__lessons-instrument-container">
        <div v-for="instrument in instruments" class="programs__lessons" :key="instrument.id">
          <div class="programs__lessons-img-container">
            <img :src="instrument.img" alt="" class="programs__lessons-img">  
          </div>
          <div class="programs__lessons-title">{{instrument.name}}</div>
        </div>
      </div>
      <div class="programs__lessons-description">
        1-on-1 private lessons allow students to interact with the teacher in the most direct way. It also allows teachers to personalise a long-term learning plan around the child's character and interest, making the weekly lessons fun but also productive! With student's interest as goal of our teachers, our professional team is able to bring in rich resources with each teacher's own experience to help each child develop their musicality and interest.
      </div>
      <div class="programs__lessons-description">
        We offer a well-rounded musical experience in our private lessons which cover 5 fundamental elements of music learning: performing skills, music theory, music history and appreciation, ear training, and sight-reading.
      </div>
      <div class="programs__lessons-description">
        Every child has a different attention span, so the best way to determine a lesson length is to schedule a trial lesson with us and our teachers may recommend the lesson length based on their experience. To maintain your child's interest in the instrument and based on children's limited attention span, we recommend the following:
      </div>
      <div class="programs__lessons-age-time-container">
        <div class="programs__lessons-age-time">
          <div class="programs__lessons-age">Age 3-7</div>
          <div class="programs__lessons-time">30 minutes</div>
        </div>
        <div class="programs__lessons-age-time">
          <div class="programs__lessons-age">Age 8+</div>
          <div class="programs__lessons-time">45 minutes</div>
        </div>
        <div class="programs__lessons-age-time">
          <div class="programs__lessons-age">Adult</div>
          <div class="programs__lessons-time">60 minutes</div>
        </div>
      </div>
      <router-link to="/apply" class="programs__lessons-signup">{{translation.signup}}</router-link>
    </div>

    <!-- Group Lessons -->
    <div class=programs__lessons-wrapper>
      <div class="programs__group-lessons-banner">
        <div class="programs__banner-content">GROUP LESSONS</div>
      </div>
      <div class="programs__subtitle left">INSTRUMENTS</div>
      <div class="programs__lessons-instrument-container">
        <div v-for="instrument in instruments" class="programs__lessons" :key="instrument.id">
          <div class="programs__lessons-img-container">
            <img :src="instrument.img" alt="" class="programs__lessons-img">  
          </div>
          <div class="programs__lessons-title">{{instrument.name}}</div>
        </div>
      </div>
      <div class="programs__lessons-description">
        Group classes provide opportunities for ensemble playing and group activities which not only encourage social interaction, but can also boost leadership spirit, discipline, and good attitude towards sharing and team work. Our group class teaching methods improve the musicality, interest and appreciation of young students by stimulating different senses (visual, verbal, auditory and movements). Group classes can be a fun start for young children (aged 2-4), planting seeds of interest before the chid is ready for 1-on-1 lessons.
      </div>
      <router-link to="/apply" class="programs__lessons-signup">{{translation.signup}}</router-link>
    </div>

    <!-- Early Years -->
    <div class="programs__early-years-wrapper">
      <div class="programs__early-years-banner">
        <div class="programs__banner-content">EARLY YEARS</div>
      </div>
      <div class="programs__early-years-program-container">
        <div v-for="program in translatedPrograms" class="programs__program-container" :key="program.id">
          <div class="programs__program-container-img" :style="{backgroundImage: `url(${program.photo})`}"></div>
          <div>
            {{program.title}}
          </div>
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
  margin-bottom: 15px;
}

.programs__banner-bar-link-active {
  border-bottom: 3px solid white;
}

.programs__subtitle {
  color: $concord-orange;
  font-size: 15px;
  margin: 5px;
}

.left {
  width: 75%;
  text-align: left;
  margin: 15px 0px;
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

.programs__OC-image {
  height: 500px;
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
  height: 15vh;
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
  height: 15vh;
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
  margin: 15px 0;
}

.programs__lessons-age-time-container {
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0;
}

.programs__lessons-age-time {
  width: 200px;
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
  height: 15vh;
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
  margin: 15px 0;
  width: 100%;
  overflow: auto;
}

.programs__program-container {
  border: 1px solid black;
  margin: 15px 50px;
  flex-shrink: 0;
}

.programs__program-container-img {
  height: 250px;
  width: 250px;
  background-size: cover;
  background-position: cover;
  overflow: hidden;
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

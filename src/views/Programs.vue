<script>
import translation from '../translations/translation'
import globalData from '../main'
import instruments from '../objects/instruments'
import privateInstruments from '../objects/private_instruments'
import programs from '../objects/programs_programs'
import onlinePrograms from '../objects/online'

export default {
  name: 'programs',
  components: {
  },

  data () {
    return {
      onlinePrograms: onlinePrograms,
      instruments: instruments[globalData.language],
      privateInstruments: privateInstruments,
      video: {
        active: 0,
        videos: ['https://concord-assets.oss-cn-beijing.aliyuncs.com/video_poco-poco.mov', 'https://concord-assets.oss-cn-beijing.aliyuncs.com/videos/video-create.mp4', 'https://concord-assets.oss-cn-beijing.aliyuncs.com/201003%20updates/CLAP%20%E5%AE%A3%E4%BC%A0%E7%89%87.mov'],
        thumbnails: ['https://concord-assets.oss-cn-beijing.aliyuncs.com/videos/thumbnail-poco.png', 'https://concord-assets.oss-cn-beijing.aliyuncs.com/videos/thumbnail-create.png', 'https://concord-assets.oss-cn-beijing.aliyuncs.com/201003%20updates/clap-thumbnail.png']
      },
      posters: {
        active: 0,
        src: ['https://concord-assets.oss-cn-beijing.aliyuncs.com/christmas-2020.jpg','https://concord-assets.oss-cn-beijing.aliyuncs.com/2020%20camp%20posters/choir-camp.jpeg', 'https://concord-assets.oss-cn-beijing.aliyuncs.com/2020%20camp%20posters/coco-camp.jpg']
      }
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

  methods: {
    scrollToSection (e) {
      let target = document.getElementById(e.target.dataset.id)
      let rects = target.getClientRects()
      let top = rects[0].top

      window.scrollTo(0, top)
    },

    toggleVideo (e) {
      let active = e.srcElement.dataset.id;
      this.video.active = active;
    },

    togglePoster (e) {
      let active = e.srcElement.dataset.id;
      this.posters.active = active;
    }
  }
}
</script>

<template>
  <div class="programs__wrapper">

    <!-- Banner -->
    <div class="programs__banner"></div>
    <div class="programs__banner-bar">
      <div class="banner-bar-link" data-id="new" @click="scrollToSection">{{translation.newProgramsSubtitle}}</div>
      <div class="banner-bar-link" data-id="programs" @click="scrollToSection">{{translation.ourPrograms}}</div>
      <div class="banner-bar-link" data-id="camps" @click="scrollToSection">{{translation.campsTitle}}</div>
      <div class="banner-bar-link" data-id="online" @click="scrollToSection">{{translation.onlineTitle}}</div>
      <div class="banner-bar-link" data-id="schedule" @click="scrollToSection">{{translation.schedule}}</div>
      <!-- Mobile Banner Title -->
      <div class="programs__mobile-banner-title">{{translation.programs}}</div>
    </div>

  <!-- Video -->
  <div class="content-wrapper" id="new">
    <div class="container-media">
      <div class="container-title">
        <div class="subtitle">{{translation.newProgramsSubtitle}}</div>
        <div :class="video.active == 0 ? 'title active' : 'title'" data-id="0" @click="toggleVideo">{{translation.pocoTitle}}</div>
        <div :class="video.active == 1 ? 'title active' : 'title'" data-id="1" @click="toggleVideo">{{translation.createTitle}}</div>
        <div :class="video.active == 2 ? 'title active' : 'title'" data-id="2" @click="toggleVideo">{{translation.clapTitle}}</div>
      </div>

      <div class="container-src">
        <video controls v-bind:poster="video.thumbnails[video.active]"
        v-bind:src="video.videos[video.active]">
        </video>
      </div>
    </div>
  </div>
    <!-- Courses -->
    <div class="content-wrapper" id="programs">
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
    <div class="programs__early-years-wrapper" id="earlyYears">
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
    <div class=programs__lessons-wrapper id="group">
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
          <div class="programs__program-container-img" :style="{backgroundImage: `url(${program.photo})`}" :class="{'middle-top': program.id === 2}">
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
    <div class="wrapper" id="supplemental">
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
    <div class="programs__lessons-wrapper" id="private">
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
        <div class="programs__curriculum-box">
          <div class="programs__curriculum-title">{{translation.otherOpportunitiesTitle}}</div>
          <div class="programs__curriculum-description">{{translation.otherOpportunitiesDescription}}</div>
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

    <!-- Camps -->
    <div class="content-wrapper" id="camps">
      <div class="programs__camps-banner">
        <div class="programs__banner-content">{{translation.campsTitle}}</div>
      </div>
      <div class="programs__subtitle">{{translation.summary}}</div>
      <div class="programs__lessons-description">{{translation.campsDescription}}</div>
      <div class="programs__subtitle">{{translation.reasons}}</div>
      <div class="programs__lessons-description">{{translation.campsReasons}}</div>

      <div class="container-media my-5">
        <div class="container-title">
          <div class="subtitle">{{translation.campSubtitle}}</div>
          <div :class="posters.active == 0 ? 'title active' : 'title'" data-id="0" @click="togglePoster">{{translation.campWinter}}</div>
          <div :class="posters.active == 1 ? 'title active' : 'title'" data-id="1" @click="togglePoster">{{translation.campChoir}}</div>
          <div :class="posters.active == 2 ? 'title active' : 'title'" data-id="2" @click="togglePoster">{{translation.campCoco}}</div>
        </div>

        <div class="container-src">
          <img v-bind:src="posters.src[posters.active]">
        </div>
      </div>
    </div>

    <!-- Online Learning -->
    <div class="content-wrapper" id="online">
      <div class="content-banner" style="background-image: url('https://concord-assets.oss-cn-beijing.aliyuncs.com/201003%20updates/4.jpg')">
        <div class="programs__banner-content">{{translation.onlineTitle}}</div>
      </div>

      <div class="programs__subtitle">{{translation.onlineSubtitle}}</div>
      <div class="programs__lessons-description">{{translation.onlineContent}}</div>
      <img src="https://concord-assets.oss-cn-beijing.aliyuncs.com/201003%20updates/Screen%20Shot%202020-10-18%20at%2011.10.58%20AM.png" alt="">

      <div class="programs__subtitle">{{translation.onlineSubtitle2}}</div>
      <div class="programs__lessons-description">{{translation.onlineContent2}}</div>

      <!-- instrumental -->
      <div class="programs__subtitle">{{translation.onlineInstrumental}}</div>
      <div class="program__container-icons">
        <img v-for="item in onlinePrograms.instrumental" :src="item" alt="">
      </div>

      <!-- foundation -->
      <div class="programs__subtitle">{{translation.onlineFoundation}}</div>
      <div class="program__container-icons">
        <img v-for="item in onlinePrograms.foundation" :src="item" alt="">
      </div>

      <!-- creative -->
      <div class="programs__subtitle">{{translation.onlineCreative}}</div>
      <div class="program__container-icons">
        <img v-for="item in onlinePrograms.creative" :src="item" alt="">
      </div>

      <!-- distance -->
      <div class="programs__subtitle">{{translation.onlineDistance}}</div>
      <div class="program__container-icons">
        <img v-for="item in onlinePrograms.distance" :src="item" alt="">
      </div>
    </div>

    <!-- Schedule -->
    <div class="content-wrapper" id="schedule">
      <div class="subtitle">{{translation.schedule}}</div>
      <div class="content">{{translation.year}}</div>
      <img src="https://concord-assets.oss-cn-beijing.aliyuncs.com/201003%20updates/calendar-2021%20%28udpate%29.png">
      <a class="content" style="text-decoration: underline; font-size: 16px; margin: 20px 0;" target="_blank" href="https://concord-assets.oss-cn-beijing.aliyuncs.com/201003%20updates/Concord%20Music%20Calendar%202021.pdf">{{translation.schoolCalendar}}</a>
    </div>
  </div>
</template>

<style lang="scss">
@import '../assets/styles.scss';

#schedule > img {
  width: 56%;
}

#online > img {
  width: 56%;
}

.program__container-icons {
  width: 75%;
  display: flex;
  overflow: scroll;
}

.program__container-icons img {
  width: 240px;
  flex-grow: 0;
  flex-shrink: 0;
  margin: 16px 32px 16px 0;
  border-radius: 4px;
  box-shadow: 4px 4px 8px rgba(0,0,0,0.25);
  box-sizing: border-box;
}

.container-camp {
  display: flex;
  width: 75%;
}

.container-media {
  display: flex;
  justify-content: space-between;
  width: 75%;

  .container-src {
    width: 64%;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    video {
      width: 90%;
      box-shadow: 2px 2px 4px rgba(0,0,0,0.2);
      border-radius: 4px;
    }

    img {
      width: 80%;
      border-radius: 4px;
      box-shadow: 2px 2px 4px rgba(0,0,0,0.2);

    }
  }

  .container-title {
  width: 32%;
  flex-shrink: 0;
  flex-grow: 0;

    p {
      font-size: 16px;
      text-align: left;
      color: $half-black;
    }

    .active {
      background: $concord-orange;
      color: white !important;
    };

    .title {
      text-align: left;
      font-size: 16px;
      padding: 16px 8px;
      color: $concord-orange;
      border-radius: 4px;
      margin: 16px 0;
      cursor: pointer;
      transition: all .25s;

      &:hover {
        background: $concord-orange;
        color: white;
      };
    }
  }
}

.schedule {
  margin: 0 32px;
  flex-grow: 1;
  flex-shrink: 0 !important;
  position: relative;
}

.schedule img {
  height: 320px;
  object-fit: cover;
  box-shadow: 2px 2px 4px rgba(0,0,0,0.2);
}

.top {
  background-position: top !important;
}

.middle-top {
  background-position: 0 -25px !important;
}

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
  background: url('https://concord-assets.oss-cn-beijing.aliyuncs.com/programs__little-beathoven-ear-training.jpg');
  background-size: cover;
  background-position: center;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.25);
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
  background: linear-gradient(rgba(0, 0, 0, 0.15)), url('https://concord-assets.oss-cn-beijing.aliyuncs.com/Student%20Teacher%20Piano.jpeg');
  background-size: cover;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.25);
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.programs__camps-banner {
  width: 100%;
  height: 25vh;
  background-image: url('https://concord-assets.oss-cn-beijing.aliyuncs.com/Boy%20Student%20Violen%202%20copy.jpg');
  background-size: cover;
  background-position: 0 55%;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.25);
  display: flex;
  align-items: center;
  justify-content: center;
}

.content-banner {
  width: 100%;
  height: 25vh;
  background-size: cover;
  background-position: 0 55%;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.25);
  display: flex;
  align-items: center;
  justify-content: center;
}

 #online > img {
  width: 40%;
  margin: 16px 0;
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
  text-shadow: 2px 2px 4px rgba(0,0,0,0.25);
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
  text-shadow: 2px 2px 4px rgba(0,0,0,0.25);
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
  background: linear-gradient(rgba(0, 0, 0, 0.15)), url('https://concord-assets.oss-cn-beijing.aliyuncs.com/early-years-banner.JPG');
  background-size: cover;
  background-position: 0 25%;
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
  flex-wrap: wrap;
  width: 80%;
}

.programs__curriculum-box {
  height: 150px;
  width: 300px;
  background-color: $concord-orange;
  border-radius: 4px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: .2s linear;
  box-shadow: 4px 4px 8px rgba(0,0,0,0.2);
  padding: 16px;
  margin: 16px 0;
  box-sizing: border-box;
  &:hover {
    background: white;
    color: $concord-orange;
    /*border: 1px solid $concord-orange;*/
    border: none;
    box-shadow: none;
  };
  &:active {
    background: white;
    color: $concord-orange;
    border: 1px solid $concord-orange;
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
  font-size: 14px;

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
  .container-media {
    flex-direction: column;
    justify-content: center;
    width: 90%;

    .container-title {
      width: 100%;
    }

    .container-src {
      width: 100%;

      video, img {
        width: 100%;
      }
    }
  }

  #schedule > img {
    width: 90%;
  }

  #online > img {
    width: 90%;
  }

  .program__container-icons {
    width: 90%;
    display: block;
  }

  .program__container-icons img {
    width: 100%;
  }


  .programs__banner {
    background-position: unset;
  }

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

  .programs__camps-banner {
    background-position: center;
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

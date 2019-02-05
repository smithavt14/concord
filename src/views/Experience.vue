<script>
import translation from '@/translations/translation'
import globalData from '@/main'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import photos from '@/objects/photos'

export default {
  name: 'experience',

  components: {
    swiper, 
    swiperSlide
  },

  data () {
    return {
      active: 'classroom',
      swiperOptionTop: {
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      swiperOptionThumbs: {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true
      },
      photos: photos
    }
  },

  computed: {
    translation () {
      return translation.experience[globalData.language]
    }
  },

  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.swiper
      const swiperThumbs = this.$refs.swiperThumbs.swiper
      swiperTop.controller.control = swiperThumbs
      swiperThumbs.controller.control = swiperTop
    })
  }
}

</script>

<template>
  <div class="wrapper">
    <!-- Banner -->
    <div class="banner experience__banner"></div>
    <div class="banner-bar">
      <div class="banner-bar-link">{{translation.testimonials}}</div>
      <div class="banner-bar-link">{{translation.photos}}</div>
      <div class="banner-bar-link">{{translation.videos}}</div>

      <!-- Mobile Banner Link -->
      <div class="banner-bar-link-mobile">{{translation.experience}}</div>
    </div>

    <!-- Experience -->
    <div class="content-wrapper">
      <div class="experience__EX-container">
        <div class="experience__EX-container-left">
          <div class="subtitle">{{translation.exsubtitle}}</div>
          <div class="experience__EX-container-left-title">{{translation.extitle}}</div>
          <div class="experience__EX-container-left-content">{{translation.excontent}}</div>
        </div>
        <div class="experience__EX-container-right">
          <div class="experience__EX-container-right-image"></div>
        </div>
      </div>
    </div>

    <!-- Testimonials -->
    <div class="content-wrapper">
      <div class="title">{{translation.testimonials}}</div>
      <div class="experience__testimonials-title">What do students and parents have to say about us?</div>
      <div class="experience__testimonials-container">

        <!-- Testimonial Left -->
        <div class="experience__testimonials-container-side">
          <div class="experience__testimonial left-container">
            <div class="experience__testimonial-photo left-photo"></div>
            <div class="experience__testimonial-name">Caroline</div>
            <div class="experience__testimonial-role">Private Violin Student</div>
            <div class="experience__testimonial-time">Fall 2018</div>
            <div class="experience__testimonial-quote">Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            <div class="experience__testimonial-parent">- Mary Zhao (Mother)</div>
          </div>
        </div>

        <!-- Testimonial Right -->
        <div class="experience__testimonials-container-side">
          <div class="experience__testimonial right-container">
            <div class="experience__testimonial-photo right-photo"></div>
            <div class="experience__testimonial-quote">Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            <div class="experience__testimonial-parent right-content">- Mary Zhao (Mother)</div>
            <div class="experience__testimonial-name">Caroline</div>
            <div class="experience__testimonial-role">Private Violin Student</div>
            <div class="experience__testimonial-time">Fall 2018</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Photos -->
    <div class="content-wrapper">
      <div class="title">{{translation.photos}}</div>
        <div class="experience__swiper-container">
          <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
            <swiper-slide v-for="photo in photos" :key="photo">
              <img :src="photo" class="experience__photos-slide">
            </swiper-slide>
            <div class="swiper-button-next swiper-button-black" slot="button-next"></div>
            <div class="swiper-button-prev swiper-button-black" slot="button-prev"></div>
          </swiper>
          <!-- swiper2 Thumbs -->
          <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
            <swiper-slide v-for="photo in photos" :key="photo">
              <img :src="photo" class="experience__photos-slide">
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../assets/styles.scss';
@import '../assets/swiper.css';

.experience__banner {
  background-image: linear-gradient(rgba(255, 255, 255, 0.20)), url('https://res.cloudinary.com/dbbfpai4q/image/upload/v1549173834/Concord/Student_Teacher_Reading.jpg');
}

/* ----- Experience ----- */

.experience__EX-container-right-image {
  background-image: url('https://res.cloudinary.com/dbbfpai4q/image/upload/v1544007919/Child_Reading.jpg');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  height: 90%;
  width: 90%;
}

.experience__EX-container-left-title {
  font-size: 20px;
  margin-bottom: 5px;
}

.experience__EX-container-left-content {
  font-size: 15px;
  color: gray;
  margin-bottom: 10px;
}

/* ----- Testimonials ----- */

.experience__testimonial {
  background-color: white;
  width: 350px;
  height: 225px;
  box-shadow: 4px 4px 15px rgba(250, 153, 20, 0.15);
  position: relative;
  padding: 15px;
}

.left-container {
  text-align: right;
  margin-bottom: 50px;
}

.right-container {
  text-align: left;
  box-shadow: -4px -4px 15px rgba(250, 153, 20, 0.15);
  margin-top: 50px;
}

.right-photo {
  position: absolute;
  bottom: -20px;
  right: -5px;
}

.left-photo {
  position: absolute;
  top: -20px;
  left: 5px;
}

.experience__testimonial-photo {
  background-image: url('https://res.cloudinary.com/dbbfpai4q/image/upload/v1534483118/pgpo4l14din9tnsroiai.jpg');
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  height: 100px;
  width: 100px;
}

.experience__testimonial-name {
  font-size: 28px;
  font-weight: bold;
}

.experience__testimonial-role {
  font-size: 15px;
  color: $concord-orange;
}

.experience__testimonial-time {
  font-size: 15px;
  color: gray;
}

.experience__testimonial-quote {
  font-size: 16px;
  color: gray;
  margin: 5px 0;
}

.experience__testimonial-parent {
  font-size: 15px;
  color: $concord-orange;
}

.experience__photos-wrapper {
  width: 100%;
  background: white;
  box-shadow: 5px 5px 50px #EEEEEE;
  margin: 15px 0;
}

/* ---- Photos ----- */

.experience__photos-photo {
  height: 100px;
  background: black;
  color: white;
  margin: 10px 0;
}

.swiper-slide {
  background-size: cover;
  background-position: center;
  margin-bottom: 25px;
}

.experience__photos-slide {
  object-fit: contain;
  height: 100%;
  box-shadow: 2px 2px 10px gray;
}

.gallery-top {
  height: 80% !important;
  width: 90%;
  background: white;
}

.gallery-thumbs {
  height: 20%!important;
  width: 90%;
  box-sizing: border-box;
  padding: 10px 0;
  background: white;
}

.gallery-thumbs .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}

.gallery-thumbs .swiper-slide-active {
  opacity: 1;
}

.experience__swiper-container {
  height: 500px;
  width: 100%;
}

/* ---------- Large Screen Styles ----------*/

@media screen and (min-width: 751px) {

  .experience__mobile-banner-title {
    display: none;
  }

  .experience__banner-bar-link {
    margin: 0 25px;
  }

  .experience__EX-container {
    width: 100%;
    height: 400px;
    background-color: white;
    display: flex;
    justify-content: center;
  }

  .experience__EX-container-left {
    height: 100%;
    width: 50%;
    max-width: 450px;
    padding: 20px;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .experience__EX-container-right {
    height: 100%;
    width: 50%;
    max-width: 450px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .experience__testimonials-container {
    display: flex;
    justify-content: center;
    max-width: 1220px;
  }

  .experience__testimonials-container-side {
    width: 100%;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 25px;
  }

  .experience__container {
    display: flex;
    margin: 25px 0px;
    padding: 0 20px;
  }

  .experience__photos-side-bar {
    height: 100%;
    width: 25%;
    text-align: left;
    padding-left: 20px;
  }

  .experience__photos-side-bar-selection {
    width: 80%;
    margin: 10px 0;
    padding-left: 10px;
    text-align: left;
  }

  .side-bar-selection-active {
    border-left: 5px solid $concord-orange;
    padding-left: 5px;
    font-weight: bolder;
    color: $concord-orange;
  }
}

/* ---------- Small Screen Styles ----------*/

@media screen and (max-width: 750px) {

  .experience__mobile-banner-title {
    color: white;
    font-size: 25px;
  }

  .experience__banner-bar-link {
    display: none;
  }

  .experience__EX-container {
    width: 100vw;
    background-color: white;
    display: flex;
    flex-direction: column;
  }

  .experience__EX-container-left {
    height: 100%;
    padding: 20px;
    width: 100%;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .experience__EX-container-right {
    height: 100%;
    padding: 20px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .experience__testimonials-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .experience__testimonials-container-side {
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .expereince__container {
    margin: 25px 0px;
    padding: 0 20px;
  }

  .experience__photos-side-bar {
    align-items: center;
  }

  .experience__photos-side-bar-selection {
    width: 100%;
    margin: 10px 0;
    text-align: center;
  }

  .side-bar-selection-active {
    font-weight: bolder;
    color: $concord-orange;
  }

  .experience__photos-slide {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
}

</style>

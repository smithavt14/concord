<script>
import translation from '@/translations/translation'
import globalData from '@/main'

export default {
  name: 'experience',

  computed: {
    translation () {
      return translation.experience[globalData.language]
    }
  }

};
</script>

<template>
 	<div class="experience__wrapper">
    <!-- Banner -->
    <div class="experience__banner"></div>
    <div class="experience__banner-bar">
      <div class="experience__banner-bar-link">{{translation.testimonials}}</div>
      <div class="experience__banner-bar-link">{{translation.photos}}</div>
      <div class="experience__banner-bar-link">{{translation.videos}}</div>

      <!-- Mobile Banner Link -->
      <div class="experience__banner-bar-link dropDown">{{translation.dropDown}}</div>
    </div>

    <!-- Experience -->
    <div class="experience__EX-container">
      <div class="experience__EX-container-left">
        <div class="experience__EX-container-left-subtitle">{{translation.exsubtitle}}</div>
        <div class="experience__EX-container-left-title">{{translation.extitle}}</div>
        <div class="experience__EX-container-left-content">{{translation.excontent}}</div>
      </div>
      <div class="experience__EX-container-right">
        <div class="experience__EX-container-right-image"></div>
      </div>
    </div>

    <!-- Testimonials -->
    <div class="experience__testimonials-container">
      <div class="experience__testimonials-subtitle"></div>
      <div class="experience__testimonials-title"></div>

      <!-- Testimonials - Carousel -->
      <b-carousel id="carousel1" style="text-shadow: 1px 1px 2px #333;" controls indicators background="#ababab":interval="4000" img-width="1024" img-height="480" v-model="slide" @sliding-start="onSlideStart" @sliding-end="onSlideEnd">

        <!-- Testimonials - Carousel Slide -->
        <b-carousel-slide>
          <div class="experience__testimonials-testimonial-container">
            <div class="experience__testimonials-testimonial-photo"></div>
            <div class="experience__testimonials-testimonial-name"></div>
            <div class="experience__testimonials-testimonial-role"></div>
            <div class="experience__testimonials-testimonial-enrollment"></div>
            <div class="experience__testimonials-testimonial-quote"></div>
            <div class="experience__testimonials-testimonial-parent"></div>
          </div>
        </b-carousel-slide>
      </b-carousel>
    </div>
	</div>
</template>

<style lang="scss">
@import '../assets/styles.scss';

.experience__wrapper {
  background-image: url('../assets/images/symphony.png');
  background-repeat: repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.experience__banner {
  background-image: url('https://res.cloudinary.com/dbbfpai4q/image/upload/v1544007919/Experience_Banner.jpg');
  background-size: cover;
  background-position: center;
  height: 50vh;
  width: 100%;
}

.experience__banner-bar {
  height: 80px;
  width: 100vw;
  background-color: $concord-orange;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.experience__banner-bar-link {
  margin: 0 25px;
}

.expereince__banner-bar-link-active {
  border-bottom: 3px solid white;
}


.experience__banner-bar-btn {
  width: 120px;
  font-size: 18px;
  padding: 10px 0;
  border: 2px solid white;
  border-radius: 50px;
  text-decoration: none;
  color: white;
  &:hover {
    background-color: white;
    color: $concord-orange;
    text-decoration: none;
  }
}

@media screen and (min-width: 751px) {
  .experience__EX-container {
    width: 90vw;
    height: 500px;
    background-color: $light-gray;
    margin: 25px 0;
    display: flex;
  }

  .experience__EX-container-left {
    height: 100%;
    width: 50%;
    padding: 20px;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .experience__EX-container-right {
    height: 100%;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
}

@media screen and (max-width: 750px) {
  .experience__EX-container {
    width: 90vw;
    background-color: $light-gray;
    margin: 25px 0;
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
}

.experience__EX-container-right-image {
  background-image: url('https://res.cloudinary.com/dbbfpai4q/image/upload/v1544007919/Child_Reading.jpg');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  height: 90%;
  width: 90%;
}

.experience__EX-container-left-subtitle {
  color: $concord-orange;
  font-size: 15px;
  margin-bottom: 5px;
}

.experience__EX-container-left-title {
  font-size: 25px;
  margin-bottom: 5px;
}

.experience__EX-container-left-content {
  font-size: 15px;
  color: gray;
  margin-bottom: 10px;
}
</style>

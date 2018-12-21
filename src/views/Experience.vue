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
    <div class="experience__testimonials-wrapper">
      <div class="experience__testimonials-subtitle">TESTIMONIALS</div>
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
  max-width: 1220px;
}

.experience__banner-bar {
  height: 80px;
  width: 100vw;
  max-width: 1220px;
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
    height: 400px;
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

.experience__testimonials-wrapper {
  width: 100vw;
  margin: 25px 0;
  padding: 25px;
  background-color: white;
}

.experience__testimonials-subtitle {
  color: $concord-orange;
  font-size: 15px;
  margin: 5px;
}

.experience__testimonials-title {
  font-size: 25px;
  margin: 5px;
}

@media screen and (max-width: 750px) {
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
}

@media screen and (min-width: 751px) {
  .experience__testimonials-container {
      display: flex;
      justify-content: center;
      max-width: 1440px;
    }

  .experience__testimonials-container-side {
    width: 100%;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

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

.right-shadow {
  
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

</style>

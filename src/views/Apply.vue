<script>
import translation from '@/translations/translation'
import globalData from '@/main'
import applyPrograms from '@/objects/apply_programs'

export default {
  name: 'apply',

  computed: {
    translation () {
      return translation.apply[globalData.language]
    },
    programs () {
      return applyPrograms[globalData.language]
    }
  }
}
</script>

<template>
  <div class="wrapper">
    <div class="banner apply__banner"></div>
    <div class="banner-bar">
    	<div class="banner-bar-link"></div>
    	<div class="banner-bar-link-mobile"></div>
    </div>
    <!-- Application Form -->
    <div class="content-wrapper">
      <div class="title">APPLY TO CONCORD MUSIC</div>
      <div class="apply__sub-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam dicta provident eveniet eos, quasi sit corporis praesentium quam laboriosam, ea animi, dolores reprehenderit possimus fugiat perferendis. Fuga officiis fugit beatae!</div>
      <!-- Form -->
      <form action="https://formspree.io/smithavt14@gmail.com" method="POST" style="display: flex; flex-direction: column; align-items: center">
        <div class="apply__form-container">
          <!-- Name -->
          <div class="apply__form-box">
            <input type="text" name="name" id="name" class="apply__form-input" placeholder="Student's Full Name" required>  
          </div>
          <!-- Age -->
          <div class="apply__form-box">
            <input type="number" name="age" id="age" class="apply__form-input" placeholder="Student's Age" required>
          </div>
          <!-- Program -->
          <div class="apply__form-box">
            <input type="text" name="age" id="program" class="apply__form-input" placeholder="Program of Interest" list="programs" required>
            <datalist id="programs">
              <option v-for="program in programs">{{program.title}}</option>
            </datalist>
          </div>
          <!-- Parent Name -->
          <div class="apply__form-box">
            <input type="text" name="parent_name" id="name" class="apply__form-input" placeholder="Parent's Full Name" required>
          </div>
          <!-- Parent WeChat -->
          <div class="apply__form-box">
            <input type="text" name="parent_wechat" id="name" class="apply__form-input" placeholder="Parent's WeChat ID" required>
          </div>
          <!-- Parent Phone -->
          <div class="apply__form-box">
            <input type="tel" name="parent_phone" id="name" class="apply__form-input" placeholder="Phone Number" required>
          </div>
        </div>
        <input type="submit" class="apply__bottom-banner-link orange" value="Submit">
      </form>
    </div>

    <div class="content-wrapper">
      <div class="apply__bottom-banner">
        <div class="apply__bottom-banner-title">
          Give your child a wonderful start with music
        </div>
        <router-link to="/programs" class="apply__bottom-banner-link">SEE COURSES</router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../assets/styles.scss';

.apply__banner {
  background-image: linear-gradient(rgba(255, 255, 255, 0.20)), url('https://res.cloudinary.com/dbbfpai4q/image/upload/v1549173833/Concord/Student_Girl_Violen.jpg');
}

.apply__bottom-banner {
  height: 500px;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.30)), url('https://res.cloudinary.com/dbbfpai4q/image/upload/v1549173834/Concord/Students_Violen_Teacher_2.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.apply__bottom-banner-title {
  color: white;
  font-size: 50px;
  font-weight: bold;
  width: 50%;
}

.apply__bottom-banner-link {
  font-size: 15px;
  padding: 10px 15px;
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

.orange {
  border: 2px solid $concord-orange;
  color: $concord-orange;
  margin: 15px 0;
  padding: 15px 50px;
  background: white;
  &:hover {
    background-color: $concord-orange;
    color: white;
    text-decoration: none;
  }
}

.apply__sub-content {
  font-size: 15px;
  width: 75%;
}

.apply__form-container {
  width: 75%;
  margin: 25px 0;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
}

.apply__form-box {
  display: flex;
}

.apply__form-label {
  font-size: 20px;
}

.apply__form-input {
  border: none;
  border-bottom: 2px solid $concord-orange;
  width: 250px;
  margin: 30px 0;
  &:focus {
    outline: none;
  }
}
</style>

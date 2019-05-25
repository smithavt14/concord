<script>
import translation from '../translations/translation'
import globalData from '../main'
import applyPrograms from '../objects/apply_programs'

export default {
  name: 'apply',

  computed: {
    translation () {
      return translation.apply[globalData.language]
    },
    programs () {
      return applyPrograms[globalData.language]
    }
  },

  data () {
    return {
      modal: {
        success: false,
        error: false
      }
    }
  },
}
</script>

<template>
  <div class="wrapper">
    <div class="banner apply__banner"></div>
    <div class="banner-bar">
      <div class="banner-bar-link">{{translation.application_form}}</div>
      <div class="banner-bar-link-mobile">{{translation.application_form}}</div>
    </div>

    <!-- Application Form -->
    <div class="content-wrapper">
      <!-- Success Alert -->
      <div class="subtitle">{{translation.title}}</div>
      <div class="apply__sub-content">{{translation.content}}</div>
      <!-- Form -->
      <form id="application" action="https://formspree.io/info@concord-music.com" method="POST" style="display: flex; flex-direction: column; align-items: center">
        <div class="apply__form-container">
          <!-- Student Name -->
          <div class="apply__form-box">
            <input type="text" name="student_name" id="student_name" class="apply__form-input" :placeholder="translation.student_name" required>
          </div>
          <!-- Age -->
          <div class="apply__form-box">
            <input type="number" name="age" id="age" class="apply__form-input" :placeholder="translation.student_age" required>
          </div>
          <!-- Program -->
          <div class="apply__form-box">
            <input type="text" name="program" id="program" class="apply__form-input" :placeholder="translation.program" list="programs" required>
            <datalist id="programs">
              <option v-for="program in programs">{{program.title}}</option>
            </datalist>
          </div>
          <!-- Parent Name -->
          <div class="apply__form-box">
            <input type="text" name="parent_name" id="name" class="apply__form-input" :placeholder="translation.parent_name" required>
          </div>
          <!-- Parent WeChat -->
          <div class="apply__form-box">
            <input type="text" name="parent_wechat" id="name" class="apply__form-input" :placeholder="translation.parent_wechat" required>
          </div>
          <!-- Parent Phone -->
          <div class="apply__form-box">
            <input type="tel" name="parent_phone" id="name" class="apply__form-input" :placeholder="translation.parent_phone" required>
          </div>
        </div>
        <textarea id="comments" name="comments" rows="5" :placeholder="translation.comments" class="apply__form-input textarea"></textarea>
        <input id="submit" type="submit" class="apply__bottom-banner-link orange" :value="translation.submit">
      </form>
    </div>

    <!-- Bottom Banner -->
    <div class="content-wrapper">
      <div class="apply__bottom-banner">
        <div class="apply__bottom-banner-title">
          {{translation.bottom_banner_title}}
        </div>
        <router-link to="/programs" class="apply__bottom-banner-link">{{translation.see_courses}}</router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../assets/styles.scss';

.modal-title {
  font-size: 25px;
}

.modal-diretions {
  margin-bottom: 25px;
}

.application-success-alert {
  width: 100%;
}

.apply__banner {
  background-image: linear-gradient(rgba(255, 255, 255, 0.20)), url('http://concord-assets.oss-cn-beijing.aliyuncs.com/apply__experience__student-violen.jpg');
}

.apply__bottom-banner {
  height: 500px;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.30)), url('http://concord-assets.oss-cn-beijing.aliyuncs.com/apply__student-violen-teacher.jpg');
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
  width: 75%;
  margin-bottom: 25px;
}

.apply__bottom-banner-link {
  font-size: 15px;
  padding: 10px 15px;
  border: 2px solid white;
  border-radius: 50px;
  text-decoration: none;
  color: white;
  transition: .3s ease-in-out;
  &:hover {
    background-color: white;
    color: $concord-orange;
    text-decoration: none;
  }
}

.modal-btn {
  width: 50%;
  margin: 0 auto !important;
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

.cancel {
  border: 2px solid red;
  color: red;
  margin: 15px 0;
  padding: 15px 50px;
  background: white;
  &:hover {
    background-color: red;
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

.textarea {
  width: 50%;
  border: 2px solid $concord-orange;
  border-radius: 5px;
  padding: 10px;
}

/* ----- Small Screen Styles -----*/
@media screen and (max-width: 750px) {
  .apply__form-container {
    width: 95vw;
    margin: 25px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  .apply__form-box {
    display: flex;
    justify-content: center;
    width: 90%;
  }

  .apply__form-input {
    border: none;
    border-bottom: 2px solid $concord-orange;
    width: 90%;
    margin: 30px 0;
    &:focus {
      outline: none;
    }
  }

  .textarea {
    width: 90%;
    border: 2px solid $concord-orange;
    border-radius: 5px;
    padding: 10px;
  }

  .apply__bottom-banner {
    height: 400px;
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
    font-size: 30px;
    font-weight: bold;
    width: 90%;
  }
}
</style>

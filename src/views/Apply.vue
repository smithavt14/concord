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
  },

  data() {
    return {
      modal: {
        success: false,
        error: false
      }
    }
  },

  methods: {

    post(url, body, callback) {
      var req = new XMLHttpRequest()
      req.open("POST", url, true)
      req.setRequestHeader("Content-Type", "application/json")
      req.addEventListener("load", function () {
        if (req.status < 400) {
          callback(null, JSON.parse(req.responseText));
        } else {
          callback(new Error("Request failed: " + req.statusText));
        }
      })
      req.send(JSON.stringify(body))
    },

    success() {
      const submit = document.getElementById('submit')
      const form = document.getElementById('application')
      
      submit.disabled = false
      submit.blur()
      form.student_name.value = ''
      form.age.value = ''
      form.program.value = ''
      form.parent_name.value = ''
      form.parent_wechat.value = ''
      form.parent_phone.value = ''
      form.comments.value = ''
      this.modal.success = true
    },

    error(err) {
      const submit = document.getElementById('submit')
      alert('There was an error with sending your message, hold up until I fix it. Thanks for waiting.')
      submit.disabled = false
      console.log(err)
    },

    submit(e) {
      var self = this

      const submit = document.getElementById('submit')
      const form = document.getElementById('application')
      const url = 'https://u2lx33cvlh.execute-api.us-east-1.amazonaws.com/dev/email/send'

      e.preventDefault()
      submit.disabled = true
      const payload = {
        student_name: form.student_name.value,
        age: form.age.value,
        program: form.program.value,
        parent_name: form.parent_name.value,
        parent_wechat: form.parent_wechat.value,
        parent_phone: form.parent_phone.value,
        comments: form.comments.value
      }
      self.post(url, payload, function (err, res) {
        if (err) { return self.error(err) }
        self.success()
      })
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
      <form id="application" action="" method="POST" style="display: flex; flex-direction: column; align-items: center">
        <div class="apply__form-container">
          <!-- Student Name -->
          <div class="apply__form-box">
            <input type="text" name="student_name" id="student_name" class="apply__form-input" placeholder="Student's Full Name" required>  
          </div>
          <!-- Age -->
          <div class="apply__form-box">
            <input type="number" name="age" id="age" class="apply__form-input" placeholder="Student's Age" required>
          </div>
          <!-- Program -->
          <div class="apply__form-box">
            <input type="text" name="program" id="program" class="apply__form-input" placeholder="Program of Interest" list="programs" required>
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
        <textarea id="comments" name="comments" rows="5" placeholder="Please put any additional comments here" class="apply__form-input textarea"></textarea>
        <input id="submit" type="submit" class="apply__bottom-banner-link orange" value="Submit" @click="submit">
      </form>
    </div>
    
    <!-- Bottom Banner -->
    <div class="content-wrapper">
      <div class="apply__bottom-banner">
        <div class="apply__bottom-banner-title">
          Give your child a wonderful start with music
        </div>
        <router-link to="/programs" class="apply__bottom-banner-link">SEE COURSES</router-link>
      </div>
    </div>

    <!-- Submission Success Modal -->
    <b-modal v-model="modal.success">
      Submission Success!
    </b-modal>
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

.textarea {
  width: 50%;
  border: 2px solid $concord-orange;
  border-radius: 5px;
  padding: 10px;
}
</style>

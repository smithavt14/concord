<script>
import translation from '../translations/translation.js'
import globalData from '../main.js'

export default {
  name: 'Footer',

  props: {},

  computed: {
    translation () {
      return translation.footer[globalData.language]
    }
  },

  data () {
    return {
      activeInfo: '',
      modal: {
        location: false,
        wechat: false,
        phone: false,
        email: false
      }
    }
  },

  methods: {
    showIcon (event) {
      var id = event.target.dataset.id
      this.activeInfo === id ? this.activeInfo = null : this.activeInfo = id
    }
  }
}
</script>

<template>
  <div class="footer__container">
    <div class="footer__container-top">
      <div class="footer__container-top-left">{{translation.hello}}</div>
      <div class="footer__container-top-center">
        <div class="footer__container-top-center-box">
          <div class="footer__container-top-center-box-header">
            {{translation.phone}}
          </div>
          <div class="footer__container-top-center-box-subheader">
            021-52357398
          </div>
        </div>
        <div class="footer__container-top-center-box">
          <div class="footer__container-top-center-box-header">
            {{translation.wechat}}
          </div>
          <div class="footer__container-top-center-box-subheader">
            concordmusicadmin
          </div>
        </div>
        <div class="footer__container-top-center-box">
          <div class="footer__container-top-center-box-header">
            {{translation.email}}
          </div>
          <div class="footer__container-top-center-box-subheader">
            info@concord-music.com
          </div>
        </div>
        <div class="footer__container-top-center-box">
          <div class="footer__container-top-center-box-header">
            {{translation.location}}
          </div>
          <div class="footer__container-top-center-box-subheader">
            {{translation.address}}
          </div>
        </div>
      </div>
      <div class="footer__container-top-right">
        <img class="footer__container-top-right-qr" src="https://concord-assets.oss-cn-beijing.aliyuncs.com/concord-qr.png" alt="Concord QR">
      </div>
    </div>
    <div class="footer__container-bottom">
      <div>© 2019 Concord Music.</div>
      <div>沪ICP备19008777号</div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../assets/styles.scss';

.footer__container {
  background-color: $concord-orange;
  height: 300px;
  width: 100vw;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  position: relative;
}

.footer__container-top {
  height: 225px;
  width: 90%;
  border-bottom: 1px solid white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer__container-bottom {
  height: 75px;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 14px;
}


.footer__container-top-left {
  color: white;
  font-size: 60px;
}

.footer__container-top-center {
  color: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 45%;
}

.footer__container-top-center-box {
  width: 50%;
  margin: 10px 0;
  height: 100%;
  text-align: left;
}

.footer__container-top-center-box-header {
  font-size: 25px;
  font-weight: 500;
}

.footer__container-top-right-qr {
  height: 175px;
  border-radius: 10px;
}

@media screen and (max-width: 1000px) {
  .footer__container {
    height: unset;
  }

  .footer__container-top {
    height: unset;
    padding: 20px;
    flex-direction: column;
  }

  .footer__container-top-center {
    width: 100%;
  }

  .footer__container-top-center-box {
    width: 50%;
    height: unset;
    text-align: center;
  }

  .footer__container-top-right-qr {
    height: 175px;
    border-radius: 10px;
    margin: 20px 0;
  }
}

</style>

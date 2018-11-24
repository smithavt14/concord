<script>
import translation from '@/translations/translation'
import globalData from '@/main'

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
    <div class="footer__icon location" @click="modal.location = !modal.location"></div>
    <b-modal ok-only centered v-model="modal.location" title="Our Location | 我们地址" id="left-align">
      <div class="footer__location-photo"></div>
      <div><strong>{{translation.addressTitle}}</strong>{{translation.addressContent}}</div>
      <div><strong>{{translation.metroTitle}}</strong>{{translation.metroContent}}</div>
      <div><strong>{{translation.parkingTitle}}</strong>{{translation.parkingContent}}</div>
    </b-modal>
    <div class="footer__icon wechat" @click="modal.wechat = !modal.wechat"></div>
    <b-modal ok-only centered v-model="modal.wechat" title="Our WeChat | 我们微信">
      <div class="footer__wechat-qr"></div>
    </b-modal>
    <div class="footer__icon phone" @click="modal.phone = !modal.phone"></div>
      <b-modal ok-only centered v-model="modal.phone" title="Our Phone | 我们电话" id="left-align">
        <div><strong>Phone: </strong>021-5235-7398 / 156-1839-1413</div>
      </b-modal>
    <div class="footer__icon email" @click="modal.email = !modal.email"></div>
      <b-modal ok-only centered v-model="modal.email" title="Our Email | 我们邮箱" id="left-align">
        <div><strong>{{translation.emailContent}}</strong>info@concord-music.com</div>
      </b-modal>
  </div>
</template>

<style lang="scss">
@import '../assets/styles.scss';

.footer__container {
  background-color: $concord-orange;
  height: 80px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: right;
  flex-direction: row-reverse;
}

.footer__address {
  color: white;
}

.footer__location-photo {
  background-image: url('../assets/images/locationphoto.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  height: 250px;
  margin-bottom: 10px;
}

.footer__icon {
  height: 30px;
  width: 30px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin: 0 20px;
}

.footer__wechat-qr {
  background-image: url('../assets/images/concord-wechat.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  height: 250px;
}

.location {
  background-image: url('../assets/icons/location.svg');
}

.wechat {
  background-image: url('../assets/icons/wechat.svg');
}

.phone {
  background-image: url('../assets/icons/phone.svg');
}

.email {
  background-image: url('../assets/icons/email.svg');
}

#left-align {
  text-align: left;
}
</style>

<script>
import HomeNavBar from '@/components/HomeNavBar.vue'
import Footer from '@/components/footer.vue'

export default {
  name: 'app',

  components: {
    HomeNavBar,
    Footer
  }
}
</script>

<template>
  <div id="app">
    <HomeNavBar id="navbar"></HomeNavBar>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #FAFAFA;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

#navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  max-width: 1440px;
  margin: 0 auto;
  z-index: 10;
}

</style>

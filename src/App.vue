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
}

#navbar {
  position: fixed;
}
</style>

<script>
import HomeNavBar from '@/components/HomeNavBar.vue'
import Footer from '@/components/footer.vue'

export default {
  name: 'app',

  components: {
    HomeNavBar,
    Footer
  }
};
</script>

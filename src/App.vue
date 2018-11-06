<template>
  <div id="app">
    <BootstrapNavBar id="navbar"></BootstrapNavBar>
    <router-view/>
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
import BootstrapNavBar from '@/components/BootstrapNavBar.vue'

export default {
  name: 'app',

  components: {
    HomeNavBar,
    BootstrapNavBar
  }
};
</script>

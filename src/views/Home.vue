<template>
  <div class="home">
    <HomeNavBar></HomeNavBar>
    <HomePage></HomePage>
  </div>
</template>

<script>
// @ is an alias to /src
import HomePage from '@/components/homepage.vue';
import HomeNavBar from '@/components/HomeNavBar.vue';

export default {
  name: 'home',
  components: {
    HomeNavBar,
    HomePage,
  },
};
</script>

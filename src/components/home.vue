<script>
export default {
  name: 'home',
  props: {
    msg: String,
  },
};
</script>

<template>
  <div class="home__title">
    Hello World
  </div>
</template>

<style>
.home__title {
  font-size: 18px;
  color: green;
  font-weight: bold;
}
</style>

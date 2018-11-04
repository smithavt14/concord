<script>
export default {
  name: 'HomePage',
  props: {
    something: String,
  },

  data() {
    return {
      dataString: 'This is a string',
      dataObject: {},
      dataNumber: Number,
    };
  },

  beforeMount() {
    this.dataString = 'This is a data string!';
    this.dataObject = { name: 'Data Object', description: 'This is pretty fuckin\' cool' };
  },
};
</script>

<template>
  <div class="home__title">
    Hello World
    <div>{{dataString}}</div>
    <div>{{dataObject.name}}</div>
    <div>{{dataObject.description}}</div>
  </div>
</template>

<style lang="scss">
@import '../assets/styles.scss';

.home__title {
  font-size: 18px;
  color: $concord-orange;
  font-weight: bold;
}
</style>

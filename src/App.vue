<template>
  <div id="app">
    <topBar />
    <router-view />
  </div>
</template>

<script>

import topBar from '@/components/layout/topBar/topBar.vue';

export default {

  name: 'App',
  components: {
    topBar,
  },

};

</script>

<style lang="scss" src="./globalStyles/main.scss"/>

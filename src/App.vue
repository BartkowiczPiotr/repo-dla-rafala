<template>
  <div id="app">
    <topBar v-if="this.$route.path !== '/'" />
    <router-view id="app-view" />
  </div>
</template>

<script>

import topBar from './components/topBar/topBar.vue';

export default {
  
  components: {

    topBar,

  },

};

</script>

<style lang="scss" src="./globalStyles/default.scss"/>

<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
import EmptyLayout from './layouts/EmptyLayout'
import MainLayout from './layouts/MainLayout'
export default {
  components: {EmptyLayout},
  computed:{
    layout() {
      console.log(this.$route.meta)
      return 'empty-layout'
    }
  },
  comments: {
    EmptyLayout, MainLayout
  }
}
// hyi
</script>
<style lang="scss">
@import '~materialize-css/dist/css/materialize.min.css';
@import 'assets/index.css';
@import url('https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js');
@import url('https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
</style>

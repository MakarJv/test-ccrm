<template>
  <div>

    <div class="app-start-page-layout">
      <div class="page-title">
        <h3>Начальная страница</h3>
      </div>

      <Loader />

    </div>
  </div>
</template>
<script>
export default {
  name: 'start-page',
  metaInfo() {
    return {
      title: this.$title('Start_Page')
    }
  },
  data: () => ({
    date: new Date(),
    interval: null,
    dropdown: null,
  }),
  mounted() {
    this.interval = setInterval(() => {
      this.date = new Date()
    }, 1000)
    // eslint-disable-next-line no-undef
    this.dropdown = M.Dropdown.init(this.$refs.dropdown, {
      constrainWidth: false
    })
  },
  components: {}
}
</script>
<style lang="scss">
@import '~materialize-css/dist/css/materialize.min.css';
@import '../assets/index.css';
</style>
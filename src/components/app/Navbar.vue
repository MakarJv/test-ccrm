<template>
  <nav class="navbar orange lighten-1">
    <div class="nav-wrapper">
      <div class="navbar-left" >
        <a v-if="!this.$route.meta.custom" href="#" @click.prevent="$emit('click')">
          <i class="material-icons black-text">dehaze</i>
        </a>
        <span class="black-text">{{date | date('datetime')}}</span>
      </div>

      <ul class="right hide-on-small-and-down">
        <li v-if="!this.$route.meta.custom">
          <a
              class="dropdown-trigger black-text"
              href="#"
              data-target="dropdown"
              ref="dropdown"
          >
            {{name}}
            <i class="material-icons right">arrow_drop_down</i>
          </a>

          <ul id='dropdown' class='dropdown-content'>
            <li>
              <router-link to="/profile" class="black-text">
                <i class="material-icons">account_circle</i>{{ 'ProfileTitle' | localize }}
              </router-link>
            </li>
            <li class="divider" tabindex="-1"></li>
            <li>
              <a href="#" class="black-text" @click.prevent="logout">
                <i class="material-icons">assignment_return</i>{{ 'Exit' | localize }}
              </a>
            </li>
          </ul>
        </li>
        <li v-if="this.$route.meta.custom">
          <router-link class="black-text" to="/login">Войти</router-link>
        </li>
        <li v-if="this.$route.meta.custom">
          <router-link class="black-text" to="/register">Регистрация</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>


<script>
export default {
  data: () => ({
    date: new Date(),
    interval: null,
    dropdown: null,
  }),
  methods: {
    async logout() {
      await this.$store.dispatch('logout')
      this.$router.push('/?message=logout')
    }
  },
  computed: {
    name() {
      return this.$store.getters.info.name
    }
  },
  mounted() {
    this.interval = setInterval(() => {
      this.date = new Date()
    }, 1000)
    // eslint-disable-next-line no-undef
    this.dropdown = M.Dropdown.init(this.$refs.dropdown, {
      constrainWidth: false
    })
  },
  beforeDestroy() {
    clearInterval(this.interval)
    if (this.dropdown && this.dropdown.destroy) {
      this.dropdown.destroy()
    }
  }
}
</script>

<template>
  <b-navbar toggleable="lg" type="light">
    <b-container>
      <b-navbar-brand v-bind:to="{name: 'Home'}">
        <span style="font-weight: bold; color: #f22;">UI </span>
        <span style="font-weight: lighter;">Docker</span>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav right>
        <b-navbar-nav>
          <b-nav-item v-bind:to="{name: 'Home'}">Home</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  components: {
  },
  directives: {
  },
  filters: {
  },
  mixins: [
  ],
  props: {
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapState([]),
    ...mapGetters([])
  },
  watch: {
  },
  beforeMount() {
  },
  mounted() {
  },
  methods: {
    ...mapActions([]),
  },
  beforeDestroy() {
  },
  destroyed() {
  },
}
</script>

<style scoped>
.navbar {
  background-color: #efefef;
  /* box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.1) !important; */
}
</style>
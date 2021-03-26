<script>
import { mapActions, mapState } from 'vuex';
import Header from './components/Header/Header.vue';
import Placeholders from './components/Placeholders.vue';
import 'normalize.css';

export default {
  name: 'App',
  components: {
    Header,
    Placeholders,
  },
  methods: mapActions('weather', ['fetchWeatherData']),
  computed: mapState('weather', ['isLoading', 'hasError']),
  watch: {
    $route(to) {
      this.fetchWeatherData(to.params.woeid);
    },
  },
};
</script>

<template>
  <Header></Header>
  <Placeholders
    v-if="isLoading || hasError"
    :isLoading="isLoading"
    :hasError="hasError"
  ></Placeholders>
  <router-view v-else></router-view>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  @media screen and (prefers-reduced-motion: reduce) {
    transition: none;
    animation: none;
  }
}
:root {
  font-size: 10px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
}
body {
  background-color: #3a628c;
  padding: 0 10px 10px;
}
button {
  background: none;
  border: none;
  cursor: pointer;
}
@keyframes rotate {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(1turn);
  }
}
</style>

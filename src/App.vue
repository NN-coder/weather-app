<script>
import { mapActions } from 'vuex';
import Header from './components/Header.vue';
import CurrentConditions from './components/CurrentConditions.vue';
import TodayDetails from './components/TodayDetails/TodayDetails.vue';
import DailyForecast from './components/DailyForecast/DailyForecast.vue';
import 'normalize.css';

export default {
  name: 'App',
  components: {
    Header,
    CurrentConditions,
    TodayDetails,
    DailyForecast,
  },
  methods: mapActions(['fetchWeatherData']),
  created() {
    this.fetchWeatherData();
  },
};
</script>

<template>
  <Header></Header>
  <main>
    <CurrentConditions></CurrentConditions>
    <TodayDetails></TodayDetails>
    <DailyForecast></DailyForecast>
  </main>
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
</style>

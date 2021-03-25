<script>
import { mapGetters } from 'vuex';
import Card from './Card.vue';

export default {
  name: 'CurrentConditions',
  components: {
    Card,
  },
  computed: {
    ...mapGetters(['currentTime', 'todaysWeather']),
    temp() {
      return this.todaysWeather.temp.average;
    },
    weatherState() {
      return this.todaysWeather.weatherState;
    },
    wind() {
      return this.todaysWeather.wind;
    },
  },
};
</script>

<template>
  <Card is="section" class="current-conditions">
    <header>As of {{ currentTime }}</header>

    <div class="inner">
      <div>
        <div class="temp">{{ temp }}&#176;</div>
        <div class="weather-state">{{ weatherState.name }}</div>
      </div>
      <img
        :src="`https://www.metaweather.com/static/img/weather/${weatherState.abbr}.svg`"
        :alt="weatherState.name"
      />
    </div>

    <div>Wind: {{ wind.direction }}, {{ wind.speed }} m/h</div>
  </Card>
</template>

<style scoped lang="scss">
.current-conditions {
  padding: 12px;
  background-color: rgba(#fff, 0.1);
  color: #fff;
  font-size: 1.4rem;
  header {
    opacity: 0.7;
  }
  .inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 4px;
  }
  .temp {
    font-size: 5.6rem;
    font-weight: 500;
  }
  .weather-state {
    font-size: 1.6rem;
    font-weight: 700;
  }
  img {
    width: 60px;
    height: 60px;
  }
}
</style>

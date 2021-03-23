<script>
import { mapState } from 'vuex';
import Card from './Card.vue';

export default {
  name: 'CurrentConditions',
  components: {
    Card,
  },
  computed: {
    ...mapState(['isLoading', 'hasError', 'currentTime']),
    ...mapState({
      weatherStateName: ({ weatherState }) => weatherState.name,
      weatherStateAbbr: ({ weatherState }) => weatherState.abbr,
      windDirection: ({ wind }) => wind.direction,
      windSpeed: ({ wind }) => wind.speed,
      temp: ({ temp }) => temp.average,
    }),
  },
};
</script>

<template>
  <Card class="current-conditions">
    <div v-if="isLoading">Loading...</div>
    <div v-else-if="hasError">Something went wrong</div>

    <template v-else>
      <div class="header">As of {{ currentTime }}</div>

      <div class="inner">
        <div>
          <div class="temp">{{ temp }}&#176;</div>
          <div class="weather-state">{{ weatherStateName }}</div>
        </div>
        <img
          :src="`https://www.metaweather.com/static/img/weather/${weatherStateAbbr}.svg`"
          alt=""
        />
      </div>

      <div>Wind: {{ windDirection }}, {{ windSpeed }} m/h</div>
    </template>
  </Card>
</template>

<style scoped lang="scss">
.current-conditions {
  padding: 12px;
  background-color: rgba(#fff, 0.1);
  color: #fff;
  font-size: 1.4rem;
  .header {
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

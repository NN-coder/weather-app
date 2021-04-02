<script>
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
import { useI18n } from '../i18n';
import Card from './Card.vue';

export default defineComponent({
  name: 'CurrentConditions',
  components: {
    Card,
  },
  setup() {
    const { getters } = useStore();
    const { t } = useI18n();
    const todaysWeather = getters['weather/todaysWeather'];

    return {
      t,
      currentTime: computed(() => getters['weather/currentTime']),
      temp: computed(() => todaysWeather.temp.average),
      weatherState: computed(() => todaysWeather.weatherState),
      wind: computed(() => todaysWeather.wind),
    };
  },
});
</script>

<template>
  <Card is="section" class="current-conditions">
    <header>{{ t('currentConditions.header')(currentTime) }}</header>

    <div class="inner">
      <div>
        <div class="temp" v-html="t('currentConditions.temp')(temp)"></div>
        <div class="weather-state">
          {{ t('currentConditions.weatherState')(weatherState.name) }}
        </div>
      </div>
      <img
        :src="`https://www.metaweather.com/static/img/weather/${weatherState.abbr}.svg`"
        :alt="weatherState.name"
      />
    </div>

    <div>{{ t('currentConditions.wind')(wind.direction, wind.speed) }}</div>
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

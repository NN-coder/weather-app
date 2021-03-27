<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import Card from '../Card.vue';

const { format } = new Intl.DateTimeFormat('en', {
  weekday: 'short',
  day: 'numeric',
});

export default {
  name: 'DailyForecast',
  components: {
    Card,
  },
  setup() {
    const { state } = useStore();

    return {
      getFormattedDate: (date) => format(date),
      consolidatedWeather: computed(() => state.weather.consolidatedWeather.slice(0, 5)),
    };
  },
};
</script>

<template>
  <Card is="section">
    <header>Daily Forecast</header>
    <ul>
      <li v-for="(weatherInfo, index) in consolidatedWeather" :key="weatherInfo.id">
        <div :class="['title', { today: index === 0 }]">
          {{ index === 0 ? 'Today' : getFormattedDate(weatherInfo.date) }}
        </div>
        <div class="temp temp-max">{{ weatherInfo.temp.max }}&#176;</div>
        <div class="temp temp-min">{{ weatherInfo.temp.min }}&#176;</div>
        <img
          :src="`https://www.metaweather.com/static/img/weather/${weatherInfo.weatherState.abbr}.svg`"
          :alt="weatherInfo.weatherState.name"
        />
      </li>
    </ul>
  </Card>
</template>

<style scoped lang="scss">
section {
  margin-top: 12px;
  background-color: white;
  padding: 12px;
}
header {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 15px;
}
ul {
  display: flex;
}
li {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  & + & {
    border-left: 1px solid black;
    border-image: linear-gradient(
        180deg,
        rgba(222, 222, 222, 0) 0,
        #dedede 25%,
        #dedede 70%,
        rgba(222, 222, 222, 0) 85%,
        rgba(222, 222, 222, 0)
      )
      1 100%;
  }
}
.title {
  font-size: 1.3rem;
  &.today {
    font-weight: 700;
  }
}
.temp {
  color: #1b4de4;
  &-max {
    font-size: 1.8rem;
    margin-top: 5px;
  }
  &-min {
    font-size: 1.2rem;
  }
}
img {
  width: 40px;
  height: 40px;
  margin-top: 10px;
}
</style>

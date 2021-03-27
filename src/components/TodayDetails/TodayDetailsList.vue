<script>
import { computed } from 'vue';
import { mapGetters, useStore } from 'vuex';

const icons = require.context('./icons');

export default {
  name: 'TodayDetailsList',
  setup() {
    const { getters } = useStore();
    const todaysWeather = getters['weather/todaysWeather'];

    function getIcon(name) {
      try {
        return icons(`./${name}.svg`);
      } catch (err) {
        return undefined;
      }
    }

    const listItems = computed(() => [
      {
        name: 'High / Low',
        icon: 'temperature',
        value: `${todaysWeather.temp.max}&#176; / ${todaysWeather.temp.min}&#176;`,
      },
      { name: 'Wind', icon: 'wind', value: `${todaysWeather.wind.speed} m/h` },
      { name: 'Pressure', icon: 'pressure', value: `${todaysWeather.airPressure} mbar` },
      { name: 'Visibility', icon: 'visibility', value: `${todaysWeather.visibility} miles` },
      { name: 'Humidity', icon: 'humidity', value: `${todaysWeather.humidity}%` },
    ]);

    return {
      getIcon,
      listItems,
    };
  },
};
</script>

<template>
  <ul>
    <li v-for="item in listItems" :key="item.name">
      <img :src="getIcon(item.icon)" alt="" />
      {{ item.name }}
      <span v-html="item.value"></span>
    </li>
  </ul>
</template>

<style scoped lang="scss">
ul {
  list-style: none;
  margin-top: 30px;
}
li {
  display: flex;
  position: relative;
  justify-content: space-between;
  border-top: 1px solid #dedede;
  padding: 10px 30px 10px 60px;
  &:last-child {
    padding-bottom: 0;
    img {
      top: calc(50% + 10px);
      transform: translateY(calc(-50% - 5px));
    }
  }
}
img {
  position: absolute;
  left: 25px;
  top: 50%;
  transform: translateY(-50%);
  height: 25px;
  width: 25px;
}
</style>

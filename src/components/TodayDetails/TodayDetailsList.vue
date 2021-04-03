<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from '@/store';
import { useI18n } from '@/i18n';

const icons = require.context('./icons');

export default defineComponent({
  name: 'TodayDetailsList',
  setup() {
    const { getters } = useStore();
    const { t } = useI18n();
    const todaysWeather = getters['weather/todaysWeather'];

    function getIcon(name: string) {
      try {
        return icons(`./${name}.svg`);
      } catch (err) {
        return undefined;
      }
    }

    const listItems = computed(() => [
      {
        name: t('todayDetails.list.temp.name'),
        icon: 'temperature',
        value: t('todayDetails.list.temp.value')(todaysWeather.temp.max, todaysWeather.temp.min),
      },
      {
        name: t('todayDetails.list.wind.name'),
        icon: 'wind',
        value: t('todayDetails.list.wind.value')(todaysWeather.wind.speed),
      },
      {
        name: t('todayDetails.list.pressure.name'),
        icon: 'pressure',
        value: t('todayDetails.list.pressure.value')(todaysWeather.airPressure),
      },
      {
        name: t('todayDetails.list.visibility.name'),
        icon: 'visibility',
        value: t('todayDetails.list.visibility.value')(todaysWeather.visibility),
      },
      {
        name: t('todayDetails.list.humidity.name'),
        icon: 'humidity',
        value: t('todayDetails.list.humidity.value')(todaysWeather.humidity),
      },
    ]);

    return {
      getIcon,
      listItems,
    };
  },
});
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

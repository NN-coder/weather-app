<script>
const icons = require.context('./icons');

export default {
  name: 'TodayDetailsList',
  data() {
    return {
      listItems: [
        { name: 'High / Low', icon: 'temperature', value: '12° / 6°' },
        { name: 'Wind', icon: 'wind', value: '5.5 m/h' },
        { name: 'Pressure', icon: 'pressure', value: '1029 mbar' },
        { name: 'Visibility', icon: 'visibility', value: '10 miles' },
        { name: 'Humidity', icon: 'humidity', value: '61%' },
      ],
    };
  },
  methods: {
    getIcon(name) {
      try {
        return icons(`./${name}.svg`);
      } catch (err) {
        return undefined;
      }
    },
  },
};
</script>

<template>
  <ul>
    <li v-for="item in listItems" :key="item.name">
      <img :src="getIcon(item.icon)" alt="" />
      {{ item.name }}
      <span>{{ item.value }}</span>
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

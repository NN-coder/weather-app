<script>
export default {
  name: 'TodayDetailsList',
};
</script>

<template>
  <ul>
    <li class="temperature">High / Low</li>
    <li class="wind">Wind</li>
    <li class="pressure">Pressure</li>
    <li class="visibility">Visibility</li>
    <li class="humidity">Humidity</li>
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
    &:before {
      top: calc(50% + 10px);
      transform: translateY(calc(-50% - 5px));
    }
  }
  &:before {
    width: 25px;
    height: 25px;
    margin-right: 10px;
    position: absolute;
    left: 25px;
    top: 50%;
    transform: translateY(-50%);
  }
  &.temperature:before {
    content: url('./icons/temperature.svg');
  }
  &.wind:before {
    content: url('./icons/wind.svg');
  }
  &.pressure:before {
    content: url('./icons/pressure.svg');
  }
  &.visibility:before {
    content: url('./icons/visibility.svg');
  }
  &.humidity:before {
    content: url('./icons/humidity.svg');
  }
}
</style>

<script>
import Card from './Card.vue';

export default {
  name: 'CurrentConditions',
  components: {
    Card,
  },
};
</script>

<template>
  <Card class="current-conditions">
    <div class="header">As of 3:31 pm GMT</div>

    <div class="inner">
      <div>
        <div class="temp">9&#176;</div>
        <div class="weather-state">Partly cloudy</div>
      </div>
      <img src="https://www.metaweather.com/static/img/weather/lc.svg" alt="" />
    </div>

    <div>Wind: NE, 6.5 m/h</div>
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

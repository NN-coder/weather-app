<script>
export default {
  name: 'CurrentConditions',
};
</script>

<template>
  <div class="current-conditions">
    <div class="header">As of 3:31 pm GMT</div>

    <div class="inner">
      <div>
        <div class="temp">9&#176;</div>
        <div class="weather-state">Partly cloudy</div>
      </div>
      <img src="https://www.metaweather.com/static/img/weather/lc.svg" alt="" />
    </div>

    <div>Wind: NE, 6.5 m/h</div>
  </div>
</template>

<style scoped lang="scss">
div.current-conditions {
  padding: 12px;
  box-shadow: 0 0 12px 0 rgba(#000, 0.2);
  border-radius: 6px;
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
    padding-bottom: 3px;
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

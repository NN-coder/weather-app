<script>
import Card from '../Card.vue';

export default {
  name: 'DailyForecast',
  components: {
    Card,
  },
};
</script>

<template>
  <Card is="section">
    <header>Daily Forecast</header>
    <ul>
      <li>
        <div class="title">24 Wed</div>
        <div class="temp temp-max">16&#176;</div>
        <div class="temp temp-min">11&#176;</div>
        <img src="https://www.metaweather.com/static/img/weather/sn.svg" alt="" />
      </li>
      <li>
        <div class="title">25 Thu</div>
        <div class="temp temp-max">15&#176;</div>
        <div class="temp temp-min">12&#176;</div>
        <img src="https://www.metaweather.com/static/img/weather/h.svg" alt="" />
      </li>
      <li>
        <div class="title">26 Fri</div>
        <div class="temp temp-max">24&#176;</div>
        <div class="temp temp-min">18&#176;</div>
        <img src="https://www.metaweather.com/static/img/weather/t.svg" alt="" />
      </li>
      <li>
        <div class="title">27 Sat</div>
        <div class="temp temp-max">27&#176;</div>
        <div class="temp temp-min">11&#176;</div>
        <img src="https://www.metaweather.com/static/img/weather/hr.svg" alt="" />
      </li>
      <li>
        <div class="title">28 Sun</div>
        <div class="temp temp-max">24&#176;</div>
        <div class="temp temp-min">14&#176;</div>
        <img src="https://www.metaweather.com/static/img/weather/c.svg" alt="" />
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
        hsla(0, 0%, 87.1%, 0) 0,
        #dedede 25%,
        #dedede 70%,
        hsla(0, 0%, 87.1%, 0) 85%,
        hsla(0, 0%, 87.1%, 0)
      )
      1 100%;
  }
}
.title {
  font-size: 1.3rem;
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

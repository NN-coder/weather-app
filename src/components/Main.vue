<script>
import { defineComponent } from 'vue';
import CurrentConditions from './CurrentConditions.vue';
import TodayDetails from './TodayDetails/TodayDetails.vue';
import DailyForecast from './DailyForecast/DailyForecast.vue';

export default defineComponent({
  name: 'Main',
  components: {
    CurrentConditions,
    TodayDetails,
    DailyForecast,
  },
});
</script>

<template>
  <main>
    <CurrentConditions></CurrentConditions>
    <TodayDetails></TodayDetails>
    <DailyForecast></DailyForecast>
  </main>
</template>

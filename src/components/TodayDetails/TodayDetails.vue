<script>
import Card from '../Card.vue';
import TodayDetailsInner from './TodayDetailsInner.vue';
import TodayDetailsList from './TodayDetailsList.vue';

export default {
  name: 'TodayDetails',
  components: {
    Card,
    TodayDetailsInner,
    TodayDetailsList,
  },
};
</script>

<template>
  <Card is="section">
    <header>Weather Today in London, England, United Kingdom</header>
    <TodayDetailsInner></TodayDetailsInner>
    <TodayDetailsList></TodayDetailsList>
  </Card>
</template>

<style scoped lang="scss">
section {
  margin-top: 12px;
  padding: 15px 0;
  background-color: white;
  font-size: 1.6rem;
  header {
    font-size: 1.8rem;
    font-weight: 700;
    padding: 0 15px;
    margin-bottom: 10px;
    line-height: 25px;
  }
}
</style>

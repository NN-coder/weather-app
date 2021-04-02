<script>
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import { useI18n } from '../../i18n';
import Card from '../Card.vue';
import TodayDetailsInner from './TodayDetailsInner.vue';
import TodayDetailsList from './TodayDetailsList.vue';

export default defineComponent({
  name: 'TodayDetails',
  components: {
    Card,
    TodayDetailsInner,
    TodayDetailsList,
  },
  setup() {
    const { getters } = useStore();
    const { t } = useI18n();

    return {
      t,
      currentLocation: computed(() => getters['weather/currentLocation']),
    };
  },
});
</script>

<template>
  <Card is="section">
    <header>{{ t('todayDetails.header')(currentLocation) }}</header>
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

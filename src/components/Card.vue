<script>
import VueTypes from 'vue-types';

export default {
  name: 'Card',
  props: {
    is: VueTypes.string.def('div'),
  },
};
</script>

<template>
  <div class="card" v-is="is">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.card {
  box-shadow: 0 0 12px 0 rgba(#000, 0.2);
  border-radius: 6px;
}
</style>

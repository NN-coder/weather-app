<script lang="ts">
import { defineComponent } from 'vue';
import VueTypes from 'vue-types';

export default defineComponent({
  name: 'Card',
  props: {
    is: VueTypes.string.def('div'),
  },
});
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
  color: #2d2d2d;
}
</style>

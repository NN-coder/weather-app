<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from '@/store';
import { useI18n } from '@/i18n';

export default defineComponent({
  name: 'SearchInput',
  setup() {
    const { commit, dispatch, state } = useStore();
    const { t } = useI18n();

    return {
      t,
      inputValue: computed({
        get: () => state.locationSearch.searchText,
        set: (value) => {
          commit('locationSearch/setSearchText', value);
          dispatch('locationSearch/searchLocation');
        },
      }),
    };
  },
});
</script>

<template>
  <!-- eslint-disable-next-line vue-a11y/form-has-label -->
  <input v-model="inputValue" type="search" :placeholder="t('searchInputPlaceholder')" />
</template>

<style scoped lang="scss">
input {
  height: 30px;
  width: 100%;
  background-color: rgba(#fff, 0.1);
  border-radius: 20px;
  border: none;
  padding-left: 10px;
  padding-right: 5px;
  font-size: 1.4rem;
  color: white;
  &::placeholder {
    color: rgba(white, 0.6);
  }
}
</style>

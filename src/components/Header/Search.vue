<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
import { useStore } from '@/store';
import Card from '../Card.vue';
import SearchInput from './SearchInput.vue';

let timerId: number;

export default defineComponent({
  name: 'Seacrh',
  components: {
    Card,
    SearchInput,
  },
  setup() {
    const areSuggestionsShown = ref(false);

    function hideSuggestions() {
      areSuggestionsShown.value = false;
    }

    function handleBlur() {
      timerId = setTimeout(hideSuggestions, 50);
    }

    function handleFocus() {
      clearTimeout(timerId);
      areSuggestionsShown.value = true;
    }

    const { commit, state } = useStore();

    function handleLinkClick() {
      hideSuggestions();
      commit('locationSearch/setSearchText', '');
    }

    const searchSuggestions = computed(() => state.locationSearch.searchSuggestions.slice(0, 5));

    return { areSuggestionsShown, handleBlur, handleFocus, handleLinkClick, searchSuggestions };
  },
});
</script>

<template>
  <div @focus.capture="handleFocus" @blur.capture="handleBlur" class="search">
    <!-- eslint-disable-next-line vue-a11y/form-has-label -->
    <SearchInput />
    <Card v-if="areSuggestionsShown" class="search-suggestions" @click="handleLinkClick">
      <router-link v-for="{ woeid, title } in searchSuggestions" :to="`/${woeid}`" :key="woeid">
        {{ title }}
      </router-link>
    </Card>
  </div>
</template>

<style scoped lang="scss">
.search {
  width: 60%;
  position: relative;
}
.search-suggestions {
  width: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 30px;
  z-index: 10;
}
a {
  text-decoration: none;
  color: inherit;
  text-align: center;
  padding: 12px;
  background-color: white;
  font-size: 1.4rem;
  border-top: 1px solid #dedede;
  transition: 0.15s;
  &:hover,
  &:focus {
    background-color: #1b4de4;
    color: white;
  }
  &:first-child {
    border-top: none;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }
  &:last-child {
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }
}
</style>

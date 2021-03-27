<script>
import { createNamespacedHelpers } from 'vuex';
import Card from '../Card.vue';

const { mapMutations, mapActions, mapState } = createNamespacedHelpers('locationSearch');

let timerId;

export default {
  name: 'Seacrh',
  components: {
    Card,
  },
  data() {
    return { areSuggestionsShown: false };
  },
  methods: {
    ...mapMutations(['setSearchText']),
    ...mapActions(['searchLocation']),
    hideSuggestions() {
      this.areSuggestionsShown = false;
    },
    handleBlur() {
      timerId = setTimeout(this.hideSuggestions, 50);
    },
    handleFocus() {
      clearTimeout(timerId);
      this.areSuggestionsShown = true;
    },
    handleLinkClick() {
      this.hideSuggestions();
      this.searchInputValue = '';
    },
  },
  computed: {
    ...mapState({
      searchSuggestions: ({ searchSuggestions }) => searchSuggestions.slice(0, 5),
      searchText: 'searchText',
    }),
    searchInputValue: {
      get() {
        return this.searchText;
      },
      set(value) {
        this.setSearchText(value);
        this.searchLocation();
      },
    },
  },
};
</script>

<template>
  <div @focus.capture="handleFocus" @blur.capture="handleBlur" class="search">
    <!-- eslint-disable-next-line vue-a11y/form-has-label -->
    <input v-model="searchInputValue" type="search" placeholder="Search" />
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

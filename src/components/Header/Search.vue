<script>
import { mapActions, mapMutations, mapState } from 'vuex';
import Card from '../Card.vue';

export default {
  name: 'Seacrh',
  components: {
    Card,
  },
  methods: {
    ...mapMutations(['setCurrentSearchText']),
    ...mapActions(['searchLocation']),
  },
  computed: {
    ...mapState({
      searchSuggestions: ({ searchSuggestions }) => searchSuggestions.slice(0, 5),
    }),
    searchInputValue: {
      get() {
        return this.$store.currentSearchText;
      },
      set(value) {
        this.setCurrentSearchText(value);
        this.searchLocation();
      },
    },
  },
};
</script>

<template>
  <div class="search">
    <!-- eslint-disable-next-line vue-a11y/form-has-label -->
    <input v-model="searchInputValue" type="search" placeholder="Search" />
    <Card class="buttons">
      <button v-for="suggestion in searchSuggestions" :key="suggestion.woeid">
        {{ suggestion.title }}
      </button>
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
}
.buttons {
  width: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 30px;
}
button {
  padding: 12px;
  background-color: white;
  font-size: 1.4rem;
  border-top: 1px solid #dedede;
  &:first-child {
    border-top-color: white;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }
  &:last-child {
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }
}
</style>

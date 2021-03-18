<template>
  <Header></Header>
</template>

<script>
import 'normalize.css';
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  @media screen and (prefers-reduced-motion: reduce) {
    transition: none;
    animation: none;
  }
}
:root {
  font-size: 10px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
}
body {
  background-color: #3a628c;
}
button {
  background: none;
  border: none;
  cursor: pointer;
}
</style>

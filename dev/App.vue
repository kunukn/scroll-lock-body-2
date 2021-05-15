<template>
  <ScrollLockDemo />
</template>

<script setup>
import ScrollLockDemo from './components/ScrollLockDemo.vue';
</script>

<style>
*,
::before,
::after {
  box-sizing: border-box;
}
html {
  font-size: 16px;
}
body {
  margin: 0;
  min-height: 100vh;
  font-family: 'Montserrat', sans-serif;
  position: relative;
}

#app {
  position: relative;
  padding: 1rem;
}
</style>

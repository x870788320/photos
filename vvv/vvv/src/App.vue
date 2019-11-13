<template>
  <div id="app">
    <keep-alive include="Show">
      <router-view/>
    </keep-alive>
  </div>
</template>
<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>

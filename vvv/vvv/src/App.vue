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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
html, body {
  width: 100%;
  height: 100%;
}
li{
  list-style: none;
}
</style>

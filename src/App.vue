<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-link to="Java/1/2/3">Java</router-link>
    <router-link to="JavaScript">JavaScript</router-link>
    <router-link to="Kotlin">Kotlin</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

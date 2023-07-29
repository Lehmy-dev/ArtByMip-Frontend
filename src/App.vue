<template>
  <button class="burger" @click="this.navigationExtended = !this.navigationExtended" > click to open navigation </button>
  <navigation-view v-if="this.navigationExtended"> </navigation-view>
  <router-view  class="content" :class="{ extendedNavigation : this.navigationExtended }" />
</template>

<script>

  import NavigationView from './views/NavigationView.vue';

  export default{
    components:{
      NavigationView
    },
    data() {
      return {
        navigationExtended: false,
      }
    }
  }


</script>

<style>


body{
  background-color: #FEFCFB;
  top:0px;
  padding-top: 0px;
  margin: 0px;
}

.content.extendedNavigation{
  margin-left: 30vw;
}

.content{
  top: 0px;

}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.burger{
  position: fixed;
  z-index: 10;
  left: 1vw;
  top: 1vh;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<template>
  <button @click="this.navigationExtended = !this.navigationExtended" ></button>
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
}

.content.extendedNavigation{
  margin-left: 50vw;
}

.content{
  background-color: red;

}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

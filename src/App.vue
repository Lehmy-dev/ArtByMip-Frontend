<template>
  <button class="burger" @click="this.navigationExtended = !this.navigationExtended" >  </button>
  <navigation-view v-if="this.navigationExtended"> </navigation-view>
  <router-view  class="content" :class="{ extendedNavigation : this.navigationExtended }" />
  <div class="app impressum">
    <router-link to="/Datenschutz">Datenschutz</router-link>
    <router-link to="/Impressum">Impressum</router-link>
  </div>
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
  overflow-x: hidden;
}

.app.impressum{
  left: 0px;
  bottom: 0px;
  position: absolute;
  display: inline-flex;
  padding: 1vh;
  gap: 1vw;
}

.app.impressum a{
  color: black;
  text-decoration: none;
}

.content.extendedNavigation{
  margin-left: 30vw;
}

.content{
  top: 0px;

  overflow-x: hidden;

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
  top: 1vw;
  width: 2.5vw;
  height: 2vw;
  background-image: url(./assets/burger.svg);
  background-size: cover;
  border: 0px;
  background-color:transparent;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<template>
  <div>
    <nav class="navigation container">
        <router-link to="/">Home</router-link> |
        <router-link to="/gallery">Galery</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/impressum">impressum</router-link> |
    </nav>
  </div>
  </template>
  
  <script>
  // @ is an alias to /src
  
  export default {
    name: 'navigation-view',
    components: {
    }
  }
  </script>
  
  <style scoped>
  
  .navigation.container{
    background-color: #404040;
    display: flex;
    flex-direction: column;
    left: 0px;
    width: 30vw;
    position: fixed;
    height: 100vh;
    top:0px;
  }

  .navigation a{
    font-weight: bold;
  color: antiquewhite;
  }

nav a.router-link-exact-active {
  color: #42b983;
}

  </style>
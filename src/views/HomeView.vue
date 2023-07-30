<template>
  <div class="home content">
    <div class="image-list">
      <img src="./../assets/logo.png" />
      <div class="home navigation">
        <router-link to="/galery">Galery</router-link> 
        <router-link to="/about">About</router-link> 
        <router-link to="/impressum">impressum</router-link> 
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sed vitae libero reprehenderit enim corporis quod
        placeat esse exercitationem qui laborum nisi temporibus ea quaerat, nesciunt, adipisci ipsam aperiam quos.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus debitis omnis natus expedita ad quia sint
        voluptatibus? Inventore, quod id. Ea, eligendi minima sit ipsa accusantium molestias id nihil nobis.
      </p>
      <button class="home call-to-action">
        Let's draw Your Pet
      </button>
      <div class="home socials">
        <div> contact@artbymip.de</div>
        <div> @ArtByMip </div>
      </div>
    </div>
    <img class="large-image" src="./../assets/home_pepe.png" />
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
  }
}
</script>

<style scoped>
.home.content {
  width: 80vw;
  padding-left: 10vw;
  padding-right: 10vw;
  display: flex;
  align-items: flex-start;
}

.home.call-to-action {
  border: #663838 solid ;
  border-width: 10px;
  border-radius: 15px;
  padding-top: 2vh;
  padding-bottom: 2vh;
  font-size: 5vh;
  font-weight: 900;
  background-color: #FEFCFB;
  color: #663838;
}

.home.call-to-action:active{
  border: #aeaeae solid 10px;
}

.home.socials{
  display: inline-flex;
  justify-content: center;
  padding: 4vh;
  gap: 1vw;

}

.home.navigation a{
  font-weight: bold;
  color: rgb(0, 0, 0,0.5);
  font-size: 4vh;
  text-decoration: none;
}

.home.navigation a:hover{
  color: rgb(0, 0, 0,0.2);;
}

.home.navigation{
  display: inline-flex;
  justify-content: center;
  gap: 2vw;
  font-size:larger;
}

.image-list {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.image-list img {
  max-width: 100%;
}

.large-image {
  width: 50%;
  margin-left: auto;
}
</style>
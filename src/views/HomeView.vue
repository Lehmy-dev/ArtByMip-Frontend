<template>
  <div class="home image-list-container">
    <div class="image-list-container">
    <div>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita excepturi deleniti praesentium quod reiciendis vero maxime rerum officia, perferendis facilis eligendi obcaecati nobis, doloremque provident! Consequuntur amet provident nostrum odio!
    </div>
    <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum animi, amet labore perspiciatis ipsum eveniet asperiores unde eius veritatis sed id excepturi eum, dolor consequuntur repudiandae harum, debitis explicabo assumenda?
    </div>
    <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum animi, amet labore perspiciatis ipsum eveniet asperiores unde eius veritatis sed id excepturi eum, dolor consequuntur repudiandae harum, debitis explicabo assumenda?
    </div>
  </div>
    <img class="large-image" src="./../assets/home_pepe.png"/>
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

.home.content{
  width: 80vw;
  padding-left: 10vw;
  padding-right: 10vw;
  display: flex;
  align-items: flex-start;
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
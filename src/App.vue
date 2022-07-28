<template>
  <div class="app">
    <img class="panda-img" src="./assets/panda.png" alt="">
    <h1>Todanda</h1>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}
body {
  /* background-color: #556832; */
  background: rgba(85, 104, 50, 0.5);
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.app {
  border-radius: 16px;
  background-color: #fafafa;
  width: 590px;
  height: 800px;
  padding-bottom: 20px;
  margin: 0 auto;
  text-align: center;
}
.panda-img {
  width: 200px;
}
</style>

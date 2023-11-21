<script setup>
useHead({
  titleTemplate: (titleChunk)=> {
    return titleChunk? `${titleChunk} - Movie App`: 'Movies App'
  }
})
</script>
<template>
  <div>
    <NuxtLayout>     
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
*, *::before, *::after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.main {
  background-color: #212336;
  font-family: Roboto, sans-serif;
  display: -webkit-box;
  display: -ms-flexbox;
  display: grid;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  color: white;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
}

.card {
  background: #2A2D43;
  width: 600px;
  text-align: center;
  padding: 0 0 0.5em 0;
  -webkit-box-shadow: 0 0 10px 8px rgba(0, 0, 0, 0.19);
          box-shadow: 0 0 10px 8px rgba(0, 0, 0, 0.19);
}
.nav {
  display: flex;
  background-color: aquamarine;
  padding: .4rem;
  justify-content: center;
}
.Nlink{
  color: #77f077;
  background-color: #2A2D43;
  padding: .2rem .6rem;
  text-decoration: none;
  margin: .1rem .2rem;
  border-radius: .3rem;
}
.Nlink:hover {
  color: #485a48;
  background-color: #e6e9ff;
}
.text {
  padding: .3rem .4rem
}

.text h3 {
  margin: .4rem 0;
  font-size: 1.5rem;
  font-weight: 500;
}

.text h5 {
  margin: 0 0 0 0;
  color: #D8D8D8;
  font-weight: 300;
  font-size: 0.9rem;
}

.text p {
  margin: 14px 0 0 0;
  color: #D8D8D8;
}
img:hover{
  transform:scale(1.02);
  border: 3px rgb(110, 240, 244) solid;
}
</style>

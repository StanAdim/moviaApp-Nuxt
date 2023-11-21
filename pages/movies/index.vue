<script lang="js" setup>
const formInput = ref('');
const movies = ref([]);
const ApiKey = 'cbaea162'
async function search(query){
    movies.value = await $fetch(`http://www.omdbapi.com/?apikey=${ApiKey}&s=${query}`)
    formInput.value = ''
}
definePageMeta({
    middleware:"logger"
})
useHead({
    title:'Search Movies'
})
</script>

<template>
  <div class="text">
    <h3>Movies</h3>
    <p>
        Type the name of the movie you are looking for:
    </p>
    <div class="search-form">
        <form @submit.prevent="search(formInput)">
            <input type="text" v-model="formInput">
            <button type="submit">Search</button>
        </form>
    </div>
    <h4>List</h4>    
  </div>
  <div v-if="movies" class="movies">
        <ul>
            <li v-for="(item, index) in movies.Search" :key="index">
                <div>
                    <div><img lazy :src="item.Poster" alt="item.Title"></div>
                    <p>
                     <nuxt-link class="Nlink" :to="{name:'movies-movieId',params:{movieId:item.imdbID}}">
                         {{ item.Title }}
                     </nuxt-link>
                    </p>
                </div>
            </li>            
        </ul>
    </div>
</template>

<style scoped>
.search-form{
    margin: .1rem auto;
    padding: .2rem
}
.search-form input{
    color: #aaf3aa;
    background-color: #dad6f63c;
    border-radius: .4rem;
    padding: .3rem;
    margin: .3rem;
    font-size: large;
}
.search-form button {
    color:#141c14;
    background-color: aqua;
    font-size: large;
    padding: .3rem 1.6rem;
    margin: .3rem;
    border-radius: .4rem;
}
.search-form button:hover{
    color:#93eb93;
    background-color: #184a4a}
.movies ul{
    margin: .4rem;
    list-style:none;
}
.movies {
    display: flex;
}
.movies ul li{
    color:#aaf3aa;
    width: 200px;
    height: 260px;
    border-radius: .3rem;
    margin: .2rem .3rem;
    border: 2px #00000087 solid;
    padding: .3rem;
    display: flex;
    justify-content: center;
}
.movies img {
    width: 120px;
    height: 180px;
    border-radius:.8em;}
</style>


<script lang="js" setup>
const route = useRoute()
const ApiKey = 'cbaea162'
const movie = ref({})
const id = route.params.movieId
// const {data} =  useAsyncData(`movies/${id}`,()=>{
//     return $fetch(`http://www.omdbapi.com/?apikey=${ApiKey}&i=${id}`)
// },{
//         // pick: ['Plot','Title'],
//         transform(data){
//             return {
//                 title:data.Title,
//                 plot:data.Plot,
//                 link:data.Poster,
//                 director:data.Director,
//                 year:data.Year,
//             }
//         }        
//     })
const {data} = await useFetch(`http://www.omdbapi.com/?apikey=${ApiKey}&i=${id}`, {
   key:`movies/${id}`,
   pick:['Title','Plot',"Year",'Director','Poster','Error']
})

// Error handling 
if (data.value.Error == 'Incorrect IMDb ID.'){
    showError({statusCode: 404,statusMessage: 'Page Not Found'})
}
useHead({
    title:data.value.Title
})
</script>
<template> 
    <div class="text">
        <div v-if="data" class="movie">
            <h3>{{ data.Title }}</h3>
            <div class="poster">
                <img lazy :src="data.Poster" :alt="data.Title">
            </div>
            <p>{{ data.Plot }}</p>
            <p>{{ data.Year }} - <span v-for=" (dir , index) in data.Director " :key="index">{{ dir }}</span> </p>
        </div>
    </div>
</template>
<style scoped>
.movie  img {
    border-radius: .6rem;
}
.movie p {
    margin:.4rem;
}


</style>
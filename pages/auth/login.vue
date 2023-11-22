<script setup>
definePageMeta({
layout: "clear"
})
useHead({
    title:'Login'
})
const {login} = useAuthStore();
const alert = useAlert();
const userId = ref('');
const router = useRoute()
function logUser(){
    login()
    userId.value = ''
    alert.value.message = ''
}
</script>

<template>
    <div class="logUser">
        <template v-if="alert.message">       
                <p >{{ alert.message }}</p>           
        </template>
        <form @submit.prevent="login">
            <label for="userId"></label>
            <input type="text" v-model="userId" placeholder="User Key" id="userId">
            <button type="submit">Login</button>
        </form>
    </div>
</template>
<style>
.login{
    padding:.4rem;
    background-color: #2a2927cf;
    height: 20vh;
    border-radius: .4rem;
    margin: 4rem .3rem;
}
.login form {
    padding: .2rem ;
    margin: .2rem;
}
.login p {
    color:#17493b;
    background-color: #fad777;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: large;
    padding: .3rem;
    text-align: center;
    border-radius: .4rem;
}
form input {
    padding: .5rem;
    border-radius: .4rem;
    background-color: #f1eeeaf5;
    color:#00172b;
    font-size: large;
    margin: .3rem .4rem;
}
form button{
    color: #330404;
    background-color: #48f3c3;
    padding: .5rem 1.4rem;
    font-size: large;
    border-radius: .4rem;
}
</style>
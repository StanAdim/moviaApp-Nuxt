<script setup>
definePageMeta({
layout: "clear"
})
useHead({
    title:'Login'
})

const userId = ref('');

function login(){
    alert(userId.value)
    userId.value = ''
}
</script>

<template>
    <div class="login">
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
}
.login form {
    margin: 4rem .3rem;

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
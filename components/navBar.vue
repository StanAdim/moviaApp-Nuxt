<script lang="ts" setup>
const store = useAuthStore();
const {logout} = useAuthStore();

</script>
<template>
  <div>
    <div class="nav">
          <NuxtLink class="Nlink" to="/">Home</NuxtLink>
          <NuxtLink class="Nlink" to="/movies">Movies</NuxtLink>
          <NuxtLink class="Nlink" to="/directors">Directors</NuxtLink>
          <NuxtLink v-if="!store.isLoggedIn" class="Nlink" to="/auth/login" >Login</NuxtLink>            
          <template v-else>
            <a href="#" @click="logout()"   class="Nlink">Logout</a>
          </template>
    </div>
  </div>
</template>

<style scoped></style>

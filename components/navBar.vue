<script lang="ts" setup>
const isLoggedIn = useIsLoggedIn()

</script>
<template>
  <div>
    <div class="nav">
          <NuxtLink class="Nlink" to="/">Home</NuxtLink>
          <NuxtLink class="Nlink" to="/movies">Movies</NuxtLink>
          <NuxtLink class="Nlink" to="/directors">Directors</NuxtLink>
          <NuxtLink v-if="!isLoggedIn" class="Nlink" to="/auth/login" >Login</NuxtLink>            
          <template v-else>
            <a href="#" @click="isLoggedIn = false"   class="Nlink">Logout</a>
          </template>
    </div>
  </div>
</template>

<style scoped></style>

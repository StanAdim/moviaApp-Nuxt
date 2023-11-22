<script setup>
const store = useAuthStore();
const isLoggedIn =store.isLoggedIn;
</script>
<template>
    <div class="main">
        <navBar />
      <div class="card">        
          <slot></slot>
      </div>
    </div>
</template>
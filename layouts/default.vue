<script setup>
const isLoggedIn = useIsLoggedIn();
</script>
<template>
    <div class="main">
        <navBar />
      <div class="card">        
          <slot></slot>
      </div>
    </div>
</template>
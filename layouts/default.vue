<script setup>
const isLoggedIn = useState('isLoggedIn',()=>false)
</script>
<template>
     <div class="main">
      <navBar />
      <div class="card">        
          <slot></slot>
      </div>
    </div>
</template>
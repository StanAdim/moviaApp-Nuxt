<template>
    <div class="auth">
        <slot></slot>
    </div>
</template>

<style>
.auth{
    background-color: #213632;
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
</style>
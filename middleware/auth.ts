export default defineNuxtRouteMiddleware((to, from) => {
  const isLogin = false;
  if (!isLogin){
    return navigateTo({path:'/auth/login'})
  }
})

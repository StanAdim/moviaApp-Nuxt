export default defineNuxtRouteMiddleware((to, from) => {
  const isLogin = useIsloggedIn()
  console.log(isLogin.value)
  if (!isLogin){
    return navigateTo({path:'/auth/login'})
  }
})

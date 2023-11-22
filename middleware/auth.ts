export default defineNuxtRouteMiddleware((to, from) => {
  const isLogin = useIsLoggedIn()
  const alert = useAlert()
  if (!isLogin.value){
    alert.value.message = 'Please Login'
    return navigateTo({path:'/auth/login'})
  }
})

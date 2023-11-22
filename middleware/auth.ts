export default defineNuxtRouteMiddleware((to, from) => {
  const store = useAuthStore()
  const alert = useAlert()
  if (!store.isLoggedIn){
    alert.value.message = 'Please Login'
    return navigateTo({path:'/auth/login'})
  }
})

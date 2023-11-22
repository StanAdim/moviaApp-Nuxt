export const useAuthStore = defineStore('useAuthStore', {
    state: () => ({
      isLoggedIn: false,
    }),
    getters: {
        // doubleCount: (state) => state.count * 2,
        loginStatus : (state) =>{
            if(state.isLoggedIn){
                return 'Logged In'
            }
            return 'Logged Out'
        }
      },
    actions: {      
      login() {
        this.isLoggedIn = true
      },     
      logout() {
        this.isLoggedIn = false
      },
     
    },
  })
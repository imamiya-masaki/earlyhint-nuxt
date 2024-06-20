function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }
  export default defineNuxtRouteMiddleware( async (to, from) => {
    await sleep(6000)
    console.log('check')
    // In a real app you would probably not redirect every route to `/`
    // however it is important to check `to.path` before redirecting or you
    // might get an infinite redirect loop
      return navigateTo('/')
  })
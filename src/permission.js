import router from './router/index.js'
import store from './store/index.js'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
const whiteList = ['/login', '/404']
router.beforeEach(async(to, from, next) => {
  NProgress.start()
  // 这里的store相当于this.$store
  if (store.getters.token) {
    if (to.path === '/login') {
      next('/')
    } else {
      if (!store.getters.username) {
        await store.dispatch('user/getUserInfo')
      }
      next()
    }
  } else {
    if (whiteList.indexOf(to.path) > -1) {
      next()
    } else {
      next('/login')
    }
  }
  NProgress.done()
})
router.afterEach((to, from) => {
  NProgress.done()
})

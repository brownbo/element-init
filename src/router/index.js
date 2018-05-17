import Vue from 'vue'
import Router from 'vue-router'
import {getStore} from '../utils';
import routes from './routes'

Vue.use(Router)

let router = new Router({
  routes: [...routes]
})

// 当一个导航触发时，全局的 before 钩子按照创建顺序调用。钩子是异步解析执行，此时导航在所有钩子 resolve 完之前一直处于等待中。
router.beforeEach((to, from, next) => {
  // 判断该路由是否需要登录权限
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }/*
  if (!to.meta.noRequireAuth) {
    // 判断是否是登录状态
    if (getStore('token')) {
      next()
    } else {
      // 否则跳回登录页
      next('/login')
    }
  } else {
    // 如果不需要登录权限，就直接resolve这个钩子

  }*/
  next()
})

export default router

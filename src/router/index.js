import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/Main'
import Login from '@/views/Login'
import userAdd from '@/views/user/userAdd'
import userList from '@/views/user/userList'
import notFound from '@/views/404'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '/',
      component: Main
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/main',
      name: 'Main',
      component: Main,
      children: [
        {name: 'userAdd', path: '/user/add/:id', component: userAdd},
        {name: 'userList', path: '/user/list/:id', component: userList, props: true}
      ]
    },
    {
      path: '/home',
      redirect: Main
    },
    {
      path: '*',
      component: notFound
    }
  ]
})

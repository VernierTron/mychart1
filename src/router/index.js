import Vue from 'vue'
import Router from 'vue-router'
// import number1 from '@/components/number1'
// import number2 from '@/components/number2'
// import number3 from '@/components/number3'
import indexMain from '@/components/indexMain'
import docUpload from '@/components/docUpload'
import login from '@/components/login'
Vue.use(Router)
export default new Router({
    routes: [
    {
        path:'/',
        name:'login',
        component:login
    },
    // {
    //     path:'*',
    //     redirect:'/'
    // },
    {
        path:'/indexMain',
        name:'indexMain',
        // meta: {
        //     isLogin: true
        // },
        component:indexMain
    },
    // {
    //   path: '/bar',
    //   name: 'bar',
    //   component:docUpload
    // }
    //{
    //   path: '/foo',
    //   name: 'foo',
    //   component: number2
    // },
    // {
    //   path: '/gee',
    //   name: 'gee',
    //   component: number3
    // }
  ]
})

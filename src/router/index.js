import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './index'
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('@/views/Login.vue'),
    },
    {
      path: '/menu',
      name: 'platformSetting',
      component: () => import('@/components/Menu.vue'),


      children: [
        {
          path: 'geren',
          name: 'geren',
          component: () => import('@/page/my/gr.vue'),
        },
        // 运营设置
        {
          path: 'generalSetting',
          name: 'generalSetting',
          component: () => import('@/page/MainHome.vue'),
        },
        // 端口管理
        {
          path: '/portmanage',
          name: 'portmanage',
          component: () => import('@/page/string/portmanage.vue'),
        },
        //会员卡设置
        {
          path: '/viplist',
          name: 'viplist',
          component: () => import('@/page/string/viplist.vue'),
        }
        ,
        //页面装修
        {
          path: '/menuSetting',
          name: 'menuSetting',
          component: () => import('@/page/string/menuSetting.vue'),
        }
        ,
        // 分销设置
        {
          path: '/fenxiaoSetting',
          name: 'fenxiaoSetting',
          component: () => import('@/page/string/fenxiaoSetting.vue'),
        },
        //平台信息
        {
          path: '/platformSetting',
          name: 'platformSetting',
          component: () => import('@/page/string/platformSetting.vue'),
        },
        //邀请海报
        {
          path: '/posterpic',
          name: 'posterpic',
          component: () => import('@/page/string/posterpic.vue'),
        },
        //客服组件
        {
          path: '/kefulist',
          name: 'kefulist',
          component: () => import('@/page/string/kefulist.vue'),
        },
        //商品列表的新增
        {

          path: '/goodlist/:id',
          name: 'goodlist',
          component: () => import('@/page/line/triplistAdd/index1.vue'),

        },
        // {

        //   path: '/goodlist1:id',
        //   name: 'goodlist1',
        //   component: () => import('@/page/line/triplistAdd/index1.vue'),

        // }
      ]
      
    },

    {
      path: '/line',
      name: 'line',
      component: () => import('@/components/Menu.vue'),


      children: [
        // 商品列表
        {
          path: 'triplist',
          name: 'triplist',
          component: () => import('@/page/line/triplist.vue'),


        },
        // 商品类型
        {
          path: 'typelist',
          name: 'typelist',
          component: () => import('@/page/line/typelist.vue'),
        },
      ]
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('@/components/Menu.vue'),


      children: [
        // 商品列表
        {
          path: 'Orderlist',
          name: 'Orderlist',
          component: () => import('@/page/line/Orderlist.vue'),


        },

      ]
    },


   
  ]



})
// var targetPath=""
// beforeRouteEnter (to, from, next) {
//   // 此处无法通过 this 访问当前实例
//   next(vm=> {
//     // 此处可通过 `vm` 访问当前组件实例
//     vm.targetPath = from.path;
//   })
// }
// router.beforeEach((to, from, next) => {
//   if (to.path !== '/') {
//     // next('/')
//   } 
//   else {
//     //  获取 token
//     var cookie = document.cookie
//     //  token 不存在
//     if (cookie === null || cookie === '') {
//      console.log('请登录');
//      location.href = "/";

//     } else if(cookie !== null) {
//       next();
//     }
//     // next()
//   }
//   // next()
// });

















export default router

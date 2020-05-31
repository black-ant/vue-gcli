import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

// 添加路由对象
import index from '@/pages/index'
import indexCommon from '@/pages/indexCommon'
import indexCss from '@/pages/indexCss'
import indexJS from '@/pages/indexJS'
import indexJQuery from '@/pages/indexJQuery'
import indexBootStrap from '@/pages/indexBootStrap'
import indexAxios from '@/pages/indexAxios'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    // 指定路由索引
    {
      path: '/hello',
      name: 'index',
      component: index
    },
    {
      path: '/indexCommon',
      name: 'indexCommon',
      component: indexCommon
    },
    {
      path: '/indexJS',
      name: 'indexJS',
      component: indexJS
    },
    {
      path: '/indexCss',
      name: 'indexCss',
      component: indexCss
    },
    {
      path: '/indexJQuery',
      name: 'indexJQuery',
      component: indexJQuery
    },
    {
      path: '/indexBootStrap',
      name: 'indexBootStrap',
      component: indexBootStrap
    },
    {
      path: '/indexAxios',
      name: 'indexAxios',
      component: indexAxios
    }
  ]
})

import Vue from 'vue';
import Router from 'vue-router';
const _import = require('./_import_' + process.env.NODE_ENV);
// in development env not use Lazy Loading,because Lazy Loading large page will cause webpack hot update too slow.so only in production use Lazy Loading

Vue.use(Router);


/**
 * icon : the icon show in the sidebar
 * hidden : if `hidden:true` will not show in the sidebar
 * redirect : if `redirect:noredirect` will no redirct in the levelbar
 * noDropdown : if `noDropdown:true` will has no submenu
 * meta : { role: ['admin'] }  will control the page role
 **/
export const constantRouterMap = [
  {
    path: '/',
    component: _import('gsk/index'),
    hidden: true
  }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRouterMap
});

export const asyncRouterMap = [
  {
    // path: '/automatic',
    // // component: Layout,
    // redirect: '/automatic/index',
    // name: '自动数据抓取',
    // icon: 'shuju',
    // children: [
    //   {
    //     path: 'grapMonitor',
    //     component: _import('automatic/grapMonitor'),
    //     icon: 'jiankong',
    //     name: '爬虫监控'
    //   }
    // ]
  }
];

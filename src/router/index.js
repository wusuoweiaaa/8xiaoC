import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/',
    redirect: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/dashboard',
    component: Layout,
    name: '首页',
    meta: { title: '首页', icon: 'dashboard' },
    children: [{
      path: 'index',
      name: '首页',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  },
  {
    path: '/health-cert',
    component:()  => import('@/views/health-cert/index'),
    name: '健康证添加',
    meta: { title: '健康证添加', icon: 'example' },
  },

  // {
  //   path: '',
  //   component: Layout,
  //   redirect: '/admin/index',
  //   name: '权限管理',
  //   meta: { title: '权限管理', icon: 'example' },
  //   children: [
  //     {
  //       path: 'admin/index',
  //       name: '管理员列表',
  //       component: () => import('@/views/admin/index'),
  //       meta: { title: '管理员列表', icon: 'table' }
  //     },
  //     {
  //       path: 'admin/add',
  //       name: '添加管理员',
  //       component: () => import('@/views/admin/add'),
  //       hidden: true,
  //     },
  //     {
  //       path: 'role/index',
  //       name: '角色管理',
  //       component: () => import('@/views/role/index'),
  //       meta: { title: '角色管理', icon: 'user' }
  //     },{
  //       path: 'role/add',
  //       name: '添加角色',
  //       component: () => import('@/views/role/add'),
  //       hidden: true,
  //     },
  //     {
  //       path: 'route/index',
  //       name: '路由管理',
  //       component: () => import('@/views/route/index'),
  //       meta: { title: '路由管理', icon: 'tree' }
  //     },{
  //       path: 'route/add',
  //       name: '添加路由',
  //       component: () => import('@/views/route/add'),
  //       hidden: true,
  //     }
  //   ]
  // },

  // {
  //   path: '',
  //   component: Layout,
  //   redirect: '/article/index',
  //   name: '文章管理',
  //   children: [{
  //     path: 'article/index',
  //     name: '文章管理',
  //     component: () => import('@/views/article/index'),
  //     meta: { title: '文章管理', icon: 'dashboard' }
  //   }]
  // },

  // {
  //   path: '',
  //   component: Layout,
  //   redirect: '/user/index',
  //   name: '用户管理',
  //   children: [{
  //     path: '/user/index',
  //     name: '用户管理',
  //     component: () => import('@/views/user/index'),
  //     meta: { title: '用户管理', icon: 'user' }
  //   }]
  // },

  // {
  //   path: '/example',
  //   component: Layout,
  //   redirect: '/example/table',
  //   name: 'Example',
  //   meta: { title: 'Example', icon: 'example' },
  //   children: [
  //     {
  //       path: 'table',
  //       name: 'Table',
  //       component: () => import('@/views/table/index'),
  //       meta: { title: 'Table', icon: 'table' }
  //     },
  //     {
  //       path: 'tree',
  //       name: 'Tree',
  //       component: () => import('@/views/tree/index'),
  //       meta: { title: 'Tree', icon: 'tree' }
  //     }
  //   ]
  // },

  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: '健康证填报', icon: 'form' }
      }
    ]
  },

  // {
  //   path: '/nested',
  //   component: Layout,
  //   redirect: '/nested/menu1',
  //   name: 'Nested',
  //   meta: {
  //     title: 'Nested',
  //     icon: 'nested'
  //   },
  //   children: [
  //     {
  //       path: 'menu1',
  //       component: () => import('@/views/nested/menu1/index'), // Parent router-view
  //       name: 'Menu1',
  //       meta: { title: 'Menu1' },
  //       children: [
  //         {
  //           path: 'menu1-1',
  //           component: () => import('@/views/nested/menu1/menu1-1'),
  //           name: 'Menu1-1',
  //           meta: { title: 'Menu1-1' }
  //         },
  //         {
  //           path: 'menu1-2',
  //           component: () => import('@/views/nested/menu1/menu1-2'),
  //           name: 'Menu1-2',
  //           meta: { title: 'Menu1-2' },
  //           children: [
  //             {
  //               path: 'menu1-2-1',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
  //               name: 'Menu1-2-1',
  //               meta: { title: 'Menu1-2-1' }
  //             },
  //             {
  //               path: 'menu1-2-2',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
  //               name: 'Menu1-2-2',
  //               meta: { title: 'Menu1-2-2' }
  //             }
  //           ]
  //         },
  //         {
  //           path: 'menu1-3',
  //           component: () => import('@/views/nested/menu1/menu1-3'),
  //           name: 'Menu1-3',
  //           meta: { title: 'Menu1-3' }
  //         }
  //       ]
  //     },
  //     {
  //       path: 'menu2',
  //       component: () => import('@/views/nested/menu2/index'),
  //       meta: { title: 'menu2' }
  //     }
  //   ]
  // },

  // {
  //   path: 'external-link',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
  //       meta: { title: 'External Link', icon: 'link' }
  //     }
  //   ]
  // },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router

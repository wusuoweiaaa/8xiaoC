import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

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
    name: 'dashboard',
    meta: { title: '首页', icon: 'dashboard' },
    children: [{
      path: 'index',
      name: 'index',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  },

  {
    path: '/health-cert',
    component: Layout,
    name: '/health-cert',
    meta: { title: '健康证', icon: 'dashboard' },
    children: [{
      path: 'index',
      name: 'health-cert-index',
      meta: { title: '健康证添加', icon: 'example' },
      component: () => import('@/views/health-cert/index'),
    },
    {
      path: 'detail',
      component: () => import('@/views/health-cert/detail'),
      name: 'health-cert-detail',
      meta: { title: '健康证详情', icon: 'example' },
    },
    ]
  },

  {
    path: '/food-cert',
    component: Layout,
    name: '/food-cert',
    meta: { title: '食品经营许可证', icon: 'example' },
    children: [{
      path: 'index',
      component: () => import('@/views/food-cert/index'),
      name: 'food-cert-index',
      meta: { title: '食品经营许可证添加', icon: 'example' },
    },
    {
      path: 'detail',
      component: () => import('@/views/food-cert/detail'),
      name: 'food-cert-detail',
      meta: { title: '食品经营许可证添加', icon: 'example' },
    },
    ]
  },

  {
    path: '/public-cert',
    component: Layout,
    name: '/public-cert',
    meta: { title: '公共场所卫生许可证', icon: 'example' },
    children: [{
      path: 'index',
      component: () => import('@/views/public-cert/index'),
      name: 'public-cert-index',
      meta: { title: '公共场所卫生许可证添加', icon: 'example' },
    },
    {
      path: 'detail',
      component: () => import('@/views/public-cert/detail'),
      name: 'public-cert-detail',
      meta: { title: '公共场所卫生许可证添加', icon: 'example' },
    },
    ]
  },

  
  {
    path: '/water-cert',
    component: Layout,
    name: '/water-cert',
    meta: { title: '公共场所卫生许可证', icon: 'example' },
    children: [{
      path: 'index',
      component: () => import('@/views/water-cert/index'),
      name: 'water-cert-index',
      meta: { title: '供水单位卫生许可证添加', icon: 'example' },
    },
    {
      path: 'detail',
      component: () => import('@/views/water-cert/detail'),
      name: 'water-cert-detail',
      meta: { title: '供水单位卫生许可证添加', icon: 'example' },
    },
    ]
  },

  {
    path: '/water-quality',
    component: Layout,
    name: '/water-quality',
    meta: { title: '供水水质检测报告', icon: 'example' },
    children: [{
      path: 'index',
      component: () => import('@/views/water-quality/index'),
      name: 'water-quality-index',
      meta: { title: '供水水质检测报告添加', icon: 'example' },
    },
    {
      path: 'detail',
      component: () => import('@/views/water-quality/detail'),
      name: 'water-quality-detail',
      meta: { title: '供水水质检测报告详情', icon: 'example' },
    },
    ]
  },

  {
    path: '/air-quality',
    component: Layout,
    name: '/air-quality',
    meta: { title: '空气卫生质量检测报告', icon: 'example' },
    children: [{
      path: 'index',
      component: () => import('@/views/air-quality/index'),
      name: 'air-quality-index',
      meta: { title: '空气卫生质量检测报告添加', icon: 'example' },
    },
    {
      path: 'detail',
      component: () => import('@/views/air-quality/detail'),
      name: 'air-quality-detail',
      meta: { title: '空气卫生质量检测报告详情', icon: 'example' },
    },
    ]
  },

  {
    path: '/public-hygienic',
    component: Layout,
    name: '/public-hygienic',
    meta: { title: '公共用品卫生检测报告', icon: 'example' },
    children: [{
      path: 'index',
      component: () => import('@/views/public-hygienic/index'),
      name: 'public-hygienic-index',
      meta: { title: '公共用品卫生检测报告添加', icon: 'example' },
    },
    {
      path: 'detail',
      component: () => import('@/views/public-hygienic/detail'),
      name: 'public-hygienic-detail',
      meta: { title: '公共用品卫生检测报告详情', icon: 'example' },
    },
    ]
  },
  {
    path: '/mobile',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'mobile',
        component: () => import('@/views/mobile/index'),
        meta: { title: '修改手机号', icon: 'form' }
      }
    ]
  },
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

export default {
  path: '/permission',
  name: 'permission',
  component: () => import ('@/layout'),
  children: [{
    path: '',
    component: () => import ('@/views/permission'),
    meta: {
      title: '权限管理'
    }
  }]
}

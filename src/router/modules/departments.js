export default {
  path: '/departments',
  name: 'departments',
  component: () => import ('@/layout'),
  children: [{
    path: '',
    component: () => import ('@/views/departments'),
    meta: {
      title: '组织架构'
    }
  }]
}

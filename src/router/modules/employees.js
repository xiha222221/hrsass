export default {
  path: '/employees',
  name: 'employees',
  component: () => import ('@/layout'),
  children: [{
    path: '',
    component: () => import ('@/views/employees'),
    meta: {
      title: '员工管理'
    }
  }]
}

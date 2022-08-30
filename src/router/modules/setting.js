export default {
  path: '/setting',
  name: 'setting',
  component: () => import ('@/layout'),
  children: [{
    path: '',
    component: () => import ('@/views/setting'),
    meta: {
      title: '公司设置'
    }
  }]
}

export default {
  path: '/salarys',
  name: 'salarys',
  component: () => import ('@/layout'),
  children: [{
    path: '',
    component: () => import ('@/views/salarys'),
    meta: {
      title: '工资'
    }
  }]
}

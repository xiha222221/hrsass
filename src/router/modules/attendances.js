export default {
  path: '/attendances',
  name: 'attendances',
  component: () => import ('@/layout'),
  children: [{
    path: '',
    component: () => import ('@/views/attendances'),
    meta: {
      title: '考勤'
    }
  }]
}

export default {
  path: '/social',
  name: 'social',
  component: () => import ('@/layout'),
  children: [{
    path: '',
    component: () => import ('@/views/social'),
    meta: {
      title: '社保'
    }
  }]
}

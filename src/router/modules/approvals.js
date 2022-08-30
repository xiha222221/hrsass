export default {
  path: '/approvals',
  name: 'approvals',
  component: () => import ('@/layout'),
  children: [{
    path: '',
    component: () => import ('@/views/approvals'),
    meta: {
      title: '审批'
    }
  }]
}

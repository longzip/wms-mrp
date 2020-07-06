const routes = [{
    path: '/auth',
    component: () => import('layouts/AuthLayout.vue'),
    children: [{
      path: '',
      component: () => import('pages/PageAuth.vue')
    }]
  },
  {
    path: '/',
    component: () => import('layouts/Layout.vue'),
    children: [{
        path: '',
        component: () => import('pages/PageTodo.vue')
      },
      {
        path: '/settings',
        component: () => import('pages/PageSettings.vue')
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes

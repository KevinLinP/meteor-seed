export default [
  {
    path: '/',
    name: 'list',
    component: '/client/ui/ListPage.vue'
  },
  {
    path: '/login',
    name: 'loginPage',
    component: '/client/ui/LoginPage.vue'
  },
  {
    path: '/logout',
    name: 'logoutPage',
    component: '/client/ui/LoginPage.vue'
  },
  {
    path: '*',
    component: '/client/ui/NotFound.vue'
  }
];

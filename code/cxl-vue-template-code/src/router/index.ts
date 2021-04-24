import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
} from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/home/Home.vue"),
    children: [
      {
        path: '/',
        name: 'DefaultHome',
        component: () => import("../views/home/dashboard/Dashboard.vue"),
      },
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import("../views/home/dashboard/Dashboard.vue"),
      },
      {
        path: '/user',
        name: 'User',
        component: () => import("../views/home/user/User.vue"),
      },
      {
        path: '/role',
        name: 'Role',
        component: () => import("../views/home/role/Role.vue")
      },
      {
        path: '/sql-format',
        name: 'SqlFormat',
        component: () => import("../views/home/plugins/sql-format/SqlFormat.vue")
      }
    ]
  },
    {
    path: "/login",
    name: "Login",
    component: () => import("../views/login/Login.vue"),
  },

  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

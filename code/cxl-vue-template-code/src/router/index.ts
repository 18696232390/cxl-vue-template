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
      },
      {
        path: '/time-format',
        name: 'TimeFormat',
        component: () => import("../views/home/plugins/time-format/TimeFormat.vue")
      },
      {
        path: '/md5-encrypt',
        name: 'Md5Encrypt',
        component: () => import("../views/home/plugins/md5-encrypt/Md5Encrypt.vue")
      },
      {
        path: '/md-edit',
        name: 'MdEdit',
        component: () => import("../views/home/plugins/md-edit/MdEdit.vue")
      },
      {
        path: '/map-baidu',
        name: 'MapBaidu',
        component: () => import("../views/home/plugins/map-baidu/MapBaidu.vue")
      },
      {
        path: '/map-gaode',
        name: 'MapGaode',
        component: () => import("../views/home/plugins/map-gaode/MapGaode.vue")
      },{
        path: '/rich-edit',
        name: 'RichEdit',
        component: () => import("../views/home/plugins/rich-edit/RichEdit.vue")
      },{
        path: '/video-start',
        name: 'VideoStart',
        component: () => import("../views/home/plugins/video-start/VideoStart.vue")
      },
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
  {
    path: "/routerAccess",
    name: "RouterAccess",
    component: () =>
      import("../views/access/RouterAccess.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "PageNotFound",
    component: () =>
      import("../views/404/PageNotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

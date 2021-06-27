import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router';
import firebase from 'firebase'

import HelloWorld from '../components/HelloWorld.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import NotFound from '../components/NotFound.vue'
import Dashboard from '../components/Dashboard.vue'
import UserSettings from '../components/UserSettings.vue'
import About from '../components/About.vue'



const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld,
          meta: {
            requiresAuth: false
        }

    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
          meta: {
            requiresAuth: false
        }

    },
    {
        path: '/about',
        name: 'About',
        component: About,
          meta: {
            requiresAuth: true
        }

    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: "/:catchAll(.*)",
        component: NotFound,
          meta: {
            requiresAuth: false
        }
    },

    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/usersettings',
        name: 'UserSettings',
        component: UserSettings,
        meta: {
            requiresAuth: true
        }
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const currentUser = firebase.auth().currentUser;
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    if (requiresAuth && !currentUser) next('login');
    else if (!requiresAuth && currentUser) next('dashboard');
    else next();
});

export default router
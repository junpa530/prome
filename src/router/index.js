import Vue from 'vue';
import Router from 'vue-router'
import views from '@/views'
// import Index from '../views/Index.vue'

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/home',
            redirect: '/'
        },
        {
            path: '/',
            component: views.Index
        },
        {
            path: '/objab',
            component: views.Objab
        },
        {
            path: '/parent',
            children: [
                {
                    path: '/children'
                }
            ]
        },
        {
            path: '/test',
            component: views.ComponentForView
        }
    ]
});

export default router;
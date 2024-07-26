import { createRouter, createWebHashHistory } from 'vue-router';

//路由配置
const router = createRouter({
    history: createWebHashHistory(),//選擇hash路由
    routes: [
        {
            path: '/',
            redirect: '/login',
        },
        {
            path: '/home',
            component: () => import('../view/Home'),
            meta: {
                isAuth: true,
            }
        },
        {
            path: '/login',
            component: () => import('../view/Login'),
        },
        {
            path: '/register',
            component: () => import('../view/Register'),
        },
    ],
});


//路由攔截
router.beforeEach((to,from,next)=> {
    if(to.meta.isAuth) {
        if(localStorage.getItem('token')) {
            next();
        }else{
            ElMessage.error('請先登入');
        }
    }else {
        next();
    }
});



export default router;
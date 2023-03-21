import {createRouter, createWebHistory} from 'vue-router'
import routes from './index'    // 导入 router 目录下的 router.js 配置路径和组件的
import { ElMessage } from "element-plus";

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

/**
 * 全局前置路由守卫，每一次路由跳转前都进入这个 beforeEach 函数
 */
router.beforeEach((to, from, next) => {
    if (to.path != '/' || to.path == '/login') {
        // 登录或者注册才可以往下进行
        next();
    } else {
        // 获取 token
        const token = localStorage.getItem('Authorization'); 
        // token 不存在
        if (token === null || token === '') {
            ElMessage.error('您还没有登录，请先登录');
            next('/login');
        } else {
            next();
        }
    }
});

export default router;

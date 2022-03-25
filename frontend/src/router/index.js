import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '../store'

Vue.use(VueRouter)

const path = {
    MENU: '/',
    MASTER_MENU: '/master-menu',
    MASTER_USER_LIST: '/master-user-list',
    MASTER_USER_DETAIL: '/master-user-detail',
    MASTER_CATEGORY_LIST: '/master-category-list',
    MASTER_CATEGORY_DETAIL: '/master-category-detail'
}

const menuPaths = [path.MENU, path.MASTER_MENU]
const masterPaths = [path.MASTER_USER_LIST, path.MASTER_USER_DETAIL, path.MASTER_CATEGORY_LIST, path.MASTER_CATEGORY_DETAIL]

Vue.prototype.$path = path

const routes = [
    { path: path.MENU, name: path.MENU, props: { auth: 0 }, meta: { title: '' }, component: () => import('../views/Menu.vue') },
    { path: path.MASTER_MENU, name: path.MASTER_MENU, props: { auth: 1 }, meta: { title: '' }, component: () => import('../views/Menu.vue') },
    { path: path.MASTER_USER_LIST, name: path.MASTER_USER_LIST, meta: { title: 'ユーザー管理マスタ一覧' }, component: () => import('../views/MasterUserList.vue') },
    { path: path.MASTER_USER_DETAIL, name: path.MASTER_USER_DETAIL, meta: { title: 'ユーザー管理マスタ詳細' }, component: () => import('../views/MasterUserDetail.vue') },
    { path: path.MASTER_CATEGORY_LIST, name: path.MASTER_CATEGORY_LIST, meta: { title: '商品管理マスタ一覧' }, component: () => import('../views/MasterCategoryList.vue') },
    { path: path.MASTER_CATEGORY_DETAIL, name: path.MASTER_CATEGORY_DETAIL, meta: { title: '商品管理マスタ詳細' }, component: () => import('../views/MasterCategoryDetail.vue') },
]

const router = new VueRouter({ mode: 'history', routes })
router.beforeEach((to, from, next) => {
    if (menuPaths.includes(to.path)) {
        next()
    } else {
        const existsPath = routes.map(route => route.path).includes(to.path)
        switch (store.state.auth) {
        case 0:
            existsPath && !masterPaths.includes(to.path) ? next() : next(path.MENU)
            break
        case 1:
            existsPath ? next() : next(path.MASTER_MENU)
            break
        default:
            next(path.MENU)
            break
        }
    }
})
router.afterEach((to, from) => store.dispatch('setTitle', to.meta.title))

export default router

import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4f961e24 = () => interopDefault(import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _d8a3705a = () => interopDefault(import('../pages/guestbook.vue' /* webpackChunkName: "pages/guestbook" */))
const _134e573b = () => interopDefault(import('../pages/profile.vue' /* webpackChunkName: "pages/profile" */))
const _c7dfd4f4 = () => interopDefault(import('../pages/search.vue' /* webpackChunkName: "pages/search" */))
const _32a4359f = () => interopDefault(import('../pages/admin/article-edit.vue' /* webpackChunkName: "pages/admin/article-edit" */))
const _7a6fb43a = () => interopDefault(import('../pages/admin/article-manage.vue' /* webpackChunkName: "pages/admin/article-manage" */))
const _0f7474e6 = () => interopDefault(import('../pages/admin/category-manage.vue' /* webpackChunkName: "pages/admin/category-manage" */))
const _6230c731 = () => interopDefault(import('../pages/admin/comment-manage.vue' /* webpackChunkName: "pages/admin/comment-manage" */))
const _00663e0f = () => interopDefault(import('../pages/admin/guestbook-manage.vue' /* webpackChunkName: "pages/admin/guestbook-manage" */))
const _0c7d7236 = () => interopDefault(import('../pages/admin/profile-settings.vue' /* webpackChunkName: "pages/admin/profile-settings" */))
const _39eab753 = () => interopDefault(import('../pages/admin/system-settings.vue' /* webpackChunkName: "pages/admin/system-settings" */))
const _3f7a6a8f = () => interopDefault(import('../pages/auth/change-password.vue' /* webpackChunkName: "pages/auth/change-password" */))
const _1fb117c0 = () => interopDefault(import('../pages/auth/login.vue' /* webpackChunkName: "pages/auth/login" */))
const _10fe0a11 = () => interopDefault(import('../pages/blog/_category/index.vue' /* webpackChunkName: "pages/blog/_category/index" */))
const _65be15c8 = () => interopDefault(import('../pages/blog/_category/_article.vue' /* webpackChunkName: "pages/blog/_category/_article" */))
const _28c8d064 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin",
    component: _4f961e24,
    name: "admin"
  }, {
    path: "/guestbook",
    component: _d8a3705a,
    name: "guestbook"
  }, {
    path: "/profile",
    component: _134e573b,
    name: "profile"
  }, {
    path: "/search",
    component: _c7dfd4f4,
    name: "search"
  }, {
    path: "/admin/article-edit",
    component: _32a4359f,
    name: "admin-article-edit"
  }, {
    path: "/admin/article-manage",
    component: _7a6fb43a,
    name: "admin-article-manage"
  }, {
    path: "/admin/category-manage",
    component: _0f7474e6,
    name: "admin-category-manage"
  }, {
    path: "/admin/comment-manage",
    component: _6230c731,
    name: "admin-comment-manage"
  }, {
    path: "/admin/guestbook-manage",
    component: _00663e0f,
    name: "admin-guestbook-manage"
  }, {
    path: "/admin/profile-settings",
    component: _0c7d7236,
    name: "admin-profile-settings"
  }, {
    path: "/admin/system-settings",
    component: _39eab753,
    name: "admin-system-settings"
  }, {
    path: "/auth/change-password",
    component: _3f7a6a8f,
    name: "auth-change-password"
  }, {
    path: "/auth/login",
    component: _1fb117c0,
    name: "auth-login"
  }, {
    path: "/blog/:category?",
    component: _10fe0a11,
    name: "blog-category"
  }, {
    path: "/blog/:category?/:article",
    component: _65be15c8,
    name: "blog-category-article"
  }, {
    path: "/",
    component: _28c8d064,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}

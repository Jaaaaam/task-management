/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap'
import Vue from 'vue'
import VueRouter from 'vue-router'

window.Vue = Vue;
Vue.use(VueRouter);

import router from './routes'
// import App from './components/App'

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('mainPanel', require('./components/MainPanel/MainPanel.vue'))
Vue.component('sidePanel', require('./components/SidePanel.vue'))
Vue.component('welcome', require('./components/MainPanel/Widgets/Welcome.vue'))
Vue.component('upcoming-events', require('./components/MainPanel/Widgets/UpcomingEvents.vue'))
Vue.component('recent-tasks', require('./components/MainPanel/Widgets/RecentTasks.vue'))


const app = new Vue({
    el: '#app',
    router
    // template: '<App/>',
    // components: { App }
});

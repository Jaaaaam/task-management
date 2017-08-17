// import Vue from 'vue'
import VueRouter from 'vue-router'
import Timeline from './components/MainPanel/Timeline'
import Tasks from './components/MainPanel/Tasks'


// Vue.use(Router);

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Timeline',
            component: Timeline
        },
        {
            path: '/tasks',
            name: 'Tasks',
            component: Tasks
        }
    ],
    mode: 'history'
})

// import Vue from 'vue'
import VueRouter from 'vue-router'
import Timeline from './components/MainPanel/Timeline'

// Vue.use(Router);

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Timeline',
            component: Timeline
        }
    ]
})

import Vue from 'vue'
import Router from 'vue-router'

// Admin Routes Starts
import AdminDashboard from '@/pages/admin/dashboard/Index'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/admin/dashboard',
        name: 'HelloWorld',
        component: AdminDashboard
    }]
})
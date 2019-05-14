import Vue from 'vue';
import Router from 'vue-router';
import A from '../pages/A/A';
import B from '../pages/B/B';
import C from '../pages/C/C';
import catalog from '../pages/catalog/catalog';

Vue.use(Router);

export default new Router({
    mode:"history",
    routes:[
        {
            path:"/catalog",
            name:"catalog",
            component: catalog,
            children:[
                {
                    path:"A",
                    name:"A",
                    component: A,
                },
                {
                    path:"B",
                    name:"B",
                    component: B,
                },
                {
                    path:"C",
                    name:"C",
                    component: C,
                }
            ]
        },
        {path: '*', redirect: { name: 'A' }}
    ]
})
import { createWebHistory, createRouter } from "vue-router";
import routes from '~pages'
//import About from "../views/About/About.vue"

// const routes = [
// //     {
// //        path: "/about",
// //         name: "AboutMe",
// //        component: About,
// //    },
// //    {
// //        path: "/contact",
// //        name: "ContactMe",
// //        component: Contact,
// //    },
// //    {
// //        path: "/todolist",
// //        name: "ToDoListMe",
// //        component: ToDoList,
// //    }
// ];
console.log(routes);

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
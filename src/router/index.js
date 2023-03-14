import { createRouter, createWebHistory } from "vue-router";
import AllCoursesView from "@/views/AllCoursesView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "all-courses",
            component: AllCoursesView,
        },
        {
            path: "/course",
            name: "about-course",
            component: () => import("../views/CourseDetailsView.vue"),
        },
    ],
});

export default router;

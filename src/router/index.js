import { createWebHistory, createRouter } from "vue-router";
import ContactBook from "@/views/ContactBook.vue";

const routes = [{
        path: "/",
        name: "contactbook",
        component: ContactBook,
    },
    {
        path: "/contact/add",
        name: "contact.add",
        component: () =>
            import ("@/views/ContactAdd.vue"),
        props: true,
    },
];

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes,
});

export default router;
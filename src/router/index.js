import Vue from "vue";
import Router from "vue-router";
import Welcome from "@/components/Welcome";

Vue.use(Router);

export default new Router({
	mode: "history",
	routes: [
		{
			path: "/",
			name: "Welcome",
			component: Welcome
		},
		{
			path: "/chat",
			name: "Chat",
			component: () =>
				import(/* webpackChunkName: "chat" */ "../components/Chat.vue"),
			props: true
		}
	]
});

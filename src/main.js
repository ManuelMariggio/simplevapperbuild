import Vue from 'vue';


import createRouter from './createRouter';
import App from './App.vue';
import { store } from './store';
import {perf} from "@/tools/Logger";





Vue.config.productionTip = false;





// Export factory function
export default function createApp ({ type, req}) {
	  // 1. Create a router instance
	//console.log(req.headers.host);
	if(type == "server") {

		global.window = {};
		global.document = false;
		

	} 
	window.Vue = Vue;
	
	const router = createRouter();
	
	store.state.running_on_host = (req?req.headers.host:false)

	

  	// 2. Create a app instance
  	const app = {
		router,
		store,
		head: {},
		data: {},
		render: h => h(App),
		
		methods: {
			
		}
		
  	};

  	// 3. return
  	return  app;
}


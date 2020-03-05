import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter)

export default () => {
  	return new VueRouter({
    	mode: 'history',
    	routes: [
			
			

			{ path: '*', component: () => import('@/views/Simplepage/Simplepage.vue'), meta: {ssr:true} },


			

			
			
    	]
  	})
}
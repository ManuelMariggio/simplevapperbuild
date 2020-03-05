import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

function createStore(req) {
	return new Vuex.Store({
		
		state: {
			running_on_host:false,
			
		},

		mutations: {
			
		},

		actions: {
			fetchInitialState: async function(context,data) {
				var _this = this;
				
			}
			
		},
	});
}

export const store = createStore()
export const useStore = () => store
<template>
  	<div id="app" >
		<h1>I'm a Vapper app</h1>
		<router-view   ></router-view>
		
			
		
		
  	</div>
</template>

<script>



export default {
	components: {
		
	},
  	name: 'app',
  	data () {
    	return {}
  	},
  	computed: {
		  /*
		changing_view: function () {
            return this.$store.state.main_store.changing_view;
		},*/
		

		
	},
  	async created () {
		//var path = this.$route.path;
		
		this.$store.dispatch('fetchInitialState',{route:this.$route})
		
	
  	}
}
</script>


<style>



</style>
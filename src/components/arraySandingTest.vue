<template>
	<div id="main" class="mainClass">
	<p>这是子组件</p>
		{{childData}}
	</div>
</template>
<script>
	export default{
	name:'arraySandingTest',
	data(){
		return{
			childData:'null'
		}
	},
	props:{
		fatherMsg:{
			type:Array,
			default:[]
		}
	},
	method:{

	},
	watch:{
		fatherMsg:function(){
			this.childData='exist';
		}
	}
}
</script>
<style type="text/css">
/*	.mainClass{
		width: 600px;
		height: 400px;
		background-color: black;
		margin-top: 600px;
	}*/
</style>
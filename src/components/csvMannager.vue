<template>
	<div id="csvMannager" class="csvMannagerClass">
		<ul id="example-1">
			<span class="spanClass2">文件列表如下:</span>
  			<li v-for="item in items">
    		{{item.filepath}}<input type="button" value="选择该文件" v-bind:data="item.filepath" @click="showData">
  			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		name:'csvMannager',
		data(){
			return{
				items:[]
			}
		},
		mounted(){
			this.getData();
		},
		methods:{
			showData:function(){
				var data=event.target.getAttribute("data");
				console.log(data);
				this.$ajax.post('/fileProceed',data).then((res) => {

					alert("已选择改文件");
				});
			},
			getData:function(){
				var request="请求数据";
				this.$ajax.post('/getCsv',request).then((res) => {
					this.items=res.data.data;
					console.log(this.items);
					// if(res.data.status == 0){
					// 	console.log("获取成功");
					// }else{
					// 	console.log("获取失败");
					// }
				});
			}
		}
	}
</script>
<style>
	ul{
	list-style: none;
}
li{
	height: 50px;
	width: 500px;
	font-weight: bold;
	font-size: 18px;
	height: 25px;
	line-height: 25px;
	padding: 0 5px;
	margin-bottom: 8px;
	background-color: rgba(255,255,255,0.5);
	border-radius: 4px;
}
li:hover{
	
	height: 40px;
	line-height: 40px;
	width:500px;
	color: aliceblue;
	background-color: rgba(90, 141, 236, 0.822);
	border: 1px solid rgba(255,255,255,0.5);
	border-radius: 4px;
}
.csvMannagerClass{
	width: 50%;
	height: 40%;
	position: relative;
	margin: 0 auto;
}
input{

	border-radius: 4px;
	color: #000;
	
	margin-left: 200px;
}
input:hover{
	height: 30px;
	margin-top: 5px;
	color: #fff;
	background-color: rgba(61, 61, 230, 0.925);
	border: 1px solid rgba(50, 36, 240, 0.966);
	height: 3

}
.spanClass2{
	font-size: 20px;
    color:white;
    font-family:"微软雅黑";
}


</style>
<!-- 				{ID:1,filename:'1.jpg',filepath:'d：/files/'},
				{ID:2,filename:'2.jpg',filepath:'d：/files/'},
				{ID:3,filename:'3.jpg',filepath:'d：/files/'},
				{ID:4,filename:'4.jpg',filepath:'d：/files/'}, -->
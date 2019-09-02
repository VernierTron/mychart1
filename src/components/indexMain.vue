<template>
<div id="index" class="indexClass">
	<div id="guideLine" class="guideLineClass">
		<div class="docUpload" @click="showDocUpload"  title="点击选择文件上传">
			<span class="lineClass">文件上传</span>
		</div>
		<div class="modelMannager" @click="showCsvMannager" title="点击进行模型管理">
			<span class="lineClass1">模型管理</span>
		</div>
		<div class="dataShow"  @click="showNumber2" title="点击进入大数据显示">
			<span class="lineClass2">大数据显示</span>
		</div>
	</div>
	<div id="childShow" class="childShowClass">
		<docUpload v-if="docUploadShow"></docUpload>
		<csvMannager v-if="csvMannagerShow"></csvMannager>
		<number2 v-if="number2Show"></number2>
	</div>
</div>
</template>
<script>
import docUpload from '@/components/docUpload'
import csvMannager from '@/components/csvMannager'
import number2 from '@/components/number2'
	export default{
		name:'indexMain',
		data(){
			return{
				docUploadShow:true,
				csvMannagerShow:false,
				number2Show:false
			}
		},
		components:{
			docUpload:docUpload,
			csvMannager:csvMannager,
			number2:number2
		},
		methods:{
			showDocUpload:function(){
				this.docUploadShow=true;
				this.csvMannagerShow=false;
				this.number2Show=false;
			},
			showCsvMannager:function(){
				this.docUploadShow=false;
				this.csvMannagerShow=true;
				this.number2Show=false;
			},
			showNumber2:function(){
				this.docUploadShow=false;
				this.csvMannagerShow=false;
				this.number2Show=true;
			}
		}
	}
</script>
<style>
/* html,body{
	padding:0;
    margin:0;
    width: 100%;
	height: 100%;
	background-color: rgba(173, 238, 216, 0.11)
} */
.indexClass{
	position: absolute;
	width: 100%;
	height: 100%;
	background-image: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564979890320&di=0f3cfc681cd5b7c2e2f0dbb776ff96d5&imgtype=0&src=http%3A%2F%2Fwww.uimaker.com%2Fuploads%2Fuserup%2F0%2F1413012235-43G.png);
    background-size: 100%, 100%;
}

.guideLineClass{
	margin: 10px 20% 20px;
	padding: 0;
	position: absolute;
	width: 80%;
	height: 15%;
}
.docUpload, .modelMannager, .dataShow{
	float: left;
	margin: 0;
	padding: 10px;
	margin: 10px;
	border: 0.5px solid rgba(24, 163, 243, 0.192);
	width: 20%;
	height: 80%;
	border-radius: 20px;
	background-color: rgba(31, 129, 241, 0.158);
}
.lineClass, .lineClass1, .lineClass2{
	color: rgba(255, 255, 255, 0.651);
	outline: none;
    font-size: 18px;
	font-family:"微软雅黑";
	position: relative;
	left: 30%;	
	top: 45%;
}
.docUpload:hover{
	color: rgba(31, 129, 241, 0.8);
	border: 1px solid rgba(255, 255, 255, 0.651);
}
.modelMannager:hover{
	color: rgba(31, 129, 241, 0.8);
	border: 1px solid rgba(255, 255, 255, 0.651);
}
.dataShow:hover{
	color: rgba(31, 129, 241, 0.8);
	border: 1px solid rgba(255, 255, 255, 0.651);
}
/* .lineClass:hover{
	color: blue;
}
.guideLineClass:hover{
	color: aquamarine;
} */
/* .docUpload{
	display: inline-block;
	position: absolute;
	float: left;
	width: 20%;
	height: 100%;
	background-color:rgba(236, 17, 17, 0.719);
	margin:10px;
	text-align: center;
}
.modelMannager{
	display: inline-block;
	position: absolute;
	float: left;
	width: 20%;
	height: 100%;
	background-color:rgba(50, 106, 211, 0.795);
	margin: 10px;
}
.dataShow{
	display: inline-block;
	position: absolute;
	float: left;
	width: 20%;
	height: 100%;
	background-color:rgba(240, 169, 37,0.5);
	margin: 10px;
} */
/* .lineClass{
	color: rgba(138, 15, 15, 0.315);
	outline: none;
    font-size: 18px;
    font-family:"微软雅黑";
    left: 50%;
	top: 50%;
	margin-top: -12px;
	margin-left: -36px;
	position: absolute;
}
.lineClass1{
	color: white;
	outline: none;
    font-size: 18px;
    font-family:"微软雅黑";
    left: 50%;
	top: 50%;
	margin-top: -12px;
	margin-left: -36px;
	position: absolute;
}
.lineClass2{
	color: white;
	outline: none;
    font-size: 18px;
    font-family:"微软雅黑";
    left: 50%;
	top: 50%;
	margin-top: -12px;
	margin-left: -36px;
	position: absolute;
} */
.viewClass{
	position: absolute;
	height: 2000px;
	width: 2000px;
	margin-left: 0px;
	margin-top: 120px;
}
.childShowClass{
	margin:0px;
	position: absolute;
	top: 20%;
	width: 100%;
	height: 60%;
}
</style>
<template>
	<div id="docUpload" class="docUploadClass">
		<div id="formDiv" class="formDivClass">
		<form id="upLoadFile"  enctype="multipart/form-data" >
			<div id="fileChoose" class="fileChooseClass">
				<span class="spanClass">文件上传</span>
				<input id="fileData" type="file" name="file" @change="getFile($event)" class="inputClass">
			</div>
			<button class="uploadButtonClass" @click.prevent="doingUpload" title="点击开始上传文件">确认上传</button>			
		</form>
		</div>
	</div>
</template>
<script>
import axios from 'axios'
	export default{
		name:'docUpload',
		data(){
			return{
				file:''
			}
		},
		methods:{
			getFile(event){
				this.file = event.target.files[0];
                console.log(this.file);
			},
			doingUpload:function(){
				var formData = new FormData();
				var formData = new window.FormData();
				formData.append('userfile',this.file);
				this.$ajax.post('/fileUpload',formData).then((res) => {
					if(res.data.status == 0){
						alert("上传成功");
						console.log("上传成功");
					}
				});
			}
		}
	}
</script>
<style>
.docUploadClass{
	width:100%;
	height:100%;
	margin:0px;
	position: absolute;
}
.formDivClass{
	width: 500px;
	height: 300px;
	left: 50%;
	top: 50%;
	margin-left: -250px;
	margin-top: -150px;
	position: absolute;
	background: rgba(255, 255, 255, 0.719);
	border-radius: 10px;
    border: 2px solid rgba(24, 99, 170, 0.034);
}
/*.formClass{
	width: 500px;
	height: 300px;
	position: absolute;
	margin-left:0px;
	margin-top:0px;
	display:inline-block;
}*/
.fileChooseClass{
	display:inline-block;
    border-radius: 4px;
    color: #fff;
    background: rgba(77, 164, 247, 0.432);
    width: 200px;
    height: 30px;
    position: absolute;
    left: 50%;
    margin-left: -100px;
    margin-top: 50px;
}
/* .inputClass:hover{
	color: rgba(24, 99, 170, 0.034);
	border: 2px solid rgba(21, 140, 252, 0.034);
} */
.inputClass{
	width: 200px;
	height: 30px;
	position: absolute;
	margin:0px;
	opacity: 0;
	color: rgba(0, 0, 0, 0.568);
	background: rgba(77, 164, 247, 0.432);

}
.spanClass{
	position: absolute;
	width: 100px;
	height: 30px;
	/* opacity: 0; */
	border-radius: 4px;
	line-height: 30px;
	margin-left: 70px;
	color: rgba(0, 0, 0, 0.568);
	background:rgba(77, 164, 247, 0.001);
}
.uploadButtonClass{
	display:block;
    cursor: pointer;
    border-radius: 4px;
    color: rgba(0, 0, 0, 0.568);
    background: rgba(77, 164, 247, 0.432);
    width: 200px;
    height: 30px;
    position: absolute;
    margin-left: -100px;
    left: 50%;
    margin-top: 100px;
}
.uploadButtonClass:hover{
	color: #fff;
    background: rgba(42, 151, 253, 0.918);
	border: 2px solid rgba(255, 255, 255, 0.719);
}
/* .inputClass:hover{
	color: #fff;
    background: rgba(42, 151, 253, 0.918);
	border: 2px solid rgba(255, 255, 255, 0.719);
} */
.spanClass:hover{
	color: #fff;
    background: rgba(42, 151, 253, 0.918);
	border: 2px solid rgba(255, 255, 255, 0.719);
}
</style>
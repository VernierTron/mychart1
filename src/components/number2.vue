<template>
    <div id="number1" class="number2Class">
        <div id="itemList" class="itemListClass">
            <div id="item1" class="itemClass1"   @click="showLine1">
            <span class = "spanClass1">测试线条</span>
            </div>
            <div id="item2" class="itemClass2"   @click="showLine2">
            <span class = "spanClass1">rOBOT_CARTESIAN_COORD_TOOL_J1分量</span>
            </div>
            <div id="item3" class="itemClass3"   @click="showLine3">
            <span class = "spanClass1">rOBOT_TARGET_JOINT_VELOCITIES_J1分量</span>
            </div>
            <div id="item4" class="itemClass4"   @click="showLine4">
            <span class = "spanClass1">rOBOT_TARGET_JOINT_POSITIONS_J1分量</span> 
            </div>
            <div id="item5" class="itemClass5"   @click="showLine5">
            <span class = "spanClass1">rOBOT_TARGET_JOITN_CURRENT_J1分量</span>
            </div>
            <div id="item6" class="itemClass6"   @click="showLine6">
            <span class = "spanClass1">rOBOT_TARGET_JOINT_ACCELERATIONS_J1分量</span>
            </div>
            <div id="item7" class="itemClass7"   @click="showLine7">
            <span class = "spanClass1">rOBOT_TARGET_JOINT_TORQUES_J1分量</span>
            </div>
            <div id="item8" class="itemClass8"   @click="showLine8">
            <span class = "spanClass1">rOBOT_JOINT_CONTROL_CURRENT_J1分量</span>
            </div>
            <div id="item9" class="itemClass9"   @click="showLine9">
            <span class = "spanClass1"> rOBOT_TCP_FORCE_x分量</span>
            </div>
            <div id="item10" class="itemClass10"   @click="showLine10">
            <span class = "spanClass1">rOBOT_JOINT_TEMP_J1分量</span>
            </div>
        </div>
        
	    <div id="main" class="chartClass">
        </div>
<!--         <div id="childComponents" class="childComponents">
            <arraySandingTest v-bind:fatherMsg="dataToChild" >这是子组件</arraySandingTest>
            <button @click="sandingData" class="msgSandingClass">发送数据</button>
        </div> -->
        
	    <!-- <div>{{opinionData}}</div> -->
        <div id="warning" class="warningClass">
            <div id="warningButton" class="warningButtonClass">
                <button value="" @click="showWarningData">显示异常数据</button>
            </div>
            <div>
            <span class="spanclass2">异常时间点:</span>
            <ul id="example-1">

                <li v-for="item in warningTimes" class="liClass">
                {{item}}
                </li>
            </ul>
            </div>
        </div>
	</div>
</template>
<script>
import echarts from 'echarts'
import axios from 'axios'
import arraySandingTest from '@/components/arraySandingTest'
import Vue from 'vue'
	export default {
        name: '',
        data() {
            return {
                charts: '',
                rOBOT_CARTESIAN_COORD_TOOL_J1:[],
                rOBOT_TARGET_JOINT_VELOCITIES_J1:[],
                rOBOT_TARGET_JOINT_POSITIONS_J1:[],
                rOBOT_TARGET_JOITN_CURRENT_J1:[],
                rOBOT_TARGET_JOINT_ACCELERATIONS_J1:[],
                rOBOT_TARGET_JOINT_TORQUES_J1:[],
                rOBOT_JOINT_CONTROL_CURRENT_J1:[],
                rOBOT_TCP_FORCE_x:[],
                rOBOT_JOINT_TEMP_J1:[],
                rOBOT_TIME:[],
                warningTimes:[],
                SM1:[],
                dataToChild:[],
                dataLength:[]
            }
        },
        components:{
            arraySandingTest:arraySandingTest
        },
        methods: {
            showWarningData:function(){
                 var data="warningData";
                 this.$ajax.post('/warningData',data).then((res)=>{
                    
                    for (var i=0;i<res.data.data.length;i++) {
                            Vue.set(this.warningTimes,i, res.data.data[i].rOBOT_TIME);
                        }
                    }).catch((error) => {
                    console.log(error);
                });
                console.log(this.warningTimes);
            },
            sandingData:function(){
                this.dataToChild=this.opinionData1;
            },
            enter:function(){
                console.log("enter");
            },
            showLine1:function(){
                var data="line1"
                this.$ajax.post('/lineData',data).then((res)=>{
                    // console.log(res);
                        for (var i=0;i<res.data.data.length;i++) {
                            Vue.set(this.SM1,i, res.data.data[i].sM1);
                        }
                        // console.log(this.SM1);
                        for (var i=0;i<res.data.data.length;i++) {
                            Vue.set(this.dataLength,i, res.data.data[i].iD);
                        }
                        
                    }).catch((error) => {
                    console.log(error);
                });
                
                this.drawLine(this.SM1,'red','red',this.dataLength,1,0,50);
                console.log("showLine1");
            },
            showLine2:function(){
                console.log("showLine2");
                var data="line"
                this.$ajax.post('/mainLineData',data).then((res)=>{
                    console.log(res);
                        for (var i=0;i<res.data.data.length;i++) {
                            Vue.set(this.rOBOT_CARTESIAN_COORD_TOOL_J1,i, res.data.data[i].rOBOT_CARTESIAN_COORD_TOOL_J1);
                        }
                        // console.log(this.rOBOT_CARTESIAN_COORD_TOOL_J1);
                        for (var i=0;i<res.data.data.length;i++) {
                            Vue.set(this.rOBOT_TIME,i, res.data.data[i].rOBOT_TIME);
                        }
                        // console.log(this.dataLength);
                    }).catch((error) => {
                    console.log(error);
                });
                this.drawLine(this.rOBOT_CARTESIAN_COORD_TOOL_J1,'blue','blue',this.rOBOT_TIME,0,-1,50);
            },
            showLine3:function(){
                console.log("showLine3");
                var data="line"
                this.$ajax.post('/mainLineData',data).then((res)=>{
                    console.log(res);
                        for (var i=0;i<res.data.data.length;i++) {
                            Vue.set(this.rOBOT_TARGET_JOINT_VELOCITIES_J1,i, res.data.data[i].rOBOT_TARGET_JOINT_VELOCITIES_J1);
                        }
                        
                        for (var i=0;i<res.data.data.length;i++) {
                            Vue.set(this.rOBOT_TIME,i, res.data.data[i].rOBOT_TIME);
                        }
                        
                    }).catch((error) => {
                    console.log(error);
                });
                this.drawLine(this.rOBOT_TARGET_JOINT_VELOCITIES_J1,'green','green',this.rOBOT_TIME,1,-1,50);
            },
            showLine4:function(){
                console.log("showLine4");
                var data="line"
                this.$ajax.post('/mainLineData',data).then((res)=>{
                    console.log(res);
                        for (var i=0;i<res.data.data.length;i++) {
                            Vue.set(this.rOBOT_TARGET_JOINT_POSITIONS_J1,i, res.data.data[i].rOBOT_TARGET_JOINT_POSITIONS_J1);
                        }
                        
                        for (var i=0;i<res.data.data.length;i++) {
                            Vue.set(this.rOBOT_TIME,i, res.data.data[i].rOBOT_TIME);
                        }
                        
                    }).catch((error) => {
                    console.log(error);
                });
                this.drawLine(this.rOBOT_TARGET_JOINT_POSITIONS_J1,'yellow','yellow',this.rOBOT_TIME,0,-60,50);
            },
            showLine5:function(){
                console.log("showLine5");
                var data="line"
                this.$ajax.post('/mainLineData',data).then((res)=>{
                    console.log(res);
                        for (var i=0;i<res.data.data.length;i++) {
                            Vue.set(this. rOBOT_TARGET_JOITN_CURRENT_J1,i, res.data.data[i]. rOBOT_TARGET_JOITN_CURRENT_J1);
                        }
                        
                        for (var i=0;i<res.data.data.length;i++) {
                            Vue.set(this.rOBOT_TIME,i, res.data.data[i].rOBOT_TIME);
                        }
                        
                    }).catch((error) => {
                    console.log(error);
                });
                this.drawLine(this.rOBOT_TARGET_JOITN_CURRENT_J1,'purple','purple',this.rOBOT_TIME,2,-2,50);
            },
            showLine6:function(){
                console.log("showLine6");
                var data="line"
                this.$ajax.post('/mainLineData',data).then((res)=>{
                    console.log(res);
                        for (var i=0;i<res.data.data.length;i++) {
                            Vue.set(this.rOBOT_TARGET_JOINT_ACCELERATIONS_J1,i, res.data.data[i].rOBOT_TARGET_JOINT_ACCELERATIONS_J1);
                        }
                        
                        for (var i=0;i<res.data.data.length;i++) {
                            Vue.set(this.rOBOT_TIME,i, res.data.data[i].rOBOT_TIME);
                        }
                        
                    }).catch((error) => {
                    console.log(error);
                });
                this.drawLine(this.rOBOT_TARGET_JOINT_ACCELERATIONS_J1,'black','black',this.rOBOT_TIME,2,-2,50);
            },
            showLine7:function(){
                console.log("showLine7");
                var data="line"
                this.$ajax.post('/mainLineData',data).then((res)=>{
                    console.log(res);
                        for (var i=0;i<res.data.data.length;i++) {
                            Vue.set(this.rOBOT_TARGET_JOINT_TORQUES_J1,i, res.data.data[i].rOBOT_TARGET_JOINT_TORQUES_J1);
                        }
                        
                        for (var i=0;i<res.data.data.length;i++) {
                            Vue.set(this.rOBOT_TIME,i, res.data.data[i].rOBOT_TIME);
                        }
                        
                    }).catch((error) => {
                    console.log(error);
                });
                this.drawLine(this.rOBOT_TARGET_JOINT_TORQUES_J1,'black','black',this.rOBOT_TIME,10,-10,50);
            },
            showLine8:function(){
                console.log("showLine8");
                var data="line"
                this.$ajax.post('/mainLineData',data).then((res)=>{
                    console.log(res);
                        for (var i=0;i<res.data.data.length;i++) {
                            Vue.set(this.rOBOT_JOINT_CONTROL_CURRENT_J1,i, res.data.data[i].rOBOT_JOINT_CONTROL_CURRENT_J1);
                        }
                        
                        for (var i=0;i<res.data.data.length;i++) {
                            Vue.set(this.rOBOT_TIME,i, res.data.data[i].rOBOT_TIME);
                        }
                        
                    }).catch((error) => {
                    console.log(error);
                });
                this.drawLine(this.rOBOT_JOINT_CONTROL_CURRENT_J1,'black','black',this.rOBOT_TIME,3,-3,50);
            },
            showLine9:function(){
                console.log("showLine9");
                var data="line"
                this.$ajax.post('/mainLineData',data).then((res)=>{
                    console.log(res);
                        for (var i=0;i<res.data.data.length;i++) {
                            Vue.set(this.rOBOT_TCP_FORCE_x,i, res.data.data[i].rOBOT_TCP_FORCE_x);
                        }
                        
                        for (var i=0;i<res.data.data.length;i++) {
                            Vue.set(this.rOBOT_TIME,i, res.data.data[i].rOBOT_TIME);
                        }
                        
                    }).catch((error) => {
                    console.log(error);
                });
                this.drawLine(this.rOBOT_TCP_FORCE_x,'black','black',this.rOBOT_TIME,60,-60,50);
            },
            showLine10:function(){
                console.log("showLine10");
                var data="line"
                this.$ajax.post('/mainLineData',data).then((res)=>{
                    console.log(res);
                        for (var i=0;i<res.data.data.length;i++) {
                            Vue.set(this.rOBOT_JOINT_TEMP_J1,i, res.data.data[i].rOBOT_JOINT_TEMP_J1);
                        }
                        
                        for (var i=0;i<res.data.data.length;i++) {
                            Vue.set(this.rOBOT_TIME,i, res.data.data[i].rOBOT_TIME);
                        }
                        
                    }).catch((error) => {
                    console.log(error);
                });
                this.drawLine(this.rOBOT_JOINT_TEMP_J1,'black','black',this.rOBOT_TIME,28.3,28.1,50);
            },
            sendMessage:function(){
                this.$ajax.post('/login',this.opinionData1).then((res)=>{
                    if(res.status === 200 && res.data.status === 1){
                        console.log('succeed')
                    }else{
                        console.log('failed')
                        //alert(res.data.error);
                    }
                }).catch((error) => {
                    console.log(error);
                })
            },
            drawLine(newData,newLineColor,newPointColor,newDataLength,newMax,newMin,newNum) {
                this.charts = echarts.init(document.getElementById("main"));
                var showData = newData;
                var lineColor = newLineColor;
                var pointColor = newPointColor;
                var dataLength = newDataLength;
                var myMin = newMin;
                var myMAX = newMax;
                var myNum = newNum;
                this.charts.setOption({
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['设备运行数据']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },

                    toolbox: {
                        feature: {
                            saveAsImage: {}
                        }
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        name:'time',
                        data:dataLength,
                    
                    },
                    yAxis: {
                        scale : true,
                        type: 'value',
                        max : newMax,
                        min : myMin,
                        splitNumber : newNum,
                    },
                    dataZoom:{
　　　　                 type:"inside"         //详细配置可见echarts官网
                 　　},
                    series: [{
                        itemStyle:{
                            color:pointColor
                        },
                        lineStyle:{
                            normal:{
                                color:lineColor
                            }
                        },
                        markPoint: {
                            data: [{
                                name: '最大值',
                                type: 'max'
                            }]
                            // data: [{
                            //     name: '最小值',
                            //     type: 'min'
                            // }]
                        },
                        name: '设备运行数据',
                        type: 'line',
                        stack: '总量',
                        data: showData
                    }]
                })
            }
        },
        //调用
        
        mounted() {
            this.drawLine(this.SM1,'red','red',this.dataLength);
            this.$nextTick(function() {
                this.drawLine(this.SM1,'red','red',this.dataLength)
            })
        }
    }
</script>
<style>
    .childComponents{
        position: absolute;
        margin-top: 400px;
        display: block;
    }
    .msgSandingClass{

    }
	.number2Class{
		background-color: white;
		width: 100%;
		height: 150%;
		position: absolute;
		margin-top: 0px;
		margin-left: 0px;	
        background: rgba(250,250,250,0.4);
    }
    .chartClass{
        height:700px;
        width: 1200px;
        margin-left: 300px;
        display: inline-block;
        position: absolute;
    }
    .itemClass1{
        width: 250px;
        height: 40px;
        margin-left: 10px;
        margin-top: 20px;
        /*position: absolute;*/
        display: block;
        background: rgba(195, 227, 240, 0.705)
    }
    .itemClass1, .itemClass2, .itemClass3, .itemClass4, .itemClass5, .itemClass6, .itemClass7, .itemClass8, .itemClass9, .itemClass10{
        border-radius: 3px;
    }
    .itemClass1:hover, .itemClass2:hover, .itemClass3:hover, .itemClass4:hover, .itemClass5:hover, .itemClass6:hover, .itemClass7:hover, .itemClass8:hover, .itemClass9:hover, .itemClass10:hover{
        width: 265px;
        height: 50px;
        padding: 5px;
        border: 1px solid rgba(255,255 ,255 ,0.6 );
        border-radius: 2px;
        background-color: rgba(96, 182, 240, 0.658);
        color: black;
    }
    .itemClass2{
        width: 250px;
        height: 40px;
        margin-left: 10px;
        margin-top: 20px;
        /*position: absolute;*/
        display: block;
        background: rgba(195, 227, 240, 0.705)
    }
    .itemClass3{
        width: 250px;
        height: 40px;
        margin-left: 10px;
        margin-top: 20px;
        /*position: absolute;*/
        display: block;
        background: rgba(195, 227, 240, 0.705)
    }
    .itemClass4{
        width: 250px;
        height: 40px;
        margin-left: 10px;
        margin-top: 20px;
        /*position: absolute;*/
        display: block;
        background: rgba(195, 227, 240, 0.705)
    }
    .itemClass5{
        width: 250px;
        height: 40px;
        margin-left: 10px;
        margin-top: 20px;
        /*position: absolute;*/
        display: block;
        background: rgba(195, 227, 240, 0.705)
    }
    .itemClass6{
        width: 250px;
        height: 40px;
        margin-left: 10px;
        margin-top: 20px;
        /*position: absolute;*/
        display: block;
        background: rgba(195, 227, 240, 0.705)
    }
    .itemClass7{
        width: 250px;
        height: 40px;
        margin-left: 10px;
        margin-top: 20px;
        /*position: absolute;*/
        display: block;
        background: rgba(195, 227, 240, 0.705)
    }
    .itemClass8{
        width: 250px;
        height: 40px;
        margin-left: 10px;
        margin-top: 20px;
        /*position: absolute;*/
        display: block;
        background: rgba(195, 227, 240, 0.705)
    }
    .itemClass9{
        width: 250px;
        height: 40px;
        margin-left: 10px;
        margin-top: 20px;
        /*position: absolute;*/
        display: block;
        background: rgba(195, 227, 240, 0.705)
    }
    .itemClass10{
        width: 250px;
        height: 40px;
        margin-left: 10px;
        margin-top: 20px;
        /*position: absolute;*/
        display: block;
        background: rgba(195, 227, 240, 0.705)
    }
    .itemListClass{
        width: 80px;
        height:400px;
        position: absolute;
        display: inline-block;
        margin:0px;
    }
    .liClass{
        font-size: 20px;
        color:white;
        font-family:"微软雅黑";
        list-style-type: none;
    }
    .spanClass1{
        font-size: 6px;
        color:white;
        font-family:"微软雅黑";
    }
    .warningClass{
        position: absolute;
        display: inline-block;
        width: 200px;
        height: 600px;
        margin-top: 00px;
        margin-left: 1550px;
        background-color:;
    }
</style>
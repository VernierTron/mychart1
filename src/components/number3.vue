<template>
<div id="number3">
	<div id="myChart3" style="width: 600px;height: 400px;">
		
		    
		
	</div>
	<div>
		<button v-on:click="doChangeData()">改变值</button>
	</div>
	<div>
	{{rainData}}
	<br v-if="show">{{testData}}</br>
	</div>
</div>	
</template>
	</div>
	
<script>
import echarts from 'echarts'
import Vue from 'vue'
	export default {
    data(){
      return {
      		monthData:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
      		rainData:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
      		steamData:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
      		testData:9,
      		show:false
        }
    }, 
     mounted(){
        this.myChart(this.rainData)//函数调用
        // this.doChangeData()
     },
     methods:{
     myChart(){
	        this.charts =  echarts.init(document.getElementById('myChart3'));
	        this.charts.setOption({
	        		title:{
        text: '某地区蒸发量和降水量',
        subtext: '纯属虚构'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['蒸发量','降水量']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data : this.monthData
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'蒸发量',
            type:'bar',
            data:this.steamData,
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            }
        },
        {
            name:'降水量',
            type:'bar',
            data:this.rainData,
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name : '平均值'}
                ]
            }
        }
    ]

	        	})
		},
		//changeData(){
			// for(var i=0;i<this.rainData.length;i++){
            		// this.rainData[5]=4.3
            		// this.testData=this.rainData[5]

            	// }
		//}
		changeData(){

            	for(var i=0; i < 10;i++){
            		Vue.set(this.rainData,i, this.rainData[i]+i);
            		// this.testData=this.rainData[9];
            	}
            
		},
		doChangeData(){
			var timeSet1 = setInterval(this.changeData,500);
			// var timeSet2 = setInterval(this.myChart,1001);
			this.$once('hook:beforeDestroy', () => {            
    				clearInterval(timeSet1); 
    				// clearInterval(timeSet2);                                    
				})
            }
            	// ,1000);
     //    },
        
	},
	watch:{
		rainData:function(){
			this.myChart()
		}
	}
}
</script>
<style>
	
</style>
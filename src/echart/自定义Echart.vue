<template>
    <div :id="tagID" class="echartDOM"></div>
</template>
<script setup>

import { onMounted } from 'vue'
import * as echarts from 'echarts/core';
import { GridComponent } from 'echarts/components';
import { LineChart } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
echarts.use([GridComponent, LineChart, CanvasRenderer, UniversalTransition]);
let props = defineProps({
    data: Object
})


let tagID = 'echartid' + Math.random();

let arr1 = []
let arr2 = []
console.log(props.data);

props.data.forEach((item) => {
    arr1.push(item.days)
    arr2.push(item.recent_user_trend)
})
onMounted(() => {
 





    var chartDom = document.getElementById(tagID);
    var myChart = echarts.init(chartDom);
    var option;

    option = {
        xAxis: {
            type: 'category',
            data: arr1
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: arr2,
                type: 'line'
            }
        ]
    };
    option && myChart.setOption(option);
    window.onresize = function () {
        myChart.resize()
    }
})

</script>

<style>
.echartDOM {
    height: 300px;
}
</style>
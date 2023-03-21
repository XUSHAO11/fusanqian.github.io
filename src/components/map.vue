<template>
    <div id="map">

    </div>
</template>

<script setup>

import { onMounted } from 'vue'

import axios from 'axios';

onMounted(() => {

    console.log(1111);

    axios.get(`/xu/ws/location/v1/ip?key=UM7BZ-UP2YJ-D6NFJ-FV6FO-OTKGQ-EHFWD&output=json`).then((res) => {


        console.log(res);


        // var center = new TMap.LatLng(res.data.result.location.lat, res.data.result.location.lng)
        var center = new TMap.LatLng(39.98412, 116.307484);
        //定义map变量，调用 TMap.Map() 构造函数创建地图
        var map = new TMap.Map(document.getElementById('map'), {
            center: center,//设置地图中心点坐标
            zoom: 17.2,   //设置地图缩放级别
            pitch: 43.5,  //设置俯仰角
            rotation: 45    //设置地图旋转角度
        });

        map.on('click', function (e) {
            console.log(e);
        });


    });


});
</script>

<style lang="scss" scoped></style>
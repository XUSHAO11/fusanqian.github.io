<template>
  <div>

    <!-- <v-chart class="chart" :option="option" autoresize /> -->
    <EchartVue2 v-if="obj1.length" :data="obj1"></EchartVue2>
    <EchartVue2 v-if="obj2.length" :data="obj2"></EchartVue2>
  
  </div>
</template>
<script setup>
import EchartVue2 from './自定义Echart.vue';
import { ref, onMounted } from 'vue';

let obj1 = ref([])
let obj2 = ref([])
let obj3 = ref([])

onMounted(()=>{
  let data = { "s": 1, "m": { "list": { "order_count": 746, "order_day": 0, "user_count": 2128, "user_vip_count": 0 }, "orderdata": [{ "days": "2023-02-13", "recent_order_trend": 0 }, { "days": "2023-02-14", "recent_order_trend": 0 }, { "days": "2023-02-15", "recent_order_trend": 0 }, { "days": "2023-02-16", "recent_order_trend": 0 }, { "days": "2023-02-17", "recent_order_trend": 0 }, { "days": "2023-02-18", "recent_order_trend": 0 }, { "days": "2023-02-19", "recent_order_trend": 0 }, { "days": "2023-02-20", "recent_order_trend": 0 }], "userdata": [{ "days": "2023-02-13", "recent_user_trend": 2 }, { "days": "2023-02-14", "recent_user_trend": 2 }, { "days": "2023-02-15", "recent_user_trend": 1 }, { "days": "2023-02-16", "recent_user_trend": 0 }, { "days": "2023-02-17", "recent_user_trend": 0 }, { "days": "2023-02-18", "recent_user_trend": 0 }, { "days": "2023-02-19", "recent_user_trend": 0 }, { "days": "2023-02-20", "recent_user_trend": 0 }], "domain": "111.lvge8.cn", "auths": [{ "auth_type": 1, "appid": "wx834f8f7847be7fe0" }, { "auth_type": 2, "appid": "wx3fdbbb101494bf13" }] } };

    console.log(data.m.userdata);

    obj1.value = data.m.userdata
    obj2.value = data.m.userdata
    obj3.value = data.m.userdata
})
</script>
<style>

</style>
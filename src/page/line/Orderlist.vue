<template>
    <!--订单列表  -->
    <!-- <div style="background-color: rgb(240, 240, 240);overflow: hidden;"> -->
        <div class="hender">
            <div style="margin: 24px 0; padding: 0 12px">
                <span style="margin-right: 10px; color: #999; font-size: 14px">
                    订单</span>/<span style="margin-left: 10px;font-weight: 700;color: #495060;font-size: 14px;">
                    订单列表</span>
            </div>
            <div>
                <el-col :span="24">
                    <div>
                        <el-card shadow="hover">
                        <div style="padding: 14px 16px; border-bottom: 1px solid #e9eaec">
                            <el-icon style="margin-right: 5px"><Expand /></el-icon>
                            <span class="h-size">商品查询</span>
                        </div>
                        <div style="padding: 10px">
                            <el-form
                            :inline="true"
                            :model="formInline"
                            class="demo-form-inline h-input"
                            >
                            <el-form-item label="" style="width: 120px">
                                <el-input
                                v-model="formInline.user"
                                placeholder="商家标题："
                                />
                            </el-form-item>
                            <el-form-item label="" style="width: 120px">
                                <el-input
                                v-model="formInline.user1"
                                placeholder="请输入商家名称"
                                />
                            </el-form-item>
                            <el-form-item label="" style="width: 120px">
                                <el-input
                                v-model="formInline.user2"
                                placeholder="预定姓名："
                                />
                            </el-form-item>
                            <el-form-item label="" style="width: 120px">
                                <el-input
                                v-model="formInline.user3"
                                placeholder="预订电话："
                                />
                            </el-form-item>
                            <el-form-item label="" style="width: 120px">
                                <el-select
                                v-model="formInline.region"
                                placeholder="选择商家："
                                >
                                <el-option label="线上核销" value="" />
                                <el-option label="111" value="beijing1" />
                                <el-option label="222" value="shanghai2" />
                                <el-option label="333" value="beijing3" />
                                <el-option label="444" value="shanghai4" />
                                <el-option label="666" value="beijing5" />
                                </el-select>
                            </el-form-item>
                            <el-form-item style="width: 150px;">
                                <el-date-picker
                                    v-model="value1"
                                    type="date"
                                    placeholder="起始时间"
                                    format="YYYY/MM/DD"
                                    value-format="YYYY-MM-DD"
                                />
                            </el-form-item>
                            <el-form-item style="width: 150px;">
                                <el-date-picker
                                    v-model="value2"
                                    type="date"
                                    placeholder="预约时间"
                                    format="YYYY/MM/DD"
                                    value-format="YYYY-MM-DD"
                                />
                            </el-form-item>
                            <el-form-item label="" style="width: 120px">
                                <el-input
                                v-model="formInline.user4"
                                placeholder="直推id："
                                />
                            </el-form-item>
                            <el-form-item label="" style="width: 120px">
                                <el-input
                                v-model="formInline.user5"
                                placeholder="间推id："
                                />
                            </el-form-item>
                            <el-form-item label="" style="width: 120px">
                                <el-select
                                v-model="formInline.region2"
                                placeholder="支付状态："
                                >
                                <el-option label="已支付" value="shanghai6" />
                                <el-option label="未支付" value="beijing7" />
                                <el-option label="退款中" value="shanghai8" />
                                <el-option label="退款已完成" value="beijing9" />
                                </el-select>
                            </el-form-item>
                                <el-form-item label="" style="width: 150px">
                                <el-select
                                    v-model="formInline.region3"
                                    placeholder="订单状态："
                                >
                                    <el-option label="待确认" value="shanghai10" />
                                    <el-option label="已确认" value="beijing11" />
                                    <el-option label="已取消" value="shanghai12" />
                                    <el-option label="已完成" value="beijing13" />
                                </el-select>
                                </el-form-item>
                                <el-form-item>
                                <el-button type="primary" @click="onSubmit"
                                    >查询</el-button
                                >
                                </el-form-item>
                                <span class="h-qk">清空搜索条件</span>
                            </el-form>
                        </div>
                        </el-card>
                    </div>
                </el-col>
            </div>
            <div style="padding-top: 30px">
                <el-col :span="24">
                    <el-card shadow="hover">
                    <div style="padding: 14px 16px; border-bottom: 1px solid #e9eaec">
                        <span class="h-size">订单列表</span>
                        <div style="float: right;">
                            <span style="font-size: 12px;">订单总金额：134175.14  预定总数量：580  总返利：3264.33  总结算：51863.67 </span>
                            <span>
                                <el-button  style="width: 70px;height: 25px;font-size: 12px;" type="primary">导出名单</el-button>
                                <el-button style="width: 70px;height: 25px;font-size: 12px;" type="primary">导出订单</el-button>
                            </span>
                        </div>
                    </div>
                    <div style="padding: 16px">
                        <el-table :data="tableData" v-loading="loading" type="index" style="width: 100%">
                            <el-table-column prop="index" label="#" width="50" />
                            <el-table-column prop="name" label="订单编号" width="160">
                                <template #default="scope">
                                    <div>{{ scope.row.orderid }}</div>
                                    <!-- <div>现价：{{ scope.row.present_price }}</div> -->
                                </template>
                            </el-table-column>
                            <el-table-column prop="state" label="商品名称" width="200">
                                <template #default="scope">
                                    <div>商品id:{{ scope.row.t_id }}</div>
                                    <div>{{ scope.row.title }}</div>
                                </template>
                            </el-table-column>
                            <el-table-column prop="chcount" label="数量" width="120" />
                            <el-table-column prop="opentime" label="预约时间" width="150" />
                            <el-table-column prop="name" label="预约姓名" width="120" />
                            <el-table-column prop="createtime" label="预约电话" width="150" />
                            <el-table-column prop="name" label="交易统计" width="120">
                                <template #default="scope">
                                    <div>支付金额:{{ scope.row.real_price }}</div>
                                    <div>成本结算:{{ scope.row.settle_price }}</div>
                                    <div>对外返利:{{ scope.row.fan_price }}</div>
                                </template>
                            </el-table-column>
                            <el-table-column prop="createtime" label="支付状态" width="120">
                                <template #default="scope">
                                    <div v-if="scope.row.status == 2">
                                        <el-button type="primary" size="small">已支付</el-button>
                                    </div>
                                    <div v-else="scope.row.status==1">
                                        <el-button type="warning" size="small">未支付</el-button>
                                    </div>
                                </template>
                            </el-table-column>
                            <el-table-column prop="createtime" label="订单状态" width="120" >
                                <template #default="scope">
                                    <div v-if="scope.row.pay_status == 2">
                                        <el-button type="primary" size="small">已确认</el-button>
                                    </div>
                                    <div v-else="scope.row.pay_status==1">
                                        <el-button type="warning" size="small">未确认</el-button>
                                    </div>
                                </template>
                            </el-table-column>
                            <el-table-column prop="p_name" label="直推人" width="120" />
                            <el-table-column prop="pp_name" label="间推人" width="120" />
                            <el-table-column fixed="right" label="佣金分配" width="120" align="center">
                            <template #default>
                                <el-button link type="primary" size="small" @click="handleClick">查看</el-button>
                            </template>
                            </el-table-column>
                            <el-table-column fixed="right" label="操作" width="120"  align="center">
                            <template #default>
                                <el-button link type="primary" size="small" @click="handleClick">
                                    <el-button type="primary"><el-icon><Search /></el-icon></el-button>
                                </el-button>
                            </template>
                            </el-table-column>
                        </el-table>
                    </div>
                    <span style="float: left;">共{{ order.total }}条</span>
                        <el-pagination
                        style="margin-left: 75px;"
                        small
                        background
                        layout="prev, pager, next"
                        :total="1000"
                        class="mt-4"
                        v-model:page-size="shoppage"
                        @current-change = fn
                        />
                    </el-card>
                </el-col>
            </div>
        </div>
    <!-- </div> -->
</template>

<script setup>
import { reactive, ref,onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";
import {
    Search,
 
} from '@element-plus/icons-vue'
// const route = useRoute();
// const router = useRouter();

const formInline = reactive({
  user: "",
  region: "",
  region1: "",
  region2: "",
  region3: "",
  user2: "",
  user1: "",
  user3: "",
  user4: "",
  user5: "",

});

const value1 = ref('')
const value2 = ref('')
const loading = ref(true)
const order=ref('')
const tableData = ref([]);
let fn = (val)=>{
  Axios(val)
}
function Axios(val){
  axios.post("/order/Orderlist",{page:val}).then((res) => {
    loading.value=false
  order.value=res.data.m
  tableData.value = res.data.m.data;
  console.log("--121-", tableData._rawValue);

  tableData.value.forEach((item,index)=>{
    item['index']=index+1

  })
});
}
onMounted(()=>{
  Axios(1)
})

// axios.post('/order/Orderlist')
</script>

<style scoped>
.el-card {
  --el-card-padding: 0px;
}
.hender {
  position: relative;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  background-color: #fff;
}
.h-size {
  font-weight: 700;
  font-size: 14px;
  color: #1c2438;
}
.h-qk {
    color: #1c2438;
  font-size: 12px;
  font-weight: 400;
  position: absolute;
  line-height: 35px;
}
</style>
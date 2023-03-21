<template>
    <div>
        <el-card class="box-card">
            <div class="card-header">
                <div>
                    <span style="color: #999;font-size: 14px;">设置</span> <i
                        style="margin: 0 8px;color: #dddee1; font-size: 12px;">/</i>
                    <span style="font-weight: 700;color: #495060;"> 会员卡设置</span>
                </div>
                <span style="font-size:12px ;">

                    <el-button type="primary" style="font-size:12px ;font-weight: 700">+ 添加会员卡</el-button>
                </span>

            </div>

            <el-card class="box-card" style="margin-top: 30px;" shadow="hover">
                <template #header><span style="font-weight: 700;color: #495060;">会员卡列表</span> </template>




                <el-table :data="viplist" border style="width: 100%">
                    <el-table-column prop="status" label="#" width="50" align="center" />
                    <el-table-column prop="title" label="会员卡名称" width="130" align="center" />
                    <el-table-column prop="valid_day" label="有效期(天)" width="100" align="center" />
                    <el-table-column prop="price" label="金额(元)" width="100" align="center" />
                    <el-table-column prop="sellcount" label="排序权重" width="130" align="center" />
                    <el-table-column prop="sort" label="购卡数量" width="100" align="center" />
                    <el-table-column prop="operate" label="状态" width="70" align="center" />
                    <el-table-column prop="operate" label="操作" align="center" />
                </el-table>
                <el-pagination background layout="prev, pager, next" :total="30" style="margin-top: 20px;" />
            </el-card>
        </el-card>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Axios from 'axios';
const input = ref('')
const input1 = ref('')

let viplist = ref([])
Axios.post('/platform/viplist').then((res) => {
    viplist.value = res.data.r.data
})


</script>

<style  scoped>
.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.text {
    font-size: 14px;
}
</style>
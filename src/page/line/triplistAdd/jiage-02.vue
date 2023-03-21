<template>
    <div>
        <span style="float: right;margin-top: 10px;margin-bottom: 20px;">
            <el-button type="success" size="small">添加价格</el-button>
            <el-button type="danger" size="small">清空价格</el-button>

        </span>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column fixed prop="date" label="价格名称:" width="150" />
            <el-table-column prop="name" label="销售价格:" width="120" />
            <el-table-column prop="state" label="会员价:" width="120" />
            <el-table-column prop="city" label="结算价:" width="120" />
            <el-table-column prop="address" label="返佣:" width="600" />
            <el-table-column prop="zip" label="库存:" width="120" />
            <el-table-column fixed="right" label="操作:" width="120">
                <template #default>
                    <el-button link type="primary" size="small" @click="handleClick">Detail</el-button>
                    <el-button link type="primary" size="small">Edit</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
  
<script lang="ts" setup>
const handleClick = () => {
    console.log('click')
}

const tableData = [
    {
        date: '2016-05-03',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Home',
    },
    {
        date: '2016-05-02',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Office',
    },
    {
        date: '2016-05-04',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Home',
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Office',
    },
]
</script>
  
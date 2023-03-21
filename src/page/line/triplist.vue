<template>
    <div>


        <el-card class="box-card">
            <div class="card-header">
                <div>
                    <span style="color: #999;font-size: 14px;">设置</span> <i
                        style="margin: 0 8px;color: #dddee1; font-size: 12px;">/</i>
                    <span style="font-weight: 700;color: #495060;"> 商品列表</span>
                </div>
                <span style="font-size:12px ;">
                    <!-- <router-link :to="{ name: 'goodlist' }"> -->
                    <el-button @click="fnt('666')" type="primary" style="font-size:12px ;">+ 新增商品</el-button>
                    <!-- </router-link> -->

                </span>

            </div>
            <el-card class="box-card" style="margin-top: 30px;" shadow="hover">

                <template #header>
                    <span style="font-weight: 700;color: #495060;"> 商品查询</span>

                </template>
                <div>
                    <el-row :gutter="20">
                        <el-col :span="5"> <el-input style="font-size: 12px;" v-model="searchData.title"
                                placeholder="商品名称" />
                        </el-col>
                        <el-col :span="5"> <el-autocomplete v-model="innerValue" :fetch-suggestions="querySearch"
                                placeholder="请输入商家名称" @select="handleSelect" />
                                
                        </el-col>
                        

                        <el-col :span="5">
                            <el-select v-model="form.region1" placeholder="线下物流">
                                <el-option label="线上核销" value="shanghai" />
                                <el-option label="线下物流" value="beijing" />
                            </el-select>
                        </el-col>
                        <el-col :span="5">
                            <el-select v-model="form.region2" placeholder="商品状态">
                                <el-option label="上架" value="shanghai" />
                                <el-option label="下架" value="beijing" />
                            </el-select>
                        </el-col>

                        <el-col :span="5" style="margin-top: 20px;">
                            <el-select v-model="form.region3" placeholder="是否推荐">
                                <el-option label="是" value="shanghai" />
                                <el-option label="否" value="beijing" />
                            </el-select>
                        </el-col>
                        <el-col :span="5" style="margin-top: 20px;">
                            <el-button @click="onSubmit" type="primary" style="font-size:12px ;"
                                :loading="btnLoading">查询</el-button>
                            <el-button size="small" @click="serErchdel">清空搜索</el-button>
                        </el-col>
                    </el-row>



                </div>


            </el-card>
            <el-card class="box-card" v-loading="loading" style="margin-top: 30px;" shadow="hover">
                <template #header><span style="font-weight: 700;color: #495060;">账号列表</span> </template>

                <!-- <div v-for="item in numlist"> -->

                <!-- ----------------------------------------------------- -->
                <el-table :data="numlist" type="index" style="width: 100%">
                    <el-table-column fixed prop="index" label="#" width="50" align="center" />
                    <el-table-column prop="" label="名称" width="300">

                        <template #default="scope">
                            <img style="width: 50px;height: 30px;" :src="scope.row.topimg" alt="">

                            <div style="font-size: 12px;">{{ scope.row.title }}</div>

                            <el-button type="primary" size="small"
                                style="font-size:12px ;position: absolute;right: 5px;bottom: 5px;">预览</el-button>
                        </template>
                    </el-table-column>
                    <el-table-column prop="shop" label="所属商家" width="100" align="center" />
                    <el-table-column prop="u_name" label="编辑员" width="100" align="center" />
                    <el-table-column prop="" label="参考价(元)" width="100" align="center">
                        <template #default="scope">
                            <span style="font-size: 12px;">原价:{{ scope.row.original_price }}</span><br>
                            <span style="font-size: 12px;">现价:{{ scope.row.present_price }}</span>

                        </template>
                    </el-table-column>
                    <el-table-column prop="ordercount" label="订单数量" width="100" align="center" />
                    <el-table-column prop="" label="状态" align="center" width="200">
                        <!-- status -->
                        <template #default="scope">
                            <div v-if="scope.row.status == 2">
                                <el-button type="primary" size="small">已上架</el-button>
                            </div>
                            <div v-else="scope.row.status==3">
                                <el-button type="warning" size="small">已下架</el-button>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column fixed="right" prop="" label="操作" width="200">
                        <template #default="scope" style="text-align: center;">
                            <el-tooltip class="box-item" effect="dark" content="编辑" placement="bottom" show-after="1"
                                size="small">
                                <el-button @click="fnt('666')" type="primary" size="small"
                                    style="font-size: 12px;color: white;">✎</el-button>
                            </el-tooltip>
                            <el-button type="primary" size="small" style="margin-right: 5px;">二维码背景</el-button>
                            <el-dropdown :hide-on-click="false">
                                <el-button type="primary" size="small" style="font-size: 12px;color: white;">▼</el-button>

                                <template #dropdown>
                                    <el-dropdown-menu>
                                        <el-dropdown-item>下架</el-dropdown-item>
                                        <el-dropdown-item>复制产品</el-dropdown-item>
                                        <el-dropdown-item>设置权重</el-dropdown-item>
                                        <el-dropdown-item>设置站点</el-dropdown-item>
                                        <el-dropdown-item>分配编辑</el-dropdown-item>
                                        <el-dropdown-item>分配商家</el-dropdown-item>
                                        <el-dropdown-item>分配核销员</el-dropdown-item>
                                        <el-dropdown-item>删除</el-dropdown-item>
                                    </el-dropdown-menu>
                                </template>
                            </el-dropdown>
                        </template>

                    </el-table-column>
                </el-table>
                <div>

                    <el-pagination background layout="prev,pager,next" :total="pagination.total"
                        :page-size="pagination.pagesize" @current-change="changePage" />
                </div>

                <!-- </div> -->
            </el-card>
        </el-card>
    </div>
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue'
import axios from 'axios';
// system/portmanage
import { useRouter, useRoute } from 'vue-router'
var router = useRouter()
var fnt = (id) => {
    router.push({ name: 'goodlist', params: { id: 'edit' } })
}
// const router = useRouter()
const input2 = ref('')
let numlist = ref([])
// 列表loading
var loading = ref(true)
var innerValue =ref('')

var restaurants = ref([])
//按钮loading
var btnLoading = ref(false)
// do not use same name with ref
const form = reactive({
    name: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
})

// 更新数据源
var searchData = reactive({
    page: 1,
    title: '',
    u_id: '',
})
var pagination = reactive({
    total: 0,
    pagesize: 0
})

const Axios = () => {
    axios.post('/line/triplist', { ...searchData }).then((res) => {
        loading.value = false
        btnLoading.value = false
        numlist.value = res.data.m.data
        pagination.total = res.data.m.total
        pagination.pagesize = res.data.m.per_page
        numlist.value.forEach((item, index) => {
            item['index'] = index + 1
        })
        // console.log(numlist.length);

    })
}

var changePage = (page) => {
    searchData.page = page
    Axios()
}
onMounted(() => {
    Axios()


})
var onSubmit = () => {
    btnLoading.value = true
    loading.value = true
    searchData.page = 1
    Axios()

}
var serErchdel = () => {
    searchData.title = ''
    Axios()
}

var handleSelect = (item) => {
    console.log(item)
}




var querySearch = (queryString, cb) => {
    var restaurants = this.restaurants.value
    var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants
    cb(results)
}
var createFilter = (queryString) => {
    return (restaurant) => {
        return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) !== -1)
        //此处可以实现局部搜索，模糊搜索
    }
}
</script>

<style  scoped>
.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
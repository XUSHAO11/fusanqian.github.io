<template>
    <div>
        <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" class="demo-ruleForm" status-icon>
            <el-form-item style="font-size: 12px;" label="标题" prop="name">
                <span v-for="item, index in concat(ruleForm.name.length) ">

                    <el-input style="width: 100px;" v-model="ruleForm.name" maxlength="50" />
                    <span style="margin-left: 5px;font-size: 12px;">{{ item }} <span style="font-size: 12px;">/
                            50</span></span>
                    <div v-if="item >= 50" style="color: red;zoom: 0.6;">
                        内容不能超过50!
                    </div>
                </span>
            </el-form-item>
        </el-form>
        <!-- 副标题 -->
        <el-form ref="ruleFormRef1" :model="ruleForm1" :rules="rules1" class="demo-ruleForm" status-icon>
            <el-form-item style="font-size: 12px;" label="副标题" prop="name1">
                <el-input style="width: 100px;" v-model="ruleForm1.name1" maxlength="50" />
            </el-form-item>

            <span style="font-size: 12px;">该标题请简短设置，用于短信消息通知</span>
        </el-form>
        <!-- 推荐语 -->
        <el-form ref="ruleFormRef2" :model="ruleForm2" :rules="rules2" class="demo-ruleForm" status-icon>
            <el-form-item style="font-size: 12px;" label="推荐语" prop="name2">
                <el-input style="width: 100px;" v-model="ruleForm2.name2" maxlength="50" />
            </el-form-item>
        </el-form>
        <!-- 详情图 -->
        <el-form-item label="封面图">
            <span style="display: flex; align-items: center;"><el-upload action="#" list-type="picture-card"
                    :auto-upload="false">
                    <el-icon>
                        <Plus />
                    </el-icon>

                    <template #file="{ file }">
                        <div>
                            <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />

                        </div>
                    </template>
                </el-upload>

                <el-dialog v-model="dialogVisible">
                    <img w-full :src="dialogImageUrl" alt="Preview Image" />
                </el-dialog>
                <el-button type="primary">添加一张</el-button>

            </span>



        </el-form-item>
        <div>大小不超过2M,尺寸建议750x750</div>
        <!-- 现时抢购 -->
        <el-form-item label="限时抢购：">

            <el-switch v-model="value2" size="large" style="margin-right: 30px; --el-switch-on-color: rgb(45, 140, 240);" />
            <div class="block">
                <el-date-picker v-model="datevaluestart" type="date" placeholder="开始时间：" format="YYYY/MM/DD"
                    value-format="YYYY-MM-DD" :disabled="value2" /> --
                <el-date-picker :disabled="value2" v-model="datevalueend" type="date" placeholder="结束时间："
                    format="YYYY/MM/DD" value-format="YYYY-MM-DD" />
            </div>
        </el-form-item>
        <el-form-item label="商品分类">
            <el-select v-model="region1" placeholder="请选择">
                <el-option label="当地游" value="1"/>
                <el-option label="周边游" value="2"/>
                <el-option label="跟团游" value="3"/>
                <el-option label="省内游" value="4"/>
                <el-option label="省外游" value="5"/>
                <el-option label="生活服务" value="6"/>
                <el-option label="一日游" value="7"/>
            </el-select>
            <el-select v-model="form5" placeholder="请选择">
                <el-option label="无匹配数据" value="pipei"/>

            </el-select>
        </el-form-item>
        <el-form-item label="订单确认方式">
            <el-select v-model="form4" placeholder="请选择">
                <el-option label="支付后自动确认" value="zhifu"/>
                <el-option label="平台确认" value="ok"/>
            </el-select>
        </el-form-item>
        <!-- -------------------------------------退款 -->
        <el-switch v-model="input6" size="large" />
        <!-- <el-form-item label="是否支持退款"> -->


        <el-form v-if="input6">
             

            <el-form-item label="商品状态">
                <el-select v-model="form3" placeholder="请选择">
                    <el-option label="上架" value="shangjia"/>
                    <el-option label="下架" value="xiajia"/>

                </el-select>
            </el-form-item>
            <el-form-item label="购买规则:">
                <el-radio-group v-model="radio4">
                    <el-radio label="单次购买单套餐" value="dan"/>
                    <el-radio label="单次购买多套餐" value="duo"/>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="联系人模式:">
                <el-radio-group v-model="radio5">
                    <el-radio label="仅填写一个联系人" value="lianxiren"/>
                    <el-radio label="按预定数量填写联系人" value="yuding"/>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="表单选项:">

                <el-checkbox-group v-model="form.type">
                    <el-checkbox label="姓名" name="type" />
                    <el-checkbox label="电话" name="type1" />
                    <el-checkbox label="身份证号" name="type2" />
                    <el-checkbox label="地址" name="type3" />
                </el-checkbox-group>

            </el-form-item>
            <el-form-item label="购买须知:">
                <el-radio-group v-model="radio6">
                    <el-radio label="默认勾选" value="moren"/>
                    <el-radio label="默认不勾选" value="morenon"/>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="温馨提示">
                <el-input style="width: 100px;" v-model="input1" maxlength="50" placeholder="请填写提示信息" />
            </el-form-item>
            <el-form-item label="销量基数:">
                <el-input style="width: 100px;" v-model="input2" maxlength="50" />
            </el-form-item>
            <el-form-item label="浏览量基数:">
                <el-input style="width: 100px;" v-model="input3" maxlength="50" />
            </el-form-item>
            <el-form-item label="商家电话:">
                <el-input style="width: 100px;" v-model="input4" maxlength="50" placeholder="客服电话；" />
            </el-form-item>
            <el-form-item label="商家地址:">
                <el-input style="width: 100px;" v-model="input5" maxlength="50" placeholder="商家地址：" />
            </el-form-item>
            <el-form-item label="商家坐标:">
            </el-form-item>
            <el-form-item label="客服组件">
                <el-select v-model="form2" placeholder="请选择">
                    <el-option label="不设置" value="bushezhi"/>
                    <el-option label="客服A" value="kefu"/>
                    <el-option label="小伙伴" value="huoban"/>
                </el-select>
            </el-form-item>
        </el-form>

        <el-form v-else="input6">
            <el-form ref="ruleFormRef3" :model="ruleForm3" :rules="rules3" class="demo-ruleForm" status-icon>
                <el-form-item style="font-size: 12px;" label="手续费" prop="name3">
                    <el-input style="width: 100px;" v-model="ruleForm3.name3" maxlength="50" />%
                </el-form-item>

            </el-form>
            <el-form-item label="商品状态">
                <el-select v-model="form1" placeholder="请选择">
                    <el-option label="上架" value="ji"/>
                    <el-option label="下架" vaue="nis"/>

                </el-select>
            </el-form-item>
            <el-form-item label="购买规则:">
                <el-radio-group v-model="radio4">
                    <el-radio label="单次购买单套餐" va/>
                    <el-radio label="单次购买多套餐" />
                </el-radio-group>
            </el-form-item>
            <el-form-item label="联系人模式:">
                <el-radio-group v-model="radio5">
                    <el-radio label="仅填写一个联系人" />
                    <el-radio label="按预定数量填写联系人" />
                </el-radio-group>
            </el-form-item>
            <el-form-item label="表单选项:">

                <el-checkbox-group v-model="form.type">
                    <el-checkbox label="姓名" name="type" />
                    <el-checkbox label="电话" name="type" />
                    <el-checkbox label="身份证号" name="type" />
                    <el-checkbox label="地址" name="type" />
                </el-checkbox-group>

            </el-form-item>
            <el-form-item label="购买须知:">
                <el-radio-group v-model="radio6">
                    <el-radio label="默认勾选" />
                    <el-radio label="默认不勾选" />
                </el-radio-group>
            </el-form-item>
            <el-form-item label="温馨提示">
                <el-input style="width: 100px;" v-model="input1" maxlength="50" placeholder="请填写提示信息" />
            </el-form-item>
            <el-form-item label="销量基数:">
                <el-input style="width: 100px;" v-model="input2" maxlength="50" />
            </el-form-item>
            <el-form-item label="浏览量基数:">
                <el-input style="width: 100px;" v-model="input3" maxlength="50" />
            </el-form-item>
            <el-form-item label="商家电话:">
                <el-input style="width: 100px;" v-model="input4" maxlength="50" placeholder="客服电话；" />
            </el-form-item>
            <el-form-item label="商家地址:">
                <el-input style="width: 100px;" v-model="input5" maxlength="50" placeholder="商家地址：" />
            </el-form-item>
            <el-form-item label="商家坐标:">
                <!-- ------ -->
                <template #default>
                    <el-button text @click="centerDialogVisible = true">
                        Click to open the Dialog
                    </el-button>

                    <el-dialog v-model="centerDialogVisible" title="Warning" width="30%" align-center>

                        <template #footer>
                            <span class="dialog-footer">
                                <el-button @click="centerDialogVisible = false">取消</el-button>
                                <el-button type="primary" @click="centerDialogVisible = true">
                                    确定
                                </el-button>
                            </span>
                        </template>
                        <el-row :gutter="24" id="map1">
                            <template #default>

                            </template>
                        </el-row>
                    </el-dialog>
                </template>
                <!-- ------ -->
            </el-form-item>
            <!-- <el-form-item label="">
                    <el-select v-model="form.region6" placeholder="">
                        <el-option label="" value="hudsh" />
                        <el-option label="" value="dsd" />
                        
                    </el-select>
                </el-form-item> -->

            <el-form-item label="客服组件">
                <el-select v-model="form1" placeholder="请选择">
                    <el-option label="不设置" value="shanghai" />
                    <el-option label="客服A" value="beijing" />
                    <el-option label="小伙伴" value="dsd" />
                </el-select>
            </el-form-item>
        </el-form>
        <!-- -------- -->
        <!-- </el-form-item> -->





    </div>
</template>

<script lang="ts" setup>

import { ref, reactive } from 'vue'
import { concat } from 'lodash';
import type { FormInstance, FormRules } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'
import type { UploadFile } from 'element-plus'



import { onMounted } from 'vue'
import axios from 'axios';
const radio4 = ref('单次购买单套餐')
const radio5 = ref('仅填写一个联系人')
const radio6 = ref('默认勾选')
const input1 = ref('')
const input2 = ref('-1')
const input3 = ref('0')
const input4 = ref('')
const input5 = ref('')
const input6 = ref(true)
const value2 = ref(true)
const form1 = ref('')
const form2 = ref('')
const form3 = ref('')
const form4 = ref('')
const form5 = ref('')
const region1 = ref('')
// 标题
const datevaluestart = ref('')
const datevalueend = ref('')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
    name: '',

})

const centerDialogVisible = ref(false)

















const rules = reactive<FormRules>({
    name: [
        { required: true, message: '商品标题不能为空!', trigger: 'blur' },
    ],
})
// 副标题
const ruleFormRef1 = ref<FormInstance>()
const ruleForm1 = reactive({
    name1: '',

})
const rules1 = reactive<FormRules>({
    name1: [
        { required: true, message: '副标题不能为空!', trigger: 'blur' },
    ],
})
// 推荐语
const ruleFormRef2 = ref<FormInstance>()
const ruleForm2 = reactive({
    name2: '',

})
const rules2 = reactive<FormRules>({
    name2: [
        { required: true, message: '推荐语不能为空!', trigger: 'blur' },
    ],
})
// 详情图
const dialogImageUrl = ref('')
const dialogVisible = ref(false)
const handleRemove = (file: UploadFile) => {
    console.log(file)
}
const handlePictureCardPreview = (file: UploadFile) => {
    dialogImageUrl.value = file.url!
    dialogVisible.value = true
}
const handleDownload = (file: UploadFile) => {
    console.log(file)
}
const form = reactive({
    name: '',
    
    date1: '',
    date2: '',
    delivery: false,
    type: ['姓名', '电话'],
    resource: '',
    desc: '',
})
// 手续费
const ruleFormRef3 = ref<FormInstance>()
const ruleForm3 = reactive({
    name3: '',

})

const rules3 = reactive<FormRules>({
    name3: [
        { required: true, message: '手续费不能为空!', trigger: 'blur' },
    ],
})



onMounted(() => {

    axios.get(`/xu/ws/location/v1/ip?key=D6WBZ-ODQ6D-ZCG42-H2SSH-BFE5V-C3BMY&output=json`).then((res) => {
        console.log(res);
        var center = new TMap.LatLng(39.98412, 116.307484);
        //定义map变量，调用 TMap.Map() 构造函数创建地图
        var map = new TMap.Map(document.querySelector('#map1'), {
            center: center,//设置地图中心点坐标
            zoom: 17.2,  //设置地图缩放级别
            pitch: 43.5, //设置俯仰角
            rotation: 45  //设置地图旋转角度
        });

        map.on('click', function (e) {
            console.log(e);
        });

    })

})

</script>

<style scoped>
.dialog-footer button:first-child {
    margin-right: 10px;
}

.el-form-item {
    font-size: 12px;
}
</style>
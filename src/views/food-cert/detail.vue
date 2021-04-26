<!--
 * @Author       : WuWei
 * @LastEditors  : WuWei
 * @Date         : 2021-04-25 21:01:29
 * @LastEditTime : 2021-04-26 15:13:52
 * @FilePath     : /8xiaoC/src/views/food-cert/detail.vue
 * @Description  : Do not edit
-->
<template>
  <div class="app-container">
      <el-row>
          <el-col :span="8">编码:</el-col>
          <el-col :span="16">code</el-col>
      </el-row>
      <el-row>
          <el-col :span="8">从业类别:</el-col>
          <el-col :span="16">employmentType</el-col>
      </el-row>
      <el-row>
          <el-col :span="8">发证单位:</el-col>
          <el-col :span="16">issueAuthority</el-col>
      
      </el-row>
      <el-row>
          <el-col :span="8">发证日期:</el-col>
          <el-col :span="16">issueDate</el-col>
      
      </el-row>
      <el-row>
          <el-col :span="8">姓名:</el-col>
          <el-col :span="16">name</el-col>
      </el-row>
      <el-button type="primary">修改已填报食品经营许可证</el-button>
  </div>
</template>


<script>
import { getFoodBusinessCertDetail } from "@/api/cert";
export default {
  data() {
    return {
      detail: {},
    };
  },
  mounted() {
    this.initDetail();
  },
  methods: {
    initDetail() {
        console.log(this.$route)
      getFoodBusinessCertDetail(this.$route.params.id).then((res) => {
        this.detail = res.data
      });
    },
  },
};
</script>

<style>
</style>
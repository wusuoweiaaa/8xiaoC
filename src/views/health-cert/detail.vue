<!--
 * @Author       : WuWei
 * @LastEditors  : WuWei
 * @Date         : 2021-04-25 20:59:42
 * @LastEditTime : 2021-04-26 00:07:17
 * @FilePath     : /8xiaoC/src/views/health-cert/detail.vue
 * @Description  : Do not edit
-->
<template>
  <div class="app-container">
    <el-row>
      <el-col :span="8">编码:</el-col>
      <el-col :span="16">{{detail.code}}</el-col>
    </el-row>
    <el-row>
      <el-col :span="8">从业类别:</el-col>
      <el-col :span="16">{{detail.employmentType}}</el-col>
    </el-row>
    <el-row>
      <el-col :span="8">发证单位:</el-col>
      <el-col :span="16">{{detail.issueAuthority}}</el-col>
    </el-row>
    <el-row>
      <el-col :span="8">发证日期:</el-col>
      <el-col :span="16">{{detail.issueDate}}</el-col>
    </el-row>
    <el-row>
      <el-col :span="8">姓名:</el-col>
      <el-col :span="16">{{detail.name}}</el-col>
    </el-row>
  </div>
</template>

<script>
import { getHealthCertDetail } from "@/api/cert";
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
      getHealthCertDetail(this.$route.params.id).then((res) => {
        this.detail = res.data
      });
    },
  },
};
</script>

<style>
</style>
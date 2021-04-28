<!--
 * @Author       : WuWei
 * @LastEditors  : WuWei
 * @Date         : 2021-04-25 20:59:42
 * @LastEditTime : 2021-04-27 22:18:55
 * @FilePath     : /8xiaoC/src/views/health-cert/detail.vue
 * @Description  : Do not edit
-->
<template>
  <div class="app-container">
    <div class="detail-container">
      <el-row>
      <el-button icon="el-icon-arrow-left" @click.native="onCancel">返回</el-button>
    </el-row>
    <el-row class="detail-item">
      <el-col :span="8"  class="item-name">编码:</el-col>
      <el-col :span="16"  class="item-value">{{detail.code}}</el-col>
    </el-row>
    <el-row class="detail-item">
      <el-col :span="8" class="item-name">从业类别:</el-col>
      <el-col :span="16" class="item-value">{{detail.employmentType}}</el-col>
    </el-row>
    <el-row class="detail-item">
      <el-col :span="8" class="item-name">发证单位:</el-col>
      <el-col :span="16" class="item-value">{{detail.issueAuthority}}</el-col>
    </el-row>
    <el-row class="detail-item">
      <el-col :span="8" class="item-name">发证日期:</el-col>
      <el-col :span="16" class="item-value">{{detail.issueDate}}</el-col>
    </el-row>
    <el-row class="detail-item">
      <el-col :span="8" class="item-name">姓名:</el-col>
      <el-col :span="16" class="item-value">{{detail.name}}</el-col>
    </el-row>
    <el-row class="detail-item">
      <el-col :span="8" class="item-name">单位名称:</el-col>
      <el-col :span="16" class="item-value">{{detail.unitName}}</el-col>
    </el-row>
    </div>

    <el-button
        :loading="loading"
        type="primary"
        style="width:calc(100% - 40px);margin: 30px 20px;"
        @click.native.prevent="toEdit"
        >修改已填报健康证</el-button
      >
  </div>
</template>

<script>
import { getHealthCertDetail } from "@/api/cert";
export default {
  data() {
    return {
      loading:false,
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
    toEdit() {
      this.$router.replace({
        name: 'health-cert-index',
        params: {
          id: this.$route.params.id
        },
      })
    },
    onCancel() {
      this.$router.replace({
        path: '/dashboard/index'
      });
    },
  },
};
</script>

<style  lang="scss" scoped>
body {
  background-color: #f6f6f6  !important;
}
.app-container {
  padding: 0;
  .detail-container {
    
    margin-top: 10px;
    padding: 20px;
    background-color: #fff;
    .detail-item {
      margin-top: 20px;
      &:last-child {
        margin-bottom: 0;
      }
      .item-name {
      color: #222;
      font-size: 16px;
      font-weight:400;
      text-align: left;
    }
    .item-value {
      color: #222;
      font-size: 16px;
      font-weight: 600;
      text-align: right;
    }
    }
  }
}
</style>
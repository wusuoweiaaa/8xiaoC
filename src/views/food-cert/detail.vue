<!--
 * @Author       : WuWei
 * @LastEditors  : WuWei
 * @Date         : 2021-04-25 21:01:29
 * @LastEditTime : 2021-04-27 22:20:11
 * @FilePath     : /8xiaoC/src/views/food-cert/detail.vue
 * @Description  : Do not edit
-->
<template>
  <div class="app-container">
    <el-row>
      <el-button icon="el-icon-arrow-left"  @click.native="onCancel">返回</el-button>
    </el-row>
    <div class="detail-container">
      <el-row class="detail-item">
        <el-col :span="8" class="item-name">住所:</el-col>
        <el-col :span="16" class="item-value">{{ detail.address }}</el-col>
      </el-row>
      <el-row class="detail-item">
        <el-col :span="8" class="item-name">经营场所:</el-col>
        <el-col :span="16" class="item-value">{{
          detail.businessPlace
        }}</el-col>
      </el-row>
      <el-row class="detail-item">
        <el-col :span="8" class="item-name">经营项目:</el-col>
        <el-col :span="16" class="item-value">{{
          detail.businessProject
        }}</el-col>
      </el-row>
      <el-row class="detail-item">
        <el-col :span="8" class="item-name">投诉举报电话:</el-col>
        <el-col :span="16" class="item-value">{{
          detail.complaintHotLine
        }}</el-col>
      </el-row>
      <el-row class="detail-item">
        <el-col :span="8" class="item-name">社会信用代码(身份证号码):</el-col>
        <el-col :span="16" class="item-value">{{ detail.creditCode }}</el-col>
      </el-row>
      <el-row class="detail-item">
        <el-col :span="8" class="item-name">日常监督管理机构:</el-col>
        <el-col :span="16" class="item-value">{{
          detail.dailyManageOrg
        }}</el-col>
      </el-row>
      <el-row class="detail-item">
        <el-col :span="8" class="item-name">日常监督管理人员:</el-col>
        <el-col :span="16" class="item-value">{{
          detail.dailyManagePeople
        }}</el-col>
      </el-row>
      <el-row class="detail-item">
        <el-col :span="8" class="item-name">有效期限(截止日期):</el-col>
        <el-col :span="16" class="item-value">{{ detail.endDate }}</el-col>
      </el-row>
      <el-row class="detail-item">
        <el-col :span="8" class="item-name">发证机关:</el-col>
        <el-col :span="16" class="item-value">{{
          detail.issueAuthority
        }}</el-col>
      </el-row>
      <el-row class="detail-item">
        <el-col :span="8" class="item-name">发证日期:</el-col>
        <el-col :span="16" class="item-value">{{ detail.issueDate }}</el-col>
      </el-row>
      <el-row class="detail-item">
        <el-col :span="8" class="item-name">签发人:</el-col>
        <el-col :span="16" class="item-value">{{ detail.name }}</el-col>
      </el-row>
      <el-row class="detail-item">
        <el-col :span="8" class="item-name">法定代表人(负责人）:</el-col>
        <el-col :span="16" class="item-value">{{ detail.legalPerson }}</el-col>
      </el-row>
      <el-row class="detail-item">
        <el-col :span="8" class="item-name">许可证编号:</el-col>
        <el-col :span="16" class="item-value">{{
          detail.licenseNumber
        }}</el-col>
      </el-row>
      <el-row class="detail-item">
        <el-col :span="8" class="item-name">主体业态:</el-col>
        <el-col :span="16" class="item-value">{{ detail.mainBusiness }}</el-col>
      </el-row>
      <el-row class="detail-item">
        <el-col :span="8" class="item-name">经营者名称:</el-col>
        <el-col :span="16" class="item-value">{{ detail.operator }}</el-col>
      </el-row>
      <el-row class="detail-item">
      <el-col :span="8" class="item-name">单位名称:</el-col>
      <el-col :span="16" class="item-value">{{detail.unitName}}</el-col>
    </el-row>
    </div>

    <el-button
      :loading="loading"
      type="primary"
      style="width: calc(100% - 40px); margin: 30px 20px"
      @click.native.prevent="toEdit"
      >修改已填报食品经营许可证</el-button
    >
  </div>
</template>

<script>
import { getFoodBusinessCertDetail } from "@/api/cert";
export default {
  data() {
    return {
      loading: false,
      detail: {},
    };
  },
  mounted() {
    this.initDetail();
  },
  methods: {
    initDetail() {
      console.log(this.$route);
      getFoodBusinessCertDetail(this.$route.params.id).then((res) => {
        this.detail = res.data;
      });
    },
    toEdit() {
      this.$router.replace({
        name: "food-cert-index",
        params: {
          id: this.$route.params.id,
        },
      });
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
  background-color: #f6f6f6 !important;
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
        font-weight: 400;
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

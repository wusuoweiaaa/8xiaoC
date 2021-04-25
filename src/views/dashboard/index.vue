<template>
  <div class="dashboard-container">
    <div class="dashboard-text">
      <el-row
        ><span class="text-label">身份证:</span> {{ userInfo.username }}</el-row
      >
      <el-row><span class="text-label">姓名: </span>{{ userInfo.name }}</el-row>
      <el-row
        ><span class="text-label">手机号:</span> {{ userInfo.mobile }}</el-row
      >
    </div>
    <el-row :gutter="20">
      <el-col :span="12" @click.native="toCert('/health-cert')">
        <el-card
          body-style="padding: 15px;"
          :class="
            certInfo.healthCert
              ? 'dashboard-card'
              : 'dashboard-card dashboard-card-disable'
          "
          shadow="certInfo.healthCert ? 'always' : 'never'"
          >健康证</el-card
        ></el-col
      >
      <el-col :span="12" @click.native="toCert('/health-cert')">
        <el-card
          body-style="padding: 15px;"
          :class="
            certInfo.foodBusinessCert
              ? 'dashboard-card'
              : 'dashboard-card dashboard-card-disable'
          "
          shadow="certInfo.foodBusinessCert ? 'always' : 'never'"
          >食品经营许可证</el-card
        ></el-col
      >
    </el-row>
    <el-row :gutter="20" style="margin-top: 20px">
      <el-col :span="12" @click.native="toCert('/health-cert')">
        <el-card
          body-style="padding: 15px;"
          :class="
            certInfo.publicHygieneCert
              ? 'dashboard-card'
              : 'dashboard-card dashboard-card-disable'
          "
          shadow="certInfo.publicHygieneCert ? 'always' : 'never'"
          >公共场所卫生许可证</el-card
        ></el-col
      >
      <el-col :span="12" @click.native="toCert('/health-cert')">
        <el-card
          body-style="padding: 15px;"
          :class="
            certInfo.waterHygieneCert
              ? 'dashboard-card'
              : 'dashboard-card dashboard-card-disable'
          "
          shadow="certInfo.waterHygieneCert ? 'always' : 'never'"
          >供水单位卫生许可证</el-card
        ></el-col
      >
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import { getInfo, getReportCert } from "@/api/user";

export default {
  name: "Dashboard",
  computed: {
    ...mapGetters(["name"]),
  },
  data() {
    return { userInfo: {}, certInfo: {} };
  },
  mounted() {
    this.userInfo = window.localStorage.getItem("USER_INFO");
    this.initUserInfo();
    this.initReportCert();
  },

  methods: {
    initUserInfo() {
      getInfo().then((res) => {
        this.userInfo = res.data;
      });
    },

    initReportCert() {
      getReportCert().then((res) => {
        this.certInfo = res.data;
      });
    },

    toCert(route) {
      console.log('route')
      this.$router.push({ path: route });
    },
  },
};
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 20px;
  }
  &-text {
    font-size: 16px;
    line-height: 40px;
    margin-bottom: 20px;
    color: #222;
    font-weight: 500;
    .text-label {
      font-weight: normal;
      width: 80px;
      display: inline-block;
    }
  }
  &-card {
    font-size: 16px;
    font-weight: 500;
    min-height: 150px;
    color: #222;
  }
  &-card-disable {
    background: linear-gradient(to bottom,  rgb(220, 220, 220), #ccc);
    // background-color: ;
    // linear-gradient(to bottom,  rgb(220, 220, 220), #ccc);
    color: #666;
  }
}
</style>

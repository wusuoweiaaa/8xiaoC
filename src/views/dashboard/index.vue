<template>
  <div class="dashboard-container">
    <div class="dashboard-text">
      <el-row class="text-line">
        <el-col :span="12" class="text-label">
          <span>身份证</span>
        </el-col>
        <el-col :span="12">
          :<span style="margin-left: 15px">{{ userInfo.username }}</span>
        </el-col>
      </el-row>
      <el-row class="text-line">
        <el-col :span="12" class="text-label">
          <span>姓名</span>
        </el-col>
        <el-col :span="12">
          :<span style="margin-left: 15px">{{ userInfo.name }}</span>
        </el-col>
      </el-row>
      <el-row class="text-line">
        <el-col :span="12">
          <el-col :span="12" class="text-label">
            <span>手机号</span>
          </el-col>
          <el-col :span="12">
            :<span style="margin-left: 15px">{{ userInfo.mobile }}</span>
          </el-col>
        </el-col>
        <el-col :span="12" style="text-align: right"
          ><el-button
            type="primary"
            size="mini"
            style="margin-left=20px;"
            @click.native="toMobile"
            >修改手机号</el-button
          ></el-col
        >
      </el-row>
    </div>
    <el-row :gutter="20">
      <el-col
        :span="12"
        @click.native="toCert('health-cert', certInfo.healthCert)"
      >
        <el-card
          body-style="padding: 15px;"
          :class="
            certInfo.healthCert
              ? 'dashboard-card'
              : 'dashboard-card dashboard-card-disable'
          "
          :shadow="certInfo.healthCert ? 'always' : 'never'"
          ><div>健康证</div> <svg-icon icon-class="health-cert" /> </el-card
      ></el-col>
      <el-col
        :span="12"
        @click.native="toCert('food-cert', certInfo.foodBusinessCert)"
      >
        <el-card
          body-style="padding: 15px;"
          :class="
            certInfo.foodBusinessCert
              ? 'dashboard-card'
              : 'dashboard-card dashboard-card-disable'
          "
          :shadow="certInfo.foodBusinessCert ? 'always' : 'never'"
          ><div>食品经营许可证</div> <svg-icon icon-class="food-cert" /></el-card
      ></el-col>
    </el-row>
    <el-row :gutter="20" style="margin-top: 20px">
      <el-col
        :span="12"
        @click.native="toCert('public-cert', certInfo.publicHygieneCert)"
      >
        <el-card
          body-style="padding: 15px;"
          :class="
            certInfo.publicHygieneCert
              ? 'dashboard-card'
              : 'dashboard-card dashboard-card-disable'
          "
          :shadow="certInfo.publicHygieneCert ? 'always' : 'never'"
          ><div>公共场所卫生许可证</div> <svg-icon icon-class="public-cert" /> </el-card
      ></el-col>
      <el-col
        :span="12"
        @click.native="toCert('water-cert', certInfo.waterHygieneCert)"
      >
        <el-card
          body-style="padding: 15px;"
          :class="
            certInfo.waterHygieneCert
              ? 'dashboard-card'
              : 'dashboard-card dashboard-card-disable'
          "
          :shadow="certInfo.waterHygieneCert ? 'always' : 'never'"
          ><div>供水单位卫生许可证</div> <svg-icon icon-class="water-cert" /></el-card
      ></el-col>
    </el-row>

    <el-row :gutter="20" style="margin-top: 20px">
      <el-col
        :span="12"
        @click.native="toCert('water-quality', certInfo.waterQualityReport)"
      >
        <el-card
          body-style="padding: 15px;"
          :class="
            certInfo.waterQualityReport
              ? 'dashboard-card'
              : 'dashboard-card dashboard-card-disable'
          "
          :shadow="certInfo.waterQualityReport ? 'always' : 'never'"
          ><div>供水水质检测报告</div> <svg-icon icon-class="report" /></el-card
      ></el-col>
      <el-col
        :span="12"
        
        @click.native="toCert('public-hygienic', certInfo.publicHygienicReport)"
      >
        <el-card
          body-style="padding: 15px;"
          :class="
            certInfo.publicHygienicReport
              ? 'dashboard-card'
              : 'dashboard-card dashboard-card-disable'
          "
          :shadow="certInfo.publicHygienicReport ? 'always' : 'never'"
          ><div>公共用品卫生检测报告</div> <svg-icon icon-class="report" /></el-card
      ></el-col>
    </el-row>
    <el-row :gutter="20"  style="margin-top: 20px">
      <el-col
        :span="12"
        @click.native="toCert('air-quality', certInfo.airQualityReport)"
      >
        <el-card
          body-style="padding: 15px;"
          :class="
            certInfo.airQualityReport
              ? 'dashboard-card'
              : 'dashboard-card dashboard-card-disable'
          "
          :shadow="certInfo.airQualityReport ? 'always' : 'never'"
          ><div>空气卫生质量检测报告</div> <svg-icon icon-class="report" /> </el-card
      ></el-col>
      <el-col :span="12"> </el-col>
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

    toMobile() {
      this.$router.push({
        name: "mobile",
      });
    },

    toCert(route, id) {
      let name = route + "-";
      if (id) {
        name = name + "detail";
      } else {
        name = name + "index";
      }
      console.log(name, id);
      this.$router.push({
        name: name,
        params: {
          id: id,
        },
      });
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
    font-size: 15px;
    line-height: 40px;
    margin-bottom: 20px;
    color: #2d3a4b;
    font-weight: 500;
    .text-line {
      height: 30px;
      line-height: 30px;
      .text-label {
        text-align: justify;
        text-align-last: justify;
        font-weight: normal;
        width: 60px;
        display: inline-block;
      }
    }
  }
  &-card {
    font-size: 16px;
    font-weight: 500;
    min-height: 150px;
    color: #2d3a4b;
    text-align: center;
    .svg-icon {
      margin-top: 10px;
      width: 6em;
      height: 6em;
      vertical-align: 0;
      fill: currentColor;
      overflow: hidden;
    }
  }
  &-card-disable {
    background: linear-gradient(to bottom, rgb(220, 220, 220), #ccc);
    // background-color: ;
    // linear-gradient(to bottom,  rgb(220, 220, 220), #ccc);
    //     background: linear-gradient(to bottom, #8790b5, #346090);
    // color: #fff;
    // }
    color: #666;
  }
}
</style>

<!--
 * @Author       : WuWei
 * @LastEditors  : WuWei
 * @Date         : 2021-04-27 21:00:37
 * @LastEditTime : 2021-04-27 21:20:25
 * @FilePath     : /8xiaoC/src/views/air-quality/index.vue
 * @Description  : Do not edit
-->
<template>
  <div class="app-container">
    <el-row>
      <el-button icon="el-icon-arrow-left" @click.native="onCancel"
        >返回</el-button
      >
    </el-row>
    <el-form ref="form" :model="formData" label-position="top">
      <el-form-item label="有效期限(截止日期)" prop="endDate">
        <el-date-picker
          v-model="formData.endDate"
          value-format="yyyy-MM-dd"
          placeholder="选择有效期限(截止日期)"
        ></el-date-picker>
      </el-form-item>

      <el-form-item label="发证日期" prop="issueDate">
        <el-date-picker
          v-model="formData.issueDate"
          value-format="yyyy-MM-dd"
          placeholder="选择有效期限(截止日期)"
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="检验报告编号" prop="reportNo">
        <el-input v-model="formData.reportNo" placeholder="输入检验报告编号" />
      </el-form-item>
      <el-form-item label="样品名称" prop="sampleName">
        <el-input v-model="formData.sampleName" placeholder="输入样品名称" />
      </el-form-item>
      <el-form-item label="受检单位" prop="unitName">
        <el-input v-model="formData.unitName" placeholder="输入受检单位" />
      </el-form-item>
    </el-form>
    <el-row style="text-align: center">
      <el-button
        style="width: 100%; margin-bottom: 30px"
        type="primary"
        :loading="loading"
        @click="onSubmit"
      >
        {{
          this.$route.params.id
            ? "修改空气卫生质量检测报告"
            : "添加空气卫生质量检测报告"
        }}
      </el-button>
    </el-row>
  </div>
</template>

<script>
import {
  postAirQualityReport,
  putAirQualityReportId,
  getAirQualityReportDetail,
} from "@/api/cert";

export default {
  data() {
    return {
      loading: false,
      formData: {
        endDate: "", // 有效期限(截止日期)
        issueDate: "", // 发证日期
        reportNo: "", // 检验报告编号
        sampleName: "", // 样品名称
        unitName: "", // 受检单位
      },
    };
  },
  mounted() {
    if (this.$route.params && this.$route.params.id) {
      getAirQualityReportDetail(this.$route.params.id).then((res) => {
        this.formData.endDate = res.data.endDate;
        this.formData.issueDate = res.data.issueDate;
        this.formData.reportNo = res.data.reportNo;
        this.formData.sampleName = res.data.sampleName;
        this.formData.unitName = res.data.unitName;
      });
    }
  },
  methods: {
    getDetail() {},
    onSubmit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.loading = true;

          this.submitHandle(this.formData)
            .then((res) => {
              this.$message({
                message: this.$route.params.id
                  ? "修改空气卫生质量检测报告成功"
                  : "添加空气卫生质量检测报告成功",
                type: "success",
              });
              this.$router.push({ path: "/dashboard/index" });
              this.loading = false;
            })
            .catch((error) => {
              console.log(error);
              this.loading = false;
            });
        }
      });
    },
    submitHandle(data) {
      return this.$route.params.id
        ? putAirQualityReportId(this.$route.params.id, data)
        : postAirQualityReport(data);
    },
    onCancel() {
      if (this.$route.params.id) {
        this.$router.replace({
          name: "air-quality-detail",
          params: {
            id: this.$route.params.id,
          },
        });
      } else {
        this.$router.push({ path: "/dashboard/index" });
      }
    },
  },
};
</script>

<style scoped>
.line {
  text-align: center;
}
</style>


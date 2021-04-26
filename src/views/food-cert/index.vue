<!--
 * @Author       : WuWei
 * @LastEditors  : WuWei
 * @Date         : 2021-04-24 21:03:41
 * @LastEditTime : 2021-04-26 14:56:33
 * @FilePath     : /8xiaoC/src/views/food-cert/index.vue
 * @Description  : Do not edit
-->
<template>
  <div class="app-container">
    <el-form ref="form" :model="formData"  label-position="top">
      <el-form-item label="住所" prop="address">
        <el-input v-model="formData.address" placeholder="输入住所" />
      </el-form-item>
      <el-form-item label="经营场所" prop="businessPlace">
        <el-input v-model="formData.businessPlace" placeholder="输入经营场所" />
      </el-form-item>
      <el-form-item label="经营项目" prop="businessProject">
        <el-input
          v-model="formData.businessProject"
          placeholder="输入经营项目"
        />
      </el-form-item>
      <el-form-item label="投诉举报电话" prop="complaintHotLine">
        <el-input
          v-model="formData.complaintHotLine"
          placeholder="输入投诉举报电话"
        />
      </el-form-item>
      <el-form-item label="社会信用代码(身份证号码)" prop="businessProject">
        <el-input
          v-model="formData.businessProject"
          placeholder="输入社会信用代码(身份证号码)"
        />
      </el-form-item>
      <el-form-item label="日常监督管理机构" prop="dailyManageOrg">
        <el-input
          v-model="formData.dailyManageOrg"
          placeholder="输入日常监督管理机构"
        />
      </el-form-item>
      <el-form-item label="日常监督管理人员" prop="dailyManagePeople">
        <el-input
          v-model="formData.dailyManagePeople"
          placeholder="输入日常监督管理人员"
        />
      </el-form-item>
      <el-form-item label="有效期限(截止日期)" prop="endDate">
        <el-date-picker
          v-model="formData.endDate"
           value-format='yyyy-MM-dd'
          placeholder="选择有效期限(截止日期)"
        ></el-date-picker>
      </el-form-item>
       <el-form-item label="发证机关" prop="issueAuthority">
        <el-input v-model="formData.issueAuthority" placeholder="输入发证机关" />
      </el-form-item>
      <el-form-item label="发证日期" prop="issueDate">
        <el-date-picker
          v-model="formData.issueDate"
           value-format='yyyy-MM-dd'
          placeholder="选择有效期限(截止日期)"
        ></el-date-picker>
      </el-form-item>
       <el-form-item label="签发人" prop="name">
        <el-input v-model="formData.name" placeholder="输入签发人" />
      </el-form-item>
      <el-form-item label="法定代表人(负责人）" prop="legalPerson">
        <el-input v-model="formData.legalPerson" placeholder="输入法定代表人(负责人）" />
      </el-form-item>
      <el-form-item label="许可证编号" prop="licenseNumber">
        <el-input v-model="formData.licenseNumber" placeholder="输入许可证编号" />
      </el-form-item>
      <el-form-item label="主体业态" prop="mainBusiness">
        <el-input v-model="formData.mainBusiness" placeholder="输入主体业态" />
      </el-form-item>
      <el-form-item label="经营者名称" prop="operator">
        <el-input v-model="formData.operator" placeholder="输入经营者名称" />
      </el-form-item>
    </el-form>
    <el-row style="text-align: center">
      <el-button
        style="width: 100%; margin-bottom: 30px"
        type="primary"
        :loading="loading"
        @click="onSubmit"
      >
        添加食品经营许可证
      </el-button>
    </el-row>
  </div>
</template>

<script>
import {
  postFoodBusinessCert,
  putFoodBusinessCertId,
  getFoodBusinessCertDetail,
} from "@/api/cert";

export default {
  data() {
    return {
      loading: false,
      formData: {
        address: "", //住所
        businessPlace: "", // 经营场所
        businessProject: "", // 经营项目
        complaintHotLine: "", // 投诉举报电话
        creditCode: "", // 社会信用代码(身份证号码)
        dailyManageOrg: "", // 日常监督管理机构
        dailyManagePeople: "", // 日常监督管理人员
        endDate: "", // 有效期限(截止日期)
        issueAuthority: "", // 发证机关
        issueDate: "", // 发证日期
        issuer: "",// 签发人
        legalPerson: "",// 法定代表人(负责人)
        licenseNumber: "",// 许可证编号
        mainBusiness: "",// 主体业态
        operator: "", // 经营者名称
      },
      rules: {
        address: [{ required: true, trigger: "blur", message: "请输入编码" }],
        businessPlace: [
          { required: true, trigger: "blur", message: "请输入从业类别" },
        ],
        businessProject: [
          { required: true, trigger: "blur", message: "请输入发证单位" },
        ],
        issueDate: [
          { required: true, trigger: "blur", message: "请选择发证日期" },
        ],
        name: [{ required: true, trigger: "blur", message: "请输入姓名" }],
      },
    };
  },
  mounted() {
    if (this.$router.params && this.$router.params.id) {
      getFoodBusinessCertDetail().then((res) => {
        console.log(res);
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
                message: this.$router.params.id
                  ? "修改食品经营许可证成功"
                  : "添加食品经营许可证成功",
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
      return this.$router.params.id
        ? putFoodBusinessCertId(this.$router.params.id, data)
        : postFoodBusinessCert(data);
    },
    onCancel() {
      this.$message({
        message: "cancel!",
        type: "warning",
      });
    },
  },
};
</script>

<style scoped>
.line {
  text-align: center;
}
</style>


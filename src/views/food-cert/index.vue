<!--
 * @Author       : WuWei
 * @LastEditors  : WuWei
 * @Date         : 2021-04-24 21:03:41
 * @LastEditTime : 2021-04-27 19:37:44
 * @FilePath     : /8xiaoC/src/views/food-cert/index.vue
 * @Description  : Do not edit
-->
<template>
  <div class="app-container">
    <el-row>
      <el-button icon="el-icon-arrow-left" @click.native="onCancel">返回</el-button>
    </el-row>
    <el-form ref="form" :model="formData"  label-position="top">
      <el-form-item label="住所" prop="address">
        <el-input type="textarea" v-model="formData.address" placeholder="输入住所" />
      </el-form-item>
      <el-form-item label="经营场所" prop="businessPlace">
        <el-input  type="textarea" v-model="formData.businessPlace" placeholder="输入经营场所" />
      </el-form-item>
      <el-form-item label="经营项目" prop="businessProject">
        <el-input
          type="textarea"
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
      <el-form-item label="社会信用代码(身份证号码)" prop="creditCode">
        <el-input
          v-model="formData.creditCode"
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
        {{this.$route.params.id ? '修改食品经营许可证':'添加食品经营许可证' }}
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
    };
  },
  mounted() {
    if (this.$route.params && this.$route.params.id) {
      getFoodBusinessCertDetail(this.$route.params.id).then((res) => {
        this.formData.address = res.data.address
        this.formData.businessPlace = res.data.businessPlace
        this.formData.businessProject = res.data.businessProject
        this.formData.complaintHotLine = res.data.complaintHotLine
        this.formData.creditCode = res.data.creditCode
        this.formData.dailyManageOrg = res.data.dailyManageOrg 
        this.formData.endDate = res.data.endDate 
        this.formData.dailyManagePeople = res.data.dailyManagePeople
        this.formData.issueAuthority = res.data.issueAuthority
        this.formData.issueDate = res.data.issueDate
        this.formData.issuer = res.data.issuer
        this.formData.legalPerson = res.data.legalPerson
        this.formData.licenseNumber = res.data.licenseNumber
        this.formData.mainBusiness = res.data.mainBusiness
        this.formData.operator = res.data.operator
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
      return this.$route.params.id
        ? putFoodBusinessCertId(this.$route.params.id, data)
        : postFoodBusinessCert(data);
    },
    onCancel() {
      if (this.$route.params.id) {
          this.$router.replace({
        name: 'food-cert-detail',
        params: {
          id: this.$route.params.id
        },
      })
      }else{
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


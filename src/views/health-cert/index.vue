<!--
 * @Author       : WuWei
 * @LastEditors  : WuWei
 * @Date         : 2021-04-24 21:03:41
 * @LastEditTime : 2021-04-27 22:18:28
 * @FilePath     : /8xiaoC/src/views/health-cert/index.vue
 * @Description  : Do not edit
-->
<template>
  <div class="app-container">
    <el-row>
      <el-button icon="el-icon-arrow-left" @click.native="onCancel">返回</el-button>
    </el-row>
    <el-form ref="form" :model="formData" label-position="top">
      <el-form-item label="编码" prop="code">
        <el-input v-model="formData.code" placeholder="输入编码" />
      </el-form-item>
      <el-form-item label="从业类别" prop="employmentType">
        <el-input v-model="formData.employmentType"  placeholder="输入从业类别" />
      </el-form-item>
      <el-form-item label="发证单位" prop="issueAuthority">
        <el-input v-model="formData.issueAuthority"   placeholder="输入发证单位"/>
      </el-form-item>
      <el-form-item label="发证日期"  prop="issueDate">
       <el-date-picker  value-format='yyyy-MM-dd' v-model="formData.issueDate" placeholder="选择发证日期"></el-date-picker>
      </el-form-item>
      <el-form-item label="姓名"  prop="name">
         <el-input v-model="formData.name"  placeholder="输入姓名"/>
      </el-form-item>
      <el-form-item label="单位名称"  prop="unitName">
         <el-input v-model="formData.unitName"  placeholder="输入单位名称"/>
      </el-form-item>
    </el-form>
   <el-row style="text-align:center;">
     <el-button style="width: 100%; margin-bottom: 30px" type="primary" :loading="loading" @click.native="onSubmit">
      {{this.$route.params && this.$route.params.id ? "修改健康证": "添加健康证"}}
    </el-button>
   </el-row>
  </div>
</template>

<script>
import { postHealthCert, putHealthCertId, getHealthCertDetail } from "@/api/cert";

export default {
  data() {
    return {
      loading: false,
      formData: {
        code: "", // 编码
        employmentType: "", // 从业类别
        issueAuthority: "", // 发证单位
        issueDate: "", // 发证日期
        name: "", // 姓名
        unitName:""
      },
    };
  },
  mounted() {
    if (this.$route.params && this.$route.params.id){
      getHealthCertDetail(this.$route.params.id).then(res => {
         this.formData.code = res.data.code;
         this.formData.employmentType = res.data.employmentType;
         this.formData.issueAuthority = res.data.issueAuthority;
         this.formData.issueDate = res.data.issueDate;
         this.formData.name = res.data.name;
         this.formData.unitName = res.data.unitName;
      })
    }
  },
  methods: {
    getDetail() {

    },
    onSubmit() {
      this.$refs.form.validate((valid) => {
        // if (valid) {
          this.loading = true;
         
          this.submitHandle(this.formData)
            .then((res) => {
              this.$message({
              message: this.$route.params.id ? "修改健康证成功": "添加健康证成功",
              type: "success",
              });
              this.$router.push({ path: '/dashboard/index'});
              this.loading = false;
            })
            .catch((error) => { 
              console.log(error);
              this.loading = false;
            });
        }
      // }
      );
    },
    submitHandle (data) {
      return  this.$route.params && this.$route.params.id ? putHealthCertId(this.$route.params.id , data) : postHealthCert(data);
    },
     onCancel() {
      if (this.$route.params.id) {
          this.$router.replace({
        name: 'health-cert-detail',
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


<!--
 * @Author       : WuWei
 * @LastEditors  : WuWei
 * @Date         : 2021-04-24 21:03:41
 * @LastEditTime : 2021-04-25 21:51:32
 * @FilePath     : /8xiaoC/src/views/public-cert/index.vue
 * @Description  : Do not edit
-->
<template>
  <div class="app-container">
    <el-form ref="form" :model="form" :rules="rules" label-width="90px">
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
       <el-date-picker v-model="formData.issueDate" placeholder="选择发证日期"></el-date-picker>
      </el-form-item>
      <el-form-item label="姓名"  prop="name">
         <el-input v-model="formData.name"  placeholder="输入姓名"/>
      </el-form-item>
    </el-form>
   <el-row style="text-align:center;">
     <el-button style="width: 100%; margin-bottom: 30px" type="primary" :loading="loading" @click="onSubmit">
      添加健康证
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
        code: "琼卫4601135224533", // 编码
        employmentType: "string", // 从业类别
        issueAuthority: "string", // 发证单位
        issueDate: "2021-04-22", // 发证日期
        name: "string", // 姓名
      },
      rules: {
        code: [{ required: true, trigger: "blur", message: "请输入编码" }],
        employmentType: [{ required: true, trigger: "blur", message: "请输入从业类别" }],
        issueAuthority: [{ required: true, trigger: "blur", message: "请输入发证单位" }],
        issueDate: [{ required: true, trigger: "blur", message: "请选择发证日期" }],
        name: [{ required: true, trigger: "blur", message: "请输入姓名" }],
      },
    };
  },
  mounted() {
    if (this.$router.params.id){
      getHealthCertDetail().then(res => {
        console.log(res)
      })
    }
  },
  methods: {
    getDetail() {

    },
    onSubmit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.loading = true;
          
          submitHandle(this.formData)
            .then((res) => {
              this.$message({
              message: this.$router.params.id ? "修改健康证成功": "添加健康证成功",
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
      });
    },
    submitHandle (data) {
      return  this.$router.params.id ? putHealthCertId(this.$router.params.id , data): postHealthCert(data);
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


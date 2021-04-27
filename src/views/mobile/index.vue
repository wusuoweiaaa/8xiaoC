<!--
 * @Author       : WuWei
 * @LastEditors  : WuWei
 * @Date         : 2021-04-26 19:29:55
 * @LastEditTime : 2021-04-26 19:40:20
 * @FilePath     : /8xiaoC/src/views/mobile/index.vue
 * @Description  : Do not edit
-->
<template>
  <div class="app-container">
    <el-form ref="form" :model="formData" :rules="rules" label-position="top">
      <el-form-item label="新手机号" prop="mobile">
        <el-input v-model="formData.mobile" placeholder="输入新手机号" />
      </el-form-item>
    </el-form>
    <el-row style="text-align: center">
      <el-button
        style="width: 100%; margin-bottom: 30px"
        type="primary"
        :loading="loading"
        @click="onSubmit"
      >
        修改手机号
      </el-button>
    </el-row>
  </div>
</template>

<script>
import { patchMobile } from "@/api/cert";
import { validMobile } from "@/utils/validate";

export default {
  data() {
    const validMobileReg = (rule, value, callback) => {
      if (!validMobile(value)) {
        callback(new Error("请输入正确的手机号码"));
      } else {
        callback();
      }
    };
    return {
      loading: false,
      formData: {
        mobile: "",
      },
      rules: {
        mobile: [
          { required: true, trigger: "blur", validator: validMobileReg },
        ],
      },
    };
  },
  mounted() {},
  methods: {
    onSubmit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.loading = true;
          let id = JSON.parse(window.localStorage.getItem("USER_INFO")).id;
          patchMobile(id, this.formData)
            .then((res) => {
              this.$message({
                message: "修改手机号成功",
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
<!--
 * @Author       : WuWei
 * @LastEditors  : WuWei
 * @Date         : 2021-04-24 21:03:41
 * @LastEditTime : 2021-04-27 19:39:20
 * @FilePath     : /8xiaoC/src/views/public-cert/index.vue
 * @Description  : Do not edit
-->
<template>
  <div class="app-container">
    <el-row>
      <el-button icon="el-icon-arrow-left" @click.native="onCancel">返回</el-button>
    </el-row>
    <el-form ref="form" :model="formData"  label-position="top">
      <el-form-item label="地址" prop="address">
        <el-input  type="textarea" v-model="formData.address" placeholder="输入地址" />
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
      <el-form-item label="法定代表人(负责人）" prop="legalPerson">
        <el-input v-model="formData.legalPerson" placeholder="输入法定代表人(负责人）" />
      </el-form-item>
      <el-form-item label="许可证项目" prop="licenseProject">
        <el-input  type="textarea" v-model="formData.licenseProject" placeholder="输入许可证项目" />
      </el-form-item>
      <el-form-item label="公证字号" prop="notarizationNo">
        <el-input v-model="formData.notarizationNo" placeholder="输入公证字号" />
      </el-form-item>
      <el-form-item label="有效期限(起始日期)" prop="startDate">
        <el-date-picker
          v-model="formData.startDate"
           value-format='yyyy-MM-dd'
          placeholder="选择有效期限(起始日期)"
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="单位名称" prop="unitName">
        <el-input v-model="formData.unitName" placeholder="输入单位名称" />
      </el-form-item>
    </el-form>
    <el-row style="text-align: center">
      <el-button
        style="width: 100%; margin-bottom: 30px"
        type="primary"
        :loading="loading"
        @click="onSubmit"
      >
       {{this.$route.params.id ? '修改公共场所卫生许可证' :'添加公共场所卫生许可证'}} 
      </el-button>
    </el-row>
  </div>
</template>

<script>
import {
  postPublicCert,
  putPublicCertId,
  getPublicCertDetail,
} from "@/api/cert";

export default {
  data() {
    return {
      loading: false,
      formData: {
        address: "", //地址
        endDate: "", // 有效期限(截止日期)
        issueAuthority: "", // 发证机关
        issueDate: "", // 发证日期
        legalPerson: "",// 法定代表人(负责人)
        licenseProject: "",// 许可证编号
        notarizationNo: "",// 主体业态
        unitName: "", // 经营者名称
        startDate: "", 
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
    if (this.$route.params && this.$route.params.id) {
      getPublicCertDetail(this.$route.params.id).then((res) => {
        this.formData.address = res.data.address
        this.formData.endDate = res.data.endDate
        this.formData.issueAuthority = res.data.issueAuthority
        this.formData.issueDate = res.data.issueDate
        this.formData.legalPerson = res.data.legalPerson
        this.formData.licenseProject = res.data.licenseProject
        this.formData.notarizationNo = res.data.notarizationNo
        this.formData.unitName = res.data.unitName
        this.formData.startDate = res.data.startDate
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
                  ? "修改公共场所卫生许可证成功"
                  : "添加公共场所卫生许可证成功",
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
        ? putPublicCertId(this.$route.params.id, data)
        : postPublicCert(data);
    },
     onCancel() {
      if (this.$route.params.id) {
          this.$router.replace({
        name: 'public-cert-detail',
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


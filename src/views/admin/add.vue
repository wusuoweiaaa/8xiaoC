<template>
<div class="body">
    <h3>添加管理员</h3>

    <el-form ref="form" :model="form" :rules="rules" label-width="80px">
    <el-form-item label="管理员名称" prop="user_name">
        <el-input v-model="form.user_name" placeholder="列如：admin"></el-input>
    </el-form-item>
    <el-form-item label="角色名称" prop="role_id">
         <el-select v-model="form.role_id" placeholder="请选择">
            <el-option
            v-for="item in options"
            :key="item.id"
            :label="item.name"
            :value="item.id">
            </el-option>
        </el-select>
    </el-form-item>
    <el-form-item label="手机号">
       <el-input v-model="form.mobile" placeholder="列如：15988886666"></el-input>
    </el-form-item>
    <el-form-item label="密码">
       <el-input type="password" v-model="form.password" placeholder="列如：123456"></el-input>
    </el-form-item>
    <el-form-item>
        <el-button type="primary" @click="onSubmit('form')">立即创建</el-button>
        <el-button @click="resetForm('form')">取消</el-button>
    </el-form-item>
    </el-form>
</div>
</template>

<script>
import { all } from '@/api/role'
import { add } from '@/api/admin'
import * as error from '@/utils/error'
export default({
    data() {
      return {
        options:[],
        form: {
          user_name: '',
          role_id: '',
          mobile: '',
          password: '123456',
        },
        rules: {
            user_name: [{
                required: true,
                message: '请输入管理员名称',
                trigger: 'blur'
            }],
            role_id: [{
                required: true,
                message: '请选择角色',
                trigger: 'blur'
            }],
            mobile: [{
                required: true,
                message: '请输入手机号',
                trigger: 'blur'
            }],
            password: [{
                required: true,
                message: '请输入密码',
                trigger: 'blur'
            }],

        },
      }
    },
    created() {
        this.getRole();
    },
    methods: {
        async getRole()
        {
            let res = await all();
            if(res.code === error.SUCCESS_CODE) {
                this.options = res.data
            }
        },
      onSubmit(formName) {
          console.log(formName);
          this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.add();
                } else {
                    console.log('error submit!!')
                    return false
                }
            })
      },
      resetForm(formName) {
            this.$refs[formName].resetFields()
      },
      async add() {
          if(this.form.is_read === false) {
              this.form.read = 0;
          }else {
              this.form.read = 1;
          }
          let result = await add(this.form)
          if(result.code === error.SUCCESS_CODE) {
              this.$router.push({
                    path: '/admin/index'
                })

          }
      }

    }
})
</script>
<style scoped>
.body{
    margin-left: 40px;
}
</style>
<template>
    <div class="admin">
      <div class="search">
      <el-row>
        <el-form ref="search" :model="search" label-width="80px">
          名称:
          <el-input v-model="search.name" clearable placeholder="请输入名称" style="width:300px;margin-bottom:10px;"/>
          <el-button type="primary" @click="submitForm()">搜索</el-button>
        </el-form>
      </el-row>
      <br />
      </div>
      <div class="add">
        <router-link to="/admin/add">
       <el-button type="success" icon="el-icon-document">添加管理员</el-button>
        </router-link>
       <el-button :loading="downloadLoading" type="primary" icon="el-icon-document" @click="handleDownload">
        Export Excel
      </el-button>
      </div>
      <el-table
      :data="list"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="Id"
        width="180">
      </el-table-column>
      <el-table-column
        prop="username"
        label="名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="mobile"
        label="手机号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="created_at"
        label="创建时间">
      </el-table-column>

      <el-table-column
        label="操作">
        <template slot-scope="scope">
        <el-button
              size="mini"
              type="warning"
              @click="del(scope.row.id)"
            >删除
        </el-button> 
        </template>
      </el-table-column>

    </el-table>
    
      <el-pagination
        background
        layout="prev, pager, next"
        @current-change="handleCurrentChange"
        :current-page="page"
        :page-size="search.limit"
        :total="total">
      </el-pagination>

    </div>
</template>

<script>
import { getList,del } from '@/api/admin'
import * as error from '@/utils/error'
export default {
data() {
    return {
      downloadLoading: false,
      filename: 'admin-list',
      autoWidth: true,
      bookType: 'xlsx',
      list: [],
      total: 1,
      page: 1,
      search: {
        'offset': 0,
        'limit': 10,
      },
    }
  },
created() {
    this.admin();
},
methods: {
    async admin(){
        const query = this.search;
        let res = await getList(query);
        if(res.code == error.SUCCESS_CODE) {
            this.list = res.data.items;
            this.total = res.data.count;
        }
    },
    // 分页
    handleCurrentChange(currentPage) {
    Object.assign(this.search, {
        offset: (currentPage - 1) * this.search.limit
    });
    this.admin();
    },
    submitForm() {
      this.admin();
    },
    async del(id) {
      let query = {
        'id' : id
      }
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
      }).then(() => {
        del(query).then(result => {
        if(result.code == error.SUCCESS_CODE)
        {
          this.$message({
          type: 'success',
          message: '删除成功!'
          });
        }
        this.admin();
        })
      
      }).catch(() => {
      this.$message({
        type: 'info',
        message: '已取消删除'
      });          
    });
    },
    handleDownload() {
      this.downloadLoading = true
      import('@/vendor/Export2Excel').then(excel => {
        const tHeader = ['Id', '名称', '手机号', '创建时间']
        const filterVal = ['id', 'username', 'mobile', 'created_at']
        const list = this.list
        const data = this.formatJson(filterVal, list)
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: this.filename,
          autoWidth: this.autoWidth,
          bookType: this.bookType
        })
        this.downloadLoading = false
      })
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => {
        if (j === 'timestamp') {
          return parseTime(v[j])
        } else {
          return v[j]
        }
      }))
    }
}
}
</script> 
<style scoped>
.admin {
  margin-left: 40px;
  text-align: center;
}
.search {
  color:chocolate;
  margin-top:30px;
}
.add {
  margin-left:-66%;
  margin-bottom:20px;
}
</style>
<template>
  <div class="main">
    <!-- 搜索栏 -->
    <div class="search-bar">
      <el-form class="search-form" v-model="searchParams" label-width="80px">
        <el-form-item label="姓名"><el-input clearable v-model="searchParams.name"></el-input></el-form-item>
        <el-form-item label="手机号"><el-input clearable v-model="searchParams.phone"></el-input></el-form-item>
        <el-button class="search-btn" @click="handleSearch">查询</el-button>
      </el-form>
    </div>
    <!-- 数据表格 -->
    <div class="data-list">
      <el-table
        class="list-content"
        stripe
        :data="dataList"
        v-loading="dataLoading"
        style="width: 100%">
        <el-table-column prop="name" label="姓名" width="140" align="center"></el-table-column>
        <el-table-column prop="phone" label="手机号" align="center"></el-table-column>
        <el-table-column prop="sex" label="性别" width="100" align="center"></el-table-column>
        <el-table-column prop="age" label="年龄" width="100" align="center"></el-table-column>
        <el-table-column prop="company" label="公司" align="center"></el-table-column>
        <el-table-column prop="address" label="家庭住址" align="center"></el-table-column>
        <el-table-column prop="f1" label="操作" align="center">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination class="list-page"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="searchParams.pageNo"
        :page-sizes="[10, 20, 30]"
        :page-size="searchParams.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </div>
    <!-- 弹出框 -->
    <el-dialog class="dialog" :title="title" :visible.sync="formVisible">
      <el-form :model="userForm" label-width="80px">
        <el-form-item label="姓名">
          <el-input v-model="userForm.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="userForm.phone" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-input v-model="userForm.sex" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input v-model="userForm.age" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="公司">
          <el-input v-model="userForm.company" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="家庭住址">
          <el-input v-model="userForm.address" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="formVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import BasicData from '../../../store/staticData'
export default {
  name: 'UserManager',
  data () {
    return {
      dataLoading: true,
      searchParams: {
        name: '',
        phone: '',
        pageNo: 1,
        pageSize: 10
      },
      dataList: [],
      total: 0,
      formVisible: false,
      title: '',
      userForm: {
        id: null,
        name: '',
        phone: '',
        sex: '',
        age: 0,
        company: '',
        address: ''
      }
    }
  },
  methods: {
    handleSizeChange () {},
    handleCurrentChange () {},
    handleSearch() {
      this.searchParams.name = this.searchParams.name.trim()
      this.searchParams.phone = this.searchParams.phone.trim()
      if (this.searchParams.name) {
        this.dataList = this.dataList.filter(it => it.name.indexOf(this.searchParams.name) > 0)
      } else if (this.searchParams.phone) {
        this.dataList = this.dataList.filter(it => it.phone.indexOf(this.searchParams.phone) > 0)
      } else {
        this.dataList = BasicData.userList
      }
    },
    handleEdit (index, row) {
      this.title = '编辑用户'
      this.formVisible = true
      this.userForm = {
        id: row.id,
        name: row.name,
        phone: row.phone,
        sex: row.sex,
        age: row.age,
        company: row.company,
        address: row.address
      }
    },
    handleDelete (index, row) {
      this.$confirm('确认删除该用户？', {
        title: '提示',
        type: 'warning'
      }).then(() => {
        this.dataList = this.dataList.filter((it, i) => i !== index)
      })
    },
    submitForm () {
      let userInfo = this.userForm
      if (userInfo.id) {
        let temp = this.dataList.find(it => it.id === userInfo.id)
        if (temp) {
          temp.name = userInfo.name
          temp.phone = userInfo.phone
          temp.sex = userInfo.sex
          temp.age = userInfo.age
          temp.company = userInfo.company
          temp.address = userInfo.address
        }
      } else {
        this.dataList.push(userInfo)
      }
      this.formVisible = false
    }
  },
  created () {
    this.dataList = BasicData.userList
    this.total = BasicData.userList.length
    this.dataLoading = false
  }
}
</script>

<style lang="less">
.main {
  width: 100%;
  height: 100%;
  overflow: auto;
  .search-bar {
    width: 100%;
    height: auto;
    min-height: 60px;
    background: #ddd;
    .search-form {
      width: 100%;
      display: flex;
      .el-form-item {
        width: auto;
        margin: 20px 0;
        .el-input {
          width: 200px;
        }
      }
      .search-btn {
        width: 140px;
        margin: 20px 20px;
        align-self: flex-end;
        background: #ccc;
      }
    }
  }
  .data-list {
    padding: 10px 0;
    .list-content {}
    .list-page {
      padding: 20px 0 0 0;
    }
  }
  .dialog {
    .el-dialog {
      width: 600px;
      .el-input {
        width: 400px;
      }
    }
  }
}
</style>

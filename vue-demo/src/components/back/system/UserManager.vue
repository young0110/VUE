<template>
  <div class="main">
    <div class="data-list">
      <el-table
        class="list-content"
        stripe
        :data="dataList"
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
        :current-page="searchParams.currentPage"
        :page-sizes="[10, 20, 30]"
        :page-size="searchParams.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import BasicData from '../../../store/staticData'
export default {
  name: 'UserManager',
  data () {
    return {
      searchParams: {
        pageSize: 10,
        currentPage: 1
      },
      dataList: [],
      total: 0
    }
  },
  methods: {
    handleSizeChange () {},
    handleCurrentChange () {},
    handleEdit (index, row) {},
    handleDelete (index, row) {}
  },
  created () {
    this.dataList = BasicData.userList
    this.total = BasicData.userList.length
  }
}
</script>

<style lang="less">
.main {
  width: 100%;
  height: 100%;
  overflow: auto;
  .data-list {
    padding: 10px 0;
    .list-content {}
    .list-page {
      padding: 20px 0 0 0;
    }
  }
}
</style>

const staticData = {
  loginUser: {
    name: 'admin'
  },
  menuList: [
    {
      name: '首页',
      path: '/index',
      icon: 'icon-menu'
    }, {
      name: '图表展示',
      path: 'b',
      icon: 'icon-charts',
      children: [
        {
          name: '折线图展示',
          path: 'b1'
        }, {
          name: '柱状图展示',
          path: 'b2'
        }
      ]
    }, {
      name: '系统管理',
      path: 'system',
      icon: 'icon-setting',
      children: [
        {
          name: '用户管理',
          path: '/system/userManager'
        }, {
          name: '角色管理',
          path: '/system/roleManager'
        }
      ]
    }
  ],
  userList: [
    {
      name: '张三',
      phone: '15380762190',
      sex: '男',
      age: '27',
      company: '南京中谷芯信息',
      address: '南京江宁区江宁街道',
      role: 1
    }, {
      name: '张三',
      phone: '15380762190',
      sex: '男',
      age: '27',
      company: '南京中谷芯信息',
      address: '南京江宁区江宁街道',
      role: 1
    }, {
      name: '张三',
      phone: '15380762190',
      sex: '男',
      age: '27',
      company: '南京中谷芯信息',
      address: '南京江宁区江宁街道',
      role: 1
    }, {
      name: '张三',
      phone: '15380762190',
      sex: '男',
      age: '27',
      company: '南京中谷芯信息',
      address: '南京江宁区江宁街道',
      role: 1
    }, {
      name: '张三',
      phone: '15380762190',
      sex: '男',
      age: '27',
      company: '南京中谷芯信息',
      address: '南京江宁区江宁街道',
      role: 1
    }, {
      name: '张三',
      phone: '15380762190',
      sex: '男',
      age: '27',
      company: '南京中谷芯信息',
      address: '南京江宁区江宁街道',
      role: 1
    }, {
      name: '张三',
      phone: '15380762190',
      sex: '男',
      age: '27',
      company: '南京中谷芯信息',
      address: '南京江宁区江宁街道',
      role: 1
    }, {
      name: '张三',
      phone: '15380762190',
      sex: '男',
      age: '27',
      company: '南京中谷芯信息',
      address: '南京江宁区江宁街道',
      role: 1
    }, {
      name: '张三',
      phone: '15380762190',
      sex: '男',
      age: '27',
      company: '南京中谷芯信息',
      address: '南京江宁区江宁街道',
      role: 1
    }, {
      name: '张三',
      phone: '15380762190',
      sex: '男',
      age: '27',
      company: '南京中谷芯信息',
      address: '南京江宁区江宁街道',
      role: 1
    }
  ]
}
export default staticData

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
      id: 1,
      name: '张三',
      phone: '15380762190',
      sex: '男',
      age: '27',
      company: '南京中谷芯信息',
      address: '南京江宁区江宁街道',
      role: 1
    }, {
      id: 2,
      name: '李四',
      phone: '18061238109',
      sex: '男',
      age: '25',
      company: '南京中谷芯信息',
      address: '南京江宁区江宁街道',
      role: 0
    }, {
      id: 3,
      name: '张三',
      phone: '15380762190',
      sex: '男',
      age: '27',
      company: '南京中谷芯信息',
      address: '南京江宁区江宁街道',
      role: 1
    }, {
      id: 4,
      name: '张三',
      phone: '15380762190',
      sex: '男',
      age: '27',
      company: '南京中谷芯信息',
      address: '南京江宁区江宁街道',
      role: 1
    }, {
      id: 5,
      name: '张三',
      phone: '15380762190',
      sex: '男',
      age: '27',
      company: '南京中谷芯信息',
      address: '南京江宁区江宁街道',
      role: 1
    }, {
      id: 6,
      name: '张三',
      phone: '15380762190',
      sex: '男',
      age: '27',
      company: '南京中谷芯信息',
      address: '南京江宁区江宁街道',
      role: 1
    }, {
      id: 7,
      name: '张三',
      phone: '15380762190',
      sex: '男',
      age: '27',
      company: '南京中谷芯信息',
      address: '南京江宁区江宁街道',
      role: 1
    }, {
      id: 8,
      name: '张三',
      phone: '15380762190',
      sex: '男',
      age: '27',
      company: '南京中谷芯信息',
      address: '南京江宁区江宁街道',
      role: 1
    }, {
      id: 9,
      name: '张三',
      phone: '15380762190',
      sex: '男',
      age: '27',
      company: '南京中谷芯信息',
      address: '南京江宁区江宁街道',
      role: 1
    }, {
      id: 10,
      name: '灿灿',
      phone: '15797710717',
      sex: '男',
      age: '14',
      company: '南京中国移动',
      address: '江西太原市凤台市',
      role: 1
    }
  ]
}
export default staticData

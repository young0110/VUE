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
  ]
}
export default staticData

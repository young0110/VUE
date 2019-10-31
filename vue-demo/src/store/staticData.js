const staticData = {
  loginUser: {
    name: 'admin'
  },
  menuList: [
    {
      name: '首页',
      path: 'a',
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
      path: 'c',
      icon: 'icon-setting',
      children: [
        {
          name: '用户管理',
          path: 'c1'
        }, {
          name: '角色管理',
          path: 'c2'
        }
      ]
    }
  ]
}
export default staticData

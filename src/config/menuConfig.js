const menuList = [
  {
      title: '工作台',
      key: '/home',
      sub: true
  },
  {
      title: '单据管理',
      key: '/bills',
      sub: true,
      children: [
          {
              title: '进出口计划单',
              key: '/bills/plan',
          },
          {
              title: '核注清单',
              key: '/bills/check',
          },
          {
              title: '报关单',
              key: '/bills/customs',
          }
      ]
  },
  {
      title: '加工贸易',
      key: '/trade',
      sub: true,
      children: [
          {
              title: '加贸手册备案',
              key: '/trade/bookrecord',
          },
          {
              title: '加贸手册报核',
              key: '/trade/bookreport',
          },
          {
              title: '企业资质备案',
              key: '/trade/company',
          },
          {
              title: '加贸账册备案',
              key: '/trade/billrecord',
          },
          {
              title: '加贸账册报核',
              key: '/trade/billreport',
          },
          {
              title: '通关手册下载',
              key: '/trade/bookdown',
          }
      ]
  },
  {
      title: '原产地证',
      key: '/codocument',
      sub: true,
      children: [
          {
              title: '海关原产地证',
              key: '/codocument/doclist',
          },
          {
              title: '贸促会原产地证',
              key: '/codocument/listall',
          }
      ]
  }
];
export default menuList;
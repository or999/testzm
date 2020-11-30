// TODO:侧边栏菜单
interface IMenuType {
  title: string;
  active: boolean;
  link?: string;
  children?: Array<{
    title: string;
    active: boolean;
    link?: string;
  }>;
  icon?: string;
}
const menu: Array<IMenuType> = [
  {
    title: '首页',
    active: false,
    link: 'dashboard',
    icon: 'icon-share',
  },
  {
    title: '内容二',
    icon: 'icon-gps',
    active: false,
    link: '',
    children: [
      { title: '子内容1', active: false, link: 'child1' },
      { title: '子内容2', active: false, link: 'child2' },
      { title: '子内容3', active: false, link: 'child3' },
    ],
  },
  {
    title: '表格',
    icon: 'icon-go-module',
    active: false,
    link: 'table'
  },
  {
    title: '404',
    icon: 'icon-layout',
    active: false,
    link: 'pagenotfound'
  },
  {
    title: '内容五',
    icon: 'icon-op-delete',
    active: false,
    children: [
      { title: '子内容1', active: false, link: '51' },
      { title: '子内容2', active: false, link: '52' },
      { title: '子内容3', active: false, link: '53' },
    ],
  },
  {
    title: '超级管理员',
    icon: 'icon-op-delete',
    active: false,
    link: 'superroot'
  }
];
export { IMenuType, menu };

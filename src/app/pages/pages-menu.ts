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
    active: true,
    link: 'dashboard',
    icon: 'icon-go-chart',
  },
  {
    title: '内容二',
    icon: 'icon-folder-2',
    active: false,
    children: [
      { title: '子内容1', active: false, link: 'map' },
      { title: '子内容2', active: false, link: 'child2' },
    ],
  },
  {
    title: '表格',
    icon: 'icon-op-list',
    active: false,
    link: 'table'
  },
  {
    title: '404',
    icon: 'icon-classroom-reject',
    active: false,
    link: 'pagenotfound'
  },
  {
    title: '分组',
    icon: 'icon-loading',
    active: false,
    children: [
      { title: '分组列表', active: false, link: 'grouplist' },
      { title: '任务列表', active: false, link: 'tasklist' },
    ],
  },
  {
    title: '超级管理员',
    icon: 'icon-gps',
    active: false,
    link: 'superroot'
  },
  {
    title: '事件告警',
    icon: 'icon-warning-o',
    active: false,
    children: [
      { title: '事件告警', active: false, link: 'warning' },
      { title: '告警设置', active: false, link: 'wsetting' },
    ],
  }
];
export { IMenuType, menu };

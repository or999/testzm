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
    title: '内容一',
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
      { title: '子内容1', active: false, link: 'map' },
      { title: '子内容2', active: false, link: '22' },
      { title: '子内容3', active: false, link: '23' },
    ],
  },
  {
    title: '内容三',
    icon: 'icon-go-module',
    active: false,
    link: 'table'
  },
  {
    title: '内容四',
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
    title: 'superroot',
    icon: 'icon-op-delete',
    active: false,
    link: 'superroot'
  }
];
export { IMenuType, menu };

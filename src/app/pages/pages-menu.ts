// TODO:侧边栏菜单
 interface IMenuType {
    title: string;
    active: boolean;
    children?: Array<{
      title: string;
      active: boolean;
    }>;
    icon?: string;
  }
 const  menu: Array<IMenuType> = [
    {
      title: '内容一',
      active: false,
      children: [
        { title: '子内容1', active: false },
        { title: '子内容2', active: false },
        { title: '子内容3', active: false },
      ],
      icon: 'icon-share',
    },
    {
      title: '内容二',
      icon: 'icon-gps',
        active: false,
        children: [
            { title: '子内容1', active: false },
            { title: '子内容2', active: false },
            { title: '子内容3', active: false },
          ],
    },
    {
      title: '内容三',
      icon: 'icon-go-module',
      active: false,
    },
    {
      title: '内容四',
      icon: 'icon-layout',
      active: false,
    },
    {
      title: '内容五',
      icon: 'icon-op-delete',
        active: false,
        children: [
            { title: '子内容1', active: false },
            { title: '子内容2', active: false },
            { title: '子内容3', active: false },
          ],
    },
 ];
 export {IMenuType, menu};

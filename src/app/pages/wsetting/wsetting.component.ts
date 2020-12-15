import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wsetting',
  templateUrl: './wsetting.component.html',
  styleUrls: ['./wsetting.component.css']
})
export class WsettingComponent implements OnInit {
  data2 = [
    {
      id: 0,
      'title': '控制柜',
      'children': [
        {
          'id': 1,
          'title': '线路',
          'children': [
            {
              'title': '线路过流',
              'id': 2
            },
            {
              'title': '线路过压',
              'id': 3
            },
            {
              'title': '线路欠压',
              'id': 4
            }
          ],
        },
        {
          'id': 5,
          'title': '灯具',
          'children': [
            {
              'title': '意外亮灯',
              'id': 6
            },
            {
              'title': '意外灭灯',
              'id': 7
            },
          ]
        },
        {
          'id': 8,
          'title': '配电柜',
          'children': [
            {
              'title': '配电柜断电',
              'id': 9
            },
            {
              'title': '配电柜缺相',
              'id': 10
            },
            {
              'title': '配电柜漏电',
              'id': 11
            },
            {
              'title': '配电柜倾斜',
              'id': 12
            },
            {
              'title': '配电柜进水',
              'id': 13
            },
            {
              'title': '配电柜雷击',
              'id': 14
            },
          ]
        },
        {
          'id': 15,
          'title': '其它',
          'children': [
            {
              'title': '功率因数越限',
              'id': 16
            },
            {
              'title': '柜门开启',
              'id': 17
            },
            {
              'title': '手自动切换',
              'id': 18
            },
            {
              'title': '外部控制器',
              'id': 19
            },
          ]
        },
      ]
    },
    {
      id: 20,
      'title': '常规灯具',
      'children': [
        {
          'title': '灯具故障',
          'id': 21
        },
        {
          'title': '电源故障',
          'id': 22
        },
        {
          'title': '补偿电容',
          'id': 23
        },
        {
          'title': '灯杆漏电',
          'id': 24
        },
        {
          'title': '节点丢失',
          'id': 25
        },
        {
          'title': '继电器故障',
          'id': 26
        },
        {
          'title': '灯具过流',
          'id': 27
        },
        {
          'title': '灯具过压',
          'id': 28
        },
        {
          'title': '灯具欠压',
          'id': 29
        },
        {
          'title': '高温',
          'id': 30
        },
        {
          'title': '灯具寿命',
          'id': 31
        },
        {
          'title': '检修口门',
          'id': 32
        },
        {
          'title': '灯杆倾斜',
          'id': 33
        },
      ]

    },
    {
      id: 34,
      'title': '防盗',
      'children': [
        {
          'title': '线缆被盗',
          'id': 35
        },
      ]
    },
    {
      'title': '太阳能',
      'isParent': true,
      'isOpen': false,
      'id': 36
    }];
  constructor() { }
  formData = {
    toggleValue: {},
    radioValue: false,
    // warningName:'警报名称'
  };
  selectOptions: any;
  radioOptions=[{
    id: 1,
    label: '高'
  }, {
    id: 2,
    label: '中'
  }, {
    id: 3,
    label: '低'
    },
    {
      id: 4,
      label: '不警报'
    }]
  ngOnInit(): void {
  }
  value2 = [  {
    'title': '线路过流',
    'id': 2
  },
  {
    'title': '线路过压',
    'id': 3
    },
    {
      'title': '意外亮灯',
      'id': 6
    },
    {
      'title': '意外灭灯',
      'id': 7
    },];
  showSelected($event: Event) {
    console.log('event emitted: ', $event);
  }
  nodeToggleEvent(node) {
    if (node.id === 36 && !node.data.isOpen) {
      this.data2[3].children = [{
        'title': '节点丢失',
        'id': 37
      }, {
        'title': '电池过放',
        'id': 38
      }, {
        'title': '电池过压',
        'id': 39
        },{
          'title': '电池欠压',
          'id': 40
        }, {
          'title': '电池寿命',
          'id': 41
        }, {
          'title': '充电限制',
          'id': 42
        },
        {
          'title': '灯具线路开路',
          'id': 43
        }, {
          'title': '直流保护',
          'id': 44
          },{
            'title': '灯具线路 短路',
            'id': 45
          }, {
            'title': '太阳能板过压',
            'id': 46
          }, {
            'title': '太阳能板欠压',
            'id': 47
        },
        {
          'title': '灯具故障',
          'id': 48
        }, {
          'title': '灯具寿命',
          'id': 49
          },{
            'title': '太阳能控制器故障',
            'id': 50
          }, {
            'title': '太阳能控制器离线',
            'id': 51
          }];
      this.data2 = [...this.data2];
    }
  }
  submitForm(event):void {
    console.log(this.formData);
    
  }
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WarningService {

  constructor() { }
  getWarningTypes(): Observable<any> {
    return of(warningTypes)
  }
  getWarnings(query): Observable<any> {
    return of(warnings).pipe(
      map(data => {
        let list = data.filter(item => {
         if (query.status!==null) {
           return item.status === query.status
         } else {
           return item
         }
        })
        // console.log(list);
        return list
      }),
      map(data => {
        let list = data.filter(item => {
         if (query.rank!==null) {
           return item.rank === query.rank
         } else {
           return item
         }
        })
        // console.log(list);
        return list
      }),
      map(data => {
        let list = data.filter(item => {
         if (query.type!==null) {
           return item.type === query.type
         } else {
           return item
         }
        })
        // console.log(list);
        return list
      }),
    )
  }
}
enum types {
  type1 = '线路过流',
  type2 = '线路过压',
  type3 = '线路欠压',
  type4 = '灯杆漏电',
}
enum ranks {
  first = '高',
  second = '中',
  third = '低',
  fourth = '不警报'
}
interface Warning {
  type: types
  controller: string
  status: boolean
  endWeb: string
  warningTime: Date
  completeTime: Date | null
  rank: ranks
}
const warningTypes = [
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
const warnings: Warning[] = [
  {
    type: types.type1,
    controller: '花海控制柜AN3',
    status: true,
    endWeb: '灯杆',
    warningTime: new Date(2020, 11, 15),
    completeTime: new Date(2020, 11, 16),
    rank: ranks.first,
  },
  {
    type: types.type2,
    controller: '花海控制柜AN1',
    status: false,
    endWeb: '灯杆',
    warningTime: new Date(2020, 11, 14),
    completeTime: null,
    rank: ranks.second,
  },
  {
    type: types.type4,
    controller: '花海控制柜AN2',
    status: true,
    endWeb: '灯杆',
    warningTime: new Date(2020, 11, 12),
    completeTime: new Date(2020, 11, 15),
    rank: ranks.first,
  },
  {
    type: types.type3,
    controller: '花海控制柜AN3',
    status: true,
    endWeb: '灯杆',
    warningTime: new Date(2020, 7, 14),
    completeTime: new Date(2020, 8, 14),
    rank: ranks.second,
  },
  {
    type: types.type3,
    controller: '花海控制柜AN2',
    status: false,
    endWeb: '灯杆',
    warningTime: new Date(2020, 11, 14),
    completeTime: null,
    rank: ranks.third,
  },
  {
    type: types.type4,
    controller: '花海控制柜AN3',
    status: true,
    endWeb: '灯杆',
    warningTime: new Date(2020, 11, 14),
    completeTime: new Date(2020, 11, 22),
    rank: ranks.fourth,
  },
  {
    type: types.type2,
    controller: '花海控制柜AN4',
    status: false,
    endWeb: '灯杆',
    warningTime: new Date(2020, 11, 14),
    completeTime: null,
    rank: ranks.second,
  },
  {
    type: types.type1,
    controller: '花海控制柜AN4',
    status: true,
    endWeb: '灯杆',
    warningTime: new Date(2020, 11, 14),
    completeTime: new Date(2020, 11, 15),
    rank: ranks.fourth,
  },
  {
    type: types.type3,
    controller: '花海控制柜AN4',
    status: false,
    endWeb: '灯杆',
    warningTime: new Date(2020, 9, 14),
    completeTime: null,
    rank: ranks.first,
  },
  {
    type: types.type2,
    controller: '花海控制柜AN4',
    status: true,
    endWeb: '灯杆',
    warningTime: new Date(2020, 10, 20),
    completeTime:  new Date(2020, 10, 22),
    rank: ranks.third,
  },
  {
    type: types.type4,
    controller: '花海控制柜AN3',
    status: true,
    endWeb: '灯杆',
    warningTime: new Date(2020, 10, 14),
    completeTime: new Date(2020, 10, 15),
    rank: ranks.fourth,
  }
]

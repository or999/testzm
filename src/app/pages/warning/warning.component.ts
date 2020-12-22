import { Component, OnInit } from '@angular/core';
import { WarningService } from 'src/app/core/warning/warning.service';
import { of } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.css']
})
export class WarningComponent implements OnInit {
  filterList = [
    {
      name: '所有',
      id: 0
    },
    {
      name: '高',
      id: 1
    },
    {
      name: '中',
      id: 2
    },
    {
      name: '低',
      id: 3
    },
    {
      name: '不警报',
      id: 4
    }
  ]
  options1 = [
    {
      label: '所有',
      id: 0
    },
    {
      label: '高',
      id: 1
    },
    {
      label: '中',
      id: 2
    },
    {
      label: '低',
      id: 3
    },
    {
      label: '不警报',
      id: 4
    }
  ]
  options3 = [
    {
      label: '所有',
      id: 2
    },
    {
      label: '警报中',
      id: 0
    },
    {
      label: '已解除警报',
      id: 1
    },
  ]
  queryOptions: Query = {
    startDate: null,
    endDate: null,
    rank: null,
    status: null,
    type: null,
  }
  currentOption1: any
  currentOption3: any
  basicDataSource: any;
  options2: any;
  value2: any;
  dataTableOptions = {
    columns: [
      {
        field: 'endWeb',
        header: '终端',
        fieldType: 'text',
        order: 1
      },
      {
        field: 'status',
        header: '实时状态',
        fieldType: 'boolean',
        order: 2
      },
      {
        field: 'type',
        header: '警报类型',
        fieldType: 'text',
        order: 3
      },
      {
        field: 'controller',
        header: '控制柜',
        fieldType: 'text',
        order: 4
      },
      {
        field: 'rank',
        header: '警报等级',
        fieldType: 'text',
        order: 5
      },
      {
        field: 'warningTime',
        header: '报警时间',
        fieldType: 'date',
        order: 6
      },
      {
        field: 'completeTime',
        header: '解除报警时间',
        fieldType: 'date',
        order: 7
      }
    ]
  };
  constructor(private warningService: WarningService) { }
  ngOnInit(): void {
    this.getdata(this.queryOptions)
    this.getOptions2()
  }
  activeTabChange(id) {
    console.log(id);
  }
  getdata(query?: Query) {
    this.warningService.getWarnings(this.queryOptions).subscribe(
      data => {
        this.basicDataSource = data
        console.log(this.basicDataSource);
      })
  }
  getOptions2() {
    this.warningService.getWarningTypes().subscribe(data => {
      this.options2 = data
    })
  }
  showSelected(event?) {
    // console.log('event emitted: ', event);
    this.queryOptions.type = event?.title || null
    this.getdata(this.queryOptions)
  }
  nodeToggleEvent(node) {
    if (node.id === 36 && !node.data.isOpen) {
      this.options2[3].children = [{
        'title': '节点丢失',
        'id': 37
      }, {
        'title': '电池过放',
        'id': 38
      }, {
        'title': '电池过压',
        'id': 39
      }, {
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
      }, {
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
      }, {
        'title': '太阳能控制器故障',
        'id': 50
      }, {
        'title': '太阳能控制器离线',
        'id': 51
      }];
      this.options2 = [...this.options2];
    }
  }
  getDate({ startDate, endDate }): void {
    this.queryOptions.startDate = startDate
    this.queryOptions.endDate = endDate
    if (startDate&&endDate) {
      this.basicDataSource = this.basicDataSource.filter(item => {
        // console.log(item.warningTime-startDate);
        // console.log(endDate-item.warningTime);
        return item.warningTime-startDate>=0&&endDate-item.warningTime>=0;
      })
    } else {
     this.getdata(this.queryOptions)
      console.log('未选择完整时间范围');
    }
    // this.getdata(this.queryOptions)
  }
  statusChange(): void {
    // console.log(this.currentOption3);
    if (this.currentOption3.id===2) {
       this.queryOptions.status=null
    } else {
    this.queryOptions.status = this.currentOption3.id === 1 ? true : false
    }
    this.getdata(this.queryOptions)
  }
  rankChange(): void {
    if (this.currentOption1.label === '所有') {
      this.queryOptions.rank= null
    } else {
      // console.log(this.currentOption1);
      this.queryOptions.rank = this.currentOption1.label
    }
    this.getdata(this.queryOptions)
  }
  filterChange($event): void {
    // const list= $event.map(item=>item.name)
    if ($event.name === '所有') {
      this.queryOptions.rank=null
    } else {
      this.queryOptions.rank=$event.name
    }
    this.getdata(this.queryOptions)

  }
}
interface Query {
  startDate: Date | null
  endDate: Date | null
  rank: string | null
  status: boolean | null
  type: string | null
}

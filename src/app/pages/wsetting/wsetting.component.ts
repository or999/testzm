import { Component, OnInit } from '@angular/core';
import { WarningService } from 'src/app/core/warning/warning.service';

@Component({
  selector: 'app-wsetting',
  templateUrl: './wsetting.component.html',
  styleUrls: ['./wsetting.component.css']
})
export class WsettingComponent implements OnInit {
  data2: any;
  constructor(private warningService:WarningService) { }
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
    this.getData2()
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
  getData2() {
    this.warningService.getWarningTypes().subscribe(data => {
      this.data2=data
    })
  }
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

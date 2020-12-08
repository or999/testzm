import { Component,  OnInit } from '@angular/core';
import { of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Component({
  selector: 'app-table-form',
  templateUrl: './table-form.component.html',
  styleUrls: ['./table-form.component.scss']
})
export class TableFormComponent implements OnInit {
  formData: FormData = {
    lightName: '',
    lightType: '',
    light: 100,
    lightAddress: 1234567890,
    on: true,
    online: true,
    lightLocation: '',
  };
  constructor() { }
  ngOnInit(): void {
  }
  onAdd(): void {

  }
  onClick(event): void {
    // console.log(this.formData);
  }
  submitForm({ valid, directive }): void {
    console.log(directive);
    if (valid) {
      console.log(this.formData);
      of(this.formData).pipe(
        map((val) => 'success'),  // 模拟接口处理
        delay(500)
      ).subscribe((res) => {
        if (res === 'success') {
          console.log('success', '成功', '添加成功');
        }
      });
    } else {
      console.log('error', '错误', '请检查所有校验项是否通过');
    }
  }
}
interface FormData {
  lightName: string;
  lightType: string;
  light: number;
  lightAddress: number;
  on: boolean;
  online: boolean;
  lightLocation: string;

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit { 
  selectOptions= originSource
  formData: Group = {
    groupName:'as',
    groupDescribe: 'as',
    groupChild: 0,
    groupElement: [{id:1,'label':'HNJS-0001'}]
  }
  constructor() { }
  ngOnInit(): void {
   
  }
  submitForm(event): void{
    console.log(event);
    
  }
}
interface Group {
  groupName: string;
  groupDescribe: string;
  groupChild: number;
  groupElement?:any[]
}
interface SourceType {
  address: number;
  name: string;
  type: string;
  online: boolean;
  on: boolean;
  light: number;
}
const originSource = [
   {
    id: 1,
    label: 'HNJS-0001'
  },
  {
    id: 2,
    label: 'HNJS-0002'
  },
  {
    id: 3,
    label: 'HNJS-0003'
  },
  {
    id: 4,
    label: 'HNJS-0004'
  },
  {
    id: 5,
    label: 'HNJS-0005'
  },
  {
    id: 6,
    label: 'HNJS-0006'
  },
];

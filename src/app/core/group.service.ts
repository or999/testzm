import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  constructor() { }
  getGrouplist():Observable<Group[]> {
    return of(data).pipe()
  }
  getSource(): Observable<Source[]>{
    return of(originSource).pipe(
    )
  }
}
interface Group {
  id: number;
  groupName: string;
  groupDescribe: string;
  groupChild: number,
  groupElement:any[]
}
interface Source{
  id: number;
  label:string
 }
const data = [
  {
    id:1,
    groupName:'分组一',
    groupDescribe: '这是一个测试分组的描述',
    groupChild: 0,
    groupElement:[]
    },
  {
      id:2,
      groupName:'分组二',
      groupDescribe: '这是一个测试分组的描述',
    groupChild: 1,
    groupElement:[ {
      id: 1,
      label: 'HNJS-0001'
    },]
      
    },
  {
      id:3,
      groupName:'分组三',
      groupDescribe: '这是一个测试分组的描述',
      groupChild: 1,
    groupElement:[ {
      id: 1,
      label: 'HNJS-0001'
    }]
      
    }
]
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

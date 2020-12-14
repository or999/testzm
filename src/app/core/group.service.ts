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
  getTasks(): Observable<any[]>{
    return of(tasks)
  }
  getActions(): Observable<any[]>{
    return of(actions)
  }
}
interface Group {
  id: number;
  groupName: string;
  groupDescribe: string;
  groupChild: number,
  groupElement: any[],
  groupTask?: any[],
  groupTaskCount?:number
}
interface Source{
  id: number;
  label:string
}
//  TODO:分组数据
const data = [
  {
    id:1,
    groupName:'分组一',
    groupDescribe: '这是一个测试分组的描述',
    groupChild: 0,
    groupElement: [],
    groupTask: [],
    groupTaskCount:0
    },
  {
      id:2,
      groupName:'分组二',
      groupDescribe: '这是一个测试分组的描述',
    groupChild: 1,
    groupElement:[ {
      id: 1,
      label: 'HNJS-0001'
    },],
    groupTask: [],
    groupTaskCount:0
    

      
    },
  {
      id:3,
      groupName:'分组三',
      groupDescribe: '这是一个测试分组的描述',
      groupChild: 1,
    groupElement:[ {
      id: 1,
      label: 'HNJS-0001'
    }],
    groupTask: [{id:1,taskName:'任务一'}],
    groupTaskCount:1
    }
]
// TODO:灯具数据
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
// TODO:任务数据
const tasks = [
  {
    id:1,
    taskName: '任务一',
    taskDescribe: '描述',
    taskdo: { id: 2, label: '操作二' },
    actionLabel: '操作二',
    actionTime:''
    
  },
  {
    id:2,
    taskName: '任务二',
    taskDescribe: '描述',
    taskdo: { id: 1, label: '操作一' },
    actionLabel: '操作一',
    actionTime:''
    
  }
]
const actions = [
  {id:1,label:'操作一'},
  {id:2,label:'操作二'},
  {id:3,label:'操作三'},
  {id:4,label:'操作四'},
]

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  keyword:any;
  todolist:any[]=[];

  constructor() { }

  ngOnInit(): void {
  }

  doAdd(e:any){
    
    // 当按下回车就开始执行逻辑
    if(e.keyCode==13){

      if(!this.todolistHaskey(this.todolist,this.keyword)){

        this.todolist.push({
          title:this.keyword,
          status:0

        });
        this.keyword='';

      }else{

        alert('数据已经存在');
        this.keyword='';


      }


    }


  }

  delData(key:any){

    this.todolist.splice(key,1)

  }

// 如果输入的值已经存在就返回 false，如果没有输入值就返回 false
  todolistHaskey(todolist:any,keyword:any){

    if(!keyword) return false;

    for(var i=0;i<todolist.length;i++){
      if(todolist[i].title == keyword){

        return true
      }
    }
    return false
  }

}

import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  keyword:any;
  todolist:any[]=[];

  // storage 进行初始化
  constructor(public storage:StorageService) { }

  // 页面刷新，从 storge 获取数据
  ngOnInit(): void {

    var todolist = this.storage.get('todolist')
    if (todolist){

      this.todolist = todolist
    }

  }

  doAdd(e:any){
    
    // 当按下回车就开始执行逻辑
    if(e.keyCode==13){

      if(!this.todolistHaskey(this.todolist,this.keyword)){

        this.todolist.push({
          title:this.keyword,
          status:0

        });
        // 直接把数据列表整体保存到 localstorage 
        this.storage.set('todolist',this.todolist)

        this.keyword='';

      }else{

        alert('数据已经存在');
        this.keyword='';


      }


    }


  }

  delData(key:any){
 
    this.todolist.splice(key,1)
    // 直接把数据列表整体保存到 localstorage 
    this.storage.set('todolist',this.todolist)

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

  changebox(){

    // 直接把数据列表整体保存到 localstorage 
    this.storage.set('todolist',this.todolist)



  }

}

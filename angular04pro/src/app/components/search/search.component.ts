import { ThisReceiver } from '@angular/compiler';
import { Component, ErrorHandler, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {


  keyword:any;
  historyList:any[]=[]

 // 对服务进行初始化 
  constructor( public storage:StorageService) { }


  // 页面刷新设置
  ngOnInit(): void {

    var searchlist:any = this.storage.get('searchlist')

    if (searchlist){

      this.historyList = searchlist
    }
    

  }

  doSearch(){

    if(this.historyList.indexOf(this.keyword)==-1){

      this.historyList.push(this.keyword)

    // 使用服务将数据列表变动更新到 storage 
      this.storage.set('searchlist',this.historyList)

    }
    
    this.keyword=''

  }

  delHistory(key:any){
    alert(key)
    this.historyList.splice(key,1)

    // 使用服务将数据列表变动更新到 storage 
    this.storage.set('searchlist',this.historyList)
  }

}

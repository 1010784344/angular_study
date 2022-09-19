import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {


  keyword:any;
  historyList:any[]=[]


  constructor() { }

  ngOnInit(): void {
  }

  doSearch(){

    if(this.historyList.indexOf(this.keyword)==-1){

      this.historyList.push(this.keyword)

    }
    
    this.keyword=''

  }

  delHistory(key:any){
    alert(key)
    this.historyList.splice(key,1)
  }

}

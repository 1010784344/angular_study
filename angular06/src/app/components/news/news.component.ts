import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  // 获取子组件的实例
  @ViewChild('footer') footer:any;

  constructor() { }

  ngOnInit(): void {
  }

  // 获取 footer 子组件的数据
  getChildMsg(){

    alert(this.footer.msg)
  }

  // 获取 footer 子组件的方法
  getChildRun(){

    this.footer.run()
  }

}

// 引入 ViewChild
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {


// 使用 viewchild 装饰器，获取 dom 节点
  @ViewChild('mybox') mybox:any;

  // 使用 viewchild 装饰器，获取子组件
  @ViewChild('header') header:any;

  constructor() { }

  ngOnInit(): void {
  }

  // 在 ngafterviewinit 生命周期函数里操作 dom节点的样式
  ngAfterViewInit(): void {
   
    console.log(this.mybox.nativeElement)

    this.mybox.nativeElement.style.background='red'

    this.mybox.nativeElement.style.with='100px'

    this.mybox.nativeElement.style.height='100px'

    console.log(this.mybox.nativeElement.innerHTML);
    
  }

  // 在父组件的方法中，调用子组件的方法
  getchildRun(){

    this.header.run()

  }

}

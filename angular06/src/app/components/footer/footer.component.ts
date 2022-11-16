import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  // 定义子组件的数据 
  public msg="我是子组件 footer 的一个msg"

  constructor() { }

  ngOnInit(): void {
  }

  // 定义子组件的 run 方法
  run(){

    alert("我是子组件 footer 的run方法");

  }

}

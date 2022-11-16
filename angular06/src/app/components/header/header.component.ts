import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // 接收父组件传来的数据

  @Input() title:any;
  @Input() msg:any;
  @Input() run:any;

  constructor() { }

  ngOnInit(): void {
  }

  getParentRun(){

    // 执行父组件的 run 方法
    this.run()
  }

  getParentMsg(){

    // 获取父组件传递进来的数据
    alert(this.msg)
  }

}

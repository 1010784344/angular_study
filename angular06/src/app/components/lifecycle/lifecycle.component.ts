import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent implements OnInit {

  public msg:string='我是一个生命周期演示'

  constructor() { 

    console.log('00 构造函数执行了，除了使用简单的值对局部变量进行初始化之外，什么都不应该做')

  }

  ngOnChanges(){

    console.log('01 ngonchanges执行了，当被绑定的输入属性的值发生变化时调用（父子组件传值的时候会触发）')
  }

  ngOnInit() {

    console.log('02 ngOnInit执行了，请求数据一般放在这个里面')

  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    
    console.log('03 ngdocheck 执行了，检测并在发生 angular 无法或不愿意自己检测的变化时作出反应')

  }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    
    console.log('04 ngaftercontentinit 执行了，当把内容投影进组件之后调用')

  }

  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
   
    console.log('05 ngaftercontentchecked 执行了，每次完成被投影组件内容的变更检测之后调用')

  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    
    console.log('06 ngafterviewinit 执行了，初始化完成组件视图及其子视图之后调用（dom 操作放在这个里面）')

  }

  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    
    console.log('07 ngafterviewchecked 执行了，每次做完组件视图和子视图的变更检测之后调用')

  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('08 ngondestory 执行了')
  }

  changeMsg(){

    this.msg="数据改变了"
  }

}

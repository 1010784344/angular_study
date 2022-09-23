import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  flag=true

  constructor() { }

  ngOnInit(): void {

    let obox:any =document.getElementById('box')
    // innerHTML设置或者返回标签所包含的HTML+文本信息
    console.log(obox.innerHTML)
    console.log(obox)
    // 修改 dom 节点对应的样式
    obox.style.color = 'red'

  }

  ngAfterViewInit(): void {
    let obox1:any =document.getElementById('box1');
    // innerHTML设置或者返回标签所包含的HTML+文本信息
    console.log(obox1.innerHTML);
    console.log(obox1);
    // 修改 dom 节点对应的样式
    obox1.style.color = 'blue';
  }
    
    
  

}

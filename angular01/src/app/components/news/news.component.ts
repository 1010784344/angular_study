import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {


  public title='我是新闻组件'

  msg='我是一个新闻组件msg'

  username:string='username'

  public student:any='student'

  public userinfo:any={

    username:'zhang san',
    age:'20'
  }

  public message:any;

  public TT:any='另一个title'

  public content='<h3>我是一个 html1 标签</h3>'


  public arr=['1','3','5']

  public userlist=[{

      username:1,
      age:10
  },{

    username:2,
    age:20
},{

  username:3,
  age:30
}]

public cars=[{

  car:1,
  list:[
    {title:'x1',price:10},{title:'x2',price:20},{title:'x3',price:30}
  ]
},{

  car:2,
  list:[
    {title:'q1',price:10},{title:'q2',price:20},{title:'q3',price:30}
  ]
}]


  constructor() { 

    // 修改变量的值
    this.message = 'everywhere'

    console.log(this.msg)

    this.msg = 'helloworld'

  }

  ngOnInit(): void {
  }

}

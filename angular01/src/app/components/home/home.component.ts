import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  public imgurl='https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png'

  list = ['宝马','奥迪']

  public today= new Date();

  attr = 'blue'

  
  constructor() { 

    console.log(this.today)

  }

  ngOnInit(): void {
  }


  run() {

    alert(this.today)
  }

  title = 'one'

  setdata(){

    this.title = "mon"

  }



  keytest(val:any){
    if (val.keyCode==13){
    console.log("按了一下回车")}
    else{

      console.log(val.target)
    }
  }

  
  keywords='我是默认值'


  
  changewords(){


    this.keywords='我是keywords改变后的值'

  }


  getwords(){


    alert(this.keywords)

  }















  }




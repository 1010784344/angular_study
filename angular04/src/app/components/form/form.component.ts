import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  peopleInfo:any={

    username:"",
    sex:"2",
    cityList:["北京","上海","深圳"],
    city:"上海",
    hobby:[{
      title:"吃饭",
      checked:false
    },{
      title:"睡觉",
      checked:false
    },{
      title:"敲代码",
      checked:true
    }

    ],
    mark:""


  };

  constructor() { }

  ngOnInit(): void {
  }

  doSubmit(){


    // let userdom:any = document.getElementById("username");
    // console.log(userdom.value)


    console.log(this.peopleInfo)

  }

}

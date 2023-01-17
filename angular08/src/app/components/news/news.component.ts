import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { HttpserviceService } from 'src/app/services/httpservice.service';



@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  public list:any[]=[];

  constructor(public http:HttpClient, public httpService:HttpserviceService) { }

  ngOnInit(): void {
  }


  // get 方法
  getData(){
    let api = 'http://a.itying.com/api/productlist'
    this.http.get(api).subscribe((response:any)=>{

      console.log(response);

      this.list=response.result;
    })

  }


  // post 方法
  postData(){

    const httpOptions = {headers:new HttpHeaders({'Content-Type':'application/json'})   };

    // 一个 flask 启动的服务
    let api='http://127.0.0.1:5000/angular'

    this.http.post(api,{'username':'zhangsan','age':20}, httpOptions).subscribe((response)=>{

      console.log(response)

    })

  }

  // jsonp 方法
  getJsonpData(){

    var api = 'http://a.itying.com/api/productlist'
    this.http.jsonp(api,'callback').subscribe((response:any)=>{

      console.log(response);

    })

  }


  // 第三方 axios 方法
  getAxiosData(){

    console.log('axios 获取数据')

    let api = 'http://a.itying.com/api/productlist'
    this.httpService.axiosGet(api).then((data)=>{

      console.log(data)

    })
  }



}

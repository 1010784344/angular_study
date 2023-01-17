import { Injectable } from '@angular/core';

import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor() { }



// 服务组件中定义方法
axiosGet(api:any){


    return new Promise((resolve,reject)=>{

      axios.get(api).then(function(response){

        resolve(response)

      });

    })

}

}



















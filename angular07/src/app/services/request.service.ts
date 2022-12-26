import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { observeNotification } from 'rxjs/internal/Notification';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor() { }

  getData(){


    return '张三--同步'
  }

  getCallbackData(cb:any){

    setTimeout(()=>{

      var username='张三--异步--callback'
      // return username;
      cb(username);

    },1000);
  }

  getPromiseData(){

    return new Promise((resolve)=>{

      setTimeout(()=>{

        var username='张三--异步--promise';
        resolve(username);

      },1000)

    }
    )
  }

  getRxjsData(){

    return new Observable((observer)=>{

      setTimeout(() => {
        var username='张三--异步--rxjs';
        observer.next(username);
      }, 2000);


    })

  }

  getRxjsIntervalData(){

    let count=0;
    return new Observable((observer)=>{

      setInterval(()=>{


        count++;
        var username = '张三--异步--Rxjs--Interval'+count;
        observer.next(username);


      },1000)


    })



  }

  getRxjsIntervalNum(){

    let count=0;
    return new Observable<any>((observer)=>{

      setInterval(()=>{


        count++;
        observer.next(count);

      },1000)

    })

  }


}

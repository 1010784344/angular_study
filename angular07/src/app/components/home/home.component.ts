import { Component, OnInit } from '@angular/core';

import { RequestService } from 'src/app/services/request.service';

import { map,filter } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public request:RequestService) {  }

  ngOnInit(): void {
    //1、 同步方法
    let data=this.request.getData()
    console.log(data);

    //2、 callback 获取异步数据
    this.request.getCallbackData((data:any)=>{

      console.log(data);
    });
    // console.log(callbackdata);
    // 这里的逻辑就已经变了，之前的逻辑是将数据从服务那边的函数拿到之后在home 组件进行打印
    // 现在的逻辑是，让数据直接在服务那边进行打印

  // 3、promise 获取异步数据

    var promiseData = this.request.getPromiseData();
    promiseData.then((data)=>{

      console.log(data);
    })

  // 4、rxjs 获取异步方法里面的数据

  var rxjsData = this.request.getRxjsData();
  rxjsData.subscribe((data)=>{

    console.log(data);
  })

  // 5、过一秒以后撤回刚才的操作
  var streem = this.request.getRxjsData();
  var d=streem.subscribe((data)=>{

    console.log(data)

  })

  setTimeout(()=>{

    d.unsubscribe();
  },1000)

  // 6、rxjs 执行多次

  var streemInterval=this.request.getRxjsIntervalData();
  streemInterval.subscribe((data)=>{

    console.log(data);
  })


  // 7、用工具方法对返回数据进行处理(filter 筛选出偶数)
  var streemNum=this.request.getRxjsIntervalNum();
  streemNum.pipe(

    filter(value=>value%2==0)

     )

  .subscribe((data)=>{

    console.log(data);
  })
  

  // 8、用工具方法对返回数据进行处理(map 返回二次方的数据)
  var streemNum=this.request.getRxjsIntervalNum();
  streemNum.pipe(
   
    map((value)=>{

      return value*value;
    })
    
  
  )
  .subscribe((data)=>{

    console.log(data);
  })

  }

}

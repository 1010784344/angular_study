import { getLocaleMonthNames } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router,NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {

    
  }

  goNewsContent(){

    this.router.navigate(['/newscontent/','123'])


  }

  goHome(){


    this.router.navigate(['/home'])

  }

  goNews(){

    let queryParams:NavigationExtras={

      queryParams:{'aid':123}

    }

    this.router.navigate(['/news'],queryParams)


  }





}

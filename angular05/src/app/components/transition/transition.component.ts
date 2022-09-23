import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transition',
  templateUrl: './transition.component.html',
  styleUrls: ['./transition.component.scss']
})
export class TransitionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  ShowAside(){


    var aisdeDom:any=document.getElementById('aside')
    aisdeDom.style.transform="translate(0,0)";

  }


  HideAside(){


    var aisdeDom:any=document.getElementById('aside')
    aisdeDom.style.transform="translate(100%,0)";

  }





}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { ProductComponent } from './components/product/product.component';
import { NewscontentComponent } from './components/newscontent/newscontent.component';
import { ProductcontentComponent } from './components/productcontent/productcontent.component';


const routes: Routes = [

{

  path:'home',component:HomeComponent
},

{

  path:'news',component:NewsComponent
},

{

  path:'product',component:ProductComponent
},
// // get 传值
// {

//   path:'newscontent',component:NewscontentComponent
// },

// 动态路由 传值
{

  path:'newscontent/:aid',component:NewscontentComponent
},

{

  path:'productcontent/:pid',component:ProductcontentComponent
},


// 匹配不到路由，跳转到首页组件
{

  path:'**', /*任意的路由*/
  redirectTo:'home'
},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

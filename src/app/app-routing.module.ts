import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsightsComponent } from './insights/insights.component';
import { ServicesProductsComponent } from './services-products/services-products.component';
import { CareersComponent } from './careers/careers.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
const routes: Routes = [
  {path:'',redirectTo:'/app.component',pathMatch:'full'},
  {path:'new',component:ServicesProductsComponent},
  {path:'id',component:InsightsComponent},
  {path:'edit',component:CareersComponent},
  {path:'About',component:AboutComponent},
  {path:"contact",component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

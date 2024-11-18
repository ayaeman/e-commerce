import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { SingleMemberComponent } from './single-member/single-member.component';
import { StoryComponent } from './story/story.component';

const routes: Routes = [
  {path:'' , component:HomeComponent},
  {path:'products' , component:ProductsComponent},
  {path : 'story' , component:StoryComponent},
  {path:'member/:id' , component : SingleMemberComponent},
  {path: 'contact-us', component:ContactUsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

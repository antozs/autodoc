import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrequentQuestionsComponent } from './frequent-questions/frequent-questions.component';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home.route';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [FrequentQuestionsComponent, HomeComponent],
  imports: [
    CommonModule, 
    HomeRoutingModule,
    SharedModule
  ], exports:[
    FrequentQuestionsComponent, 
    HomeComponent
  ]
})
export class HomeModule { }

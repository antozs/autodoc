import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './_components/nav-bar/nav-bar.component';
import { CardComponent } from './_components/card/card.component';
import { FooterComponent } from './_components/footer/footer.component';



@NgModule({
  declarations: [NavBarComponent, CardComponent, FooterComponent],
  imports: [
    CommonModule
  ],
  exports:[
    NavBarComponent,
    CardComponent,
    FooterComponent
  ]
})
export class SharedModule { }

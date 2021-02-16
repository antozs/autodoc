import { isGeneratedFile } from '@angular/compiler/src/aot/util';
import { Component, HostListener, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { Dashboard } from '../../../shared/_interfaces/dashboard';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dashboard: Dashboard;
  isMobile: boolean = false;
 isMobileSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
//isMobile: Observable<boolean> = new Observable();
  
  constructor() { }

  ngOnInit(): void {
    this.dashboard = new Dashboard();
    this.validateIsMobile();  
    
    //this.isMobile = this.isMobileSubject.asObservable().pipe(); 
    //console.log("DAsssssssh",this.dashboard.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    //console.log("widthhhhhhhhhhhhhhh ",window.innerWidth);
    this.dashboard.innerWidth = window.innerWidth;
    this.dashboard.innerHeight = window.innerHeight;
    //console.log("DAsssssssh ",this.dashboard);
    this.validateIsMobile();
  }

  validateIsMobile(){
    if(this.dashboard.innerWidth <= 800){
      console.log("DASH",this.dashboard.innerWidth);
      this.isMobile = true; 
     return; 
    }
    this.isMobile = false;  
  }

}

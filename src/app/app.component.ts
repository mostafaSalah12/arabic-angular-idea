import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  valll:String;

     lang:Number;

    isAr = null;

  chaneLang(evt){
this.lang = evt;
console.log(this.lang)
if(this.lang == 1){
  this.valll = "اهلا";
  this.isAr = true;
}else{
  this.valll = "welcome";
  this.isAr = false;
}
  }
}

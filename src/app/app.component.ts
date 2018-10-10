import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }


  title = 'app';

     lang:Number;

    isAr = null;

    switchLanguage(language: string) {

      if(language == 'ar'){
        this.isAr = true;
      }else{
        this.isAr = false;
      }
      this.translate.use(language);
    }

}

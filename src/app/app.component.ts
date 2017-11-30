import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  screen : string = "";

  Affichage(el : string){
    if (el == 'C') {
      this.screen = "";
    } else if (el == '=') {
      this.screen = eval(this.screen);
    } else if (el == '<'){
      this.screen = this.screen.substring(0, this.screen.length - 1);
    } else {
      // Je continue d'afficher les éléments
      this.screen += el;
    }


  }



}

import { Component } from '@angular/core';
import listaPostres from 'src/assets/json/postres.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appJSONangular';
  Postres: any = listaPostres;
}

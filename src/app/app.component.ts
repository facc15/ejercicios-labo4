import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Ejercicio 1";
  edad:any;
  edad2:any;
  suma:any;
  promedio:any;

  public Calcular()
  {
    this.suma=parseInt(this.edad)+parseInt(this.edad2);

    this.promedio= this.suma/2;
  }

  public Limpiar()
  {
    this.edad=null;
    this.edad2=null;
    this.suma=null;
    this.promedio=null;
  }
}


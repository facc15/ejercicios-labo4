import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class bienvenidoComponent implements OnInit {
  title="Ejercicio 2";

  constructor() { }

  ngOnInit(): void {
  }

}

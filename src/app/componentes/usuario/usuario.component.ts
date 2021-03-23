import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class Usuario implements OnInit {

  nombre: string="";
  clave: string="";

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor() {}
  titulo: string = 'Formulario de Registro';
  nombre!: string;
  apellido!: string;
  carrera!: string;

  campos!: object;
  lista: any[] = [];

  ngOnInit(): void {}

  // funcion insertar
  insertar() {
    this.campos = {
      nombre: this.nombre,
      apellido: this.apellido,
      carrera: this.carrera,
    };

    this.lista.push(this.campos);
    
  }
  // funcion eliminar
  eliminar(i: string) {
    if (confirm('¿Desea ud. eliminar permanentemente el registro?')) {
      this.lista = this.lista.filter(function (n) {
        return n.nombre !== i;
      });
    }
  }
}

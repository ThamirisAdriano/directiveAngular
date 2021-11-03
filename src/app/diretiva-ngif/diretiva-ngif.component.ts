import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.css']
})
export class DiretivaNgifComponent implements OnInit {

  cursos: string[] =["Angular 2"] //variavael com tipagem e array 

  mostrarCursos: boolean = false; //variavel com tipagem boolean

  constructor() { }

  ngOnInit(): void {
  }

  onmostrarCursos(){
    this.mostrarCursos = !this.mostrarCursos
  }

}

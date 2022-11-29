import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutores',
  templateUrl: './tutores.component.html',
  styleUrls: ['./tutores.component.css']
})
export class TutoresComponent implements OnInit {

  public tutores!:string[];
  public nombreApellido!:string;
  public mensaje!:string;
  public unTutor!:boolean;

  constructor() { }

  ngOnInit(): void {
    this.cargarTutores();
    this.unTutor=true;
  }

  cargarTutores(): void{
    this.tutores = ['Jose Alvez', 'Victoria Cordero', 'Andres Cardona', 'Lautaro Garcia', 'Josue Baez', 'Pablo García'];
  }

  esTutor(nombreApellido: string): void {
    this.unTutor = this.tutores.includes(nombreApellido);
    this.mensaje = this.unTutor ? nombreApellido + ' es tutor.' : 'Disculpe, tutor no encontrado.';
  }

}

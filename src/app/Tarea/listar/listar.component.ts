import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tarea } from 'src/app/modelo/Tarea';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  tareas: Tarea[];
  constructor(private http:ServiceService,private router:Router) { }

  ngOnInit(): void {
    this.http.getTareas()
    .subscribe(data=>{
      this.tareas = data;
    });
  }

  Editar(tarea:Tarea){
    localStorage.setItem("id",tarea.id.toString());
     this.router.navigate(["edit"]);
   }
 
   Eliminar(id:number){
     this.http.eliminar(id)
     .subscribe(data=>{
       this.obtenerEmpleados();
     });
   }
 
   obtenerEmpleados(){
     this.http.getTareas()
     .subscribe(data=>{
       this.tareas = data;
     });
   }

}

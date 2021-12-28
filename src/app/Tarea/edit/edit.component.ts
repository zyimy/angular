import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarea } from 'src/app/modelo/Tarea';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  tarea:Tarea=new Tarea();
  constructor(private router:Router,private service:ServiceService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar(){
    let id = localStorage.getItem("id");
    this.service.getTareasId(+id!)
    .subscribe(data=>{
      this.tarea = data;
    })
  }

  Actualizar(tarea:Tarea){
    this.service.updatePersona(tarea)
    .subscribe(data=>{
      this.tarea = data;
      alert("Se actualiso con exito");
      this.router.navigate(["listar"]);
    })
  }

}

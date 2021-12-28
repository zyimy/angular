import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Tarea } from 'src/app/modelo/Tarea';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  tarea:Tarea= new Tarea();
  constructor(private router:Router,private service:ServiceService) { }


  ngOnInit(): void {
  }

  Guardar(){
    this.service.createTarea(this.tarea)
    .subscribe(data=>{
      alert("Tarea agregada con exito");
      this.router.navigate(["listar"]);
    })
  }

}

import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { Tarea } from '../modelo/Tarea';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

    
  constructor(private http:HttpClient) { }
    Url= 'https://apiservicesspri.herokuapp.com/tareas';

    getTareas(){
      return this.http.get<Tarea[]>(this.Url);
    }

    createTarea(tarea:Tarea){
      return this.http.post<Tarea>(this.Url,tarea);
    }

    getTareasId(id: number){
      return this.http.get<Tarea>(this.Url+"/"+id);
    }

    updatePersona(tarea:Tarea){
      return this.http.put<Tarea>(this.Url+"/"+tarea.id,tarea);
    }

    eliminar(id:number){
      return this.http.delete<Tarea>(this.Url+"/"+id);
    }
}

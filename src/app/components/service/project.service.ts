import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs'; // Importa Observable desde 'rxjs'
import { Project } from '../models/project';
import { global } from "./global";
import { Params } from '@angular/router';

@Injectable({
  providedIn: 'root' // Puedes proporcionar providedIn para que Angular lo inyecte automáticamente
})
export class ProjectService {
  public url: string;

  constructor(private _http: HttpClient) {
    this.url = global.url;
  }

  testService() { // Cambia 'testtService' a 'testService'
    return 'Probando el Servicio de Angular';
  }

  saveProject(project:Project): Observable<any>{
    let params =JSON.stringify(project);
    let headers = new HttpHeaders().set('Content-Type','application/json');

    return this._http.post(this.url+'save-project',params,{headers:headers});

  }
  getProjects(): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.get(this.url + 'projects', { headers: headers });
  }
  
  getProject(id): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.get(this.url+'project/'+id,{headers:headers});
  }

  deleteProject(id): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.delete(this.url+'deleteproject/'+id,{headers:headers});
  }
  updateProject(project): Observable<any>{
		let params = JSON.stringify(project);
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.put(this.url+'projectsUpdate/'+project._id, params, {headers: headers});
	}

}

import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project';
import { ProjectService } from '../service/project.service';
import { global } from '../service/global';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers:[ProjectService]
})
export class ProjectsComponent implements OnInit {
  public projects:Project[];
  public url:string;

  constructor(
    private _projectService:ProjectService
  ){
    this.url = global.url;
  }

  ngOnInit() {
    this.getProjects();
    
  }

  getProjects(){
    this._projectService.getProjects().subscribe(
      response =>{
        if(response.projects){
          this.projects = response.projects;  
        }

      },
      error =>{

        console.log(<any>error);
      }
    )
  }

}

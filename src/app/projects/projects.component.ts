import { Component, OnInit } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[]=[
    {
      title: 'BUS Management System',
      technologies: 'Angular, .NET CORE',
      description: [
        'Worked as an Angular intern',
        'Understand the Components, Services, Interfaces and Workflow of Angular Application',
      ],
    }
  ]

  ngOnInit(): void {
    
  }

}

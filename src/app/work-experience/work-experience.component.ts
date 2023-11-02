import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../models/models';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  workExperience:WorkExperience[]=[
    {
      role:'Software Developer',
      company: 'Softosol',
      duration:'Jul 2023 - Sep 2023',
      description: [
        'Worked with multiple teams to develop desktop and web applications',
        'worked on different technologies such as (Dotnet, Angular)',
      ]
    }
  ]
  ngOnInit(): void {
  
}
}

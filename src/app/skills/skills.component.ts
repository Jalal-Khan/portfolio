import { Component, OnInit } from '@angular/core';
import { Skills } from '../models/models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills:Skills[]=[
    {
      name: 'HTML, CSS',
      level: 'intermidiate',
      rating: 70,
    },
    {
      name: 'ASP.NET Core, EF Core',
      level: 'beginner',
      rating: 40,
    },
    {
      name: 'Angular',
      level: 'beginner',
      rating: 50,
    },
    {
      name: 'Git, Github',
      level: 'Intermidiate',
      rating: 80,
    },
  ]


  ngOnInit(): void {
    
  }

}

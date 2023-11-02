import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educationList:Education[]=[
    {
      institute: 'The Pioneer Group of Schools',
      course: 'SSC',
      duration: '2015-2017',
      score: '67%'
    },
    {
      institute: 'The Orbit Group of Colleges',
      course: 'FSc',
      duration: '2017-2019',
      score: '67%'
    },
    {
      institute: 'International Islamic University, Islamabad',
      course: 'BS',
      duration: '2019-2023',
      score: '67%'
    },
  ]
  constructor(){}
ngOnInit():void{}
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {

  myData: string[][]=[
    ['Name', 'Jalal Haidar'],
    ['DOB', '29/12/1999'],
    ['Work Exp', '3 Months'],
    ['Education', 'BSSE (2023)' ],
    ['Interests', 'Cricket'],
  ];

  aboutMe:string[]=[
    'Hi! I am a Software Engineer with 3 months of experiencein software industry.',
    'Worked in Softosol on angular project as an angular internee.',
    'Delivered all tasks within deadlines. Always eager to learn new technologies.',
    'Currently, working as angular developer',
  ];
  ngOnInit(): void {
    
  }

}

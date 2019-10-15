import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'resume';
  name = 'Jeremy Plott';
  address = '111 fake address';
  phone = '555-555-5555';
  email = 'email@email.gov'
  job1 = 'Sears';
  job2 = 'JewelCraft Inc.';
  job3 = 'NKU';
  j1t = '2015-2016';
  j2t = '2016-2017';
  j3t = '2018-2019';
  school1 = 'Northern Kentucky University';
  school2 = 'Pulse College (DIT)';
  degree1 = 'BFA Music Composition';
  degree2 = 'MA Scoring for Film & Visual Media';
  tech = [
    "Git/GitHub", "SQL", "C#",
    "EF", "MVC", "WebAPI",
    "HTML", "JS", "CSS"
  ];
  jobs = [
    { company: "Sears", title: "Backroom Lead", duration: "1.5yr"},
    { company: "JewelCraft Inc.", title: "Repair Dept. Bench Jeweler", duration: "1yr"},
    { company: "NKU", title: "Adjunct Professor", duration: "1yr"}
  ]
  education = [
    {school: "Northern Kentucky University", degree: "BFA Music Composition"},
    {school: "Pulse College (DIT)", degree: "MA Scoring for Film & Visual Media"}
  ]
}

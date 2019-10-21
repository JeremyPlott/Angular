import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-cv2';
  name = "Jeremy Plott";
  street = "0000 Address St.";
  city = "Cincinnati";
  state = "OH";
  zip = "45211";
  phone = "555-555-5555";
}

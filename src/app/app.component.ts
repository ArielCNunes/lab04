import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListcomponentComponent } from './listcomponent/listcomponent.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListcomponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title:string = 'data-binding-lab';

  // Increase count on click
  timesClicked:number = 0;
  onClick() {
    this.timesClicked++;
  }

  // Hide h4 on double click
  hidden:boolean = false;
  imgDoubleClicked() {
    if (this.hidden === false) {
      this.hidden = true;
    } else {
      this.hidden = false;
    }
  }
}

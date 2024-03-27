import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JobBoxComponent } from './job-box/job-box.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JobBoxComponent, MatSlideToggleModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Jobs Board';
}

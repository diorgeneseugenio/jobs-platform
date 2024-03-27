import { Component } from '@angular/core';
import { Job } from '../../types/job';
import { CommonModule, NgFor } from '@angular/common';
import { mockedJobs } from '../../mocks/jobs';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-job-box',
  standalone: true,
  imports: [NgFor, MatChipsModule],
  templateUrl: './job-box.component.html',
  styleUrl: './job-box.component.css',
})
export class JobBoxComponent {
  jobs: Job[] = mockedJobs;
}

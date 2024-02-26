import { Component, OnInit, inject, signal } from '@angular/core';
import { WaitlistComponent } from '../../components/waitlist/waitlist.component';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [WaitlistComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private dataService = inject(DataService);
  projects: any[] = [];

  ngOnInit(): void {
    this.projects = this.dataService.getProjects();
  }
}

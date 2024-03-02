import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { StackComponent } from '../../components/stack/stack.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ CommonModule, StackComponent],
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

import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-stack',
  standalone: true,
  imports: [],
  templateUrl: './stack.component.html',
  styleUrl: './stack.component.scss'
})
export class StackPageComponent {

  private dataService = inject(DataService);
  projects: any[] = [];

  ngOnInit(): void {
    this.projects = this.dataService.getProjects();
  }
}

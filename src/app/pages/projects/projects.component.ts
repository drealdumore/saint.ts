import { Component, Input, inject, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  @Input() id = '';
  project: any

  private titleService = inject(Title);
  private dataService = inject(DataService);


  ngOnInit(): void {
    this.titleService.setTitle(this.id);
    this.project = this.dataService.getProjectById(this.id);
  }


}

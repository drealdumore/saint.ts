import { Component, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  @Input() id = '';

  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle(this.id);
  }
}

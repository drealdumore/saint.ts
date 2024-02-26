import { Injectable, signal } from '@angular/core';
import { data } from '../data';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  projects = signal(data.projects);

  getProjects() {
    return this.projects();
  }

  getProjectById(projectId: string) {
    return this.projects().find((project) => project.id === projectId);
  }
}

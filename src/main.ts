import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    importProvidersFrom(BrowserModule),
    provideRouter(
      [
        {
          path: '',
          title: 'Saint - Angular Dev',
          loadComponent: () =>
            import('./app/pages/home/home.component').then(
              (c) => c.HomeComponent
            ),
        },
        {
          path: 'bookmarks',
          title: 'Bookmarks',
          loadComponent: () =>
            import('./app/pages/bookmarks/bookmarks.component').then(
              (c) => c.BookmarksComponent
            ),
        },
        {
          path: 'about',
          title: 'About me | Saint - Angular Dev',
          loadComponent: () =>
            import('./app/pages/about/about.component').then(
              (c) => c.AboutComponent
            ),
        },
        {
          path: 'archive',
          title: 'Archive',
          loadComponent: () =>
            import('./app/pages/archive/archive.component').then(
              (c) => c.ArchiveComponent
            ),
        },

        {
          path: 'stack',
          title: 'Stack | Saint - Angular Dev',
          loadComponent: () =>
            import('./app/pages/stack/stack.component').then(
              (c) => c.StackPageComponent
            ),
        },
        {
          path: 'project/:id',
          loadComponent: () =>
            import('./app/pages/projects/projects.component').then(
              (c) => c.ProjectsComponent
            ),
        },

        {
          path: '',
          redirectTo: '/',
          pathMatch: 'full',
        },
      ],
      withComponentInputBinding()
    ),
  ],
}).catch((err) => console.error(err));

import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideRouter, withComponentInputBinding } from '@angular/router';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    importProvidersFrom(
      BrowserModule,
      AngularFireModule,
      AngularFireStorageModule,
      AngularFireDatabaseModule,
      provideFirebaseApp(() =>
        initializeApp({
          projectId: 'saint-portfolio',
          appId: '1:632662404032:web:44148c4de12fc44e5c3625',
          storageBucket: 'saint-portfolio.appspot.com',
          apiKey: 'AIzaSyAVWmvV0PuCbf-Kdv4hbwgjxQL-noHN-54',
          authDomain: 'saint-portfolio.firebaseapp.com',
          messagingSenderId: '632662404032',
        })
      )
    ),
    importProvidersFrom(provideDatabase(() => getDatabase())),
    provideRouter(
      [
        {
          path: 'home',
          title: 'Saint | Angular Dev',
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
          title: 'About',
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
          title: 'Stack',
          loadComponent: () =>
            import('./app/pages/stack/stack.component').then(
              (c) => c.StackComponent
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
          redirectTo: '/home',
          pathMatch: 'full',
        },
      ],
      withComponentInputBinding()
    ),
  ],
}).catch((err) => console.error(err));

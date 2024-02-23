import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    title: 'Saint | Angular Dev',
    loadComponent: () =>
      import('./pages/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'bookmarks',
    title: 'Bookmarks',
    loadComponent: () =>
      import('./pages/bookmarks/bookmarks.component').then(
        (c) => c.BookmarksComponent
      ),
  },
  {
    path: 'about',
    title: 'About',
    loadComponent: () =>
      import('./pages/about/about.component').then(
        (c) => c.AboutComponent
      ),
  },
  {
    path: 'archive',
    title: 'Archive',
    loadComponent: () =>
      import('./pages/archive/archive.component').then(
        (c) => c.ArchiveComponent
      ),
  },
  {
    path: 'stack',
    title: 'Stack',
    loadComponent: () =>
      import('./pages/stack/stack.component').then(
        (c) => c.StackComponent
      ),
  },

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];

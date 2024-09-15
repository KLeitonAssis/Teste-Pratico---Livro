import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

import { HttpClientModule,provideHttpClient,withFetch  } from '@angular/common/http';
import { LivrosService } from './livros.service';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(),LivrosService,importProvidersFrom(HttpClientModule),provideHttpClient(withFetch())]
};

import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http'; // Importe o HttpClientModule
import { importProvidersFrom } from '@angular/core'; // Importe o importProvidersFrom

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom(HttpClientModule) 
  ],
};

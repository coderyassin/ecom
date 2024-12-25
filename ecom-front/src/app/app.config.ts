import {APP_INITIALIZER, ApplicationConfig, importProvidersFrom, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideHttpClient} from '@angular/common/http';
import {initializeKeycloak} from '../keycloak-init';
import {KeycloakAngularModule, KeycloakService} from 'keycloak-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(KeycloakAngularModule),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService]
    }
  ]
};

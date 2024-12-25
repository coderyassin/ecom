import { KeycloakService } from 'keycloak-angular';

export function initializeKeycloak(keycloak: KeycloakService): () => Promise<boolean> {
  return () =>
    keycloak.init({
      config: {
        url: 'http://192.168.218.108:8080',
        realm: 'ecom-realm',
        clientId: 'ecom-client',
      },
      initOptions: {
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html',
        checkLoginIframe: false
      },
      enableBearerInterceptor: true
    });
}

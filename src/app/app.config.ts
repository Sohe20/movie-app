import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { 
  SocialAuthServiceConfig,
  GoogleLoginProvider 
} from '@abacritt/angularx-social-login';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              'YOUR_CLIENT_ID.apps.googleusercontent.com', // جایگزین کن
              {
                oneTapEnabled: false,
                scopes: 'email profile openid'
              }
            )
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ]
};
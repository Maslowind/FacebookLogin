import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DynamiSocialLoginModule,AuthServiceConfig, GoogleLoginProvider,FacebookLoginProvider,LinkedinLoginProvider} from 'ng-dynami-social-login';
/*import {SocialLoginModule,AuthServiceConfig, GoogleLoginProvider,FacebookLoginProvider,LinkedinLoginProvider} from 'ng4-social-login';

const config = new AuthServiceConfig([
  {
    id:GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('404859751108-vfr28h3l9dju1fovr0j4m99dn3flig22.apps.googleusercontent.com')

  } ,
  {
    id:FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('984923305039531')
  },
  {
    id:LinkedinLoginProvider.PROVIDER_ID,
    provider: new LinkedinLoginProvider('86jtahfjm8hfok')
  }


],false)

export function provideConfig()
{
  return config;
}*/
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
         {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("984923305039531")
        },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("404859751108-vfr28h3l9dju1fovr0j4m99dn3flig22.apps.googleusercontent.com")
        }
         ,
          {
            id: LinkedinLoginProvider.PROVIDER_ID,
            provider: new LinkedinLoginProvider("86jtahfjm8hfok")
          },
      ]
  );
  return config;
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   // SocialLoginModule
   DynamiSocialLoginModule
  ],
  providers: [
   // {provide: AuthServiceConfig,useFactory: provideConfig}
   {
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

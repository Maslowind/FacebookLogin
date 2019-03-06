/*import { Component } from '@angular/core';
import {AuthService,SocialUser,GoogleLoginProvider,FacebookLoginProvider,LinkedinLoginProvider} from 'ng-dynami-social-login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SocialNetworkDemo';
  public user: any=SocialUser;
  constructor(private socialAuthService: AuthService){}
 facebookLogin()
 {
   this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then((userData)=>{this.user=userData;});
 }
 googleLogin()
 {
   this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then((userData)=>{this.user=userData;});
 }
 LinkedinLogin()
 {
   this.socialAuthService.signIn(LinkedinLoginProvider.PROVIDER_ID).then((userData)=>{this.user=userData;});
 }
}*/
import { Component, OnInit } from '@angular/core';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider, LinkedinLoginProvider } from 'ng-dynami-social-login';
 
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public user: any;
  constructor(private socialAuthService: AuthService) { }
 
  ngOnInit() {
  }
  facebookLogin()
 {
   this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then((userData)=>{this.user=userData;});
 }
 googleLogin()
 {
   this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then((userData)=>{console.log(userData);});
 }
 LinkedinLogin()
 {
   this.socialAuthService.signIn(LinkedinLoginProvider.PROVIDER_ID).then((userData)=>{console.log(userData);});
 }
  /*public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    if(socialPlatform == "facebook"){
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }else if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    } else if (socialPlatform == "linkedin") {
      socialPlatformProvider = LinkedinLoginProvider.PROVIDER_ID;
    }
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
 
        console.log(userData);
 
            
      }
    );
  }*/
 
}
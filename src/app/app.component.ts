import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private admobFree: AdMobFree,
    private screenOrientation: ScreenOrientation
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.showBannerAd();
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
       this.screenOrientation.unlock();
    });
  }

  async showBannerAd() {
    const bannerConfig: AdMobFreeBannerConfig = {
      id: 'ca-app-pub-1421532148443823/2493919758',
      autoShow: true,
      isTesting: false
    };
    this.admobFree.banner.config(bannerConfig);
    try {
      const result = await this.admobFree.banner.prepare();
      console.log(result);
    } catch (e) {
      console.error(e);
    }
  }
}

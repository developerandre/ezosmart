import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { IonicApp, IonicModule } from "ionic-angular";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { TabsComponent } from "./tabs/tabs.component";
import { ActivityComponent } from "./activity/activity.component";
import { BuyComponent } from "./buy/buy.component";
import { MapComponent } from "./map/map.component";
import { LoginComponent } from "./login/login.component";
import { ChatComponent } from "./chat/chat.component";
import { SignupComponent } from "./signup/signup.component";
import { AboutComponent } from "./about/about.component";
import { DataService } from "./data.service";
import { FloozComponent } from "./flooz/flooz.component";
import { TmoneyComponent } from "./tmoney/tmoney.component";
import { PaypiamComponent } from "./paypiam/paypiam.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TabsComponent,
    ActivityComponent,
    BuyComponent,
    MapComponent,
    LoginComponent,
    ChatComponent,
    SignupComponent,
    AboutComponent,
    FloozComponent,
    TmoneyComponent,
    PaypiamComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(AppComponent),
    FormsModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  providers: [DataService],
  entryComponents: [
    AppComponent,
    HomeComponent,
    TabsComponent,
    ActivityComponent,
    BuyComponent,
    MapComponent,
    LoginComponent,
    ChatComponent,
    SignupComponent,
    AboutComponent,
    FloozComponent,
    TmoneyComponent,
    PaypiamComponent
  ]
})
export class AppModule {}

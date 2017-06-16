import { ChatComponent } from "./chat/chat.component";
import { TabsComponent } from "./tabs/tabs.component";
import { Component, ViewChild } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { Nav } from "ionic-angular";
import { AboutComponent } from "./about/about.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @ViewChild("content") nav: Nav;
  rootPage = HomeComponent;
  constructor() {}
  openPage(page: string) {
    if (page == "Board") this.nav.setRoot(TabsComponent);
    else if (page == "Chat") this.nav.setRoot(ChatComponent);
    else if (page == "About") this.nav.setRoot(AboutComponent);
  }
}

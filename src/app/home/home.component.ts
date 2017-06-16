import { Component, OnInit } from "@angular/core";
import { NavController } from "ionic-angular";
import { LoginComponent } from "../login/login.component";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor(public navCtrl: NavController) {}

  ngOnInit() {}

  skip() {
    this.navCtrl.setRoot(LoginComponent);
  }
}

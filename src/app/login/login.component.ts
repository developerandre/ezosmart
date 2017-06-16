import { Component, OnInit } from "@angular/core";
import { NavController, MenuController, NavParams } from "ionic-angular";
import { TabsComponent } from "../tabs/tabs.component";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { DataService } from "../data.service";
import { SignupComponent } from "../signup/signup.component";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  error: string;
  loginForm: FormGroup;
  logoWidth: number;
  logoHeight: number;
  logoRadius: number;
  constructor(
    private fb: FormBuilder,
    public data: DataService,
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public navParams: NavParams
  ) {
    this.logoWidth = 95;
    this.logoHeight = 50;
    this.logoRadius = Math.floor(this.logoWidth / 2);
    this.loginForm = fb.group({
      phone: ["", [Validators.required, Validators.pattern("^[0-9 -_]{6,}$")]],
      password: ["", [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit() {}

  onSubmited() {
    if (this.loginForm.valid) {
      this.data.login(this.loginForm.value).subscribe(
        (info: any) => {
          this.navCtrl.setRoot(TabsComponent);
        },
        () => {
          this.error = "telephone ou mot de passe incorrect";
          this.navCtrl.setRoot(TabsComponent);
        }
      );
    }
  }
  onRegister() {
    this.navCtrl.setRoot(SignupComponent);
  }
}

import { TabsComponent } from "./../tabs/tabs.component";
import { LoginComponent } from "./../login/login.component";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { DataService } from "../data.service";
import { NavController } from "ionic-angular";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"]
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup;
  logoWidth: number;
  logoHeight: number;
  error: string = "";

  constructor(
    public data: DataService,
    private fb: FormBuilder,
    public navCtrl: NavController
  ) {
    this.logoWidth = 100;
    this.logoHeight = 50;
    this.registerForm = fb.group({
      firstName: ["", [Validators.required, Validators.minLength(3)]],
      lastName: ["", [Validators.required, Validators.minLength(3)]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      email: [""],
      phone: [
        "",
        [
          Validators.required,
          Validators.minLength(2),
          Validators.pattern("^[0-9 ]+$")
        ]
      ],
      occupation: ["", [Validators.required, Validators.minLength(3)]],
      country: ["", [Validators.required, Validators.minLength(2)]],
      region: ["", [Validators.required, Validators.minLength(2)]],
      city: ["", [Validators.required, Validators.minLength(2)]],
      confirmation: ["", [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit() {}
  goToLogin() {
    this.navCtrl.setRoot(LoginComponent);
  }
  onSubmited() {
    if (this.registerForm.valid) {
      this.data.register(this.registerForm.value).subscribe(
        () => {
          this.navCtrl.setRoot(TabsComponent);
        },
        () => {
          this.error = "une erreur s'est produite,veuillez réessayer";
          // this.navCtrl.setRoot(LoginPage);
        }
      );
    }
  }
}

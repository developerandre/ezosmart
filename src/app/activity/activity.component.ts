import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-activity",
  templateUrl: "./activity.component.html",
  styleUrls: ["./activity.component.scss"]
})
export class ActivityComponent implements OnInit {
  data: any;
  constructor() {}

  ngOnInit() {}
  ionViewDidLoad() {
    this.data = {
      temp: {
        soleil: "32.9°C",
        chaleur: "43°C"
      },
      batterie: "13.2 V",
      percent: "100%",
      date: new Date(),
      total: "4jrs",
      used: "8h",
      id: "MSEPM0010-12 0.45KVA"
    };
  }
}

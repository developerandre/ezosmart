import { Component, OnInit } from "@angular/core";
import { ActivityComponent } from "../activity/activity.component";
import { BuyComponent } from "../buy/buy.component";
import { MapComponent } from "../map/map.component";

@Component({
  selector: "app-tabs",
  templateUrl: "./tabs.component.html",
  styleUrls: ["./tabs.component.scss"]
})
export class TabsComponent implements OnInit {
  root1: any = ActivityComponent;
  root2: any = BuyComponent;
  root3: any = MapComponent;
  constructor() {}

  ngOnInit() {}
}

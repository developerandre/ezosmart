import { DataService } from "./../data.service";
import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
declare var google: any;

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.scss"]
})
export class MapComponent implements OnInit {
  @ViewChild("mapCanvas") mapElement: ElementRef;

  constructor(
    public data: DataService,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}

  ngOnInit() {}
  ionViewDidLoad() {
    this.data.getMap().subscribe((mapData: any) => {
      let mapEle = this.mapElement.nativeElement;

      let map = new google.maps.Map(mapEle, {
        center: mapData.find((d: any) => d.center),
        zoom: 16
      });

      mapData.forEach((markerData: any) => {
        let infoWindow = new google.maps.InfoWindow({
          content: `<h5>${markerData.name}</h5>`
        });

        let marker = new google.maps.Marker({
          position: markerData,
          map: map,
          title: markerData.name
        });

        marker.addListener("click", () => {
          infoWindow.open(map, marker);
        });
      });

      google.maps.event.addListenerOnce(map, "idle", () => {
        mapEle.classList.add("show-map");
      });
    });
  }
}

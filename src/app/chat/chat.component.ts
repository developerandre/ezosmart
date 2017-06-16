import { Component, OnInit } from "@angular/core";
import { NavParams, NavController } from "ionic-angular";
import { DataService } from "../data.service";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.scss"]
})
export class ChatComponent implements OnInit {
  texte: string = "";
  messages: Array<any>;
  yourself: any = {};
  constructor(
    public data: DataService,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}

  ngOnInit() {}
  sendMessage() {
    if (this.texte) {
      this.data.sendMessage({
        content: this.texte,
        date: new Date(),
        author: this.yourself.firstname + " " + this.yourself.lastName,
        phone: this.yourself.phone
      });
      this.messages.push({
        me: true,
        content: this.texte,
        date: new Date()
      });
      this.texte = "";
    }
  }
  ionViewDidLoad() {
    this.data
      .getMessages(this.yourself.phone)
      .subscribe((messages: Array<any>) => {
        this.messages = messages;
      });
    this.messages = [
      { me: true, content: "contenu 1", date: new Date() },
      { me: true, content: "contenu 1", date: new Date() },
      { me: false, content: "contenu 1", date: new Date() },
      { me: true, content: "contenu 1", date: new Date() },
      { me: false, content: "contenu 1", date: new Date() },
      { me: false, content: "contenu 1", date: new Date() }
    ];
  }
}

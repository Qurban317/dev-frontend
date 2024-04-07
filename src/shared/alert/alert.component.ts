import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Router } from "@angular/router";

@Component({
  selector: "app-alert",
  templateUrl: "./alert.component.html",
  styleUrls: ["./alert.component.scss"],
})
export class AlertComponent implements OnInit {
  public title!: string;
  public message!: string;
  public description!: string;

  constructor(
    public dialogref: MatDialogRef<AlertComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router
  ) {}

  ngOnInit() {
    this.title = this.data.title;
    this.message = this.data.message;
    this.description = this.data.description;
  }
}

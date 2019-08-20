import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Bank } from "src/app/models/Bank";

@Component({
  selector: "app-bank-details-daialog",
  templateUrl: "./bank-details-daialog.component.html",
  styleUrls: ["./bank-details-daialog.component.css"]
})
export class BankDetailsDaialogComponent {
  constructor(
    public dialogRef: MatDialogRef<BankDetailsDaialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Bank
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
}

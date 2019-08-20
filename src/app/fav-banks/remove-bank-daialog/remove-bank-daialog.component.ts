import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Bank } from "src/app/models/Bank";
@Component({
  selector: "app-remove-bank-daialog",
  templateUrl: "./remove-bank-daialog.component.html",
  styleUrls: ["./remove-bank-daialog.component.css"]
})
export class RemoveBankDaialogComponent {
  constructor(
    public dialogRef: MatDialogRef<RemoveBankDaialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Bank
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
}

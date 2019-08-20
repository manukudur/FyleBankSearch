import { Component, OnInit, ViewChild } from "@angular/core";
import { Bank } from "../models/Bank";
import {
  MatTableDataSource,
  MatPaginator,
  MatSort,
  MatDialog,
  MatSnackBar
} from "@angular/material";
import { BankService } from "../bank.service";
import { RemoveBankDaialogComponent } from "./remove-bank-daialog/remove-bank-daialog.component";

@Component({
  selector: "app-fav-banks",
  templateUrl: "./fav-banks.component.html",
  styleUrls: ["./fav-banks.component.css"]
})
export class FavBanksComponent implements OnInit {
  isEmpty: boolean;
  displayedColumns: string[] = [
    "ifsc",
    "bank_name",
    // "bank_id",
    "branch",
    "address"
    // "city",
    // "district",
    // "state"
  ];
  dataSource: MatTableDataSource<Bank>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  localBanks: Bank[] = [];
  constructor(
    private bankService: BankService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.loadBanksInfo();
    this.checkIsEmpty();
  }
  checkIsEmpty() {
    if (this.localBanks.length === 0) {
      this.isEmpty = true;
    } else {
      this.isEmpty = false;
    }
  }
  loadBanksInfo() {
    this.localBanks = this.bankService.getLocalFavouriteBanks();
    this.dataSource = new MatTableDataSource(this.localBanks);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  rowClick(rowData): void {
    const dialogRef = this.dialog.open(RemoveBankDaialogComponent, {
      data: rowData
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.bankService.removeBankFromLocalFavourite(result);
        this.openSnackBar();
        this.loadBanksInfo();
        this.checkIsEmpty();
      }
    });
  }
  openSnackBar() {
    this._snackBar.open("Bank is removed from Favourite", "Close", {
      duration: 2000
    });
  }
}

import { Component, OnInit, ViewChild, OnDestroy } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Subscription } from "rxjs/internal/Subscription";

import { BankService } from "../bank.service";
import { Bank } from "../models/Bank";
import { BankDetailsDaialogComponent } from "./bank-details-daialog/bank-details-daialog.component";

@Component({
  selector: "app-search-banks",
  templateUrl: "./search-banks.component.html",
  styleUrls: ["./search-banks.component.css"]
})
export class SearchBanksComponent implements OnInit, OnDestroy {
  isLoading: boolean = true;
  subscription: Subscription;
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
  locations: string[] = [
    "Mumbai",
    "Bangalore",
    "Tumkur",
    "Mysore",
    "Ramanagara",
    "Magadi",
    "Kudur",
    "Nelamangala"
  ];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private bankService: BankService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.loadBanksInfo();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  loadBanksInfo() {
    this.subscription = this.bankService.getBanks().subscribe(bankData => {
      // Assign the data to the data source for the table to render
      this.dataSource = new MatTableDataSource(bankData);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.isLoading = false;
    });
  }

  onChangeLocation(changedLocation: string) {
    this.isLoading = true;
    this.bankService.onChangeLocation(changedLocation);
    this.loadBanksInfo();
  }

  rowClick(rowData): void {
    const dialogRef = this.dialog.open(BankDetailsDaialogComponent, {
      data: rowData
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.bankService.setLocalFavouriteBanks(result);
        this.openSnackBar();
      }
    });
  }
  openSnackBar() {
    this._snackBar.open("Bank is added to Favourite", "Close", {
      duration: 2000
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";

import { BankService } from "../bank.service";
import { Bank } from "../models/Bank";

@Component({
  selector: "app-search-banks",
  templateUrl: "./search-banks.component.html",
  styleUrls: ["./search-banks.component.css"]
})
export class SearchBanksComponent implements OnInit {
  isLoading: boolean = true;
  displayedColumns: string[] = [
    "ifsc",
    "bank_name",
    "bank_id",
    "branch",
    "address",
    "city",
    "district",
    "state"
  ];
  dataSource: MatTableDataSource<Bank>;
  locations: string[] = [
    "Mumbai",
    "Bangalore",
    "Tumkur",
    "Mysore",
    "Ramanagara",
    "Magadi",
    "Kudur"
  ];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private bankService: BankService) {}

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
    this.bankService.getBanks().subscribe(bankData => {
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
  rowClick(row) {
    console.log(row);
  }
}

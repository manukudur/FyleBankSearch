import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Bank } from "./models/Bank";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class BankService {
  private location: string = "tumkur";
  constructor(private http: HttpClient) {
    if (!localStorage.getItem("favouriteBanks")) {
      localStorage.setItem("favouriteBanks", JSON.stringify([]));
    }
  }

  getBanks(): Observable<Bank[]> {
    return this.http.get<Bank[]>(
      `https://vast-shore-74260.herokuapp.com/banks?city=${this.location.toUpperCase()}`
    );
  }

  onChangeLocation(location: string): Observable<Bank[]> {
    this.location = location;
    return this.getBanks();
  }

  getLocalFavouriteBanks(): Bank[] {
    return JSON.parse(localStorage.getItem("favouriteBanks"));
  }

  removeBankFromLocalFavourite(bank) {
    let value: Bank[] = this.getLocalFavouriteBanks();
    const result = [];
    const map = new Map();
    for (const item of value) {
      if (!map.has(item.ifsc) && item.ifsc !== bank.ifsc) {
        map.set(item.ifsc, true);
        result.push(item);
      }
    }
    localStorage.setItem("favouriteBanks", JSON.stringify(result));
  }

  setLocalFavouriteBanks(bank) {
    let value: Bank[] = this.getLocalFavouriteBanks();
    value.push(bank);
    const result = [];
    const map = new Map();
    for (const item of value) {
      if (!map.has(item.ifsc)) {
        map.set(item.ifsc, true);
        result.push(item);
      }
    }
    localStorage.setItem("favouriteBanks", JSON.stringify(result));
  }
}

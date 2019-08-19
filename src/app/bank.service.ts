import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Bank } from "./models/Bank";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class BankService {
  private location: string = "kudur";
  constructor(private http: HttpClient) {}

  getBanks(): Observable<Bank[]> {
    return this.http.get<Bank[]>(
      `https://vast-shore-74260.herokuapp.com/banks?city=${this.location.toUpperCase()}`
    );
  }
  onChangeLocation(location: string): Observable<Bank[]> {
    this.location = location;
    return this.getBanks();
  }
}

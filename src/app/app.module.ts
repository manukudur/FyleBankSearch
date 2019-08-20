import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { LayoutModule } from "@angular/cdk/layout";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { MatTableModule } from "@angular/material/table";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatInputModule } from "@angular/material";
import { MatSortModule } from "@angular/material/sort";
import { HttpClientModule } from "@angular/common/http";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSelectModule } from "@angular/material/select";
import { MatDialogModule } from "@angular/material/dialog";
import { FormsModule } from "@angular/forms";
import { MatSnackBarModule } from "@angular/material/snack-bar";

import { AppComponent } from "./app.component";
import { SearchBanksComponent } from "./search-banks/search-banks.component";
import { FavBanksComponent } from "./fav-banks/fav-banks.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { BankDetailsDaialogComponent } from "./search-banks/bank-details-daialog/bank-details-daialog.component";
import { RemoveBankDaialogComponent } from "./fav-banks/remove-bank-daialog/remove-bank-daialog.component";

@NgModule({
  declarations: [
    AppComponent,
    SearchBanksComponent,
    FavBanksComponent,
    NavBarComponent,
    PageNotFoundComponent,
    BankDetailsDaialogComponent,
    RemoveBankDaialogComponent
  ],
  entryComponents: [BankDetailsDaialogComponent, RemoveBankDaialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatSortModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatDialogModule,
    FormsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

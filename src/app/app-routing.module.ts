import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SearchBanksComponent } from "./search-banks/search-banks.component";
import { FavBanksComponent } from "./fav-banks/fav-banks.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
  { path: "", redirectTo: "banks", pathMatch: "full" },
  { path: "banks", component: SearchBanksComponent },
  { path: "fav-banks", component: FavBanksComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

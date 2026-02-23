import { Component } from '@angular/core';
import { CountryList } from "../../components/country-list/country-list";

@Component({
  selector: 'by-region-page',
  imports: [CountryList],
  templateUrl: './byRegionPage.html',
})
export class ByRegionPage { }

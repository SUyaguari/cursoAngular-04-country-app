import { Component } from '@angular/core';
import { SearchInput } from "../../components/search-input/search-input";
import { CountryList } from "../../components/country-list/country-list";

@Component({
  selector: 'by-country-page',
  imports: [SearchInput, CountryList],
  templateUrl: './byCountryPage.html',
})
export class ByCountryPage { }

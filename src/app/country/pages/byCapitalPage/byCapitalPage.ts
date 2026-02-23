import { Component, inject, signal } from '@angular/core';
import { SearchInput } from "../../components/search-input/search-input";
import { CountryList } from "../../components/country-list/country-list";
import { CountryService } from '../../services/countryService';
import { RESTCountries } from '../../interfaces/rest-countries.interface';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'by-capital-page',
  imports: [SearchInput, CountryList],
  templateUrl: './byCapitalPage.html',
})
export class ByCapitalPage {

  countryService = inject(CountryService);

  // State
  isLoading = signal(false);
  isError = signal<string | null>(null);

  countries = signal<Country[]>([]);

  onSearch(query: string) {

    if (this.isLoading()) return;


    this.isLoading.set(true);
    this.isError.set(null);

    this.countryService.searchByCapital(query).subscribe({
      next: (countries) => {
        this.countries.set(countries);
        this.isLoading.set(false);
      },
      error: (err) => {
        this.isError.set(err);
        this.countries.set([]);
        this.isLoading.set(false);
      },
    },

    )

  }


}

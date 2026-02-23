import { Component, inject, resource, signal } from '@angular/core';
import { SearchInput } from "../../components/search-input/search-input";
import { CountryList } from "../../components/country-list/country-list";
import { CountryService } from '../../services/countryService';
import { RESTCountries } from '../../interfaces/rest-countries.interface';
import { Country } from '../../interfaces/country.interface';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'by-capital-page',
  imports: [SearchInput, CountryList],
  templateUrl: './byCapitalPage.html',
})
export class ByCapitalPage {

  countryService = inject(CountryService);
  query = signal<string>('');

  countryResource = resource({
    params: () => ({ query: this.query() }),
    loader: async({ params }): Promise<Country[]> => {
      if(!params.query) return [];

      return await firstValueFrom(
        this.countryService.searchByCapital(params.query)
      )

    }
  })

}

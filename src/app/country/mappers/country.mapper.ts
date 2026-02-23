import type { Country } from '../interfaces/country.interface';
import type { RESTCountries } from '../interfaces/rest-countries.interface';

export class CountryMapper {

  static mapRESTCountriesToCountry(restCountry: RESTCountries): Country{


    return {
      cca2: restCountry.cca2,
      flag: restCountry.flag,
      flagSvg: restCountry.flags.svg,
      name: restCountry.translations['spa'].official ?? 'No spanish name',
      capital: restCountry.capital.join(', '),
      population: restCountry.population
    }

  }

  static mapRESTCountriesToCountries(items: RESTCountries[]): Country[] {
    return items.map(this.mapRESTCountriesToCountry);
  }

}

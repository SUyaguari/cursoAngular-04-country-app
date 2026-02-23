import { Routes } from "@angular/router";
import { CountryLayout } from "./layouts/countryLayout/countryLayout";
import { ByCapitalPage } from "./pages/byCapitalPage/byCapitalPage";
import { ByCountryPage } from "./pages/byCountryPage/byCountryPage";
import { ByRegionPage } from "./pages/byRegionPage/byRegionPage";
import { CountryPage } from "./pages/country-page/country-page";

export const countryRoutes: Routes = [

  {
    path: '',
    component: CountryLayout,
    children: [
      {
        path: 'by-capital',
        component: ByCapitalPage
      },
      {
        path: 'by-country',
        component: ByCountryPage
      },
      {
        path: 'by/:code',
        component: CountryPage
      },
      {
        path: 'by-region',
        component: ByRegionPage
      },
      {
        path: '**',
        redirectTo: 'by-capital'
      }
    ]
  },

]


export default countryRoutes;

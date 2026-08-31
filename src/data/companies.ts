import { hotelHacienda } from './companies/hotel-hacienda-cocoyoc';
import { edico } from './companies/edico';
import { costaMujeres } from './companies/costa-mujeres';
import { centroNovatec } from './companies/centro-novatec';
import { clubCampestre } from './companies/club-campestre';
import { lomasDeCocoyoc } from './companies/lomas-de-cocoyoc';
import { fomento } from './companies/fomento';
import { cecAcademy } from './companies/cec-academy';
import { sistemasHidraulicos } from './companies/sistemas-hidraulicos';

export const companies = [
  hotelHacienda,
  edico,
  costaMujeres,
  centroNovatec,
  clubCampestre,
  lomasDeCocoyoc,
  fomento,
  cecAcademy,
  sistemasHidraulicos,
];

export const featuredCompanies = companies.slice(0, 4);

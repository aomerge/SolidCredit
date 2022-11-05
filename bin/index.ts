import { Cuotafija }  from '../src/packages/CF/index';
import { CuotaVariable }  from '../src/packages/CV/index';
import { Periodos_de_Gracia } from '../src/packages/PG/index';
const exportcf = new Cuotafija(12, 42, 1000, 3, 11, 2022 );
const exportcv = new CuotaVariable(12, 42, 1000 );
const exppg = new Periodos_de_Gracia(12, 42, 1000, 5);

console.log('hola mundo, loco');
exportcf.table();
exportcv.table();
exppg.table();

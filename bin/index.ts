import { Cuotafija }  from '../src/packages/CF/index';
const exportcv = new Cuotafija(12, 42, 1000, 3, 11, 2022 );

console.log('hola mundo, loco');
console.log(exportcv.cuota);
exportcv.table();

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../src/packages/CF/index");
const exportcv = new index_1.Cuotafija(12, 42, 1000, 3, 11, 2022);
console.log('hola mundo, loco');
console.log(exportcv.cuota);
exportcv.table();

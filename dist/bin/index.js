"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../src/packages/CF/index");
const index_2 = require("../src/packages/CV/index");
const index_3 = require("../src/packages/PG/index");
const index_4 = require("../src/packages/MA/index");
const exportcf = new index_1.Cuotafija(12, 42, 1000, 3, 11, 2022);
const exportcv = new index_2.CuotaVariable(12, 42, 1000);
const exppg = new index_3.Periodos_de_Gracia(12, 42, 1000);
const Metodoamericano = new index_4.MetodoAmericano(12, 42, 1000, 5);
/* exportcf.table();
exportcv.table();
exppg.table(); */
Metodoamericano.table();

import { Cuotafija }  from '../src/packages/CF/index';
import { CuotaVariable }  from '../src/packages/CV/index';
import { Periodos_de_Gracia } from '../src/packages/PG/index';
import { MetodoAmericano } from '../src/packages/MA/index';
import { credit } from '../src/gobal/global';

export class solid extends credit {

    private constructor(
        plazo: number,
        prestamo: number,
        interes: number
    ){
        super(plazo,interes,prestamo);
    };

    static cuotafija ( plazo: number, interes:number, prestamo: number ){
        const cuotafija = Cuotafija.create( plazo, interes, prestamo);
        const data = cuotafija.data();
        return data;
    };
    static cuotavariable ( plazo: number, interes:number, prestamo: number ){
        const cuotavariable = CuotaVariable.create( plazo, interes, prestamo);
        const data = cuotavariable.data();
        return data;
    };
    static PeriodosdeGracia (plazo: number, interes:number, prestamo: number ){
        const PeriodosdeGracia = Periodos_de_Gracia.create( plazo, interes, prestamo);
        const data = PeriodosdeGracia.data();
        return data;
    };
    static metodoAericano( plazo: number, interes:number, prestamo: number ){
        const metodoamericano = MetodoAmericano.create( plazo, interes, prestamo);
        const data = metodoamericano.data();
        return data;
    };
}

const a = solid.cuotavariable(15, 42, 1000);
console.log(a);

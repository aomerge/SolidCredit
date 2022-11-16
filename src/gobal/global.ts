import { creditInt } from './model/credit.model';

export abstract class credit implements creditInt {
  constructor(
    public plazo: number,
    public interes: number,
    public prestamo:number
  ){};

  protected AnualMensual( interes: number, plazo: number ): number {
    const INTERESANUAL:number = interes / 100;
    return Number((Math.pow(INTERESANUAL + 1, 1 / plazo) - 1).toFixed(3));
  }
  protected pagofijo( interes: number, prestamo: number, plazo: number ):number  {
      const a: number = interes * prestamo;
      const c: number = 1 - Math.pow(1 + interes, -plazo);
      const cuota = a / c ;
      
      return cuota ; 
  }
  protected static switch (
    setting: {React:boolean, fecha: boolean}, 
    credit: {genereteReact: any}, 
    data: string[]
    ) {

    switch (true) {
      //case setting.React && setting.fecha:
      case setting.React:
          return credit.genereteReact();

      /* */
      case setting.fecha:
          const date = new Date();
          const fechaS: any = [];

          for (let i: number = 0; i < data[0].length; i++) {
            const day: number = 0o1;
            let month: number = date.getMonth() + 1+ i;

            if(month >= 13){
              month = i- 1;
            }

            const year: number = date.getFullYear();
            const ddmmyyyy: number[] = [day, month, year]
            fechaS.push(ddmmyyyy);
          }

          data.push(fechaS);
          console.log(data);
          break;

      default:
          break;
    }
  }
  
}
  
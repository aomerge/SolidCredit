import { credit } from '../../gobal/global';
export class CuotaVariable extends credit {
    private _No: any = [];
    private _cuota: any = [];
    private _Interes: any = [];
    private _abono: any = [];
    private _saldo: any = [];
    public _data: any = [];

    static instance: CuotaVariable | null = null;
    private constructor(
        public plazo:number  = 12, 
        public interes: number  = 18, 
        public prestamo:number  = 100000,
    ){
        super(plazo,interes,prestamo);
    };
    public data() {
        let interesMensual = this.AnualMensual( this.interes, this.plazo );
        for (let i = 0; i < this.plazo; i++) {
          var no = 1 + i;
          this._No.push({no});
          this._cuota.push({}); 
          this._Interes.push({}); 
          this._abono.push({ abono: Number((this.prestamo / this.plazo).toFixed(2))}); 
          this._saldo.push({}); 
          };
        this._Interes[0] = {interes: this.prestamo * interesMensual};
        this._saldo[0]= {saldo: this.prestamo - this._abono[0].abono}
  
        for (let i:number | string = 1; i < this.plazo; i++){
        this._Interes[i] =  {interes: Number((this._saldo[i-1].saldo *  interesMensual).toFixed(2))  };
        this._saldo[i] =   {saldo: Number((this._saldo[i-1].saldo - this._abono[i].abono).toFixed(2)) };
        }
        this._cuota.forEach((item: { cuota: number; }, i: string | number) =>{
        item.cuota = Number(( this._Interes[i].interes + this._abono[i].abono).toFixed(2));
        });
        this._data.push(this._No,this._cuota,this._Interes,this._abono,this._saldo);
        return this._data;
  
    }
    static create(plazo: number, interes:number, prestamo: number){
        if (CuotaVariable.instance === null) {
            CuotaVariable.instance = new CuotaVariable(plazo, interes, prestamo);
          }
          return CuotaVariable.instance;
    }
}

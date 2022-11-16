import { credit } from '../../gobal/global';

export class Cuotafija extends credit {
    private _No: any = [];
    private _cuota: any = [];
    private _interes: any = [];
    private _abono: any = [];
    private _saldo: any = [];
    public _data: any = [];
    static instance: Cuotafija | null = null;

    private constructor( 
        public plazo:number, 
        public interes: number  = 18, 
        public prestamo:number  = 100000,
        ){
            super(plazo,interes, prestamo)
        };
    public data(){
        let interesMensual = this.AnualMensual( this.interes, this.plazo );

        for (let i = 0; i < this.plazo; i++) {
            let pago: number  = 1 + i;
            let cut = Number((this.pagofijo(interesMensual, this.prestamo, this.plazo)).toFixed(2));
            this._No.push( { pago } );
            this._cuota.push({ cuota: cut } );
            this._interes.push({}); 
            this._abono.push({}); 
            this._saldo.push({});
          }
        
        this._interes[0] = { interes: Number((interesMensual * this.prestamo).toFixed(2)) };
        this._abono[0] = { abono: Number((this._cuota[0].cuota - this._interes[0].interes).toFixed(2)) };
        this._saldo[0] = { saldo: this.prestamo - this._abono[0].abono };          
      
        for (let i = 1; i < this.plazo; i++) {
            this._interes[i] = { interes: Number((this._saldo[i - 1].saldo * interesMensual).toFixed(2)) };
            this._abono[i] = { abono: Number((this._cuota[i].cuota - this._interes[i].interes).toFixed(2)) };
            this._saldo[i] = { saldo: Number((this._saldo[i - 1].saldo - this._abono[i].abono).toFixed(2)) };
        }
        this._data.push( this._No, this._cuota, this._interes, this._abono, this._saldo);
        return this._data;

    }
    static create(plazo: number, interes:number, prestamo: number){
        if (Cuotafija.instance === null) {
            Cuotafija.instance = new Cuotafija(plazo, interes, prestamo);
          }
          return Cuotafija.instance;
    }
    public genereteReact() : void{
        return(
            console.log(this._data)
        );
    }
    public generatejs() : void{
        
    }
}

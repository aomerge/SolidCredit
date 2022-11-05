
export class Cuotafija {
    private No: any = [];
    private cuota: any = [];
    private Interes: any = [];
    private abono: any = [];
    private saldo: any = [];
    public data: any = [];
    constructor( 
        public plazo:number  = 12, 
        public interes: number  = 18, 
        public prestamo:number  = 100000,
        private day: number ,
        private month: number ,
        private year: number 
        ){};
    private AnualMensual( interes: number, plazo: any ): number {
        const INTERESANUAL = interes / 100;
        return Number((Math.pow(INTERESANUAL + 1, 1 / plazo) - 1).toFixed(3));
    }
    private pagofijo( interes: number, prestamo: number, plazo: number ):number  {
        const a = interes * prestamo;
        const c = 1 - Math.pow(1 + interes, -plazo);
        const cuota = a / c ;
        
        return cuota ;
    }    
    public table(): any{
        let interesMensual = this.AnualMensual( this.interes, this.plazo );

        for (let i = 0; i < this.plazo; i++) {
            let pago: number  = 1 + i;
            let cut = Number((this.pagofijo(interesMensual, this.prestamo, this.plazo)).toFixed(2));
            this.No.push( { pago } );
            this.cuota.push({ cuota: cut } );
            this.Interes.push({}); 
            this.abono.push({}); 
            this.saldo.push({});
          }
        
        this.Interes[0] = { interes: Number((interesMensual * this.prestamo).toFixed(2)) };
        this.abono[0] = { abono: Number((this.cuota[0].cuota - this.Interes[0].interes).toFixed(2)) };
        this.saldo[0] = { saldo: this.prestamo - this.abono[0].abono };          
      
        for (let i = 1; i < this.plazo; i++) {
        this.Interes[i] = { interes: Number((this.saldo[i - 1].saldo * interesMensual).toFixed(2)) };
        this.abono[i] = { abono: Number((this.cuota[i].cuota - this.Interes[i].interes).toFixed(2)) };
        this.saldo[i] = { saldo: Number((this.saldo[i - 1].saldo - this.abono[i].abono).toFixed(2)) };
        }
        this.data.push( this.No, this.cuota, this.Interes, this.abono, this.saldo);
        console.log(this.data);
        return this.data;

    }

}


export class MetodoAmericano{
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
        public liquidacion: number = 0
    ){};
    private AnualMensual( interes: number, plazo: any ): number {
        const INTERESANUAL = interes / 100;
        return Number((Math.pow(INTERESANUAL + 1, 1 / plazo) - 1).toFixed(3));
    }
    public table = ()=>{
        let interesMensual = this.AnualMensual( this.interes, this.plazo );

         for (let i = 0; i < this.plazo; i++) {
            var no = 1+i;
            this.No.push({no});
            this.Interes.push({interes: Number((interesMensual * this.prestamo).toFixed(2))}); 
            this.cuota.push({cuota: this.Interes[i].interes}); 
            this.abono.push({abono:  0}); 
            this.saldo.push({saldo: this.prestamo}); 
            }
        for(let i = this.liquidacion; i < this.plazo; i++){
            this.cuota[i] = {cuota: this.saldo[i].saldo + this.Interes[i].interes};
            this.abono[i] = {abono: this.saldo[i].saldo};
            this.saldo[i] = {saldo: this.saldo[i].saldo - this.abono[i].abono};
        }
        for( let i = this.liquidacion + 1 ; i <= this.plazo; i++ ){
             this.Interes[i] = {interes: 0};
             this.abono[i] = {abono: 0};
             this.cuota[i] = {cuota: 0};
        }
        this.data.push( this.No, this.cuota, this.Interes, this.abono, this.saldo);
        console.log( this.data);
        return this.data;
    }
} 
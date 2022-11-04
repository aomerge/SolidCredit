export const AnualMensual = (interes: number, plazo: number) => {
    const INTERES_ANUAL = interes / 100;
    return Number((Math.pow(INTERES_ANUAL + 1, 1 / plazo) - 1).toFixed(3));
  };
  
  export const pagofijo = (interes: number, Prestamo: number, plazo: number, cuota: number) => {
    const a = interes * Prestamo;
    const c = 1 - Math.pow(1 + interes, -plazo);
    return (cuota = a / c);
  };
  
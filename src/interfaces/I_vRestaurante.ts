export interface I_vRestaurante{
    onAgregarComensal(callback: () => void): void;
    reportar({totalCostos, totalDesayuno, totalAlmuerzo, totalAmbos, totalDescuentos, prctDesayuno, prctAlmuerzo, prctAmbos, prctDescuento, prctSinDescuento}: {totalCostos: number, totalDesayuno: number, totalAlmuerzo: number, totalAmbos: number, totalDescuentos: number, prctDesayuno: number, prctAlmuerzo: number, prctAmbos: number, prctDescuento: number, prctSinDescuento: number}): void;
}
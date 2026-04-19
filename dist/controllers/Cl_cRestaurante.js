import Cl_mRestaurante from "../models/Cl_mRestaurante.js";
export default class Cl_cRestaurante {
    mRestaurante = new Cl_mRestaurante();
    vRestaurante;
    cComensal;
    constructor(vistaRestaurante, controladorComensal) {
        this.vRestaurante = vistaRestaurante;
        this.cComensal = controladorComensal;
        this.vRestaurante.onAgregarComensal(() => this.procesarNuevoComensal());
    }
    procesarNuevoComensal() {
        this.cComensal.solicitarComensal((comensal) => {
            if (comensal !== null) {
                this.mRestaurante.procesarComensal(comensal);
                this.vRestaurante.reportar({ totalCostos: this.mRestaurante.acumCostos, totalDesayuno: this.mRestaurante.acumDesayuno, totalAlmuerzo: this.mRestaurante.acumAlmuerzo, totalAmbos: this.mRestaurante.acumAmbos, prctDesayuno: this.mRestaurante.prctDesayuno(), prctAlmuerzo: this.mRestaurante.prctAlmuerzo(), prctAmbos: this.mRestaurante.prctAmbos(), prctDescuento: this.mRestaurante.prctDescuento(), prctSinDescuento: this.mRestaurante.prctSinDescuento() });
            }
        });
    }
}
//# sourceMappingURL=Cl_cRestaurante.js.map
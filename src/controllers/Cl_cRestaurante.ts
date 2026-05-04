import Cl_mRestaurante from "../models/Cl_mRestaurante.js";
import { I_vRestaurante } from "../interfaces/I_vRestaurante.js";
import Cl_cComensal from "../controllers/Cl_cComensal.js";

export default class Cl_cRestaurante{
    private mRestaurante: Cl_mRestaurante = new Cl_mRestaurante();
    private vRestaurante: I_vRestaurante;
    private cComensal: Cl_cComensal;
    constructor(vistaRestaurante: I_vRestaurante, controladorComensal: Cl_cComensal){
        this.vRestaurante = vistaRestaurante;
        this.cComensal = controladorComensal;
        this.vRestaurante.onAgregarComensal(() => this.procesarNuevoComensal());
    }
    private procesarNuevoComensal(): void{
        this.cComensal.solicitarComensal((comensal) => {
            if (comensal !== null){
                this.mRestaurante.procesarComensal(comensal);
                this.vRestaurante.reportar({totalCostos: this.mRestaurante.acumuladorCostos, totalDesayuno: this.mRestaurante.acumuladorDesayuno, totalAlmuerzo: this.mRestaurante.acumuladorAlmuerzo, totalAmbos: this.mRestaurante.acumuladorAmbos, totalDescuentos: this.mRestaurante.acumuladorDescuentos, prctDesayuno: this.mRestaurante.prctDesayuno(), prctAlmuerzo: this.mRestaurante.prctAlmuerzo(), prctAmbos: this.mRestaurante.prctAmbos(), prctDescuento: this.mRestaurante.prctDescuento(), prctSinDescuento: this.mRestaurante.prctSinDescuento()});
            }
        });
    }
}
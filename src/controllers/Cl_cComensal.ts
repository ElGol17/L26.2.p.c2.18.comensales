import { I_vComensal } from "../interfaces/I_vComensal.js";
import Cl_mComensal from "../models/Cl_mComensal.js";
import Cl_mComensalDesayuno from "../models/Cl_mComensalDesayuno.js";
import Cl_mComensalAlmuerzo from "../models/Cl_mComensalAlmuerzo.js";
import Cl_mComensalAmbos from "../models/Cl_mComensalAmbos.js";

export default class Cl_cComensal{
    private vista: I_vComensal;
    private callback!: (comensal: Cl_mComensal | null) => void;
    constructor(vista: I_vComensal){
        this.vista = vista;
        this.vista.onCancelar(() => this.btCancelarOnClick());
        this.vista.onAceptar(() => this.btAceptarOnClick());
    }
    solicitarComensal(callback: (comensal: Cl_mComensal | null) => void): void{
        this.callback = callback;
        this.vista.mostrar();
    }
    private btCancelarOnClick(): void{
        this.callback(null);
        this.vista.ocultar();
    }
    private btAceptarOnClick(): void{
        let comensal;
        let datos = {
            nombre: this.vista.nombre,
            apellido: this.vista.apellido,
            cedula: this.vista.cedula,
            sexo: this.vista.sexo,
            fechaNacimiento: this.vista.fechaNacimiento,
        };
        switch(this.vista.turnoComida){
            case 1:
                comensal = new Cl_mComensalDesayuno(datos);
                break;
            case 2:
                comensal = new Cl_mComensalAlmuerzo(datos);
                break;
            case 3:
                comensal = new Cl_mComensalAmbos(datos);
                break;
        }
        this.callback(comensal);
        this.vista.ocultar();
    }
}
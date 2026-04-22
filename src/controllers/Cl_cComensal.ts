import { I_vComensal } from "../interfaces/I_vComensal.js";
import Cl_mComensal from "../models/Cl_mComensal.js";

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
            turnoComida: this.vista.turnoComida,
        };
        comensal = new Cl_mComensal(datos);
        this.callback(comensal);
        this.vista.ocultar();
    }
}
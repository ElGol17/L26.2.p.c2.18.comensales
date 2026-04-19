import Cl_mComensalDesayuno from "../models/Cl_mComensalDesayuno.js";
import Cl_mComensalAlmuerzo from "../models/Cl_mComensalAlmuerzo.js";
import Cl_mComensalAmbos from "../models/Cl_mComensalAmbos.js";
export default class Cl_cComensal {
    vista;
    callback;
    constructor(vista) {
        this.vista = vista;
        this.vista.onCancelar(() => this.btCancelarOnClick());
        this.vista.onAceptar(() => this.btAceptarOnClick());
    }
    solicitarComensal(callback) {
        this.callback = callback;
        this.vista.mostrar();
    }
    btCancelarOnClick() {
        this.callback(null);
        this.vista.ocultar();
    }
    btAceptarOnClick() {
        let comensal;
        let datos = {
            nombre: this.vista.nombre,
            apellido: this.vista.apellido,
            cedula: this.vista.cedula,
            sexo: this.vista.sexo,
            fechaNacimiento: this.vista.fechaNacimiento,
        };
        switch (this.vista.turnoComida) {
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
//# sourceMappingURL=Cl_cComensal.js.map
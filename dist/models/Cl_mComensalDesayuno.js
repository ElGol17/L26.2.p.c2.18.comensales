import Cl_mComensal from "./Cl_mComensal.js";
export default class Cl_mComensalDesayuno extends Cl_mComensal {
    constructor({ nombre, apellido, cedula, sexo, fechaNacimiento }) {
        super({ nombre, apellido, cedula, sexo, fechaNacimiento, turnoComida: 1, costo: 5 });
    }
    costoFinal() {
        if ((this.edad > 50 && this.sexo === "F") || (this.edad > 60 && this.sexo === "M")) {
            return this._costo * 0.5;
        }
        else {
            return this._costo;
        }
    }
    aplicaDescuento() {
        if ((this.edad > 50 && this.sexo === "F") || (this.edad > 60 && this.sexo === "M")) {
            return true;
        }
        else {
            return false;
        }
    }
}
//# sourceMappingURL=Cl_mComensalDesayuno.js.map
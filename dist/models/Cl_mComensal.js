import Cl_mPersona from "./Cl_mPersona.js";
export default class Cl_mComensal extends Cl_mPersona {
    _turnoComida;
    _costo;
    constructor({ nombre, apellido, cedula, sexo, fechaNacimiento, turnoComida, costo }) {
        super({ nombre, apellido, cedula, sexo, fechaNacimiento });
        this._turnoComida = turnoComida;
        this._costo = costo;
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
    set turnoComida(turnoComida) {
        this._turnoComida = turnoComida;
    }
    get turnoComida() {
        return this._turnoComida;
    }
}
//# sourceMappingURL=Cl_mComensal.js.map
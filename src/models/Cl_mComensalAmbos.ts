import Cl_mComensal from "./Cl_mComensal.js";

export default class Cl_mComensalAmbos extends Cl_mComensal{
    constructor({nombre, apellido, cedula, sexo, fechaNacimiento}:{nombre: string, apellido: string, cedula: number, sexo: "M" | "F", fechaNacimiento: Date}){
        super({nombre, apellido, cedula, sexo, fechaNacimiento, turnoComida: 3, costo: 10});
    }
    costoFinal(): number{
        if ((this.edad > 50 && this.sexo === "F") || (this.edad > 60 && this.sexo === "M")){
            return this._costo*0.5;
        }
        else{
            return this._costo;
        }
    }
    aplicaDescuento(): boolean {
        if ((this.edad > 50 && this.sexo === "F") || (this.edad > 60 && this.sexo === "M")){
            return true;
        }
        else{
            return false;
        }
    }
}
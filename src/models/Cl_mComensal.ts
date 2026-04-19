import Cl_mPersona from "./Cl_mPersona.js";

export default class Cl_mComensal extends Cl_mPersona{
    protected _turnoComida: 1 | 2 | 3;
    protected _costo: 5 | 7 | 10;
    constructor({nombre, apellido, cedula, sexo, fechaNacimiento, turnoComida, costo}:{nombre: string, apellido: string, cedula: number, sexo: "M" | "F", fechaNacimiento: Date, turnoComida: 1 | 2 | 3, costo: 5 | 7 | 10}){
        super({nombre, apellido, cedula, sexo, fechaNacimiento});   
        this._turnoComida = turnoComida;
        this._costo = costo;
    }
    costoFinal(): number{
        if ((this.edad > 50 && this.sexo === "F") || (this.edad > 60 && this.sexo === "M")){
            return this._costo*0.5;
        }
        else{
            return this._costo;
        }
    }
    aplicaDescuento(): boolean{
        if ((this.edad > 50 && this.sexo === "F") || (this.edad > 60 && this.sexo === "M")){
            return true;
        }
        else{
            return false;
        }
    }
    set turnoComida(turnoComida: 1 | 2 | 3){
        this._turnoComida = turnoComida;
    }
    get turnoComida(): 1 | 2 | 3{
        return this._turnoComida;
    }
}
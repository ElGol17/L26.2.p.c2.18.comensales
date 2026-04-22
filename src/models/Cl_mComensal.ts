import Cl_mPersona from "./Cl_mPersona.js";

export default class Cl_mComensal extends Cl_mPersona{
    private _turnoComida: 1 | 2 | 3;
    constructor({nombre, apellido, cedula, sexo, fechaNacimiento, turnoComida}:{nombre: string, apellido: string, cedula: number, sexo: "M" | "F", fechaNacimiento: Date, turnoComida: 1 | 2 | 3}){
        super({nombre, apellido, cedula, sexo, fechaNacimiento});   
        this._turnoComida = turnoComida;
    }
    get costo(): number{
        let costo: number;
        switch (this._turnoComida){
            case 1:
                costo = 5;
                break;
            case 2:
                costo = 7;
                break;
            case 3:
                costo = 10;
                break;
        }
        if ((this.edad > 50 && this.sexo === "F") || (this.edad > 60 && this.sexo === "M")){
            costo = costo * 0.5;
        }
        return costo;
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
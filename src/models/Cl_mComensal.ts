import Cl_mPersona from "./Cl_mPersona.js";

export default class Cl_mComensal extends Cl_mPersona{
    private turnoComida: 1 | 2 | 3;
    constructor({nombre, apellido, cedula, sexo, fechaNacimiento, turnoComida}:{nombre: string, apellido: string, cedula: number, sexo: "M" | "F", fechaNacimiento: Date, turnoComida: 1 | 2 | 3}){
        super({nombre, apellido, cedula, sexo, fechaNacimiento});   
        this.turnoComida = turnoComida;
    }
    costo(): number{
        let costo: number;
        switch (this.turnoComida){
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
        if ((this.edad() > 50 && this.sexo === "F") || (this.edad() > 60 && this.sexo === "M")){
            costo = costo * 0.5;
        }
        return costo;
    }
    aplicaDescuento(): boolean{
        if ((this.edad() > 50 && this.sexo === "F") || (this.edad() > 60 && this.sexo === "M")){
            return true;
        }
        else{
            return false;
        }
    }
    set tComida(turnoComida: 1 | 2 | 3){
        this.turnoComida = turnoComida;
    }
    get tComida(): 1 | 2 | 3{
        return this.turnoComida;
    }
    descuento(): number{
        let descuento: number;
        if ((this.edad() > 50 && this.sexo === "F") || (this.edad() > 60 && this.sexo === "M")){
            switch (this.turnoComida){
                case 1:
                descuento = 5 * 0.5 ;
                    break;
                case 2:
                descuento = 7 * 0.5 ;
                    break;
                case 3:
                descuento = 10 * 0.5;
                    break;
            }
        }
        else{
            descuento = 0;
        }
        return descuento;
    }
}
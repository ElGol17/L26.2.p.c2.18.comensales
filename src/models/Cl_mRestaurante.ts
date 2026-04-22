import Cl_mComensal from "./Cl_mComensal.js";

export default class Cl_mRestaurante{
    private _acumCostos: number = 0;
    private _acumDesayuno: number = 0;
    private _acumAlmuerzo: number = 0;
    private _acumAmbos: number = 0;
    private _contComensales: number = 0;
    private _contDesayuno: number = 0;
    private _contAlmuerzo: number = 0;
    private _contAmbos: number = 0;
    private _contDescuento: number = 0;
    private _contSinDescuento: number = 0;
    constructor(){}
    procesarComensal(c: Cl_mComensal){
        this._contComensales++;
        this._acumCostos += c.costo;
        switch (c.turnoComida){
            case 1:
                this._contDesayuno++;
                this._acumDesayuno += c.costo;
                break;
            case 2:
                this._contAlmuerzo++;
                this._acumAlmuerzo += c.costo;
                break;
            case 3:
                this._contAmbos++;
                this._acumAmbos += c.costo;
                break;
        }
        if (c.aplicaDescuento()){
            this._contDescuento++;
        }
        else{
            this._contSinDescuento++;
        }
    }
    get acumCostos(): number{
        return this._acumCostos;
    }
    get acumDesayuno(): number{
        return this._acumDesayuno;
    }
    get acumAlmuerzo(): number{
        return this._acumAlmuerzo;
    }
    get acumAmbos(): number{
        return this._acumAmbos;
    }
    prctDesayuno(): number{
        let total = this._contDesayuno + this._contAlmuerzo + this._contAmbos;
        if (total > 0){
            return (this._contDesayuno * 100 )/total;
        }
        else{
            return 0;
        }
    }
    prctAlmuerzo(): number{
        let total = this._contDesayuno + this._contAlmuerzo + this._contAmbos;
        if (total > 0){
            return (this._contAlmuerzo * 100 )/total;
        }
        else{
            return 0;
        }
    }
    prctAmbos(): number{
        let total = this._contDesayuno + this._contAlmuerzo + this._contAmbos;
        if (total > 0){
            return (this._contAmbos * 100 )/total;
        }
        else{
            return 0;
        }
    }
    prctDescuento(): number{
        let total = this._contDescuento + this._contSinDescuento;
        if (total > 0){
            return (this._contDescuento * 100 )/total;
        }
        else{
            return 0;
        }
    }
    prctSinDescuento(): number{
        let total = this._contDescuento + this._contSinDescuento;
        if (total > 0){
            return (this._contSinDescuento * 100 )/total;
        }
        else{
            return 0;
        }
    }
}
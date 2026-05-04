import Cl_mComensal from "./Cl_mComensal.js";

export default class Cl_mRestaurante{
    private acumCostos: number = 0;
    private acumDesayuno: number = 0;
    private acumAlmuerzo: number = 0;
    private acumAmbos: number = 0;
    private acumDescuentos: number = 0;
    private contComensales: number = 0;
    private contDesayuno: number = 0;
    private contAlmuerzo: number = 0;
    private contAmbos: number = 0;
    private contDescuento: number = 0;
    private contSinDescuento: number = 0;
    constructor(){}
    procesarComensal(c: Cl_mComensal){
        this.contComensales++;
        this.acumCostos += c.costo();
        this.acumDescuentos += c.descuento();
        switch (c.tComida){
            case 1:
                this.contDesayuno++;
                this.acumDesayuno += c.costo();
                break;
            case 2:
                this.contAlmuerzo++;
                this.acumAlmuerzo += c.costo();
                break;
            case 3:
                this.contAmbos++;
                this.acumAmbos += c.costo();
                break;
        }
        if (c.aplicaDescuento()){
            this.contDescuento++;
        }
        else{
            this.contSinDescuento++;
        }
    }
    get acumuladorCostos(): number{
        return this.acumCostos;
    }
    get acumuladorDesayuno(): number{
        return this.acumDesayuno;
    }
    get acumuladorAlmuerzo(): number{
        return this.acumAlmuerzo;
    }
    get acumuladorAmbos(): number{
        return this.acumAmbos;
    }
    get acumuladorDescuentos(): number{
        return this.acumDescuentos;
    }
    prctDesayuno(): number{
        let total = this.contDesayuno + this.contAlmuerzo + this.contAmbos;
        if (total > 0){
            return (this.contDesayuno * 100 )/total;
        }
        else{
            return 0;
        }
    }
    prctAlmuerzo(): number{
        let total = this.contDesayuno + this.contAlmuerzo + this.contAmbos;
        if (total > 0){
            return (this.contAlmuerzo * 100 )/total;
        }
        else{
            return 0;
        }
    }
    prctAmbos(): number{
        let total = this.contDesayuno + this.contAlmuerzo + this.contAmbos;
        if (total > 0){
            return (this.contAmbos * 100 )/total;
        }
        else{
            return 0;
        }
    }
    prctDescuento(): number{
        let total = this.contDescuento + this.contSinDescuento;
        if (total > 0){
            return (this.contDescuento * 100 )/total;
        }
        else{
            return 0;
        }
    }
    prctSinDescuento(): number{
        let total = this.contDescuento + this.contSinDescuento;
        if (total > 0){
            return (this.contSinDescuento * 100 )/total;
        }
        else{
            return 0;
        }
    }
}
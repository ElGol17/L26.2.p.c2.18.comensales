export default class Cl_mRestaurante {
    _acumCostos = 0;
    _acumDesayuno = 0;
    _acumAlmuerzo = 0;
    _acumAmbos = 0;
    _contComensales = 0;
    _contDesayuno = 0;
    _contAlmuerzo = 0;
    _contAmbos = 0;
    _contDescuento = 0;
    _contSinDescuento = 0;
    constructor() { }
    procesarComensal(c) {
        this._contComensales++;
        this._acumCostos += c.costoFinal();
        switch (c.turnoComida) {
            case 1:
                this._contDesayuno++;
                this._acumDesayuno += c.costoFinal();
                break;
            case 2:
                this._contAlmuerzo++;
                this._acumAlmuerzo += c.costoFinal();
                break;
            case 3:
                this._contAmbos++;
                this._acumAmbos += c.costoFinal();
                break;
        }
        if (c.aplicaDescuento()) {
            this._contDescuento++;
        }
        else {
            this._contSinDescuento++;
        }
    }
    get acumCostos() {
        return this._acumCostos;
    }
    get acumDesayuno() {
        return this._acumDesayuno;
    }
    get acumAlmuerzo() {
        return this._acumAlmuerzo;
    }
    get acumAmbos() {
        return this._acumAmbos;
    }
    prctDesayuno() {
        let total = this._contDesayuno + this._contAlmuerzo + this._contAmbos;
        if (total > 0) {
            return (this._contDesayuno * 100) / total;
        }
        else {
            return 0;
        }
    }
    prctAlmuerzo() {
        let total = this._contDesayuno + this._contAlmuerzo + this._contAmbos;
        if (total > 0) {
            return (this._contAlmuerzo * 100) / total;
        }
        else {
            return 0;
        }
    }
    prctAmbos() {
        let total = this._contDesayuno + this._contAlmuerzo + this._contAmbos;
        if (total > 0) {
            return (this._contAmbos * 100) / total;
        }
        else {
            return 0;
        }
    }
    prctDescuento() {
        let total = this._contDescuento + this._contSinDescuento;
        if (total > 0) {
            return (this._contDescuento * 100) / total;
        }
        else {
            return 0;
        }
    }
    prctSinDescuento() {
        let total = this._contDescuento + this._contSinDescuento;
        if (total > 0) {
            return (this._contSinDescuento * 100) / total;
        }
        else {
            return 0;
        }
    }
}
//# sourceMappingURL=Cl_mRestaurante.js.map
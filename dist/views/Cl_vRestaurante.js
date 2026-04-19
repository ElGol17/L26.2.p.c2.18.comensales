export default class Cl_vRestaurante {
    lblTotalCostos;
    lblTotalDesayuno;
    lblTotalAlmuerzo;
    lblTotalAmbos;
    lblPrctDesayuno;
    lblPrctAlmuerzo;
    lblPrctAmbos;
    lblPrctDescuento;
    lblPrctSinDescuento;
    btAgregarComensal;
    vista;
    constructor() {
        this.vista = document.getElementById("body");
        this.lblTotalCostos = document.getElementById("body_lblTotalCostos");
        this.lblTotalDesayuno = document.getElementById("body_lblTotalDesayuno");
        this.lblTotalAlmuerzo = document.getElementById("body_lblTotalAlmuerzo");
        this.lblTotalAmbos = document.getElementById("body_lblTotalAmbos");
        this.lblPrctDesayuno = document.getElementById("body_lblPrctDesayuno");
        this.lblPrctAlmuerzo = document.getElementById("body_lblPrctAlmuerzo");
        this.lblPrctAmbos = document.getElementById("body_lblPrctAmbos");
        this.lblPrctDescuento = document.getElementById("body_lblPrctDescuento");
        this.lblPrctSinDescuento = document.getElementById("body_lblPrctSinDescuento");
        this.btAgregarComensal = document.getElementById("body_btAgregarComensal");
    }
    onAgregarComensal(callback) {
        this.btAgregarComensal.onclick = callback;
    }
    reportar({ totalCostos, totalDesayuno, totalAlmuerzo, totalAmbos, prctDesayuno, prctAlmuerzo, prctAmbos, prctDescuento, prctSinDescuento }) {
        this.lblTotalCostos.innerHTML = `${totalCostos}`;
        this.lblTotalDesayuno.innerHTML = `${totalDesayuno}`;
        this.lblTotalAlmuerzo.innerHTML = `${totalAlmuerzo}`;
        this.lblTotalAmbos.innerHTML = `${totalAmbos}`;
        this.lblPrctDesayuno.innerHTML = `${prctDesayuno.toFixed(2)}`;
        this.lblPrctAlmuerzo.innerHTML = `${prctAlmuerzo.toFixed(2)}`;
        this.lblPrctAmbos.innerHTML = `${prctAmbos.toFixed(2)}`;
        this.lblPrctDescuento.innerHTML = `${prctDescuento.toFixed(2)}`;
        this.lblPrctSinDescuento.innerHTML = `${prctSinDescuento.toFixed(2)}`;
    }
    mostrar() {
        if (this.vista === null)
            return;
        this.vista.hidden = false;
    }
    ocultar() {
        if (this.vista === null)
            return;
        this.vista.hidden = true;
    }
}
//# sourceMappingURL=Cl_vRestaurante.js.map
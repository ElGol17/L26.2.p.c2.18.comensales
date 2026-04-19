import { I_vRestaurante } from "../interfaces/I_vRestaurante.js";

export default class Cl_vRestaurante implements I_vRestaurante{
    lblTotalCostos: HTMLElement;
    lblTotalDesayuno: HTMLElement;
    lblTotalAlmuerzo: HTMLElement;
    lblTotalAmbos: HTMLElement;
    lblPrctDesayuno: HTMLElement;
    lblPrctAlmuerzo: HTMLElement;
    lblPrctAmbos: HTMLElement;
    lblPrctDescuento: HTMLElement;
    lblPrctSinDescuento: HTMLElement;
    btAgregarComensal: HTMLButtonElement;
    vista: HTMLElement | null;
    constructor(){
        this.vista = document.getElementById("app-bootstrap") as HTMLElement;
        this.lblTotalCostos = document.getElementById("body_lblTotalCostos") as HTMLElement;
        this.lblTotalDesayuno = document.getElementById("body_lblTotalDesayuno") as HTMLElement;
        this.lblTotalAlmuerzo = document.getElementById("body_lblTotalAlmuerzo") as HTMLElement;
        this.lblTotalAmbos = document.getElementById("body_lblTotalAmbos") as HTMLElement;
        this.lblPrctDesayuno = document.getElementById("body_lblPrctDesayuno") as HTMLElement;
        this.lblPrctAlmuerzo = document.getElementById("body_lblPrctAlmuerzo") as HTMLElement;
        this.lblPrctAmbos = document.getElementById("body_lblPrctAmbos") as HTMLElement;
        this.lblPrctDescuento = document.getElementById("body_lblPrctDescuento") as HTMLElement;
        this.lblPrctSinDescuento = document.getElementById("body_lblPrctSinDescuento") as HTMLElement;
        this.btAgregarComensal = document.getElementById("body_btAgregarComensal") as HTMLButtonElement;
    }
    onAgregarComensal(callback: () => void): void {
        this.btAgregarComensal.onclick = callback;
    }
    reportar({totalCostos, totalDesayuno, totalAlmuerzo, totalAmbos, prctDesayuno, prctAlmuerzo, prctAmbos, prctDescuento, prctSinDescuento}: {totalCostos: number, totalDesayuno: number, totalAlmuerzo: number, totalAmbos: number, prctDesayuno: number, prctAlmuerzo: number, prctAmbos: number, prctDescuento: number, prctSinDescuento: number}): void{
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
}
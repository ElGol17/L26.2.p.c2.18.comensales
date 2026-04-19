import {I_vComensal} from "../interfaces/I_vComensal.js";
declare var bootstrap: any;

export default class Cl_vComensal implements I_vComensal{
    inNombre: HTMLInputElement;
    inApellido: HTMLInputElement;
    inCedula: HTMLInputElement;
    inSexo: HTMLSelectElement;
    inFechaNacimiento: HTMLInputElement;
    inTurnoComida: HTMLSelectElement;
    btAceptar: HTMLButtonElement;
    btCancelar: HTMLButtonElement;
    vista: HTMLElement;
    private modal: any;
    constructor(){
        this.vista = document.getElementById("comensal") as HTMLElement;
        this.inNombre = document.getElementById("comensal_inNombre") as HTMLInputElement;
        this.inApellido = document.getElementById("comensal_inApellido") as HTMLInputElement;
        this.inCedula = document.getElementById("comensal_inCedula") as HTMLInputElement;
        this.inSexo = document.getElementById("comensal_inSexo") as HTMLSelectElement;
        this.inFechaNacimiento = document.getElementById("comensal_inFechaNacimiento") as HTMLInputElement;
        this.inTurnoComida = document.getElementById("comensal_inTurnoComida") as HTMLSelectElement;
        this.btAceptar = document.getElementById("comensal_btAceptar") as HTMLButtonElement;
        this.btCancelar = document.getElementById("comensal_btCancelar") as HTMLButtonElement;
        const elementoModal = document.getElementById("comensal");
        this.modal = new bootstrap.Modal(elementoModal);
    }
    get nombre(): string{
        return this.inNombre.value.trim();
    }
    get apellido(): string{
        return this.inApellido.value.trim();
    }
    get cedula(): number{
        return this.inCedula.value? +this.inCedula.value: 0;
    }
    get sexo(): "M" | "F"{
        return this.inSexo.value as "M" | "F";
    }
    get fechaNacimiento(): Date{
        return this.inFechaNacimiento.value? new Date(this.inFechaNacimiento.value): new Date();
    }
    get turnoComida(): 1 | 2 | 3{
        return +this.inTurnoComida.value as 1 | 2 | 3;
    }
    onAceptar(callback: () => void): void {
        this.btAceptar.onclick = callback;
    }
    onCancelar(callback: () => void): void {
        this.btCancelar.onclick = callback;
    }
    mostrar(): void {
        this.inNombre.value = "";
        this.inApellido.value = "";
        this.inCedula.value = "";
        this.inSexo.value = "";
        this.inFechaNacimiento.value = "";
        this.inTurnoComida.value = "";
        this.modal.show();
    }
    ocultar(): void {
        this.modal.hide();
    }
}
import {I_vComensal} from "../interfaces/I_vComensal.js";

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
    constructor(){
        this.vista = document.getElementById("Comensal") as HTMLElement;
        this.inNombre = document.getElementById("Comensal_inNombre") as HTMLInputElement;
        this.inApellido = document.getElementById("Comensal_inApellido") as HTMLInputElement;
        this.inCedula = document.getElementById("Comensal_inCedula") as HTMLInputElement;
        this.inSexo = document.getElementById("Comensal_inSexo") as HTMLSelectElement;
        this.inFechaNacimiento = document.getElementById("Comensal_inFechaNacimiento") as HTMLInputElement;
        this.inTurnoComida = document.getElementById("Comensal_inTurnoComida") as HTMLSelectElement;
        this.btAceptar = document.getElementById("Comensal_btAceptar") as HTMLButtonElement;
        this.btCancelar = document.getElementById("Comensal_btCancelar") as HTMLButtonElement;
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
        if (this.vista === null) return;
        this.vista.hidden = false;
    }
    ocultar(): void {
        if (this.vista === null) return;
        this.vista.hidden = true;
  }
}
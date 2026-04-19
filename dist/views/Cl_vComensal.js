export default class Cl_vComensal {
    inNombre;
    inApellido;
    inCedula;
    inSexo;
    inFechaNacimiento;
    inTurnoComida;
    btAceptar;
    btCancelar;
    vista;
    constructor() {
        this.vista = document.getElementById("Comensal");
        this.inNombre = document.getElementById("Comensal_inNombre");
        this.inApellido = document.getElementById("Comensal_inApellido");
        this.inCedula = document.getElementById("Comensal_inCedula");
        this.inSexo = document.getElementById("Comensal_inSexo");
        this.inFechaNacimiento = document.getElementById("Comensal_inFechaNacimiento");
        this.inTurnoComida = document.getElementById("Comensal_inTurnoComida");
        this.btAceptar = document.getElementById("Comensal_btAceptar");
        this.btCancelar = document.getElementById("Comensal_btCancelar");
    }
    get nombre() {
        return this.inNombre.value.trim();
    }
    get apellido() {
        return this.inApellido.value.trim();
    }
    get cedula() {
        return this.inCedula.value ? +this.inCedula.value : 0;
    }
    get sexo() {
        return this.inSexo.value;
    }
    get fechaNacimiento() {
        return this.inFechaNacimiento.value ? new Date(this.inFechaNacimiento.value) : new Date();
    }
    get turnoComida() {
        return +this.inTurnoComida.value;
    }
    onAceptar(callback) {
        this.btAceptar.onclick = callback;
    }
    onCancelar(callback) {
        this.btCancelar.onclick = callback;
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
//# sourceMappingURL=Cl_vComensal.js.map
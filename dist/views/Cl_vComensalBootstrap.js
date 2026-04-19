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
    modal;
    constructor() {
        this.vista = document.getElementById("comensal");
        this.inNombre = document.getElementById("comensal_inNombre");
        this.inApellido = document.getElementById("comensal_inApellido");
        this.inCedula = document.getElementById("comensal_inCedula");
        this.inSexo = document.getElementById("comensal_inSexo");
        this.inFechaNacimiento = document.getElementById("comensal_inFechaNacimiento");
        this.inTurnoComida = document.getElementById("comensal_inTurnoComida");
        this.btAceptar = document.getElementById("comensal_btAceptar");
        this.btCancelar = document.getElementById("comensal_btCancelar");
        const elementoModal = document.getElementById("comensal");
        this.modal = new bootstrap.Modal(elementoModal);
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
        this.inNombre.value = "";
        this.inApellido.value = "";
        this.inCedula.value = "";
        this.inSexo.value = "";
        this.inFechaNacimiento.value = "";
        this.inTurnoComida.value = "";
        this.modal.show();
    }
    ocultar() {
        this.modal.hide();
    }
}
//# sourceMappingURL=Cl_vComensalBootstrap.js.map
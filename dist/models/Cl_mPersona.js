export default class Cl_mPersona {
    _nombre;
    _apellido;
    _cedula;
    _sexo;
    _fechaNacimiento;
    constructor({ nombre, apellido, cedula, sexo, fechaNacimiento }) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._cedula = cedula;
        this._sexo = sexo;
        this._fechaNacimiento = fechaNacimiento;
    }
    get edad() {
        const hoy = new Date();
        let edad = hoy.getFullYear() - this._fechaNacimiento.getFullYear();
        const mes = hoy.getMonth() - this._fechaNacimiento.getMonth();
        if (mes < 0 || (mes === 0 && hoy.getDate() < this._fechaNacimiento.getDate())) {
            edad--;
        }
        return edad;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get nombre() {
        return this._nombre;
    }
    set apellido(apellido) {
        this._apellido = apellido;
    }
    get apellido() {
        return this._apellido;
    }
    set cedula(cedula) {
        this._cedula = cedula;
    }
    get cedula() {
        return this._cedula;
    }
    set sexo(sexo) {
        this._sexo = sexo;
    }
    get sexo() {
        return this._sexo;
    }
}
//# sourceMappingURL=Cl_mPersona.js.map
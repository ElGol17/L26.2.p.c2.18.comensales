export interface I_vComensal{
    get nombre(): string;
    get apellido(): string;
    get cedula(): number;
    get sexo(): "M" | "F";
    get fechaNacimiento(): Date;
    get turnoComida(): 1 | 2 | 3;
    onAceptar(callback: () => void): void;
    onCancelar(callback: () => void): void;
    mostrar(): void;
    ocultar(): void;
}
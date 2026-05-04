import Cl_mRestaurante from "./models/Cl_mRestaurante.js";
import Cl_mComensal from "./models/Cl_mComensal.js";
import Cl_vRestaurante from "./views/Cl_vRestaurantePlain.js";
import Cl_vComensal from "./views/Cl_vComensalPlain.js";
import Cl_cComensal from "./controllers/Cl_cComensal.js";

const mRestaurante = new Cl_mRestaurante();

const vRestaurante = new Cl_vRestaurante();
const vComensal = new Cl_vComensal();

const cComensal = new Cl_cComensal(vComensal);

mRestaurante.procesarComensal(new Cl_mComensal({ nombre: "Ana", apellido: "Gil", cedula: 8888, sexo: "F", fechaNacimiento: new Date(2001, 5, 15), turnoComida: 1 }));
mRestaurante.procesarComensal(new Cl_mComensal({ nombre: "Mery", apellido: "Paz", cedula: 6666, sexo: "F", fechaNacimiento: new Date(2009, 6, 25), turnoComida: 1 }));
mRestaurante.procesarComensal(new Cl_mComensal({ nombre: "Juan", apellido: "Sanz", cedula: 9999, sexo: "M", fechaNacimiento: new Date(1965, 8, 20), turnoComida: 1 }));
mRestaurante.procesarComensal(new Cl_mComensal({ nombre: "Paty", apellido: "Ortiz", cedula: 3333, sexo: "F", fechaNacimiento: new Date(1975, 4, 14), turnoComida: 3 }));
mRestaurante.procesarComensal(new Cl_mComensal({ nombre: "Liz", apellido: "Ramos", cedula: 2222, sexo: "F", fechaNacimiento: new Date(2005, 0, 3), turnoComida: 1 }));
mRestaurante.procesarComensal(new Cl_mComensal({ nombre: "Raul", apellido: "Méndez", cedula: 5555, sexo: "M", fechaNacimiento: new Date(1995, 9, 11), turnoComida: 2 }));
mRestaurante.procesarComensal(new Cl_mComensal({ nombre: "Tony", apellido: "Flores", cedula: 7777, sexo: "M", fechaNacimiento: new Date(1964, 7, 7), turnoComida: 3 }));
mRestaurante.procesarComensal(new Cl_mComensal({ nombre: "Gaby", apellido: "López", cedula: 1111, sexo: "F", fechaNacimiento: new Date(1966, 6, 19), turnoComida: 1 }));

vRestaurante.reportar({
    totalCostos: mRestaurante.acumuladorCostos,
    totalDesayuno: mRestaurante.acumuladorDesayuno,
    totalAlmuerzo: mRestaurante.acumuladorAlmuerzo,
    totalAmbos: mRestaurante.acumuladorAmbos,
    totalDescuentos: mRestaurante.acumuladorDescuentos,
    prctDesayuno: mRestaurante.prctDesayuno(),
    prctAlmuerzo: mRestaurante.prctAlmuerzo(),
    prctAmbos: mRestaurante.prctAmbos(),
    prctDescuento: mRestaurante.prctDescuento(),
    prctSinDescuento: mRestaurante.prctSinDescuento()
});

vRestaurante.btAgregarComensal.onclick = () => {
    cComensal.solicitarComensal((nuevoComensal) => {
        if (nuevoComensal) {
            mRestaurante.procesarComensal(nuevoComensal);
            vRestaurante.reportar({
                totalCostos: mRestaurante.acumuladorCostos,
                totalDesayuno: mRestaurante.acumuladorDesayuno,
                totalAlmuerzo: mRestaurante.acumuladorAlmuerzo,
                totalAmbos: mRestaurante.acumuladorAmbos,
                totalDescuentos: mRestaurante.acumuladorDescuentos,
                prctDesayuno: mRestaurante.prctDesayuno(),
                prctAlmuerzo: mRestaurante.prctAlmuerzo(),
                prctAmbos: mRestaurante.prctAmbos(),
                prctDescuento: mRestaurante.prctDescuento(),
                prctSinDescuento: mRestaurante.prctSinDescuento()
            }); 
        }
    });
};
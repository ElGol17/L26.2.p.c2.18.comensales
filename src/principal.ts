import Cl_mRestaurante from "./models/Cl_mRestaurante.js";
import Cl_mComensal from "./models/Cl_mComensal.js";
import Cl_vRestaurante from "./views/Cl_vRestauranteBootstrap.js";
import Cl_vComensal from "./views/Cl_vComensalBootstrap.js";
import Cl_cComensal from "./controllers/Cl_cComensal.js";

const mRestaurante = new Cl_mRestaurante();

const vRestaurante = new Cl_vRestaurante();
const vComensal = new Cl_vComensal();

const cComensal = new Cl_cComensal(vComensal);

mRestaurante.procesarComensal(new Cl_mComensal({ nombre: "José", apellido: "Martínez", cedula: 111, sexo: "M", fechaNacimiento: new Date(1951, 3, 12), turnoComida: 1 }));
mRestaurante.procesarComensal(new Cl_mComensal({ nombre: "Carlos", apellido: "Pérez", cedula: 222, sexo: "M", fechaNacimiento: new Date(1998, 2, 21), turnoComida: 3 }));
mRestaurante.procesarComensal(new Cl_mComensal({ nombre: "Maria", apellido: "García", cedula: 333, sexo: "F", fechaNacimiento: new Date(2002, 10, 16), turnoComida: 2 }));
mRestaurante.procesarComensal(new Cl_mComensal({ nombre: "Gustavo", apellido: "González", cedula: 444, sexo: "M", fechaNacimiento: new Date(2006, 7, 14), turnoComida: 2 }));
mRestaurante.procesarComensal(new Cl_mComensal({ nombre: "Daniela", apellido: "Torres", cedula: 555, sexo: "F", fechaNacimiento: new Date(2005, 2, 1), turnoComida: 1 }));
mRestaurante.procesarComensal(new Cl_mComensal({ nombre: "Brandon", apellido: "Figueroa", cedula: 666, sexo: "M", fechaNacimiento: new Date(1941, 9, 11), turnoComida: 1 }));
mRestaurante.procesarComensal(new Cl_mComensal({ nombre: "Génesis", apellido: "Vidal", cedula: 777, sexo: "M", fechaNacimiento: new Date(1975, 6, 30), turnoComida: 1 }));
mRestaurante.procesarComensal(new Cl_mComensal({ nombre: "César", apellido: "Peñaloza", cedula: 888, sexo: "M", fechaNacimiento: new Date(2003, 5, 26), turnoComida: 3 }));
mRestaurante.procesarComensal(new Cl_mComensal({ nombre: "Kevin", apellido: "Latiegue", cedula: 999, sexo: "M", fechaNacimiento: new Date(1967, 9, 6), turnoComida: 2 }));
mRestaurante.procesarComensal(new Cl_mComensal({ nombre: "Gabriela", apellido: "López", cedula: 1000, sexo: "F", fechaNacimiento: new Date(1994, 3, 12), turnoComida: 2 }));
mRestaurante.procesarComensal(new Cl_mComensal({ nombre: "Luis", apellido: "Álvarez", cedula: 1111, sexo: "M", fechaNacimiento: new Date(1973, 1, 28), turnoComida: 1 }));
mRestaurante.procesarComensal(new Cl_mComensal({ nombre: "Sebastián", apellido: "Díaz", cedula: 2222, sexo: "M", fechaNacimiento: new Date(1995, 5, 8), turnoComida: 3 }));

vRestaurante.reportar({
    totalCostos: mRestaurante.acumCostos,
    totalDesayuno: mRestaurante.acumDesayuno,
    totalAlmuerzo: mRestaurante.acumAlmuerzo,
    totalAmbos: mRestaurante.acumAmbos,
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
                totalCostos: mRestaurante.acumCostos,
                totalDesayuno: mRestaurante.acumDesayuno,
                totalAlmuerzo: mRestaurante.acumAlmuerzo,
                totalAmbos: mRestaurante.acumAmbos,
                prctDesayuno: mRestaurante.prctDesayuno(),
                prctAlmuerzo: mRestaurante.prctAlmuerzo(),
                prctAmbos: mRestaurante.prctAmbos(),
                prctDescuento: mRestaurante.prctDescuento(),
                prctSinDescuento: mRestaurante.prctSinDescuento()
            }); 
        }
    });
};
function validarCedula(cedula) {

    
    cedula = cedula.replace(/-/g, "").trim();


    if (cedula.length !== 11 || isNaN(cedula)) {
        console.log("CÉDULA ES INCORRECTA");
        return;
    }

    let suma = 0;

    for (let i = 0; i < 10; i++) {

        let num = parseInt(cedula[i]);

        
        let multiplicador = (i % 2 === 0) ? 1 : 2;

        let resultado = num * multiplicador;

        
        if (resultado > 9) {
            resultado = Math.floor(resultado / 10) + (resultado % 10);
        }

        suma += resultado;
    }

    
    let digitoCalculado = (10 - (suma % 10)) % 10;

    let digitoReal = parseInt(cedula[10]);

    if (digitoCalculado === digitoReal) {
        console.log("CÉDULA ES CORRECTA");
    } else {
        console.log("CÉDULA ES INCORRECTA");
    }
}



validarCedula("00113918205");
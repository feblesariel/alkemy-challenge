window.addEventListener("load", function () {

    // CAPTURA DE FORMULARIO Y CAMPOS   

    let form = document.querySelector('.form');
    let formConcepto = document.querySelector('#concepto');
    let formMonto = document.querySelector('#monto');
    let erroresView = document.querySelector('.errores');

    formConcepto.focus();  // HACE FOCO EN ESTE CAMPO

    form.addEventListener("submit", function (e) {

        let error = 0;
        let errores = [];

        // CONCEPTO

        if (formConcepto.value == "") {

            error++;
            errores.push("Ingresa un concepto.");
        } else if (formConcepto.value.length > 8) {
            error++;
            errores.push("Concepto 8 caracteres max.");
        }

        // MONTO

        if (formMonto.value == "") {
            error++;
            errores.push("Ingresa un monto.");
        } else if (isNaN(formMonto.value)) {
            error++;
            errores.push("El monto debe ser numerico.");
        }

        if (error > 0) {
            erroresView.innerHTML = "";
            e.preventDefault();
            for (let i = 0; i < errores.length; i++) {
                erroresView.innerHTML += errores[i] + "<br>";
            }
        }
    });
})

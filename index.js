const CORRECTO = "Franlex";
document.querySelector(".boton").addEventListener("click", analizar);

function analizar() {
    const NOMBRE = document.querySelector("#nombre").value.trim();
    //Cuando sea igual al valor correcto "Franlex"
    (NOMBRE===CORRECTO)
    ? escribir("Hola")
    : escribir("Chao")

}

function escribir(valor) {
    document.querySelector(".caja2").innerHTML=valor;
}
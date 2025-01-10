const OPCIONES = [  {nombre: "franlex", saludo: "Hola"},
                    {nombre: "rosa", saludo: "Adios"},
                    {nombre: "martin", saludo: "Buen día"},
                    {nombre: "ana", saludo: "Saludos"},
                    {nombre: "marc", saludo: "Que tal??"},
                    {nombre: "ramon", saludo: "Bien..."},
                    {nombre: "john", saludo: "Hi"},
                    {nombre: "jose", saludo: "Buenas"},
                    {nombre: "mary", saludo: "Hello"},
                    {nombre: "lauren", saludo: "Bonito dia!"}];
                    
document.querySelector(".boton").addEventListener("click", analizar);

function analizar() {
    const NOMBRE = document.querySelector("#nombre").value.trim();
    //Cuando sea igual al valor correcto "Franlex"
    const OBJETO =  OPCIONES.find(valor => valor.nombre===NOMBRE)
    console.log(OBJETO);

    escribir(OBJETO.saludo);

}

function escribir(valor) {
    document.querySelector(".caja2").innerHTML=valor;
}
const aplicacion = document.querySelector(".container") //Hacemos referencia al div .container del HTML
const url = "https://icanhazdadjoke.com" //Creamos una variable con la URL (en este caso un string) a la cual hacemos la petición mediante fetch

/*¿Qué es lo que me piden? Mostrar un chiste por pantalla
¿Qué resultado es el que tiene que dar la función? Un chiste que es un string.
¿Qué necesito como parámetros de entrada/ Argumentos? Nada porque cojo los datos de un API
¿qué es lo que tengo (en cristiano) que hacer para obtener el resultado? Llamamos a la API para recibir un chiste aleatorio y lo mostramos por pantalla
Cómo lo traduzco a lenguaje de programación con las funciones de conozco: Hacemos un fetch para conseguir el chiste y con el resultado hacemos un console log*/

//1. Llamamos a la API para recibir un chiste aleatorio
//2. Lo mostramos por pantalla

function dameChiste() {
    fetch (url, {headers: {'Accept': 'application/json'}}) //Le pasamos la URL, que nos devolverá una "promesa". Necesitamos las headers para recibirlo en formato json
        .then(res => res.json())
        .then(data => {
            console.log(data.joke)
        })
        .catch(error => console.log (error))
}

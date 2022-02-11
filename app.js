const url = "https://icanhazdadjoke.com"

const url2 = "http://api.weatherstack.com/current?access_key=93688f2495ec729cbe2f8b1399ead5c3&query=Valencia"

function ApiWeather() {
    fetch (url2)
        .then(res => res.json())
        .then(weather => {
        //console.log(weather);
        const parrafo = document.getElementById("showWeather")
        parrafo.innerHTML = weather;
        })
        .catch(error => console.log(error))
}

function giveMeAJoke() {
    fetch (url, {headers: {'Accept': 'application/json'}})
        .then(res => res.json())
        .then(data => {
            //console.log(data.joke)
            const parrafo = document.getElementById("showJoke")
            //muestro los botones para que el usuario pueda votar (ocultos al inicio)
            document.getElementById("score-buttons-container").style.display = "block";
            parrafo.innerHTML = data.joke;
        })
        .catch(error => console.log (error))
}

let reportJokes = [];

function scoreJoke(score) {
    //Hacer console.log de los argumentos.
    //console.log(score);

    //Acceder al contenido de un parrafo para coger el chiste
    let parrafo = document.getElementById('showJoke');
    let contenido = parrafo.innerHTML;
    //console.log(contenido);

    //Generar la fecha.
    const d = new Date();
    let date = d.toISOString();
    //console.log (date);

    //Crear el objeto del chiste que guardaremos en el array
    let joke = new Object();
    joke.text = contenido;
    joke.score = score;
    joke.date = date;
    //console.log (joke);

    //Añadir al array, el chiste, la puntuación y la fecha.
    reportJokes.push(joke);
    //Hacer un console.log del array
    console.log (reportJokes);  
}



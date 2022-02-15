const urlJokes = "https://icanhazdadjoke.com";
const urlChuckJokes="https://api.chucknorris.io/jokes/random";

const urlWeather = "https://api.openweathermap.org/data/2.5/weather?q=Valencia&appid=a1fa5835f76e0aaadc6a7bf7ccb61210";

ApiWeather();

//API Weather
function ApiWeather() {
    fetch(urlWeather)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
            showWeather(data);
        //console.log(data);
        })
        .catch(error => console.log (error))
}

function showWeather(d) {
	let celsius = Math.round(parseFloat(d.main.temp)-273.15);
	
	document.getElementById('description').innerHTML = d.weather[0].description;
	document.getElementById('temp').innerHTML = celsius + '&deg;' + "C";
	document.getElementById('location').innerHTML = d.name;   
}

//API Jokes  
function giveMeAJoke() {
    fetch (urlJokes, {headers: {'Accept': 'application/json'}})
        .then(res => res.json())
        .then(data => {
            //console.log(data.joke)
            const parrafo = document.getElementById("showJoke")
            //muestro los botones para que el usuario pueda votar (ocultos al inicio)
            document.getElementById("score-buttons-container").style.display = "block";
            parrafo.innerHTML = data.joke;
        })
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
    //console.log (reportJokes);  
}



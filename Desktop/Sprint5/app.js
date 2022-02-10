const url = "https://icanhazdadjoke.com"

function giveMeAJoke() {
    fetch (url, {headers: {'Accept': 'application/json'}})
        .then(res => res.json())
        .then(data => {
            //console.log(data.joke)
            const parrafo = document.getElementById("showJoke")
            parrafo.innerHTML = data.joke;
        })
        .catch(error => console.log (error))
}


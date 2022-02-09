const aplicacion = document.querySelector(".container") 
const url = "https://icanhazdadjoke.com" 


function giveMeAJoke() {
    fetch (url, {headers: {'Accept': 'application/json'}})
        .then(res => res.json())
        .then(data => {
            console.log(data.joke)
        })
        .catch(error => console.log (error))
}

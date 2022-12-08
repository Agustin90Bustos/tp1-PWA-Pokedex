const btn = document.querySelector('button');
const contenedor = document.querySelector('#app');
const servidor = 'https://pokeapi.co/api/'

btn.addEventListener('click', function(){
    const endPoint = servidor + 'v2/pokemon?limit=100&offset=0';

   fetch (endPoint)
    .then(respuesta => {
        return respuesta.json();
    })
    .then(respuestaJSON => {
        let datos = respuestaJSON.results;
        renderizar(datos);
    })
})

function renderizar(lista){
    let html = '';
    contenedor.innerHTML = '';
    let fotoURL;
    lista.forEach(pokemon => {
        fetch (pokemon.url)
        .then(resp => { 
            return resp.json();
        })
        .then(respJSON=>{
            fotoURL = respJSON.sprites.front_default;

            contenedor.innerHTML += `<div class="card">
            <h4>${pokemon.name}</h4>
            <img src="${fotoURL}">
            <p>${respJSON.order}</p>
            <a href="detalle.html?id=${respJSON.id}">Ver detalles</a>

        </div>`;
        })

    });
}
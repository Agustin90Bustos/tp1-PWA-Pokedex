const btn = document.querySelector('button');
const titulo = document.querySelector('h1');
const contenedor = document.querySelector('#app');
const servidor = 'https://pokeapi.co/api/'
let url = location.search;
let id = location.search.split('=')[1];

btn.addEventListener('click', ()=>{
    location.href = 'index.html';
})

console.log('id' + id);
const endPoint = servidor +  'v2/pokemon/' + id;

fetch (endPoint)
.then (respuesta => {
    return respuesta.json();
})
.then (respuestaJSON => {
    console.log(respuestaJSON.id);
    let datos = respuestaJSON;

    renderizar(datos);
})

function renderizar(poke){
    console.log(poke);
    let html = '';
    titulo.innerHTML = `${poke.name}</strong>`;
    html += `<div class="card">
    <h4>${poke.name}</h4>
    <img src="${poke.sprites.front_default}">
    <img src="${poke.sprites.back_default}">
    <p>Número: ${poke.order}</p>
    <p>Altura: ${poke.height} pies</p>
    </div>`;

    contenedor.innerHTML = html;
}
// const pokemonContainer = document.querySelector("#pokemon-container");
//
//
// POKEMON.forEach((pokemon, index) =>{
// let element = document.createElement('div');
// element.className = "pokemon-container"
// let pokemonFrame = document.createElement('div');
// pokemonFrame.className = "pokemon-frame"
// pokemonFrame.style = "width:230px;margin:10px;background:#fecd2f;color:#2d72fc"
//
// let pokemonName = document.createElement('h1');
// pokemonName.className = "center-text"
// pokemonName.innerHTML = pokemon["name"];
//
// let pictureDiv = document.createElement('div')
// pictureDiv.style = "width:239px;margin:auto"
//
// let innerPicDiv = document.createElement('div');
// innerPicDiv.style = 'width:96px;margin:auto'
//
// let pokePic = document.createElement('img')
// pokePic.setAttribute("data-id", index)
// pokePic.setAttribute("data-action", "flip")
// pokePic.className = "toggle-sprite"
// pokePic.src = pokemon["sprites"]["front"]
//
// pokemonContainer.appendChild(element);
// element.appendChild(pokemonFrame);
// pokemonFrame.appendChild(pokemonName);
// pokemonFrame.appendChild(pictureDiv);
// pictureDiv.appendChild(innerPicDiv);
// innerPicDiv.appendChild(pokePic);
// })
//
// let input = document.querySelector('#pokemon-search-input');
//
// function findPokemon(){
//   console.log(input.value);
//     return POKEMON.filter(function(pokemon) {
//       // console.log(pokemon["name"]);
//       return pokemon["name"].search(input.value) !== -1 });
// };
//
//  input.addEventListener('keydown', findPokemon);
//
// // debugger;
//
// pokemonContainer.addEventListener("click", function(e){
//
//   if (e.target.src.search("back") === -1){
//   e.target.src = POKEMON[e.target.getAttribute("data-id")]["sprites"]["back"]
// } else {
//   e.target.src = POKEMON[e.target.getAttribute("data-id")]["sprites"]["front"]
// }
// })

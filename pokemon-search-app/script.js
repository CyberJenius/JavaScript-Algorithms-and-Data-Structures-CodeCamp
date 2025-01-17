const url = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon";
const input = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const nameField = document.getElementById("pokemon-name");
const idField = document.getElementById("pokemon-id");
const heightField = document.getElementById("height");
const weightField = document.getElementById("weight");
const imageField = document.getElementById("pokemon-image");
const typesField = document.getElementById("types");
const hpField = document.getElementById("hp");
const attackField = document.getElementById("attack");
const defenseField = document.getElementById("defense");
const specialAttackField = document.getElementById("special-attack");
const specialDefenseField = document.getElementById("special-defense");
const speedField = document.getElementById("speed");
const chartArray = [hpField, attackField, defenseField, specialAttackField, specialDefenseField, speedField];

const serializeInput = (input) => {
  if(typeof(input) === "number"){
    console.log(input);
    return input;
  } else if(typeof(input) === "string"){
    input = input.toLowerCase();
    input = input.replace(" ", "-");
    return input;
  }else{
    return;
  }
}

const makeRequest = async (pokeRequest) => {
  try{
    const res = await fetch(`${url}/${pokeRequest}`)
    const data = await res.json();
    return data;
  } catch(err){
    alert("Pokémon not found");
    return;
  }
}

const outputData = (name, id, height, weight, stats, types, sprites) => {
  nameField.textContent = name;
  idField.textContent = `#${id}`;
  heightField.textContent = `Height: ${height}`;
  weightField.textContent = `Weight: ${weight}`;
  console.log(sprites.front_default);
  imageField.setAttribute("src", sprites.front_default);
  console.log(types[0].type.name);
  typesField.innerHTML = "Types:"
  types.forEach(type => {
    typesField.innerHTML += " " + type.type.name + ";";
  });
  console.log(stats);
  for(let i = 0; i < 6; i++){
    chartArray[i].textContent = stats[i].base_stat;
  }
}

const getPokemonData = () => {
  let pokeRequest = serializeInput(input.value);
  makeRequest(pokeRequest).then(
    (result) => {
      console.log(result);
      let {name, id, height, weight, stats, types, sprites} = result;
      outputData(name, id, height, weight, stats, types, sprites);
    }
  );
}




searchBtn.addEventListener("click", getPokemonData);
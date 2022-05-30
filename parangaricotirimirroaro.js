//vamos instanciar nossos elementos
const pokemonPic = document.querySelector('#pokemonPic');
const pokemonNumber = document.querySelector('#pokemonNumber');
const pokemonName = document.querySelector('#pokemonName');
const pokemonDescription = document.querySelector('#pokemonDescription');
const botoes = document.querySelectorAll('.pokeBtn');

const pokémon = {
    squirtle: {
        number: 7,
        name: 'Squirtle',
        image: 'https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/7.svg',
        description: `Squirtle (Japonês: ゼニガメ Zenigame) é um Pokémon do tipo Água, categorizado como Pokémon Tartaruguinha e introduzido na Primeira Geração.
        É um dos três Pokémon iniciais da região de Kanto.`
    },
    charmander: {
        number: 4,
        name: 'Charmander',
        image: 'https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/4.svg',
        description: `Charmander (Japonês: ヒトカゲ Hitokage) é um Pokémon do tipo Fogo introduzido na Primeira Geração.
        É um dos três Pokémon iniciais da região de Kanto.`
    },
    bulbassauro: {
        number: 1,
        name: 'Bulbassauro',
        image: 'https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/1.svg',
        description: `Bulbassauro ou Bulbasaur (Japonês: フシギダネ Fushigidane) é um Pokémon dos tipos Grama e Venenoso introduzido na Primeira Geração.
        É um dos três Pokémon iniciais da região de Kanto.`
    },
}

window.onload = function tocar(){
    musica.play();
}
tocar();

function pokemon1(){ 
    botoes[0].addEventListener('click', function() {
    pokemonPic.src = 'https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/7.svg';
    pokemonNumber.innerHTML = '7';
    pokemonName.innerHTML = 'Squirtle';
    pokemonDescription.innerText = 'Squirtle (Japonês: ゼニガメ Zenigame) é um Pokémon do tipo Água, categorizado como Pokémon Tartaruguinha e introduzido na Primeira Geração. É um dos três Pokémon iniciais da região de Kanto.';
        console.log(pokemon1());
})};

function pokemon2() {
    botoes[1].addEventListener('click', function() {
        pokemonPic.src = 'https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/4.svg';
        pokemonNumber.innerHTML = '4';
        pokemonName.innerHTML = 'Charmander';
        pokemonDescription.innerText = 'Charmander (Japonês: ヒトカゲ Hitokage) é um Pokémon do tipo Fogo introduzido na Primeira Geração. É um dos três Pokémon iniciais da região de Kanto.'
        console.log(pokemon2());
    })
};

function pokemon3() {
    botoes[2].addEventListener('click', function() {
        pokemonPic.src = 'https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/1.svg';
        pokemonNumber.innerHTML = '1'
        pokemonName.innerHTML = 'Bulbassauro'
        pokemonDescription.innerText = `Bulbassauro ou Bulbasaur (Japonês: フシギダネ Fushigidane) é um Pokémon dos tipos Grama e Venenoso introduzido na Primeira Geração.
        É um dos três Pokémon iniciais da região de Kanto.`;
        console.log(pokemon3());
    })
};

pokemon1();
pokemon2();
pokemon3();
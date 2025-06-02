const express = require('express');
const pokemons = require('./db.json')// importa os meus pokemons
const readline = require("readline")

const rl = readline.createInterface({
    input:process.stdin,
    output: process.stdout
});

rl.question("Qual ID do Pokemon voçê quer ?",(answer) => {
    const id = parseInt (answer); // converte a entrada para numero

    const pokemon = pokemons.find(p => p.id === id); //isso busca pelo o id
    if(pokemon){
        //imprime no terminal o nome do pokemon e sua vida
        console.log(`Seu Pokémon é: ${pokemon.nome},${pokemon.hp}`);
    }else{
        //isso é se caso o ID passado nao foi encontrado
        console.log("Pokemon nao foi encontrado com esse ID");
    }
    rl.close();

});

/*const api_url = "localhost:3000/pokemons";


server.get('/pokemons', (req,res) => {
    return res.json(pokemon)
});
server.listen(api_url, () => {
    console.log("")
});
*/
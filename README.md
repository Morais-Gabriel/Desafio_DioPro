🎯 Objetivo
Criar uma lista em formato .json com os nomes e atributos dos Pokémons, como:

Nome

Vida (HP)

Sexo

Level (LV)

📁 Estrutura do Projeto
Foi criado um arquivo db.json com as informações dos Pokémons.

# Os dados foram importados com o seguinte comando:

    const pokemons = require('./db.json');

💻 Interação com o Usuário
# Utilizamos o módulo readline do Node.js para receber a entrada do usuário via terminal:

    const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    });

# O programa solicita ao usuário o ID do Pokémon desejado:

    rl.question("Qual ID do Pokémon você quer? ", (answer) => {
    const id = parseInt(answer); // Converte a entrada para número
    const pokemon = pokemons.find(p => p.id === id); // Busca o Pokémon pelo ID

    if (pokemon) {
        // Exibe os dados do Pokémon encontrado
        console.log(`Seu Pokémon é: ${pokemon.nome}, está no nível ${pokemon.lv}, com ${pokemon.hp} pontos de vida.`);
    } else {
        // Caso o ID não seja encontrado
        console.log("Pokémon não encontrado com esse ID.");
    }

    rl.close();
    });

#🧪 Exemplo de db.json
    
  
    [
      
        {"id": 1,
          "nome": "Cartepie",
          "lv": "2",
          "sexo": "M",
          "hp": "45/45"},

        {"id": 2,
          "nome": "Pikachu",
          "lv": "7",
          "sexo": "F",
          "hp": "55/55"
        },

        {"id": 3,
          "nome": "Bulbasaur",
          "lv": "10",
          "sexo": "F",
          "hp": "75/75"
        },

        {"id": 4,
          "nome": "Charmander",
          "lv": "10",
          "sexo": "F",
          "hp": "100/100"
        },

        {"id": 5,
          "nome": "Squirtle",
          "lv": "6",
          "sexo": "F",
          "hp": "65/65"
        },

        {"id": 6,
          "nome": "Ivysaur",
          "lv": "90",
          "sexo": "M",
          "hp": "1500/1500"
        },

        {
          "id": 7,
          "nome": "Charmeleon",
          "lv": "91",
          "sexo": "M",
          "hp": "1550/1550"
        },

        {"id": 8,
          "nome": "Dragonite",
          "lv": "999",
          "sexo": "F",
          "hp": "9999/9999"
        }

]
    
        
    



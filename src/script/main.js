const main = () => {
    const viewPokemon = () => {
        for (let i = 1; i <= 20; i++) {
            fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
                .then(response => response.json())
                .then(responseJson => {
                    if (responseJson.error) {
                        showMessage(responseJson.error);
                    } else {
                        viewAllPokemon(responseJson);
                    }
                })
                .catch(error => {
                    showMessage(error);
                });
        }
    };

    const viewAllPokemon = (pokemon) => {
        const listOfPokemon = document.querySelector('#list-poke');
        const types = pokemon.types.map(typeObj => typeObj.type.name).join(', ');
        listOfPokemon.innerHTML += `
            <div class="card-content">
                <div class="card-content-main">
                    <img src="${pokemon.sprites.other.dream_world.front_default}" class="card-img" alt="Pokemon">
                    <h5>${pokemon.name}</h5>
                    <p>Type: ${types}</p>
                </div>
            </div>
        `;
    };

    const showMessage = (message = 'Check your internet connection...') => {
        alert(message);
    };

    viewPokemon();
};

export default main;

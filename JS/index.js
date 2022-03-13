const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

//Precisar trabalhar com um evento de clique feito pelo usuário na listagem de pokémons
listaSelecaoPokemons.forEach(pokemon => {
  pokemon.addEventListener('click', () => {
    //remover a classe aberto
    const cartaoPokemonAberto = document.querySelector('.aberto')
    cartaoPokemonAberto.classList.remove('aberto')

    // ao clicar em um pokémon da listagem pegamos o ID desse pokémon pra saber qual cartão mostrar

    const idPokemonSelecionado = pokemon.attributes.id.value

    const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
    const cartaoPokemonParaAbrir = document.getElementById(
      idDoCartaoPokemonParaAbrir
    )
    cartaoPokemonParaAbrir.classList.add('aberto')

    //remover a classe ativo que marca o pokémon selecionado
    const pokemonAtivoNaListagem = document.querySelector('.ativo')
    pokemonAtivoNaListagem.classList.remove('ativo')

    //Adicionar a classe ativo no item da lista selecionado
    const pokemonSelecionadoNaListagem =
      document.getElementById(idPokemonSelecionado)
    pokemonSelecionadoNaListagem.classList.add('ativo')
  })
})

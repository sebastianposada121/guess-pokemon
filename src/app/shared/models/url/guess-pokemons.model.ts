export interface GuessPokemonModel {
  pokemons: () => string,
  pokemonByName: (name: string) => string
}

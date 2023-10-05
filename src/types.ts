export type RawPokemonListItem = {
  name: string
  url: string
}

export type PokeAPIListResponse = {
  count: number
  next: string
  previous: string | null
  results: RawPokemonListItem[]
}

export interface PokemonListItem extends RawPokemonListItem {
  id: number
  spriteUrl: string
}

export type PokemonMove = {
  [key: string]: any
}

export type PokemonType = {
  slot: number
  type: any
}

export type PokemonSprites = {
  front_default: string
  front_shiny: string
  front_female: string
  front_shiny_female: string
  back_default: string
  back_shiny: string
  back_female: string
  back_shiny_female: string
  other: {
    dream_world: {
      front_default: string
      front_female: string
    }
    home: {
      front_default: string
      front_female: string
      front_shiny: string
      front_female_shiny: string
    }
    'official-artwork': {
      front_default: string
    }
  }
}

export type Pokemon = {
  id: number
  name: string
  height: number
  weight: number
  moves: PokemonMove[]
  types: PokemonType[]
  sprites: PokemonSprites
}

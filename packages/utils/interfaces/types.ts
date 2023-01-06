export interface PokemonAPIData {
    count: number
    next: string
    previous: string
    results: Pokemon[]
}

export interface Pokemon {
    name: string
    url: string
}

export interface PokemonDetails {
    id: number
    name: string
    height: number
    weight: number
    abilities: PokemonAbilities[]
}

export interface PokemonAbilities {
    ability: {
        name: string
    }
}
import { HttpClient } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'
import { Preferences } from '@capacitor/preferences'
import { Observable } from 'rxjs'

import type { PokeAPIListResponse, Pokemon } from 'src/types'

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private baseUrl: string = 'https://pokeapi.co/api/v2'
  private spriteUrl: string =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{0}.png'
  private http: HttpClient = inject(HttpClient)

  constructor() {}

  public async index(page: number = 1, size: number = 20) {
    const offset = (page - 1) * size
    const queryParams = `offset=${offset}&limit=${size}`

    return this.http.get(
      `${this.baseUrl}/pokemon?${queryParams}`,
    ) as Observable<PokeAPIListResponse>
  }

  public show(id: number) {
    return this.http.get(`${this.baseUrl}/pokemon/${id}`)
  }

  public getPokemonSpriteUrl(id: number) {
    return this.spriteUrl.replace('{0}', id.toString())
  }

  public async getFavorites(): Promise<Set<Pokemon>> {
    const { value: rawFavorites } = await Preferences.get({ key: 'favorites' })

    if (!rawFavorites) {
      return new Set()
    }
    const favorites = JSON.parse(rawFavorites) as Array<Pokemon>

    return new Set(favorites)
  }

  public async addFavorite(pokemon: Pokemon) {
    const favorites = await this.getFavorites()

    favorites.add(pokemon)

    await Preferences.set({
      key: 'favorites',
      value: JSON.stringify(Array.from(favorites)),
    })
  }

  public async removeFavorite(pokemon: Pokemon) {
    const favorites = await this.getFavorites()

    favorites.delete(pokemon)

    await Preferences.set({
      key: 'favorites',
      value: JSON.stringify(Array.from(favorites)),
    })
  }

  public async isFavorite(pokemon: Pokemon) {
    const favorites = await this.getFavorites()

    return favorites.has(pokemon)
  }
}

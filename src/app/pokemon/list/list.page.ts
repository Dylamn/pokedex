import { Component, OnInit, inject } from '@angular/core'

import { PokemonService } from '../../services/pokemon.service'
import type { PokemonListItem } from 'src/types'
import { InfiniteScrollCustomEvent } from '@ionic/angular'

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  private pokemonService: PokemonService = inject(PokemonService)

  public pokemons: Array<PokemonListItem> = []

  public page: number = 1
  public size: number = 20

  constructor() {}

  async ngOnInit() {
    this.loadPokemons(this.page, this.size)
  }

  async onIonInfinite(event: Event) {
    await this.loadPokemons(++this.page, this.size)
    setTimeout(() => {
      ;(event as InfiniteScrollCustomEvent).target.complete()
    }, 500)
  }

  private async loadPokemons(page: number, size: number) {
    const response = await this.pokemonService.index(page, size)

    response.subscribe((data) => {
      const newPokemons: PokemonListItem[] = data.results.map<PokemonListItem>(
        (pokemon) => {
          // Filter to remove empty strings (like when a trailling slash is present)
          const urlParts = pokemon.url.split('/').filter((part) => part !== '')
          const id = parseInt(urlParts[urlParts.length - 1], 10)

          return {
            id,
            ...pokemon,
            spriteUrl: this.pokemonService.getPokemonSpriteUrl(id),
          }
        },
      )

      this.pokemons = [...this.pokemons, ...newPokemons]
    })
  }
}

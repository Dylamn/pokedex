import { Component, Input, OnInit, inject } from '@angular/core'

import { PokemonService } from 'src/app/services/pokemon.service'
import type { Pokemon } from 'src/types'

@Component({
  selector: 'app-favorite-button',
  templateUrl: './favorite-button.component.html',
  styleUrls: ['./favorite-button.component.scss'],
})
export class FavoriteButtonComponent implements OnInit {
  private pokemonService: PokemonService = inject(PokemonService)

  @Input() pokemon!: Pokemon
  public isFavorite: boolean = false

  constructor() {}

  ngOnInit() {
    console.log(this.pokemon)
  }

  public async addFavorite() {
    if (!this.pokemon || this.isFavorite) {
      return
    }

    await this.pokemonService.addFavorite(this.pokemon)
    this.isFavorite = !this.isFavorite
  }

  public async removeFavorite() {
    if (!this.pokemon || !this.isFavorite) {
      return
    }

    await this.pokemonService.removeFavorite(this.pokemon)
    this.isFavorite = !this.isFavorite
  }
}

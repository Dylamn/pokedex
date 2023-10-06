import { Component, OnInit, inject } from '@angular/core'
import { PokemonService } from 'src/app/services/pokemon.service'
import { Pokemon, PokemonListItem } from 'src/types'

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.page.html',
  styleUrls: ['./favorite.page.scss'],
})
export class FavoritePage implements OnInit {
  private pokemonService: PokemonService = inject(PokemonService)

  public favorites: Array<Pokemon> = []
  public listItems: Array<PokemonListItem> = []
  constructor() {}

  async ngOnInit() {
    this.favorites = await this.pokemonService.getFavorites()
    this.listItems = this.favorites.map((p) => ({
      id: p.id,
      name: p.name,
      spriteUrl: p.sprites.front_default,
    }))
  }
}

import { Component, Input, OnInit } from '@angular/core'
import { Pokemon, PokemonListItem } from 'src/types'

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  @Input() pokemons: Array<PokemonListItem> = []

  constructor() {}

  ngOnInit() {}

  @Input() onIonInfiniteCallback!: (event: Event) => void

  async onIonInfinite(event: Event) {
    await this.onIonInfiniteCallback(event)
  }
}

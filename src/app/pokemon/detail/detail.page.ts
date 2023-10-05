import { Component, OnInit, inject } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { NavController } from '@ionic/angular'

import { PokemonService } from 'src/app/services/pokemon.service'
import type { Pokemon } from 'src/types'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  private pokemonService: PokemonService = inject(PokemonService)
  private nav: NavController = inject(NavController)

  private id?: number
  public pokemon?: Pokemon
  public isFavorite: boolean = false

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    const pathId = this.activatedRoute.snapshot.paramMap.get('id')
    const parsedId = parseInt(pathId || '', 10)

    if (isNaN(parsedId)) {
      return this.nav.back()
    }

    this.id = parsedId

    this.pokemonService.show(this.id).subscribe((data) => {
      this.pokemon = data as Pokemon
      this.pokemonService.isFavorite(this.pokemon)
    })
  }

  public async addFavorite() {
    if (!this.pokemon) {
      return
    }
    console.log(this.pokemon)

    await this.pokemonService.addFavorite(this.pokemon)
  }

  public async removeFavorite() {
    if (!this.pokemon) {
      return
    }

    await this.pokemonService.removeFavorite(this.pokemon)
  }
}

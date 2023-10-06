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

  async ngOnInit() {
    const pathId = this.activatedRoute.snapshot.paramMap.get('id')
    const parsedId = parseInt(pathId || '', 10)

    if (isNaN(parsedId)) {
      return this.nav.back()
    }

    this.id = parsedId

    this.pokemonService.show(this.id).subscribe(async (data) => {
      this.pokemon = data as Pokemon
      console.log(await this.pokemonService.isFavorite(this.pokemon))
      console.log(this.pokemon)

      this.isFavorite = await this.pokemonService.isFavorite(this.pokemon)
    })
  }
}

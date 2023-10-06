import { NgModule } from '@angular/core'

import { PokemonListComponent } from './pokemon-list/pokemon-list.component'
import { FavoriteButtonComponent } from './favorite-button/favorite-button.component'
import { CommonModule } from '@angular/common'

@NgModule({
  declarations: [PokemonListComponent, FavoriteButtonComponent],
  imports: [CommonModule],
  exports: [PokemonListComponent, FavoriteButtonComponent],
})
export class ComponentsModule {}

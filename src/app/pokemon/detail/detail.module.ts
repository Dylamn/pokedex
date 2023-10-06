import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { IonicModule } from '@ionic/angular'

import { DetailPageRoutingModule } from './detail-routing.module'

import { DetailPage } from './detail.page'

import { TeamAddComponent } from 'src/app/components/team-add/team-add.component'
import { FavoriteButtonComponent } from 'src/app/components/favorite-button/favorite-button.component'

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, DetailPageRoutingModule],
  declarations: [DetailPage, FavoriteButtonComponent, TeamAddComponent],
})
export class DetailPageModule {}

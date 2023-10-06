import { NgModule } from '@angular/core'
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pokemon/list/list.module').then((m) => m.ListPageModule),
  },
  {
    path: 'detail/:id',
    loadChildren: () =>
      import('./pokemon/detail/detail.module').then((m) => m.DetailPageModule),
  },
  {
    path: 'favorite',
    loadChildren: () =>
      import('./pokemon/favorite/favorite.module').then(
        (m) => m.FavoritePageModule,
      ),
  },
  {
    path: 'team',
    loadChildren: () =>
      import('./pokemon/team/team.module').then((m) => m.TeamPageModule),
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

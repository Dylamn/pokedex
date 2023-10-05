import { Component } from '@angular/core'
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'List', url: '/list', icon: 'albums' },
    { title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
    { title: 'Team', url: '/folder/team', icon: 'people' },
  ]

  public labels = ['Shiny']

  constructor() {}
}

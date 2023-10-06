import { Component, inject } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  private route = inject(ActivatedRoute)

  public appPages = [
    { title: 'List', url: '/', icon: 'albums' },
    { title: 'Favorites', url: '/favorite', icon: 'heart' },
    { title: 'Team', url: '/team', icon: 'people' },
  ]

  public labels = ['Shiny']

  constructor() {}
}

import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-team-add',
  templateUrl: './team-add.component.html',
  styleUrls: ['./team-add.component.scss'],
})
export class TeamAddComponent implements OnInit {
  public inTeam: boolean = false

  constructor() {}

  ngOnInit() {}

  async addToTeam() {
    this.inTeam = true
  }
}

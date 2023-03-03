import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-actor-page',
  templateUrl: './actor-page.component.html',
  styleUrls: ['./actor-page.component.css']
})
export class ActorPageComponent {

  actorId!: number;
  actors!: {
    id: string;
    cast: { profile_path: string; id: number }[];
  };
  actor!: {
    biography: string;
    birthday: Date;
    name: string;
    profile_path: string;
  };

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.actorId = parseInt(params['actorId']);
      this.getInfoActorByIdFromService();
    });
  }


  getInfoActorByIdFromService() {
    this.apiService
      .getInfoActorById(this.actorId)
      .subscribe((data) => (this.actor = data));
  }

}

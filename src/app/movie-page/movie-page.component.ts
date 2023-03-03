import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Movie } from '../models';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css'],
})
export class MoviePageComponent {
  movieId!: number;
  movie!: Movie;

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

  isFavorite: boolean= false;
  favorites!: Movie[];

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.movieId = parseInt(params['movieId']);
      this.getInfoMovieByIdFromApi();
      this.getActorsOfMovieByIdFromService();
    });

    this.route.params.subscribe((params) => {
      this.actorId = parseInt(params['actorId']);
      this.getActorsOfMovieByIdFromService();
    });

    this.favorites=this.getFromLocalStorage();
  }

  getInfoMovieByIdFromApi() {
    this.apiService
      .getInfoMovieById(this.movieId)
      .subscribe((data) => (this.movie = data));
  }

  getInfoActorByIdFromService() {
    this.apiService
      .getInfoActorById(this.actorId)
      .subscribe((data) => (this.actor = data));
  }

  getActorsOfMovieByIdFromService() {
    this.apiService
      .getActorsOfMovieById(this.movieId)
      .subscribe((data) => (this.actors = data));
  }

  handleFavorites(movieFav: Movie){
    if(this.favorites.find((movie) => movieFav.id === movie.id)){
      const index = this.favorites.findIndex((x)=>x.id=== this.movieId);
      this.favorites.splice(index,1);
      localStorage.setItem('favorites', JSON.stringify(this.favorites));
      this.isFavorite = false;
    } else {
      console.log("toto");
      this.favorites.push(movieFav);
      localStorage.setItem('favorites', JSON.stringify(this.favorites));
      this.isFavorite = true;
    }
  }

  getFromLocalStorage(){
    const movieData= localStorage.getItem('favorites');
    const dataMovies= JSON.parse(movieData || '[]');
    return dataMovies;
  }
}

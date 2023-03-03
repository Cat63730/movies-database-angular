import { Component, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { Movie } from '../models';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent {

  favorites!:Movie[];
  isFavorite: boolean= false;
  movieId?:number;
 
  @Input() movies: Movie[]=[];

  constructor(public apiService : ApiService){}

  ngOnInit(){
    this.favorites=this.getFromLocalStorage();
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

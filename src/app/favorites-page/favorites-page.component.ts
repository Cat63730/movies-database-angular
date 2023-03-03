import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Movie } from '../models';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.css']
})
export class FavoritesPageComponent {

  favorites!: Movie[];
  movie!: Movie;
  

  constructor(public apiService : ApiService){};

  ngOnInit(){
    this.favorites = this.getFromLocalStorage();
  }

  getFromLocalStorage(): Movie[]{
    const movieData = localStorage.getItem('favorites');
    const dataMovies: Movie[] = JSON.parse(movieData || '[]');
    return dataMovies;
  }

  deleteFavorite(movie: Movie){
    // Récupération de l'index du film cliqué avec comme condition : si l'index existe dans le local strorage
    // et dans le tableau des favoris.
    const index = this.favorites.findIndex((x)=> x.id === movie.id);
    // Supprimer l'element du tableau à l'index choisi et on enlève 1 element
    this.favorites.splice(index, 1);
    //On met à jour le localStorage avec les modifications faites.
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }

}

import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Movie } from '../models';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent {

  searchInput: string="";
  searchedMovies: Movie[] = [];
  movies: Movie[] = [];

  constructor(private apiService: ApiService){}

  ngOnInit(){
    this.getMoviesByInputFromService();
  }

  getMoviesByInputFromService(){
    this.apiService.getMoviesByInput(this.searchInput).subscribe((data)=>this.movies = data.results);
    
  }

  nameMovieToSearch(){
    this.getMoviesByInputFromService();
  }
}

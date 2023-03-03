import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Movie } from '../models';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  popularMovies: Movie[] = [];
  actualMovies: Movie[] = [];
  bestRatedMovies: Movie[] = [];
  futureReleases: Movie[] = [];
  searchMovies: Movie[] = [];

 

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getPopularMoviesFromService();
    this.getActualMoviesFromService();
    this.getBestRatedMoviesFromService();
    this.getFutureReleasesFromService();


  }

  getPopularMoviesFromService() {
    this.apiService
      .getPopularMovies()
      .subscribe((data) => (this.popularMovies = data.results));
  }

  getActualMoviesFromService() {
    this.apiService
      .getActualMovies()
      .subscribe((data) => (this.actualMovies = data.results));
  }

  getBestRatedMoviesFromService() {
    this.apiService
      .getBestRatedMovies()
      .subscribe((data) => (this.bestRatedMovies = data.results));
  }
  getFutureReleasesFromService() {
    this.apiService
      .getFutureReleases()
      .subscribe((data) => (this.futureReleases = data.results));
  }



}

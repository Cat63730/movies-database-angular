import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  getPopularMovies(){
    return this.http.get<any>('https://api.themoviedb.org/3/movie/popular/?api_key=5ef70dff97c33c5f9842b8100353074e&language=fr-FR&page=1')
  }
  
  getActualMovies(){
    return this.http.get<any>('https://api.themoviedb.org/3/movie/now_playing?api_key=5ef70dff97c33c5f9842b8100353074e&language=fr-FR&page=1&region=FR')
  }

  getBestRatedMovies(){
    return this.http.get<any>('https://api.themoviedb.org/3/movie/top_rated?api_key=5ef70dff97c33c5f9842b8100353074e&language=fr-FR&page=1')
  }

  getFutureReleases(){
    return this.http.get<any>('https://api.themoviedb.org/3/movie/upcoming?api_key=5ef70dff97c33c5f9842b8100353074e&language=fr-FR&page=1&region=FR')
  }

  getInfoMovieById(movieId: any){
    return this.http.get<any>(`https://api.themoviedb.org/3/movie/${movieId}?api_key=5ef70dff97c33c5f9842b8100353074e&language=fr-FR`)
  }

  getInfoActorById(actorId: any){
    return this.http.get<any>(`https://api.themoviedb.org/3/person/${actorId}?api_key=5ef70dff97c33c5f9842b8100353074e&language=fr-FR`)
  }

  getMoviesListActorById(actorId: any){
    return this.http.get<any>(`https://api.themoviedb.org/3/person/${actorId}/movie_credits?api_key=5ef70dff97c33c5f9842b8100353074e&language=fr-FR`)
  }

  getMoviesByInput(input: any){
    return this.http.get<any>(`https://api.themoviedb.org/3/search/movie?api_key=5ef70dff97c33c5f9842b8100353074e&language=fr-FR&query=${input}&page=1&include_adult=false&region=FR`)
  }

  getActorsOfMovieById(movieId: any){
    return this.http.get<any>(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=5ef70dff97c33c5f9842b8100353074e&language=fr-FR`)
  }

  
}

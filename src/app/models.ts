export interface Movie {
  
    
      adult: boolean,
      backdrop_path: string,
      id: number,
      original_title: string,
      popularity: number,
      poster_path: string,
      release_date: Date,
      title: string,
      genres: { id: number; name: string }[];
      overview: string;
      display: boolean;
}

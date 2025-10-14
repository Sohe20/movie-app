import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private http = inject(HttpClient);
  private apiUrl = 'https://api.themoviedb.org/3';
  private apiKey = environment.TMDB.API_KEY;
  private readAccessToken = environment.TMDB.READ_ACCESS_TOKEN;

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.readAccessToken}`
  });

  constructor() { }

  /**
   * Get trending movies for a specific time window
   * @param timeWindow 'day' or 'week'
   * @returns Observable of trending movies
   */
  getTrendingMovies(timeWindow: 'day' | 'week' = 'week'): Observable<Movie[]> {
    return this.http.get<{ results: Movie[] }>(
      `${this.apiUrl}/trending/movie/${timeWindow}`,
      { headers: this.headers }
    ).pipe(
      map(response => response.results),
      catchError(this.handleError)
    );
  }

  /**
   * Get trending TV series for a specific time window
   * @param timeWindow 'day' or 'week'
   * @returns Observable of trending TV series
   */
  getTrendingTvSeries(timeWindow: 'day' | 'week' = 'week'): Observable<any[]> {
    return this.http.get<{ results: any[] }>(
      `${this.apiUrl}/trending/tv/${timeWindow}`,
      { headers: this.headers }
    ).pipe(
      map(response => response.results),
      catchError(this.handleError)
    );
  }

  /**
   * Get details of a specific movie
   * @param movieId The ID of the movie
   * @returns Observable of movie details
   */
  getMovieDetails(movieId: number): Observable<Movie> {
    return this.http.get<Movie>(
      `${this.apiUrl}/movie/${movieId}`,
      { headers: this.headers }
    ).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * Get details of a specific TV series
   * @param tvId The ID of the TV series
   * @returns Observable of TV series details
   */
  getTvSeriesDetails(tvId: number): Observable<any> {
    return this.http.get<any>(
      `${this.apiUrl}/tv/${tvId}`,
      { headers: this.headers }
    ).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * Get movies by genre
   * @param genreId The ID of the genre
   * @param page Page number for pagination
   * @returns Observable of movies filtered by genre
   */
  getMoviesByGenre(genreId: number, page: number = 1): Observable<Movie[]> {
    const params = new HttpParams()
      .set('with_genres', genreId.toString())
      .set('page', page.toString());

    return this.http.get<{ results: Movie[] }>(
      `${this.apiUrl}/discover/movie`,
      { headers: this.headers, params }
    ).pipe(
      map(response => response.results),
      catchError(this.handleError)
    );
  }

  /**
   * Get TV series by genre
   * @param genreId The ID of the genre
   * @param page Page number for pagination
   * @returns Observable of TV series filtered by genre
   */
  getTvSeriesByGenre(genreId: number, page: number = 1): Observable<any[]> {
    const params = new HttpParams()
      .set('with_genres', genreId.toString())
      .set('page', page.toString());

    return this.http.get<{ results: any[] }>(
      `${this.apiUrl}/discover/tv`,
      { headers: this.headers, params }
    ).pipe(
      map(response => response.results),
      catchError(this.handleError)
    );
  }

  /**
   * Search for movies
   * @param query Search query
   * @param page Page number for pagination
   * @returns Observable of movies matching the search query
   */
  searchMovies(query: string, page: number = 1): Observable<Movie[]> {
    const params = new HttpParams()
      .set('query', query)
      .set('page', page.toString());

    return this.http.get<{ results: Movie[] }>(
      `${this.apiUrl}/search/movie`,
      { headers: this.headers, params }
    ).pipe(
      map(response => response.results),
      catchError(this.handleError)
    );
  }

  /**
   * Search for TV series
   * @param query Search query
   * @param page Page number for pagination
   * @returns Observable of TV series matching the search query
   */
  searchTvSeries(query: string, page: number = 1): Observable<any[]> {
    const params = new HttpParams()
      .set('query', query)
      .set('page', page.toString());

    return this.http.get<{ results: any[] }>(
      `${this.apiUrl}/search/tv`,
      { headers: this.headers, params }
    ).pipe(
      map(response => response.results),
      catchError(this.handleError)
    );
  }

  /**
   * Get movie recommendations based on a movie
   * @param movieId The ID of the movie
   * @returns Observable of recommended movies
   */
  getMovieRecommendations(movieId: number): Observable<Movie[]> {
    return this.http.get<{ results: Movie[] }>(
      `${this.apiUrl}/movie/${movieId}/recommendations`,
      { headers: this.headers }
    ).pipe(
      map(response => response.results),
      catchError(this.handleError)
    );
  }

  /**
   * Get TV series recommendations based on a TV series
   * @param tvId The ID of the TV series
   * @returns Observable of recommended TV series
   */
  getTvSeriesRecommendations(tvId: number): Observable<any[]> {
    return this.http.get<{ results: any[] }>(
      `${this.apiUrl}/tv/${tvId}/recommendations`,
      { headers: this.headers }
    ).pipe(
      map(response => response.results),
      catchError(this.handleError)
    );
  }

  /**
   * Get movie genres list
   * @returns Observable of movie genres
   */
  getMovieGenres(): Observable<{ id: number, name: string }[]> {
    return this.http.get<{ genres: { id: number, name: string }[] }>(
      `${this.apiUrl}/genre/movie/list`,
      { headers: this.headers }
    ).pipe(
      map(response => response.genres),
      catchError(this.handleError)
    );
  }

  /**
   * Get TV series genres list
   * @returns Observable of TV series genres
   */
  getTvGenres(): Observable<{ id: number, name: string }[]> {
    return this.http.get<{ genres: { id: number, name: string }[] }>(
      `${this.apiUrl}/genre/tv/list`,
      { headers: this.headers }
    ).pipe(
      map(response => response.genres),
      catchError(this.handleError)
    );
  }

  /**
   * Get videos for a movie (trailers, teasers, etc.)
   * @param movieId The ID of the movie
   * @returns Observable of videos
   */
  getMovieVideos(movieId: number): Observable<any[]> {
    return this.http.get<{ results: any[] }>(
      `${this.apiUrl}/movie/${movieId}/videos`,
      { headers: this.headers }
    ).pipe(
      map(response => response.results),
      catchError(this.handleError)
    );
  }

  /**
   * Get videos for a TV series (trailers, teasers, etc.)
   * @param tvId The ID of the TV series
   * @returns Observable of videos
   */
  getTvVideos(tvId: number): Observable<any[]> {
    return this.http.get<{ results: any[] }>(
      `${this.apiUrl}/tv/${tvId}/videos`,
      { headers: this.headers }
    ).pipe(
      map(response => response.results),
      catchError(this.handleError)
    );
  }

  /**
   * Error handler for HTTP requests
   * @param error The error object
   * @returns Observable with error
   */
  private handleError(error: any): Observable<never> {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
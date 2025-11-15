import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../core/components/header/header.component';
import { BannerComponent } from '../../core/components/banner/banner.component';
import { MovieCarouselComponent } from '../../shared/components/movie-carousel/movie-carousel.component';
import { MovieService } from '../../core/services/movie.service';
import { Movie } from '../../core/models/movie.model';


@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [HeaderComponent, BannerComponent , MovieCarouselComponent],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.scss'
})
export default class BrowseComponent {
  // Sample featured movie data
  featuredMovie = {
    title: 'Stranger Things',
    overview: 'When a young boy disappears, his mother, a police chief, and his friends must confront terrifying supernatural forces in order to get him back.',
    videoKey: 'b9EkMc79ZSU' // YouTube video ID for Stranger Things trailer
  };

   private movieService = inject(MovieService);

   trendingMovies: Movie[] = [];

   constructor(){
 this.movieService.getTrendingMovies().subscribe({
  next: (res: Movie[]) => {
    console.log(res); 
    this.trendingMovies = res;
  },
  error: (err) => console.error(err)
});

   }

  
  ngOnInit(): void {

  }
}

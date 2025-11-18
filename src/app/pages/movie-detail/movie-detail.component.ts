import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from '../../core/components/banner/banner.component';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [CommonModule, BannerComponent],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.scss'
})
export default class MovieDetailComponent {
  movie = {
    title: 'The Silent Echo',
    overview:
      'In a future where memories can be traded, a lone archivist uncovers a conspiracy that could rewrite history. As the lines blur between past and present, she must decide which truths deserve to be remembered.',
    releaseYear: 2024,
    rating: 'TV-MA',
    duration: '2h 12m',
    genres: ['Sci‑Fi', 'Thriller', 'Drama'],
    cast: [
      { name: 'Ava Morgan', role: 'Archivist' },
      { name: 'Elijah Reeves', role: 'Investigator' },
      { name: 'Noor Khalid', role: 'Memory Broker' },
      { name: 'Kai Watanabe', role: 'Historian' },
      { name: 'Mara Díaz', role: 'Journalist' }
    ],
    trailerKey: 'dQw4w9WgXcQ'
  };

  similarMovies = [
    {
      title: 'Neon Fracture',
      year: 2023,
      posterUrl:
        'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Echoes of Light',
      year: 2022,
      posterUrl:
        'https://images.unsplash.com/photo-1497032205916-ac2c6d1f3b88?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Memory Drift',
      year: 2021,
      posterUrl:
        'https://images.unsplash.com/photo-1517817748491-3c7b27640856?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Silent Waves',
      year: 2024,
      posterUrl:
        'https://images.unsplash.com/photo-1478720568477-152d9b164e0e?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Quantum Bloom',
      year: 2020,
      posterUrl:
        'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop'
    }
  ];
}

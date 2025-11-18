import { AfterViewInit, Component, ElementRef, inject, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Movie } from '../../../core/models/movie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-carousel',
  imports: [CommonModule],
  templateUrl: './movie-carousel.component.html',
  styleUrl: './movie-carousel.component.scss'
})
export class MovieCarouselComponent implements AfterViewInit {
  @ViewChild('swiperContainer') swiperContainer!: ElementRef;
  @Input() title: string = 'Movie Carousel'; 
  @Input() movies : Movie[] = []
  private swiper: Swiper | null = null;
  
  router = inject(Router)
   

  ngAfterViewInit() {
    this.initSwiper();
  }

  initSwiper() {
    if (this.swiperContainer && this.swiperContainer.nativeElement) {
      this.swiper = new Swiper(this.swiperContainer.nativeElement, {
        modules: [Navigation, Pagination, Autoplay],
        slidesPerView: 3,
        slidesPerGroup:2,
        spaceBetween: 10,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 15
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 25
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 30
          }
        },
        grabCursor: true,
        centeredSlides: true,
        slideToClickedSlide: true,
        watchOverflow: true,
     
      });
    }
  }

  navigateToMovieDetail(id:number){
    if(id){
      this.router.navigate(['/movie', id]);
    }
  }
}

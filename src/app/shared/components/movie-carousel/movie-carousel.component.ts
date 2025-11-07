import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import Swiper from 'swiper'
@Component({
  selector: 'app-movie-carousel',
  imports: [],
  templateUrl: './movie-carousel.component.html',
  styleUrl: './movie-carousel.component.scss'
})
export class MovieCarouselComponent implements AfterViewInit{
@ViewChild('swiperContainer') swiperContainer !: ElementRef;


 ngAfterViewInit(){
  this.initSwaper();
 }


 initSwaper(){
   return new Swiper(this.swiperContainer.nativeElement , {
    slidesPerView: 3,
    slidesPerGroup : 2,
    loop : true,
    centeredSlides : true,
    breakpoints : {
      425 : {
        slidesPerView : 1,
        slidesPerGroup : 1
      },
      640 : {
        slidesPerView : 1,
        slidesPerGroup : 1
      },
      768 : {
        slidesPerView : 2,
        slidesPerGroup : 2
      },
      1024 : {
        slidesPerView : 3,
        slidesPerGroup : 2
      }
    }
   })
 }

}

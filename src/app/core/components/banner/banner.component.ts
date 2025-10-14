import { Component, Input, OnChanges, SimpleChanges, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent implements OnChanges {
  private sanitizer = inject(DomSanitizer);
  
  @Input() bannerTitle: string = '';
  @Input() bannerOverview: string = '';
  @Input() key: string = '';
  
  safeVideoUrl: SafeResourceUrl = '';
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['key']) {
      this.updateVideoUrl();
    }
  }
  
  private updateVideoUrl(): void {
    if (this.key) {
      const videoUrl = `https://www.youtube.com/embed/${this.key}?autoplay=1&mute=1&loop=1&controls=0&showinfo=0`;
      this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
    }
  }
}

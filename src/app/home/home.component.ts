import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-home',
  imports: [CommonModule, CarouselModule],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  images = [
  '/assets/20241212_101007.jpg',
  'assets/DSC01462.JPG',
  'assets/DSC01464.JPG',
  'assets/DSC01470.JPG',
  'assets/IMG_3587.jpg',
  'assets/IMG_3657.jpg',
  'assets/IMG_3664.jpg',
  'assets/IMG_3677.jpg',
  'assets/kirkstudios +254 726384114  (509).jpg'
  ];

  customOptions = {
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 }
    }
  };
} 

import { Component } from '@angular/core';
// import { CarouselModule } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent {

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

}

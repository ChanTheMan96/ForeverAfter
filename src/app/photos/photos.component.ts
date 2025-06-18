import { Component, HostListener } from '@angular/core';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import lgZoom from 'lightgallery/plugins/zoom';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent {
  arr = new Array(42);
  settings = {
    counter: false,
    plugins: [lgZoom],
  };
  showScrollTopButton = false;
  onBeforeSlide = (detail: BeforeSlideDetail): void => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
  };

  logCondition(value: number): boolean {
    console.log(value);
    console.log('Condition Check:', ![18].includes(value));
    return ![18].includes(value);
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.showScrollTopButton = window.pageYOffset > 300;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

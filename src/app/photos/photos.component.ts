import { Component, HostListener } from '@angular/core';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import lgZoom from 'lightgallery/plugins/zoom';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent {
  // Explicitly list image numbers so that the display order can
  // be customized if needed. Move image 28 to the end of the array
  // to ensure it is not adjacent to image 15 in the rendered gallery.
  arr: number[] = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27,
    29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42,
    28
  ];
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

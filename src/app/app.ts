import { Component} from '@angular/core';
import { SortArrayPipe } from './sort-array-pipe';
import { DegreeConvertPipe } from './degree-convert-pipe';

@Component({
  imports: [SortArrayPipe, DegreeConvertPipe],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
[x: string]: any;
  array = [2,56,-2,413,3,1,0,-5];
  products = [
        {id: 1, name: 'Earrings', category: 'Accessories'},
        {id: 2, name: 'Dress', category: 'Clothes'},
        {id: 3, name: 'Laptop', category: 'Electronics'},
        {id: 4, name: 'Necklace', category: 'Accessories'},
        {id: 5, name: 'Boots', category: 'Clothes'},
        {id: 6, name: 'Speakers', category: 'Electronics'}
      ];
      chosenValue="Electronics";
  

  showFirstImage = true;

  changeImage() {
    this.showFirstImage = !this.showFirstImage;
  }
}


import { Component, OnInit } from '@angular/core';

import { LocalStorageService } from '../../services/local-storage.service';
import { Item } from '../../domain/item';
import { Comment } from '../../domain/comment';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  items: Item[];
  newInputItemTitle: string;
  selectedItemIndex: number;

  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit() {
    this.localStorageService.castItems.subscribe(
      observableItems => { this.items = observableItems; }
    );
    this.localStorageService.castSelectedIndex.subscribe(
      observableIndex => { this.selectedItemIndex = observableIndex; }
    );
  }

  add(): void {
    if (this.newInputItemTitle.length > 4) {
      let newItem = new Item(this.newInputItemTitle, []);
      this.localStorageService.save(newItem);
    } else {
      alert('New Item title should have not less than 4 symbols');
    }
  }

  delete(index: number): void {
    this.localStorageService.remove(index);
  }

  setSelected(index: number): void {
    this.localStorageService.setSelected(index);
  }
  
}

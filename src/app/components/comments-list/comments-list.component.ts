import { Component, OnInit } from '@angular/core';

import { Item } from '../../domain/item';
import { LocalStorageService } from '../../services/local-storage.service';
import { Comment } from '../../domain/comment';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit {

  items: Item[];
  newInputItemComment: string;
  selectedItemIndex: number;
  previouselySelectedCommentsIndex: number;

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
    if (this.selectedItemIndex > -1) {
      console.log(this.newInputItemComment, new Comment(this.newInputItemComment));
      this.items[this.selectedItemIndex].comments.push(new Comment(this.newInputItemComment));
      this.localStorageService.saveAll();
    }
  }

  getSelectedItems(): Comment[] {
    this.clearInput();
    let isExists = this.selectedItemIndex !== -1 && 
                   this.items[this.selectedItemIndex];
    
    return isExists ? this.items[this.selectedItemIndex].comments : [];
  }

  getSelectedItemCommentsTitle(): string {
    return this.selectedItemIndex !== -1 ? 'Comments #' + (this.selectedItemIndex + 1) : '';
  }

  clearInput(): void {
    if (this.previouselySelectedCommentsIndex != this.selectedItemIndex) {
      this.newInputItemComment = '';
      this.previouselySelectedCommentsIndex = this.selectedItemIndex;
    }
  }

}

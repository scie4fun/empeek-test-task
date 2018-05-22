import { Injectable } from '@angular/core';

import { LocalStorage } from '@ngx-pwa/local-storage';
import { Item, defaultItems } from '../domain/item';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LocalStorageService {

  private storageName: string = 'items';
  readonly DEFAULT_SELECTED_ITEM_INDEX: number = -1;

  items = new BehaviorSubject<Item[]>([]);
  castItems = this.items.asObservable();
  selectedItemIndex = new BehaviorSubject<number>(
    this.DEFAULT_SELECTED_ITEM_INDEX
  );
  castSelectedIndex = this.selectedItemIndex.asObservable();

  constructor(protected localStorage: LocalStorage) {
    this.findAll().subscribe(
      data => {
        if (data != null  && data.length) {
          for (let i in data) {
            data[i].isSelected = false;
          }
          this.items.next(data);
        }
      }
    );
  }

  save(newItem: Item): void {
    this.items.getValue().push(newItem);
    this.saveAll();
  }

  saveAll(): void {
    this.localStorage.setItem(this.storageName, this.items.getValue()).subscribe(() => {});
  }

  findAll(): Observable<Item[]> {
    return this.localStorage.getItem<Item[]>(this.storageName);
  }

  remove(index: number): void {
    this.items.getValue().splice(index, 1);
    this.saveAll();
  }

  removeAll(): void {
    this.localStorage.removeItemSubscribe(this.storageName);
  }

  setSelected(newSelectedItemIndex: number): void {
    let itemsList = this.items.getValue();
    for (let i = 0; i < itemsList.length; ++i) {
      if (i == newSelectedItemIndex) {
        itemsList[i].isSelected = true;
        this.selectedItemIndex.next(newSelectedItemIndex);
      } else {
        itemsList[i].isSelected = false;
      }
    }
  }
}

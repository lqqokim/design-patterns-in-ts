import Array from './Array'
import Iterator from "./interface/Iterator";
import Item from './Item';

class ArrayIterator implements Iterator<Item> {
  private _index: number;

  constructor(private array: Array) {
    this._index = -1;
  }

  next(): boolean {
    this._index++;
    return this._index < this.array.count;
  }
  current(): Item {
    return this.array.getItem(this._index)
  }
}

export default ArrayIterator;
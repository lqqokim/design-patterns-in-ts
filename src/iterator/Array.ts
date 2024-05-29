import Aggregator from "./interface/Aggregator";
import ArrayIterator from "./ArrayIterator";
import Item from "./Item";
import Iterator from "./interface/Iterator";

class Array implements Aggregator<Item> {
  constructor(private items: Item[]) {}

  public getItem(index: number) {
    return this.items[index];
  }

  public get count() {
    return this.items.length;
  }

  iterator(): Iterator<Item> {
    return new ArrayIterator(this); // Array class의 객체 전달
  }
}

export default Array;
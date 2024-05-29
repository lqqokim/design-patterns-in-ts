/**
 * Aggregator 구성 항목에 대한 데이터 객체
 */
class Item {
  // private _name: string;
  // private _cost: number;

  // constructor(name: string, cost: number) {
  //   this._name = name;
  //   this._cost = cost;
  // }

  constructor(private _name: string, private _cost: number) {

  }

  get name() {
    return this._name
  }

  get cost() {
    return this._cost;
  }
}

export default Item;
import Array from './Array'
import Item from './Item'

const items: Item[] = [
  new Item('Macbook', 2500),
  new Item('Gram', 1500),
  new Item('MSI', 1800),
  new Item('Dell', 1300)
]

const array = new Array(items);
const iterator = array.iterator();

while (iterator.next()) {
  const item = iterator.current();
  const { name, cost } = item;

  const domItem = document.createElement('div');
  domItem.innerText = `${name}: ${cost}`;
  document.body.appendChild(domItem);

  domItem.classList.add('iterator-item');
}

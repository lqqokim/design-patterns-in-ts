interface Iterator<T> {
  /**
   * Iterator 인터페이스를 통해서 Aggregator 의 다음 구성요소를 얻을 수 있도록 하고 
   * 다음 요소를 얻을 수 있다면 true 얻을 수 없다면 false 를 반환한다.
   */
  next(): boolean;
  /**
   * 구성 데이터를 얻어서 반환
   */
  current(): T;
}


export default Iterator;
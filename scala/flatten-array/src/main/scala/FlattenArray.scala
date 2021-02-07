object FlattenArray {
  /** Flattens a nested list
   *
   * Each element in the input array is mapped to a List
   * and then flattened
   *
   * @param nestedItems a potentially nested list
   * @return a flattened list of ints
   */
  def flatten(nestedItems: List[Any]): List[Int] = nestedItems.flatMap {
    case null => List()
    case element: Int => List(element)
    case element: List[Any] => flatten(element) // recursive call
  }
}

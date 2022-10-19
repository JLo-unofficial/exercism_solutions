export class BinarySearchTree {
  #left?: BinarySearchTree;
  #right?: BinarySearchTree;
  #data: number;
  constructor(data: number) {
    this.#data = data;
  }

  public get data(): number {
    return this.#data;
  }

  public get right(): BinarySearchTree | undefined {
    return this.#right;
  }

  public get left(): BinarySearchTree | undefined {
    return this.#left;
  }

  public insert(item: number): void {
    if (item > this.#data) {
      this.#right = new BinarySearchTree(item);
    } else {
      this.#left = new BinarySearchTree(item);
    }
  }

  public each(callback: (data: unknown) => unknown): unknown {
    throw new Error("Remove this statement and implement this function");
  }
}

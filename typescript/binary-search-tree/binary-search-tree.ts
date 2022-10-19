export class BinarySearchTree {
  #data: number;
  constructor(data: number) {
    this.#data = data;
  }

  public get data(): number {
    return this.#data;
  }

  public get right(): BinarySearchTree | undefined {
    throw new Error('Remove this statement and implement this function')
  }

  public get left(): BinarySearchTree | undefined {
    throw new Error('Remove this statement and implement this function')
  }

  public insert(item: unknown): unknown {
    throw new Error('Remove this statement and implement this function')
  }

  public each(callback: (data: unknown) => unknown): unknown {
    throw new Error('Remove this statement and implement this function')
  }
}

import { Generic, Comparator, HeapType } from './types';
import { minHeapComparator, maxHeapComparator } from './utils';

export default class Heap<T extends Generic> {
  private heap: T[] = [];
  private comparator: Comparator;
  private length = 0;

  constructor(
    list: T[],
    heapType: HeapType = 'min',
  ) {
    this.comparator = heapType === 'min' ? minHeapComparator : maxHeapComparator;
    this.buildHeap(list);
  }

  buildHeap(list: T[]) {
    for (const val of list) {
      this.insert(val);
    }
  }

  siftDown(idx: number) {
    if (this.heap.length < 2) return;
    let currIdx = idx;

    let firstChildIdx = this.getFirstChildIdx(currIdx);
    let secondChildIdx = this.getSecondChildIdx(currIdx);
    let minMaxChildIdx = this.getMinOrMaxChildIdx(firstChildIdx, secondChildIdx);

    while (minMaxChildIdx !== -1 && this.comparator(this.heap[minMaxChildIdx], this.heap[currIdx])) {
      this.swap(currIdx, minMaxChildIdx);

      currIdx = minMaxChildIdx;
      firstChildIdx = this.getFirstChildIdx(currIdx);
      secondChildIdx = this.getSecondChildIdx(currIdx);
      minMaxChildIdx = this.getMinOrMaxChildIdx(firstChildIdx, secondChildIdx);
    }
  }

  siftUp(idx: number) {
    if (this.heap.length < 2) return;

    let currIdx = idx;
    let parentIdx = this.getParentIdx(idx);

    while (parentIdx !== -1 && this.comparator(this.heap[currIdx], this.heap[parentIdx])) {
      this.swap(parentIdx, currIdx);

      currIdx = parentIdx;
      parentIdx = this.getParentIdx(currIdx);
    }

    return;
  }

  peek() {
    return this.heap[0];
  }

  size() {
    return this.length;
  }

  isEmpty() {
    return this.length === 0;
  }

  remove() {
    this.swap(0, this.heap.length - 1);
    const removed = this.heap.pop();
    this.length -= 1;
    this.siftDown(0);
    return removed;
  }

  insert(value: T) {
    this.heap.push(value);
    this.siftUp(this.heap.length - 1);
    this.length += 1;
  }

  getParentIdx(idx: number): number {
    const index = Math.floor((idx - 1) / 2);
    return index >= 0 ? index : -1;
  }

  getFirstChildIdx(idx: number): number {
    return 2 * idx + 1;
  }

  getSecondChildIdx(idx: number): number {
    return 2 * idx + 2;
  }

  getMinOrMaxChildIdx(firstChildIdx: number, secondChildIdx: number): number {
    const firstChild = this.heap[firstChildIdx];
    const secondChild = this.heap[secondChildIdx];

    if (!firstChild && firstChild !== 0) return -1;
    if (!secondChild && secondChild !== 0) return firstChildIdx;
    return this.comparator(firstChild, secondChild) ? firstChildIdx : secondChildIdx; 
  }

  swap(idx: number, swapIdx: number): void {
    const temp = this.heap[swapIdx];
    this.heap[swapIdx] = this.heap[idx];
    this.heap[idx] = temp;
  }
}

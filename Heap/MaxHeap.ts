import Heap from './Heap';

export class MaxHeap extends Heap {
    constructor(input: number[] = []) {
        super(input, 'max');
    }
}

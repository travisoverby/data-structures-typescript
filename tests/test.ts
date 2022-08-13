import 'jest';
import Heap from '../src/Heap';

describe('test', () => {
    it('test should return true', async () => {
      const bool: boolean = false;
      expect(bool).toBe(false);
    });

    it('min heap peek should show smallest element for numbers', async () => {
      const heap = new Heap([3,2,1,0], 'min');
      expect(heap.peek()).toBe(0);
    });

    it('min heap peek should show smallest element for string', async () => {
      const heap = new Heap(['d','c','b','a'], 'min');
      expect(heap.peek()).toBe('a');
    });

    it('min heap peek should show smallest element for generics', async () => {
      const list = [
        { value: 3 },
        { value: 2 },
        { value: 1 },
        { value: -1 },
      ];
      const heap = new Heap(list, 'min');
      expect(heap.peek().value).toBe(-1);
    });
});
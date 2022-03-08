import { 
  HeapComparator, 
  HeapComparatorParam,
} from './types';

export const HEAP_MIN_COMP: HeapComparator = (a: HeapComparatorParam, b: HeapComparatorParam): boolean => a < b;
export const HEAP_MAX_COMP: HeapComparator = (a: HeapComparatorParam, b: HeapComparatorParam): boolean => a > b;

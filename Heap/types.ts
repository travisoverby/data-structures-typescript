export type HeapType = 'min' | 'max';
export type HeapComparatorParam = string | number;
export type HeapComparator = (a: HeapComparatorParam, b: HeapComparatorParam) => boolean;

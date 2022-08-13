import {
  Generic,
  IValueParam,
  Comparator,
} from './types';

const hasValueParam = (param: Generic): param is IValueParam => {
  return (param as IValueParam).value !== undefined;
}

export const minHeapComparator: Comparator = (a: Generic, b: Generic): boolean => {
  const isGenericType = hasValueParam(a) && hasValueParam(b);
  return isGenericType ? a.value! < b.value! : a < b;
}

export const maxHeapComparator: Comparator = (a: Generic, b: Generic): boolean => {
  const isGenericType = hasValueParam(a) && hasValueParam(b);
  return isGenericType ? a.value! > b.value! : a > b;
}
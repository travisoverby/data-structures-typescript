export interface IValueParam {
  value: string | number;
}

export type Generic = IValueParam | string | number;
export type Comparator = <T extends Generic>(a: T, b: T) => boolean;
export type HeapType = 'min' | 'max'
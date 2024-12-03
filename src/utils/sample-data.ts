import { Item } from '../types';

export const generateItems = (count: number): Item[] =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    title: `Item ${i + 1}`,
  }));

import { useVirtualizer } from '@tanstack/react-virtual';
import { useRef } from 'react';

export function useVirtualList<T>(items: T[], rowHeight: number) {
  const parentRef = useRef<HTMLDivElement>(null);

  const virtualizer = useVirtualizer({
    count: items.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => rowHeight,
  });

  return {
    parentRef,
    virtualizer,
  };
}

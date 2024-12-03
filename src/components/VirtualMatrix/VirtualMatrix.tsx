import { useVirtualizer } from '@tanstack/react-virtual';
import { useRef } from 'react';
import { clsx } from 'clsx';

interface MatrixCell {
  row: number;
  col: number;
  value: string;
}

const COLUMN_COUNT = 100;
const ROW_COUNT = 1000;
const CELL_SIZE = 60;

export function VirtualMatrix() {
  const parentRef = useRef<HTMLDivElement>(null);

  const rowVirtualizer = useVirtualizer({
    count: ROW_COUNT,
    getScrollElement: () => parentRef.current,
    estimateSize: () => CELL_SIZE,
    overscan: 5,
  });

  const columnVirtualizer = useVirtualizer({
    count: COLUMN_COUNT,
    getScrollElement: () => parentRef.current,
    estimateSize: () => CELL_SIZE,
    horizontal: true,
    overscan: 5,
  });

  return (
    <div
      ref={parentRef}
      className="h-[600px] w-full overflow-auto rounded-lg border border-gray-200 dark:border-gray-700"
    >
      <div
        style={{
          height: `${rowVirtualizer.getTotalSize()}px`,
          width: `${columnVirtualizer.getTotalSize()}px`,
          position: 'relative',
        }}
      >
        {rowVirtualizer.getVirtualItems().map(virtualRow =>
          columnVirtualizer.getVirtualItems().map(virtualCol => {
            const cell: MatrixCell = {
              row: virtualRow.index,
              col: virtualCol.index,
              value: `R${virtualRow.index}:C${virtualCol.index}`,
            };

            return (
              <div
                key={`${virtualRow.index}-${virtualCol.index}`}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: `${CELL_SIZE}px`,
                  height: `${CELL_SIZE}px`,
                  transform: `translateX(${virtualCol.start}px) translateY(${virtualRow.start}px)`,
                }}
                className={clsx(
                  'flex items-center justify-center border-b border-r border-gray-200 bg-white text-sm transition-colors dark:border-gray-700 dark:bg-gray-800',
                  (virtualRow.index + virtualCol.index) % 2 === 0 && 'bg-gray-50 dark:bg-gray-900'
                )}
              >
                {cell.value}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

import { useVirtualList } from '../hooks/useVirtualList';

interface Item {
  id: number;
  title: string;
}

interface VirtualListProps {
  items: Item[];
}

export function VirtualList({ items }: VirtualListProps) {
  const { parentRef, virtualizer } = useVirtualList(items, 50);

  return (
    <div
      ref={parentRef}
      className="h-[400px] w-full overflow-auto rounded-lg border border-gray-200 dark:border-gray-700"
    >
      <div
        style={{
          height: `${virtualizer.getTotalSize()}px`,
          width: '100%',
          position: 'relative',
        }}
      >
        {virtualizer.getVirtualItems().map(virtualItem => (
          <div
            key={virtualItem.key}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: `${virtualItem.size}px`,
              transform: `translateY(${virtualItem.start}px)`,
            }}
            className="border-b border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800"
          >
            {items[virtualItem.index].title}
          </div>
        ))}
      </div>
    </div>
  );
}

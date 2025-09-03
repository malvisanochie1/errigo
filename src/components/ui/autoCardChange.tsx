"use client";

import { useState, useEffect, ReactNode } from "react";

type AutoChangeCardProps<T> = {
  items: T[];
  interval?: number;
  renderItem: (item: T) => ReactNode;
};

export function AutoChangeCard<T>({
  items,
  interval = 3000,
  renderItem,
}: AutoChangeCardProps<T>) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, interval);

    return () => clearInterval(timer);
  }, [items.length, interval]);

  return (
    <div>
      {renderItem(items[index])}
    </div>
  );
}

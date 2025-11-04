import { useState, useEffect, useRef, RefObject, useMemo } from 'react';

interface IntersectionObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

export const useIntersectionObserver = (options: IntersectionObserverOptions): { ref: RefObject<HTMLDivElement>; isIntersecting: boolean } => {
  const [isIntersecting, setIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const memoizedOptions = useMemo(() => options, [options.root, options.rootMargin, JSON.stringify(options.threshold)]);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    }, memoizedOptions);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, memoizedOptions]);

  return { ref, isIntersecting };
};
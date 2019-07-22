import { useState, useEffect, useRef } from 'react';

export default function useNearScreen() {
  const el = useRef();
  const [show, setShow] = useState(false);
  useEffect(() => {
    import('intersection-observer');
    const observer = new IntersectionObserver(entries => {
      const { isIntersecting } = entries[0];
      if (isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    });
    observer.observe(el.current);
    () => {
      observer.unobserve(el.current);
    };
  }, [el]);

  return [show, el];
}

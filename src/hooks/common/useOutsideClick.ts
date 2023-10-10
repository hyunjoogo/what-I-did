import { useEffect, useRef } from 'react';

const useOutsideClick = <T extends HTMLElement>(onClickOutSide: () => void) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickOutSide();
      }
    };

    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.addEventListener('click', handleClickOutside, true);
    };
  }, [onClickOutSide, ref]);

  return ref;
};

export default useOutsideClick;

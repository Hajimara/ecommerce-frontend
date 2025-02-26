import { useEffect, useRef, useState } from 'react';
import { throttle } from 'lodash';

function useHeaderScroll() {
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const lastScrollY = useRef(0);
  const isHeaderHiddenRef = useRef(false);

  useEffect(() => {
    window.scrollTo(0, 0); // 새로고침 시 스크롤 위치 초기화

    const handleScroll = throttle(() => {
      const currentScrollY = window.scrollY;

      // 헤더 숨김 false, 현재 스크롤이 내려갈 경우
      if (currentScrollY > lastScrollY.current && !isHeaderHiddenRef.current) {
        isHeaderHiddenRef.current = true;
        setIsHeaderHidden(true);
        // 헤더 숨김 true, 현재 스크롤이 올라 경우
      } else if (currentScrollY === 0 && isHeaderHiddenRef.current) {
        isHeaderHiddenRef.current = false;
        setIsHeaderHidden(false);
      }

      lastScrollY.current = currentScrollY;
    }, 100);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { isHeaderHidden };
}

export default useHeaderScroll;

// hooks/useActiveSection.ts
import { useState, useEffect, useRef } from 'react';

export const useActiveSection = (sectionIds: string[]) => {
  const [activeId, setActiveId] = useState('');
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {

    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      // 当区块进入视窗顶部 40% 的范围时，标记为 active
      { rootMargin: '-40% 0px -60% 0px' } 
    );

    // 监听所有内容区块
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.current?.observe(element);
      }
    });

    // 组件卸载时停止监听
    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.current?.unobserve(element);
        }
      });
    };
  }, [sectionIds]);

  return activeId;
};
import { useEffect, useRef, type PropsWithChildren } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";

type SmoothScrollProps = {
  className?: string;
};

const SmoothScroll = ({
  children,
  className,
}: PropsWithChildren<SmoothScrollProps>) => {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let locomotiveScroll: any;

    const initScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      if (containerRef.current) {
        if (locomotiveScroll) locomotiveScroll.destroy();

        locomotiveScroll = new LocomotiveScroll({
          el: containerRef.current,
          smooth: true,
        });

        setTimeout(() => {
          const scrollbars = document.querySelectorAll(".c-scrollbar");
          if (scrollbars.length > 1) {
            scrollbars[1].remove();
          }
        }, 100);
      }
    };

    initScroll();

    return () => {
      locomotiveScroll?.destroy();
    };
  }, []);
  return (
    <main ref={containerRef} className={className} data-scroll-container>
      {children}
    </main>
  );
};

export default SmoothScroll;

import { useLenis } from "lenis/react";
import { useEffect } from "react";

export const useScrollTop = (devs?: any) => {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    lenis.scrollTo(0);
    // window.scrollTo({ behavior: "smooth", top: 0 });
  }, [lenis]);
};

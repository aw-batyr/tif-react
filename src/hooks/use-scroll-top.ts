import { useEffect } from "react";

export const useScrollTop = (devs?: any) => {
  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  }, [devs]);
};

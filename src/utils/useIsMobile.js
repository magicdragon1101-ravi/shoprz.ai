import { useEffect, useState } from "react";
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1080);
  const onResize = () => {
    setIsMobile(window.innerWidth < 768);
  };
  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);
  return isMobile;
};
export default useIsMobile;

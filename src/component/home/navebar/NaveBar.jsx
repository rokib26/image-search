import { useEffect, useState } from "react";
import "./navebar.css";

const NaveBar = () => {
  const [naveScroll, setNaveScroll] = useState(false);

  const handelScroll = () => {
    if (window.scrollY > 0) {
      setNaveScroll(true);
    } else {
      setNaveScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handelScroll);
    return () => {
      window.removeEventListener("scroll", handelScroll);
    };
  }, []);

  return (
   <>
    <div className={`navber ${naveScroll ? "scrolled" : ""}`}>
      <div className="nave-bar">
        rokib
      </div>
    </div>
    <div className="manu">
      h
    </div>
   </>
  );
};

export default NaveBar;
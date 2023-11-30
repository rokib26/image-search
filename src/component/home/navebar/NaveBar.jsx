import { useEffect, useState } from "react";
import "./navebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const NaveBar = () => {
  const [naveScroll, setNaveScroll] = useState(false);
  const [showNave, setShowNave] = useState(false);

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

  const toggolNave = () => {
    setShowNave(true);
  };

  const closeManu = () => {
    setShowNave(false);
  };

  return (
    <>
      <div className={`navber ${naveScroll ? "scrolled" : ""}`}>
        <div className="nave-bar">
          <div className="logo">
            <h2>
              <i>image</i>
            </h2>
          </div>
        </div>
      </div>

      <div className={`menu ${showNave ? "show" : ""}`}>
        <FontAwesomeIcon icon={faTimes} onClick={closeManu} />
      </div>

      <div className="manu">
        <div className="manu-icon">
          <FontAwesomeIcon icon={faBars} onClick={toggolNave} />
        </div>
      </div>
    </>
  );
};

export default NaveBar;

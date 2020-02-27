import React, { createContext, useContext, useState, useEffect } from "react";
import { useSelector, useDispatch} from 'react-redux';


const WindowDimensionsCtx = createContext(null);
const WindowDimensionsProvider = ({ children }) => {
  // const history = useSelector(store => store.router);
  // console.log(history);

  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    window.addEventListener(`resize`, handleResize);
    // console.log(dimensions);
    return () => {
      // console.log(dimensions);
      window.removeEventListener(`resize`, handleResize);
    };
  }, []);
  return (
      <WindowDimensionsCtx.Provider value={dimensions}>
          {children}
      </WindowDimensionsCtx.Provider>
  )
};

export default WindowDimensionsProvider
export const useWindowDimensions = () => useContext(WindowDimensionsCtx)

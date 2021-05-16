/* eslint-disable radix */
/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import React, { createContext, useState } from 'react';

const ScrollHandlerContext = createContext(null);

export const ScrollHandlerContextProvider = ({ children }) => {
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(false);


  const handleScroll = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 150) {
      setChecked(true); // do something at end of scroll
    }
    if (window.scrollY >= 350) {
      setChecked2(true); // do something at end of scroll
    }
  };

  console.log(checked);

  return (
    <ScrollHandlerContext.Provider value={{ handleScroll, checked, checked2 }}>
      {children}
    </ScrollHandlerContext.Provider>
  );
};

export default ScrollHandlerContext;

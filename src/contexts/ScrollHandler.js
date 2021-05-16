/* eslint-disable radix */
/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import React, { createContext, useState } from 'react';

const ScrollHandlerContext = createContext(null);

export const ScrollHandlerContextProvider = ({ children }) => {
  const [checked, setChecked] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 150) {
      setChecked(true); // do something at end of scroll
    }
  };

  console.log(checked);

  return (
    <ScrollHandlerContext.Provider value={{ handleScroll, checked }}>
      {children}
    </ScrollHandlerContext.Provider>
  );
};

export default ScrollHandlerContext;

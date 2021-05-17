/* eslint-disable radix */
/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import React, { createContext, useState } from 'react';

const ScrollHandlerContext = createContext(null);

export const ScrollHandlerContextProvider = ({ children }) => {
  const [checked, setChecked] = useState(true);

  const handleClick = (e) => {
    e.preventDefault();
    setChecked(!!checked)
  };

  return (
    <ScrollHandlerContext.Provider
      value={{ handleClick, checked }}
    >
      {children}
    </ScrollHandlerContext.Provider>
  );
};

export default ScrollHandlerContext;

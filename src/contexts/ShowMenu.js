/* eslint-disable radix */
/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import React, { createContext, useState } from 'react';

const ShowMenuContext = createContext(null);

export const ShowMenuContextProvider = ({ children }) => {
  const [checked, setChecked] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setChecked(true);
  };

  return (
    <ShowMenuContext.Provider value={{ handleClick, checked }}>
      {children}
    </ShowMenuContext.Provider>
  );
};

export default ShowMenuContext;

import { createContext } from 'react';

export type InfoType = {
  width: number;
};

export const initialValue: InfoType = {
  width: window.innerWidth,
};

const Info = createContext(initialValue);

export default Info;

import { createContext, useContext, useState } from "react";

const Context = createContext();

/* Context to manage loading state of the image from unsplash */

export function ImageProvider({ children }) {
  const [image, setImage] = useState(false);
  return (
    <Context.Provider value={[image, setImage]}>{children}</Context.Provider>
  );
}

export function useImageContext() {
  return useContext(Context);
}
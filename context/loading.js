import { createContext, useContext, useState } from "react";

const Context = createContext();

/* Context to manage loading state on buttons between different components */

export function LoadingProvider({ children }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  return (
    <Context.Provider value={[isSubmitting, setIsSubmitting]}>{children}</Context.Provider>
  );
}

export function useLoadingContext() {
  return useContext(Context);
}
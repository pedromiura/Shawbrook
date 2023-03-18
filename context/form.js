import { createContext, useContext, useState } from "react";

const Context = createContext();

/* Context to pass data through the different components and avoid prop drilling */

export function FormProvider({ children }) {
  const [form, setForm] = useState("");
  return (
    <Context.Provider value={[form, setForm]}>{children}</Context.Provider>
  );
}

export function useFormContext() {
  return useContext(Context);
}
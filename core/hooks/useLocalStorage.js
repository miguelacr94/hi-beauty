import { useEffect, useState } from "react";

const useLocalStorage = (storageKey) => {
  const [value, setValue] = useState(null);

  const deleteKey = () => {
    localStorage.removeItem(storageKey);
  };

  const setKey = (v) => {
    localStorage.setItem(storageKey, JSON.stringify(v));
  };

  useEffect(() => {
    setValue(JSON.parse(localStorage.getItem(storageKey)));
  }, [storageKey]);

  return { value, setKey, deleteKey };
};

export default useLocalStorage;

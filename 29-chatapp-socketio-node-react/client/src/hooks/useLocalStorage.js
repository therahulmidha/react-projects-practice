import { useEffect, useState } from "react";

const PREFIX = "whatsapp-clone";

export const useLocalStorage = (key, initialValue) => {
  const prefixedKey = PREFIX + key;

  // operations on localStorage are slow, hence use function form of useState
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixedKey);
    if (jsonValue !== null && jsonValue !== undefined) {
      return JSON.parse(jsonValue);
    } else if (typeof initialValue === "function") {
      return initialValue();
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value));
  }, [value, prefixedKey]);

  return [value, setValue];
};

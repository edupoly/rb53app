import { useEffect, useState } from "react";

//state and logic
export function useCounter(icount, step, name) {
  console.log("useCounter called");
  var [count, setCount] = useState(icount);

  useEffect(() => {
    if (window.localStorage.getItem(name)) {
      setCount(+window.localStorage.getItem(name));
    } else {
      window.localStorage.setItem(name, icount);
    }
  }, []);
  function incCount() {
    setCount((cv) => {
      return cv + step;
    });
  }

  useEffect(() => {
    window.localStorage.setItem(name, count);
    document.title = `${name} : ${count}`;
  }, [count, name]);

  function decCount() {
    setCount(count - step);
  }
  return [count, incCount, decCount];
}

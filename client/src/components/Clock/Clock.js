import { useState, useEffect } from "react";
const Clock = () => {
  const [clock, setClock] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    let id = setInterval(() => {
      setClock(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return <h1 className="clock">{clock}</h1>;
};

export default Clock;

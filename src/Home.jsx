import React, { useEffect } from "react";

function Home() {
  useEffect(() => {
    console.log("Home Gadu puttadu");
    return () => {
      console.log("Home gadu Chachadu");
    };
  }, []);
  return (
    <div>
      <h1>Home Page Component</h1>
    </div>
  );
}

export default Home;

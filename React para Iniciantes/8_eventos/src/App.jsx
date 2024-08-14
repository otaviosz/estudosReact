import React from "react";

const App = () => {
  const handleClick = (event) => {
    console.log(event);
  };

  const handleScroll = (event) => {
    console.log(event);
  };

  window.addEventListener("scroll", handleScroll);
  return (
    <div style={{ height: "200vh" }}>
      <button onClick={handleClick}>Teste</button>
    </div>
  );
};

export default App;

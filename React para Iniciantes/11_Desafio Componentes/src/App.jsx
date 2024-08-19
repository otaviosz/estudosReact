import React from "react";
import Header from "./Header";
import Home from "./Home";
import Produtos from "./Produtos"

const App = () => {
  let Pagina = Home
  const {pathname} = window.location

  if(pathname === '/produtos') {
    Pagina = Produtos
  }

  return <div>
    <Header/>
    <Pagina />
  </div>;
};

export default App;

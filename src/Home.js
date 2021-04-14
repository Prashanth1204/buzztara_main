import React from "react";
import Data from "./Data";
import TableGrid from "./TableGrid";
import Trial from "./Trial";
import Searchbar from "./Searchbar";
import Navbar from "./Navbar";
import Up from "./Up";


function Home() {
  return (
    <div className="App">
    <Navbar></Navbar>
    <Up></Up>
    <Data></Data>     
    </div>
  );
}

export default Home;

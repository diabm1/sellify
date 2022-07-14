import React from 'react';
import { useState } from "react";
import Nav from "./components copy/Nav/Nav";
import Page from "./pages/Page";
import Header from "./components copy/Header";
import Footer from "./components copy/Footer";

function App() {
  const [pages] = useState([
    { name: "shop" },
    { name: "cart" },
    { name: "contact" },
    { name: "log in" }
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);
    
  return (
    <div>
      <Header>
      <Nav pages={pages}
      setCurrentPage={setCurrentPage}
      currentPage={currentPage}></Nav>
      </Header>
      <main>
        <Page currentPage={currentPage}></Page>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;

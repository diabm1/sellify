import React from 'react';
import PageContent from './PageContent';
import Contact from '../screens/Contact';
import Shop from "../screens/Shop";
import Cart from "../screens/Cart"
import SignIn from "../components copy/SignIn"

import { capitalizeFirstLetter } from "../utils/helpers";

function Page({ currentPage }) {

  const renderPage = () => {
    switch (currentPage.name) {
      case 'shop':
        return <Shop />;
      case 'cart':
        return <Cart />;
      case 'contact':
        return <Contact />;
      case 'log in':
        return <SignIn />;
      default:
        return <Shop />;
    }
  };

  return (
    <section>
      <h2>{capitalizeFirstLetter(currentPage.name)}</h2>
      <PageContent>{renderPage()}</PageContent>
    </section>
  );
}
export default Page;

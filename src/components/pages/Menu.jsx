import React, { useEffect } from 'react';
import MenuHeader from '../containers/MenuHeader';
import MenuListContainer from '../containers/MenuListContainer';

export default function Menu() {
  useEffect(() => {
    document.title = 'Menu | Foodies';
  }, []);
  return (
    <>
      <MenuHeader />
      <MenuListContainer />
    </>
  );
}

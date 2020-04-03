import React from 'react';
import { useSelector } from 'react-redux';
import { IsAdmin } from '../selectors/authSelectors';
import Header from '../components/Header';

const HeaderContainer = () => {
  const isAdmin = useSelector(IsAdmin);
  return (
    <Header isAdmin></Header>
  )
}

export default HeaderContainer;

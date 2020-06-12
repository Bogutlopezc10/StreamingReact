import React from 'react';
import { useSelector } from 'react-redux';
import { IsAdmin, IsTeacher } from '../selectors/authSelectors';
import Header from '../components/Header';

const HeaderContainer = () => {
  const isAdmin = useSelector(IsAdmin);
  const isTeacher = useSelector(IsTeacher);
  return (
    <Header 
      isAdmin = {isAdmin}
      isTeacher = {isTeacher}
    />
  )
}

export default HeaderContainer;

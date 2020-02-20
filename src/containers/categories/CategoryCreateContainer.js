import React from 'react';
import MainHeader from '../../components/MainHeader';
import CategoryCreate from '../../components/categories/CategoryCreate';

class CategoryCreateContainer extends React.Component{
    render(){
        return (
            <>
                <MainHeader backgroundHeaderColor="#30b3ff" textHeader="Crear categoria" />
                <CategoryCreate borderTopColor="#30b3ff"/>
            </>
        );
    }
}

export default CategoryCreateContainer;
import React from 'react';
// Components
import Header from './header';
import Fotter from './footer';

const Layout = (props) => {
    console.log(props)
    return (
        <>
        <Header/>
        {props.children }
        
        {/* <Fotter/> */}
        </>
    );
};
export default Layout;
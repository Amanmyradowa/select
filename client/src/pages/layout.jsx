import React,{useState} from 'react';
import {Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const outline = {
  borderRadius:'20px',
  overflow:'hidden',
}

function Layout() {
  return (
    // <div className='container' style={outline}>
      <div className='layout'>
        <Header />
        <div className='header_space'></div>
        <Outlet/>
        <Footer />
      </div>
    // </div>
  );
}

export default Layout;
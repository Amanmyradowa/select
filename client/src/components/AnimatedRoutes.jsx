import React from 'react';
import { Route, Routes, useLocation} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Layout from "../pages/layout";

// Pages
import Main from '../pages/index';
import BildirishGosh from '../pages/BildirishGosh';
import Login from '../pages/Login';
import Login2 from '../pages/Login2';
import Category from '../pages/Category';
import MarketPage from '../pages/MarketPage';

function AnimatedRoutes() {
  return (
    <Routes>
      <Route path={"/"} element={<Layout />}>
        <Route index element={<Main />}/>
        <Route path='/BildirishGosh' element={<BildirishGosh />}/>
        <Route path='/Login' element={<Login />}/>
        <Route path='/Login2' element={<Login2 />}/>
        <Route path='/Category/:id' element={<Category />}/>
        <Route path='/MarketPage' element={<MarketPage />}/>
      </Route>
    </Routes>
  );
}

export default AnimatedRoutes;

import "./assets/styles/App.css";
import React, {createContext} from "react";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/index";
import Navbar from "./pages/Navbar";
// Pages
import AboutUs from "./pages/AboutUs";
import Categories from './pages/categories/Categories';
import EditCategory from './pages/categories/EditCategory';
import Subcategories from './pages/categories/Subcategories';
import SubcategoriesAdd from './pages/categories/SubcategoriesAdd';
import SubcategoriesEdit from './pages/categories/SubcategoriesEdit';
import Banners from './pages/banners/Banners';
import BannerAdd from './pages/banners/BannerAdd';
import BannerEdit from './pages/banners/BannerEdit';
import BannerOpen from './pages/banners/BannerOpen';
import MarketOpenOneProduct from "./pages/markets/marketOpenOneProduct";
import Markets from './pages/markets/markets';
import MarketOpen from './pages/markets/marketOpen';
import MarketEdit from './pages/markets/marketEdit';
import Comments from './pages/comments/Comments';
import Profile from './pages/Profile';
import Login from "./pages/Login";
import Users from "./pages/users/Users";
import MailShow from "./pages/users/MailShow";
import SERVER_URL from '../src/common/Config'
import Products from './pages/products/Products';
import EditProduct from './pages/products/EditProduct';



export const AppContext = createContext();
const App = ()=>{
  return(
    <AppContext.Provider value={{
      SERVER_URL
    }}>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Navbar />}>
            <Route index element={<Index />}/>
            <Route path={"/products"} element={<Products />}/>
            <Route path={"/products/edit"} element={<EditProduct />}/>
            <Route path={"/aboutUs"} element={<AboutUs />}/>
            <Route path={"/categories"} element={<Categories />}/>
            <Route path={"/categories/edit"} element={<EditCategory />}/>
            <Route path={"/categories/subcategory"} element={<Subcategories />}/>
            <Route path={"/categories/subcategory/add"} element={<SubcategoriesAdd />}/>
            <Route path={"/categories/subcategory/edit"} element={<SubcategoriesEdit />}/>
            <Route path={"/banners"} element={<Banners />}/>
            <Route path={"/banners/add"} element={<BannerAdd />}/>
            <Route path={"/banners/edit"} element={<BannerEdit />}/>
            <Route path={"/banners/open"} element={<BannerOpen />}/>
            <Route path={"/comments"} element={<Comments />}/>
            <Route path={"/markets"} element={<Markets />}/>
            <Route path={"/markets/open"} element={<MarketOpen />}/>
            <Route path={"/markets/edit"} element={<MarketEdit />}/>
            <Route path={"/markets/open/openProduct"} element={<MarketOpenOneProduct />}/>
            <Route path={"/profile"} element={<Profile />}/>
            <Route path={"/users"} element={<Users />}/>
            <Route path={"/mailShow"} element={<MailShow />}/>
          </Route>
          <Route path={"/login"} element={<Login />}/>
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App;
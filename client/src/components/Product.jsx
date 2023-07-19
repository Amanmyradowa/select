import React, { useState } from "react";
import { Link } from "react-router-dom";

function Product() {
  const [count, setCount] = useState(1);
  const [basket, setBasket] = useState(true);

  const plus = () => {
    setCount(count + 1);
  };

  const minus = () => {
    if (count < 2) {
      setBasket(true);
    } else {
      setCount(count - 1);
    }
  };
  const addCart = (id) => {
    setBasket(false);
  };
  return (
    <>
      <Link to={"/"} className="product">
        <div className="product_image">
          <img src={require("../assets/images/delete/product.png")} alt="" />
          <div className="product_price">
            150<span>TMT</span>
          </div>
        </div>
        <div className="product_info">
          <div className="product_name">Fen Darak</div>
          <div className="product_date_visit">
            <div className="product_date">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.25 4.72168C8.25 4.52109 8.41789 4.35848 8.625 4.35848H9.375C9.58211 4.35848 9.75 4.52109 9.75 4.72168V5.4481C9.75 5.64869 9.58211 5.8113 9.375 5.8113H8.625C8.41789 5.8113 8.25 5.64869 8.25 5.4481V4.72168Z"
                  fill="#7A7A7A"
                />
                <path
                  d="M6 4.72168C6 4.52109 6.16789 4.35848 6.375 4.35848H7.125C7.33211 4.35848 7.5 4.52109 7.5 4.72168V5.4481C7.5 5.64869 7.33211 5.8113 7.125 5.8113H6.375C6.16789 5.8113 6 5.64869 6 5.4481V4.72168Z"
                  fill="#7A7A7A"
                />
                <path
                  d="M2.25 6.90092C2.25 6.70033 2.41789 6.53772 2.625 6.53772H3.375C3.58211 6.53772 3.75 6.70033 3.75 6.90092V7.62734C3.75 7.82793 3.58211 7.99054 3.375 7.99054H2.625C2.41789 7.99054 2.25 7.82793 2.25 7.62734V6.90092Z"
                  fill="#7A7A7A"
                />
                <path
                  d="M4.5 6.90092C4.5 6.70033 4.66789 6.53772 4.875 6.53772H5.625C5.83211 6.53772 6 6.70033 6 6.90092V7.62734C6 7.82793 5.83211 7.99054 5.625 7.99054H4.875C4.66789 7.99054 4.5 7.82793 4.5 7.62734V6.90092Z"
                  fill="#7A7A7A"
                />
                <path
                  d="M2.625 0C2.83211 0 3 0.162613 3 0.363207V0.726413H9V0.363207C9 0.162613 9.16789 0 9.375 0C9.58211 0 9.75 0.162613 9.75 0.363207V0.726413H10.5C11.3284 0.726413 12 1.37687 12 2.17924V10.1698C12 10.9722 11.3284 11.6226 10.5 11.6226H1.5C0.671573 11.6226 0 10.9722 0 10.1698V2.17924C0 1.37687 0.671573 0.726413 1.5 0.726413H2.25V0.363207C2.25 0.162613 2.41789 0 2.625 0ZM0.75 2.90565V10.1698C0.75 10.571 1.08579 10.8962 1.5 10.8962H10.5C10.9142 10.8962 11.25 10.571 11.25 10.1698V2.90565H0.75Z"
                  fill="#7A7A7A"
                />
              </svg>
              <span>5 sagat öň</span>
            </div>
            <div className="product_visit">
              <svg
                width="12"
                height="9"
                viewBox="0 0 12 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 1C3.63428 1 2.18229 2.59904 1.48964 3.63547C1.25721 3.98327 1.14099 4.15717 1.15157 4.47846C1.16214 4.79974 1.29555 4.97344 1.56238 5.32084C2.35694 6.35535 3.94352 8 6 8C8.05648 8 9.64306 6.35535 10.4376 5.32084C10.7044 4.97344 10.8379 4.79974 10.8484 4.47846C10.859 4.15717 10.7428 3.98327 10.5104 3.63547C9.81771 2.59904 8.36572 1 6 1Z"
                  stroke="#7A7A7A"
                />
                <circle cx="6" cy="4.5" r="2" fill="#7A7A7A" />
              </svg>
              <span>1200</span>
            </div>
          </div>
          <div className="product_definition">
            Gaty bet fenler we fen alana yanyndan daragam sowgat berilyar
            yetishin adamlardaragam sowgat berilyar yetishin adamlardaragam
            sowgat berilyar yetishin adamlardaragam sowgat berilyar yetishin
            adamlardaragam sowgat berilyar yetishin adamlardaragam sowgat
            berilyar yetishin adamlar
          </div>
        </div>
      </Link>
      <div className="buttons">
        {basket ? (
          <button className="buttons_button" onClick={() => addCart()}>
            <span>
              <svg
                width="25"
                height="25"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 5.5C9 5.22386 8.77614 5 8.5 5C8.22386 5 8 5.22386 8 5.5V7H6.5C6.22386 7 6 7.22386 6 7.5C6 7.77614 6.22386 8 6.5 8H8V9.5C8 9.77614 8.22386 10 8.5 10C8.77614 10 9 9.77614 9 9.5V8H10.5C10.7761 8 11 7.77614 11 7.5C11 7.22386 10.7761 7 10.5 7H9V5.5Z"
                  fill="black"
                />
                <path
                  d="M0.5 1C0.223858 1 0 1.22386 0 1.5C0 1.77614 0.223858 2 0.5 2H1.60961L2.01131 3.6068L3.50856 11.5921C3.55291 11.8286 3.75939 12 4 12H5C3.89543 12 3 12.8954 3 14C3 15.1046 3.89543 16 5 16C6.10457 16 7 15.1046 7 14C7 12.8954 6.10457 12 5 12H12C10.8954 12 10 12.8954 10 14C10 15.1046 10.8954 16 12 16C13.1046 16 14 15.1046 14 14C14 12.8954 13.1046 12 12 12H13C13.2406 12 13.4471 11.8286 13.4914 11.5921L14.9914 3.59214C15.0188 3.44595 14.9797 3.29514 14.8848 3.18068C14.7898 3.06622 14.6487 3 14.5 3H2.89039L2.48507 1.37873C2.42943 1.15615 2.22943 1 2 1H0.5ZM4.41496 11L3.10246 4H13.8975L12.585 11H4.41496ZM6 14C6 14.5523 5.55228 15 5 15C4.44772 15 4 14.5523 4 14C4 13.4477 4.44772 13 5 13C5.55228 13 6 13.4477 6 14ZM13 14C13 14.5523 12.5523 15 12 15C11.4477 15 11 14.5523 11 14C11 13.4477 11.4477 13 12 13C12.5523 13 13 13.4477 13 14Z"
                  fill="black"
                />
              </svg>
            </span>
          </button>
        ) : (
          <div className="buttons_button">
            <button onClick={minus}>
              <svg
                width="22"
                height="3"
                viewBox="0 0 22 3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 1.25C0 0.559645 0.615609 0 1.375 0H20.625C21.3844 0 22 0.559645 22 1.25C22 1.94035 21.3844 2.5 20.625 2.5H1.375C0.615609 2.5 0 1.94035 0 1.25Z"
                  fill="black"
                />
              </svg>
            </button>
            <span>{count}</span>
            <button onClick={plus}>
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 0C11.7594 0 12.375 0.61561 12.375 1.375V9.625H20.625C21.3844 9.625 22 10.2406 22 11C22 11.7594 21.3844 12.375 20.625 12.375H12.375V20.625C12.375 21.3844 11.7594 22 11 22C10.2406 22 9.625 21.3844 9.625 20.625V12.375H1.375C0.61561 12.375 0 11.7594 0 11C0 10.2406 0.61561 9.625 1.375 9.625H9.625V1.375C9.625 0.61561 10.2406 0 11 0Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Product;

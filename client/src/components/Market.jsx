import React from 'react';
import { Link } from 'react-router-dom';

function Market() {
  return (
    <Link to={'/MarketPage'} className='market'>
      <img src={require('../assets/images/delete/market.png')} alt="" />
      <div className="market_info">
        <div className="market_info_name">Doner house Somso house</div>
        <div className="market_info_location">
          <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.13398 19.0695C7.13398 19.0695 13.934 12.6241 13.934 7.73442C13.934 3.97829 10.8895 0.93335 7.13398 0.93335C3.37845 0.93335 0.333984 3.97829 0.333984 7.73442C0.333984 12.6241 7.13398 19.0695 7.13398 19.0695ZM7.13398 11.135C5.25622 11.135 3.73398 9.61249 3.73398 7.73442C3.73398 5.85636 5.25622 4.33389 7.13398 4.33389C9.01175 4.33389 10.534 5.85636 10.534 7.73442C10.534 9.61249 9.01175 11.135 7.13398 11.135Z" fill="#101820"/>
          </svg>
          <span>Ashgabat</span>
        </div>
      </div>
    </Link>
  );
}

export default Market;
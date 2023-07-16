import React from 'react';
import logo from './../assets/images/icons/ykjam.svg'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
          <img className="logo" src={logo} alt="Logo" />
          <div className="footer_btns">
              <a href='/' className="btn1">Ulanyş düzgünleri</a>
              <div className="footer_btns_middle">
                  <a href='/' className="btn2">Teswir düzgünleri</a>
                  <a href='/' className="btn3">Habarlaşmak</a>
              </div>
              <a href='/' className="btn4">Biz barada</a>
              <div className="footer_txt">Created by YKJAM Tilsimat</div>
          </div>

          <div className="footer_tablet">
              <img className="logo_tablet" src={logo} alt="Logo" />
              <div className="footer_btns_tablet">
                  <div className="footer_btns_left">
                      <a href='/'>Ulanyş düzgünleri</a>
                      <a href='/'>Teswir düzgünleri</a>
                  </div>
                  <div className="footer_btns_right">
                      <a href='/'>Habarlaşmak</a>
                      <a href='/'>Biz barada</a>
                  </div>
              </div>
              <div className="footer_txt">Created by YKJAM Tilsimat</div>
          </div>
      </div>
    </footer>
  );
}

export default Footer;

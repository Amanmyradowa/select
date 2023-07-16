import React from 'react'

const BildirishGosh = () => {
  return (
    <div className="container">
      <div className="bildirish_gosh">
        <div className="bildirish_gosh_left">
          <div className="input_label">
            <label htmlFor="name">Ady</label><br />
            <input type="text" id='name' placeholder='Dükanyň gysgaça adyny giriziň' autoComplete='off' required />
          </div>
          <div className="input_label">
            <label htmlFor="category">Kategoriýa</label><br />
            <input type="text" id='category' placeholder='Kategoriýa saýlaň' autoComplete='off' required />
          </div>
          <div className="input_label">
            <label htmlFor="addres">Ýeri</label><br />
            <input type="text" id='addres' placeholder='Ýerleşýän ýerini saýlaň' autoComplete='off' required />
          </div>
          <div className="input_label">
            <label htmlFor="phoneNum">Telefon belgi</label><br />
            <input type="number" id='phoneNum' placeholder='Telefon belgiňizi giriziň' autoComplete='off' required />
          </div>
          <div className="input_label">
            <label htmlFor="info">Goşmaça maglumat</label><br />
            <textarea id="info" cols="30" rows="10" placeholder='Goşmaça giňişleýin maglumat giriziň'></textarea>
          </div>
          <div className="check_label">
            <input type="checkbox" id="check" />
            <label id='blue' htmlFor="check">Duzgunnamany kabul etyarin</label> <br />
          </div>
          <div className="check_label">
            <input type="checkbox" id="check1" />
            <label id='yellow' htmlFor="check">Ulanyjylar teswir goyup bilyarler</label> <br />
          </div>
        </div>
        <div className="bildirish_gosh_right">
          <div className="choose_photo">
            <span>
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.1 25.1V14.5H0.65V10.8H11.1V0.449999H14.9V10.8H25.35V14.5H14.9V25.1H11.1Z" fill="white"/>
              </svg>
            </span>
            <div className="text">Surat saýlaň</div>
          </div>
          <button id='save'>Yatda saklamak</button>
        </div>
      </div>
    </div>
  )
}

export default BildirishGosh
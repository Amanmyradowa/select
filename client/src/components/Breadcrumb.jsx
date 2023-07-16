import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const Breadcrumb = () => {
  return (
    <div className='breadcrumb_category'>
      <div className="breadcrumb_top">
        <div className="breadcrumb_category_left">
          <div className="left active">
            <p>HEMMESI</p>
            <span></span>
          </div>
          <div className="left">
            <p>KATEGORIÝALAR</p>
            <span></span>
          </div>
        </div>
        <div className="breadcrumb_category_right">
          <div className="search_category">
            <input type="text" id="search" />
            <label htmlFor="search">
              <svg width="28" height="28" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.0166 19.3948C23.4992 17.3762 24.375 14.8841 24.375 12.1875C24.375 5.45653 18.9185 0 12.1875 0C5.45653 0 0 5.45653 0 12.1875C0 18.9185 5.45653 24.375 12.1875 24.375C14.8848 24.375 17.3775 23.4987 19.3964 22.0153L19.3948 22.0166C19.4501 22.0915 19.5117 22.1633 19.5796 22.2312L26.7992 29.4508C27.5314 30.1831 28.7186 30.1831 29.4508 29.4508C30.1831 28.7186 30.1831 27.5314 29.4508 26.7992L22.2312 19.5796C22.1633 19.5117 22.0915 19.4501 22.0166 19.3948ZM22.5 12.1875C22.5 17.8829 17.8829 22.5 12.1875 22.5C6.49206 22.5 1.875 17.8829 1.875 12.1875C1.875 6.49206 6.49206 1.875 12.1875 1.875C17.8829 1.875 22.5 6.49206 22.5 12.1875Z" fill="#101820"/>
              </svg>
            </label>
          </div>
          <LocationOnIcon
            sx={{
              width: '30px',
              height: "30px",
              margin: "0 20px"
            }}
          />
          <StarBorderIcon
            sx={{
              width: '30px',
              height: "30px",
            }}
          />
        </div>
      </div>
      <div className="breadcrumg_bottom">Naharhanalar</div>
    </div>
  )
}

export default Breadcrumb
import React, {useContext, useRef, useEffect, useState} from "react";
import { AppContext } from "../App";
import { Link } from "react-router-dom";



function Header(props) {
  const {t,changeLanguage} = useContext(AppContext)
  const [openMenu,setOpenMenu] = useState(false);
  const [openProfile,setOpenProfile] = useState(false);
  const ref = useRef(null)
  const ref2 = useRef(null);

  function changeLang(lang,id){
    changeLanguage(lang);
    const langEls = document.querySelectorAll('.language')
    for(let i = 0; i<langEls.length;i++){
      langEls[i].classList.remove('active');
    }
    langEls[id].classList.add('active')
  }

  //Scroll and header take another style
  useEffect(()=>{
    const header = document.querySelector('.header')
    window.addEventListener('scroll',function(){
      if(this.window.scrollY > 100){
        header.classList.add('scrolled');
      }else{
        header.classList.remove('scrolled')
      }
    })
  })

  // Close outside click language box
  useEffect(()=>{
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        openMenuFunc(true);
      }
      if(ref2.current && !ref2.current.contains(event.target)){
        setOpenProfile(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  },[ref])
  
  const openMenuFunc = (bool)=>{
    var dropdownContent = document.querySelector(".header_menu_dropdown");
    if (dropdownContent.classList.contains('active') || bool===true) {
      dropdownContent.classList.remove('active');
      setOpenMenu(false);
    } else {
      setOpenMenu(true);
      dropdownContent.classList.add('active');
    }
  }

  // Active lang style
  function activeLang(){
    const lang = localStorage.getItem('lang');
    return lang
  }



  return (
    <div className="container header_con">
      <div className="header_top_space"></div>
      <div className="header">
        <div className="header_menu" ref={ref}>
          <button className="header_menu_button" onClick={openMenuFunc}>
            {
              !openMenu ? 
              <svg width="30" height="30" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 10.5H28.5" stroke="#101820" strokeWidth="3" strokeLinecap="round"/>
                <path d="M7.5 18H28.5" stroke="#101820" strokeWidth="3" strokeLinecap="round"/>
                <path d="M7.5 25.5H28.5" stroke="#101820" strokeWidth="3" strokeLinecap="round"/>
              </svg> :
              <div className="closeMenuIcon">
                <svg width="17" height="17" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.418419 0.418419C0.976311 -0.139473 1.88083 -0.139473 2.43872 0.418419L10 7.9797L17.5613 0.418419C18.1192 -0.139473 19.0237 -0.139473 19.5816 0.418419C20.1395 0.976311 20.1395 1.88083 19.5816 2.43872L12.0203 10L19.5816 17.5613C20.1395 18.1192 20.1395 19.0237 19.5816 19.5816C19.0237 20.1395 18.1192 20.1395 17.5613 19.5816L10 12.0203L2.43872 19.5816C1.88083 20.1395 0.976311 20.1395 0.418419 19.5816C-0.139473 19.0237 -0.139473 18.1192 0.418419 17.5613L7.9797 10L0.418419 2.43872C-0.139473 1.88083 -0.139473 0.976311 0.418419 0.418419Z" fill="black"/>
                </svg>  
              </div>
            }
          </button>
          <div className="header_menu_dropdown">
            <div className="option_row">
              <Link to={'/'} className="option_column">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M28.847 13.337C29.6791 12.5022 29.9975 11.2842 29.6807 10.1488L28.9688 7.5977C28.7633 6.86139 28.0925 6.35229 27.3286 6.35229C26.5643 6.35229 25.8935 6.86139 25.6883 7.5977L24.9764 10.1488C24.6596 11.2842 24.978 12.5022 25.8102 13.337L26.3242 13.8527L25.9521 22.1744C25.9172 22.9587 26.5435 23.6137 27.3286 23.6137C28.1136 23.6137 28.7403 22.9587 28.705 22.1744L28.3329 13.8527L28.847 13.337Z" fill="#FAFAFA"/>
                  <path d="M14.9829 6.35229C10.2163 6.35229 6.35205 10.2166 6.35205 14.9832C6.35205 19.7497 10.2163 23.614 14.9829 23.614C19.7495 23.614 23.6138 19.7497 23.6138 14.9832C23.6138 10.2166 19.7495 6.35229 14.9829 6.35229ZM14.9829 21.2902C11.5052 21.2902 8.6759 18.4609 8.6759 14.9832C8.6759 11.5055 11.5052 8.67614 14.9829 8.67614C18.4606 8.67614 21.2899 11.5055 21.2899 14.9832C21.2899 18.4609 18.4606 21.2902 14.9829 21.2902Z" fill="#FAFAFA"/>
                  <path d="M14.9831 9.67188C12.0543 9.67188 9.67188 12.0547 9.67188 14.9831C9.67188 17.9115 12.0543 20.2943 14.9831 20.2943C17.9119 20.2943 20.2943 17.9119 20.2943 14.9831C20.2943 12.0543 17.9115 9.67188 14.9831 9.67188ZM14.9831 12.1614C13.4272 12.1614 12.1614 13.4272 12.1614 14.9831C12.1614 15.2581 11.9384 15.481 11.6635 15.481C11.3885 15.481 11.1656 15.2581 11.1656 14.9831C11.1656 12.8779 12.8779 11.1656 14.9831 11.1656C15.2581 11.1656 15.481 11.3885 15.481 11.6635C15.481 11.9384 15.2581 12.1614 14.9831 12.1614Z" fill="#FAFAFA"/>
                  <path d="M5.22202 10.4425L5.03168 6.35229H4.19165V10.9104C4.19165 11.1893 3.96542 11.4156 3.68651 11.4156C3.40759 11.4156 3.18104 11.1893 3.18104 10.9104V6.35229H2.20796V10.9104C2.20796 11.1893 1.98174 11.4156 1.70282 11.4156C1.42391 11.4156 1.19768 11.1893 1.19768 10.9104V6.35229H0.357315L0.166982 10.4425C0.138333 11.0606 0.363901 11.6635 0.791328 12.1107L1.7239 13.0864L1.31787 22.1747C1.28297 22.9591 1.90929 23.614 2.69433 23.614C3.47938 23.614 4.10603 22.9591 4.0708 22.1747L3.66477 13.0864L4.59734 12.1107C5.0251 11.6635 5.25067 11.0606 5.22202 10.4425Z" fill="#FAFAFA"/>
                </svg>
                <span>Naharhanalar</span>
              </Link>
              <Link to={'/'} className="option_column">5749</Link>
            </div>
            <div className="option_row">
              <Link to={'/'} className="option_column">
                <svg width="30" height="40" viewBox="0 0 33 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d_205_911)">
                  <path d="M25.3906 13.2076H7.5811V2.65088H4.13721V13.2076V17.2058V22.3181H7.5811V17.2058H25.3906V22.3181H28.8345V17.2058V13.2076H25.3906Z" fill="white"/>
                  <path d="M12.0081 11.6972C13.3408 11.6972 14.4211 10.6169 14.4211 9.28426C14.4211 7.95164 13.3408 6.87134 12.0081 6.87134C10.6755 6.87134 9.59521 7.95164 9.59521 9.28426C9.59521 10.6169 10.6755 11.6972 12.0081 11.6972Z" fill="white"/>
                  <path d="M28.8346 11.6982H15.8164V8.1094C15.8164 7.42611 16.3704 6.87207 17.0537 6.87207H24.0088C26.6739 6.87234 28.8346 9.03281 28.8346 11.6982Z" fill="white"/>
                  </g>
                  <defs>
                  <filter id="filter0_d_205_911" x="0" y="0" width="33" height="33" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="4"/>
                  <feGaussianBlur stdDeviation="2"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_205_911"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_205_911" result="shape"/>
                  </filter>
                  </defs>
                </svg>
                <span>Önümçilikler</span>
              </Link>
              <Link to={'/'} className="option_column">54</Link>
            </div>
            <div className="option_row">
              <Link to={'/'} className="option_column">
                <svg width="30" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.63421 1.40645C9.86508 0.9667 9.74031 0.396318 9.35553 0.132468C8.97074 -0.131383 8.47166 0.0112126 8.24079 0.450963L3.60247 9.2858H0.8125C0.363769 9.2858 0 9.70154 0 10.2144V12.0715C0 12.5843 0.363769 13.0001 0.8125 13.0001H1.82463L4.82208 24.9898C4.97157 25.5878 5.44979 26 5.99394 26H20.0061C20.5502 26 21.0284 25.5877 21.1779 24.9898L24.1754 13.0001H25.1875C25.6362 13.0001 26 12.5843 26 12.0715V10.2144C26 9.70154 25.6362 9.2858 25.1875 9.2858H22.3975L17.7592 0.450963C17.5283 0.0112126 17.0293 -0.131383 16.6445 0.132468C16.2597 0.396318 16.1349 0.9667 16.3658 1.40645L20.5025 9.2858H5.49753L9.63421 1.40645ZM6.5 16.7144C6.5 15.6888 7.22754 14.8573 8.125 14.8573C9.02246 14.8573 9.75 15.6888 9.75 16.7144V20.4287C9.75 21.4544 9.02246 22.2858 8.125 22.2858C7.22754 22.2858 6.5 21.4544 6.5 20.4287V16.7144ZM11.375 16.7144C11.375 15.6888 12.1025 14.8573 13 14.8573C13.8975 14.8573 14.625 15.6888 14.625 16.7144V20.4287C14.625 21.4544 13.8975 22.2858 13 22.2858C12.1025 22.2858 11.375 21.4544 11.375 20.4287V16.7144ZM17.875 14.8573C18.7725 14.8573 19.5 15.6888 19.5 16.7144V20.4287C19.5 21.4544 18.7725 22.2858 17.875 22.2858C16.9775 22.2858 16.25 21.4544 16.25 20.4287V16.7144C16.25 15.6888 16.9775 14.8573 17.875 14.8573Z" fill="white"/>
                </svg>
                <span>Dükanlar we marketler</span>
              </Link>
              <Link to={'/'} className="option_column">54</Link>
            </div>
            <div className="option_row">
              <Link to={'/'} className="option_column">
                <svg width="30" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_205_927)">
                  <path d="M24.6042 3.18155C24.5743 3.09126 24.4997 3.02293 24.4069 3.00098C24.3153 2.97958 24.217 3.00647 24.1498 3.07398L22.177 5.04674C21.8763 5.3475 21.4765 5.51324 21.0508 5.51324C20.6255 5.51324 20.2257 5.34777 19.9247 5.04701C19.3039 4.42601 19.3039 3.4159 19.9247 2.7949L21.8974 0.822134C21.9646 0.754902 21.9924 0.657485 21.9704 0.565008C21.9487 0.47253 21.8801 0.397889 21.7898 0.367704C20.181 -0.166031 18.4376 0.244492 17.2428 1.43957C16.0181 2.664 15.6194 4.47157 16.2022 6.09034L6.09007 16.2028C4.47185 15.6199 2.66401 16.0189 1.4393 17.2433C0.244222 18.4384 -0.166575 20.1807 0.36716 21.7904C0.397071 21.8807 0.471712 21.9493 0.564464 21.971C0.656392 21.9932 0.754358 21.9652 0.82159 21.898L2.79435 19.9252C3.4148 19.3042 4.42519 19.3042 5.04647 19.9252C5.34723 20.226 5.5127 20.6258 5.5127 21.0514C5.5127 21.477 5.34723 21.8766 5.04619 22.1776L3.07343 24.1503C3.0062 24.2176 2.97848 24.3147 3.00044 24.4075C3.02239 24.5002 3.09072 24.5746 3.181 24.6048C3.64751 24.7593 4.12499 24.835 4.59698 24.835C5.75446 24.835 6.87928 24.3817 7.72804 23.5329C8.95275 22.3082 9.35175 20.5009 8.7689 18.8821L18.8813 8.76971C20.5004 9.35229 22.3074 8.95385 23.5321 7.72886C24.7277 6.53379 25.1382 4.79126 24.6042 3.18155Z" fill="white"/>
                  <path d="M19.9194 15.8545C19.8708 15.8059 19.8061 15.7776 19.7377 15.7743C18.7877 15.7318 17.7954 15.2595 17.0147 14.4788C16.5367 14.0005 16.1736 13.441 15.9547 12.8606L12.9023 15.9129C13.4827 16.1322 14.0423 16.4949 14.5206 16.973C15.3013 17.7539 15.7733 18.7462 15.8161 19.696C15.8194 19.7643 15.8476 19.8291 15.8962 19.8776L19.9784 23.9598C20.533 24.5144 21.2615 24.7916 21.9898 24.7916C22.7184 24.7916 23.4473 24.5144 24.0016 23.9598C25.1105 22.8506 25.1105 21.0458 24.0016 19.9366L19.9194 15.8545Z" fill="white"/>
                  <path d="M1.60556 4.02613C1.63931 4.08622 1.69447 4.1315 1.76006 4.15291L3.35715 4.67155L9.90714 11.2215L11.1799 9.9488L4.62988 3.39882L4.11096 1.80173C4.08956 1.73614 4.04428 1.68098 3.98418 1.64723L1.43076 0.213967C1.32346 0.15387 1.18927 0.172531 1.10256 0.259245L0.217574 1.14396C0.130585 1.23095 0.112199 1.36513 0.172296 1.47216L1.60556 4.02613Z" fill="white"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_205_927">
                  <rect width="25" height="25" fill="white"/>
                  </clipPath>
                  </defs>
                </svg>

                <span>Hyzmatlar</span>
              </Link>
              <Link to={'/'} className="option_column">854</Link>
            </div>
            <div className="option_row">
              <Link to={'/'} className="option_column">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_913_1921)">
                  <path d="M12.4789 24.9998C11.8736 24.9945 11.2699 24.7611 10.808 24.2992L0.700855 14.192C-0.233617 13.2575 -0.23362 11.7425 0.700855 10.808L10.808 0.700855C11.7425 -0.233617 13.2575 -0.23362 14.192 0.700855L24.2992 10.808C24.7611 11.2699 24.9945 11.8736 24.9998 12.4789C25 12.493 25 12.507 24.9998 12.5211C24.9945 13.1264 24.7611 13.7301 24.2992 14.192L14.192 24.2992C13.7301 24.7611 13.1264 24.9945 12.5211 24.9998C12.507 25 12.493 25 12.4789 24.9998ZM11.936 1.82886L7.44644 6.31842L12.5 11.372L17.5536 6.31842L13.064 1.82886C12.7525 1.51737 12.2475 1.51737 11.936 1.82886ZM13.628 12.5L18.6816 17.5536L23.1711 13.064C23.4827 12.7525 23.4827 12.2475 23.1711 11.936L18.6816 7.44644L13.628 12.5ZM12.5 13.628L7.44644 18.6816L11.936 23.1711C12.2475 23.4827 12.7525 23.4827 13.064 23.1711L17.5536 18.6816L12.5 13.628ZM11.372 12.5L6.31842 7.44644L1.82886 11.936C1.51737 12.2475 1.51737 12.7525 1.82886 13.064L6.31842 17.5536L11.372 12.5Z" fill="white"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_913_1921">
                  <rect width="25" height="25" fill="white"/>
                  </clipPath>
                  </defs>
                </svg>
                <span>Bildirişler</span>
              </Link>
              <Link to={'/'} className="option_column">854</Link>
            </div>
            <div className="option_row">
              <Link to={'/'} className="option_column">
                <svg width="30" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.75 3.12501V3.12501C18.8661 3.12501 18.9241 3.12501 18.9732 3.12662C20.553 3.17833 21.8217 4.44701 21.8734 6.02685C21.875 6.07592 21.875 6.13395 21.875 6.25001L21.875 8.48215C21.875 8.85029 21.875 9.03436 21.7828 9.16434C21.7502 9.2102 21.7102 9.25024 21.6643 9.28278C21.5344 9.375 21.3503 9.375 20.9821 9.375L15.625 9.375M18.75 3.12501V3.12501C18.6339 3.12501 18.5759 3.12501 18.5268 3.12662C16.947 3.17833 15.6783 4.44701 15.6266 6.02685C15.625 6.07592 15.625 6.13395 15.625 6.25001L15.625 9.375M18.75 3.12501L7.125 3.12501C5.23938 3.12501 4.29657 3.12501 3.71079 3.7108C3.125 4.29658 3.125 5.23939 3.125 7.12501L3.125 21.875L6.25 20.8333L9.375 21.875L12.5 20.8333L15.625 21.875L15.625 9.375" stroke="white" strokeWidth="2"/>
                  <path d="M7.2915 7.29175L11.4582 7.29175" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M8.3335 11.4583H7.29183" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M7.2915 15.625L10.4165 15.625" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span>{t('lenta')}</span>
              </Link>
              <div className="option_column" style={{opacity:'0'}}></div>
            </div>
            <div className="option_row">
              <Link to={'/'} className="option_column">
                <svg width="30" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.1098 4.13281H2.86186C1.35945 4.13281 0.137207 5.35505 0.137207 6.85747V18.247C0.137207 19.7497 1.35945 20.972 2.86186 20.972H3.84152L6.38589 23.5161C6.54642 23.6769 6.75745 23.7573 6.96792 23.7573C7.1784 23.7573 7.38942 23.6769 7.54995 23.5161L10.0943 20.972H22.1098C23.6122 20.972 24.8345 19.7497 24.8345 18.247V6.85747C24.8345 5.35505 23.6122 4.13281 22.1098 4.13281ZM19.1763 15.3399H5.79535C5.34065 15.3399 4.97211 14.9713 4.97211 14.5166C4.97211 14.0619 5.34065 13.6934 5.79535 13.6934H19.1763C19.631 13.6934 19.9996 14.0619 19.9996 14.5166C19.9996 14.9713 19.631 15.3399 19.1763 15.3399ZM19.1763 11.4111H5.79535C5.34065 11.4111 4.97211 11.0426 4.97211 10.5879C4.97211 10.1332 5.34065 9.76461 5.79535 9.76461H19.1763C19.631 9.76461 19.9996 10.1332 19.9996 10.5879C19.9996 11.0426 19.631 11.4111 19.1763 11.4111Z" fill="white"/>
                </svg>
                <span>{t('comments')}</span>
              </Link>
              <div className="option_column" style={{opacity:'0'}}></div>
            </div>
            <div className="option_row">
              <Link to={'/'} className="option_column">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.6799 8.28454C13.6632 5.83329 14.1548 4.60767 15.0002 4.60767C15.8456 4.60767 16.3373 5.83329 17.3205 8.28454L17.3663 8.39868C17.9218 9.78352 18.1996 10.4759 18.7656 10.8968C19.3317 11.3177 20.0747 11.3842 21.5609 11.5173L21.8296 11.5414C24.2618 11.7592 25.478 11.8681 25.7382 12.6418C25.9984 13.4156 25.0953 14.2372 23.289 15.8806L22.6861 16.4291C21.7717 17.261 21.3145 17.6769 21.1014 18.2221C21.0617 18.3238 21.0286 18.428 21.0025 18.534C20.8624 19.1023 20.9963 19.7057 21.2641 20.9125L21.3474 21.2882C21.8395 23.5061 22.0856 24.6151 21.656 25.0934C21.4954 25.2722 21.2868 25.4008 21.055 25.4641C20.4348 25.6333 19.5542 24.9158 17.793 23.4807C16.6365 22.5383 16.0583 22.0671 15.3944 21.9611C15.1333 21.9194 14.8672 21.9194 14.6061 21.9611C13.9422 22.0671 13.3639 22.5383 12.2075 23.4807C10.4463 24.9158 9.5657 25.6333 8.94545 25.4641C8.71367 25.4008 8.50504 25.2722 8.34451 25.0934C7.91491 24.6151 8.16095 23.5061 8.65305 21.2882L8.73639 20.9125C9.00415 19.7057 9.13803 19.1023 8.99796 18.534C8.97184 18.428 8.93879 18.3238 8.89904 18.2221C8.68595 17.6769 8.22876 17.261 7.31437 16.4291L6.71152 15.8806C4.90522 14.2372 4.00206 13.4156 4.26229 12.6418C4.52251 11.8681 5.73864 11.7592 8.17091 11.5414L8.43958 11.5173C9.92573 11.3842 10.6688 11.3177 11.2349 10.8968C11.8009 10.4759 12.0787 9.78352 12.6342 8.39868L12.6799 8.28454Z" stroke="#FAFAFA" strokeWidth="2"/>
                </svg>  
                <span>{t('favorites')}</span>
              </Link>
              <div className="option_column" style={{opacity:'0'}}></div>
            </div>
            <div className="option_row">
              <Link to={'/BildirishGosh'} className="option_column">
                <svg width="30" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_418_673)">
                  <path d="M12.4858 19.3371C11.8797 19.3371 11.3882 18.8456 11.3882 18.2394V6.73267C11.3882 6.12649 11.8797 5.63501 12.4858 5.63501C13.092 5.63501 13.5835 6.12649 13.5835 6.73267V18.2394C13.5835 18.8456 13.092 19.3371 12.4858 19.3371Z" fill="white"/>
                  <path d="M18.2392 13.5837H6.73242C6.12624 13.5837 5.63477 13.0923 5.63477 12.4861C5.63477 11.8799 6.12624 11.3884 6.73242 11.3884H18.2392C18.8453 11.3884 19.3368 11.8799 19.3368 12.4861C19.3368 13.0923 18.8453 13.5837 18.2392 13.5837Z" fill="white"/>
                  <path d="M12.4858 24.8347C5.6768 24.8347 0.137207 19.2951 0.137207 12.4861C0.137207 5.67705 5.6768 0.137451 12.4858 0.137451C19.2949 0.137451 24.8345 5.67705 24.8345 12.4861C24.8345 19.2951 19.2949 24.8347 12.4858 24.8347ZM12.4858 2.33276C6.88724 2.33276 2.33252 6.88749 2.33252 12.4861C2.33252 18.0847 6.88724 22.6394 12.4858 22.6394C18.0844 22.6394 22.6392 18.0847 22.6392 12.4861C22.6392 6.88749 18.0844 2.33276 12.4858 2.33276Z" fill="white"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_418_673">
                  <rect width="25" height="25" fill="white"/>
                  </clipPath>
                  </defs>
                </svg>
                <span>Bildiriş goşmak</span>
              </Link>
              <div className="option_column" style={{opacity:'0'}}></div>
            </div>
            <div className="option_row">
              <Link to={'/'} className="option_column">
                <svg width="30" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_418_673)">
                  <path d="M12.4858 19.3371C11.8797 19.3371 11.3882 18.8456 11.3882 18.2394V6.73267C11.3882 6.12649 11.8797 5.63501 12.4858 5.63501C13.092 5.63501 13.5835 6.12649 13.5835 6.73267V18.2394C13.5835 18.8456 13.092 19.3371 12.4858 19.3371Z" fill="white"/>
                  <path d="M18.2392 13.5837H6.73242C6.12624 13.5837 5.63477 13.0923 5.63477 12.4861C5.63477 11.8799 6.12624 11.3884 6.73242 11.3884H18.2392C18.8453 11.3884 19.3368 11.8799 19.3368 12.4861C19.3368 13.0923 18.8453 13.5837 18.2392 13.5837Z" fill="white"/>
                  <path d="M12.4858 24.8347C5.6768 24.8347 0.137207 19.2951 0.137207 12.4861C0.137207 5.67705 5.6768 0.137451 12.4858 0.137451C19.2949 0.137451 24.8345 5.67705 24.8345 12.4861C24.8345 19.2951 19.2949 24.8347 12.4858 24.8347ZM12.4858 2.33276C6.88724 2.33276 2.33252 6.88749 2.33252 12.4861C2.33252 18.0847 6.88724 22.6394 12.4858 22.6394C18.0844 22.6394 22.6392 18.0847 22.6392 12.4861C22.6392 6.88749 18.0844 2.33276 12.4858 2.33276Z" fill="white"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_418_673">
                  <rect width="25" height="25" fill="white"/>
                  </clipPath>
                  </defs>
                </svg>
                <span>{t('addMarket')}</span>
              </Link>
              <div className="option_column" style={{opacity:'0'}}></div>
            </div>
          </div>
        </div>
        <Link to={"/"}  className="header_logo">
          <img src={require('../assets/images/icons/YKJAM.com.png')} alt="" />
        </Link>
        <div className="header_right">
          <button className="header_right_basket">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 2.8125C0 2.29474 0.419734 1.875 0.9375 1.875H3.75C4.18018 1.875 4.55518 2.16778 4.65951 2.58512L5.41948 5.625H27.1875C27.4663 5.625 27.7309 5.74916 27.909 5.96378C28.0869 6.17839 28.1603 6.46116 28.1089 6.73526L25.2964 21.7352C25.2133 22.1786 24.8261 22.5 24.375 22.5H22.5H9.375H7.5C7.04886 22.5 6.66171 22.1786 6.57855 21.7352L3.77121 6.76275L3.01802 3.75H0.9375C0.419734 3.75 0 3.33026 0 2.8125ZM5.81711 7.5L8.27805 20.625H23.5969L26.0578 7.5H5.81711ZM9.375 22.5C7.30393 22.5 5.625 24.1789 5.625 26.25C5.625 28.3211 7.30393 30 9.375 30C11.4461 30 13.125 28.3211 13.125 26.25C13.125 24.1789 11.4461 22.5 9.375 22.5ZM22.5 22.5C20.4289 22.5 18.75 24.1789 18.75 26.25C18.75 28.3211 20.4289 30 22.5 30C24.5711 30 26.25 28.3211 26.25 26.25C26.25 24.1789 24.5711 22.5 22.5 22.5ZM9.375 24.375C10.4105 24.375 11.25 25.2144 11.25 26.25C11.25 27.2856 10.4105 28.125 9.375 28.125C8.33948 28.125 7.5 27.2856 7.5 26.25C7.5 25.2144 8.33948 24.375 9.375 24.375ZM22.5 24.375C23.5356 24.375 24.375 25.2144 24.375 26.25C24.375 27.2856 23.5356 28.125 22.5 28.125C21.4644 28.125 20.625 27.2856 20.625 26.25C20.625 25.2144 21.4644 24.375 22.5 24.375Z" fill="#FEE715"/>
            </svg>
          </button>
          <button className="header_right_profile" ref={ref2}>
            <svg width="26" height="26" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={()=>setOpenProfile(!openProfile)}>
              <circle cx="15" cy="15" r="14.5" stroke="#FEE715"/>
              <g clipPath="url(#clip0_221_481)">
              <path d="M15 15C17.4853 15 19.5 12.9853 19.5 10.5C19.5 8.01472 17.4853 6 15 6C12.5147 6 10.5 8.01472 10.5 10.5C10.5 12.9853 12.5147 15 15 15ZM18 10.5C18 12.1569 16.6569 13.5 15 13.5C13.3431 13.5 12 12.1569 12 10.5C12 8.84314 13.3431 7.5 15 7.5C16.6569 7.5 18 8.84314 18 10.5Z" fill="#FEE715"/>
              <path d="M24 22.5C24 24 22.5 24 22.5 24H7.5C7.5 24 6 24 6 22.5C6 21 7.5 16.5 15 16.5C22.5 16.5 24 21 24 22.5ZM22.5 22.4947C22.4979 22.1245 22.2693 21.0156 21.2519 19.9982C20.2734 19.0198 18.4337 18 15 18C11.5663 18 9.72653 19.0198 8.74815 19.9982C7.73063 21.0156 7.50213 22.1245 7.5 22.4947H22.5Z" fill="#FEE715"/>
              </g>
              <defs>
              <clipPath id="clip0_221_481">
              <rect width="18" height="18" fill="white" transform="translate(6 6)"/>
              </clipPath>
              </defs>
            </svg>
            {
              openProfile ?
                <Link to={'/Login'} className="profile_dropdown">
                  <div className="option">{t('login')}</div>
                </Link> : ''
            }
          </button>
          <div className="header_right_language">
            <div className="language active" onClick={()=>changeLang('TM',0)}>TM</div>
            <div className="language" onClick={()=>changeLang("RU",1)}>RU</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

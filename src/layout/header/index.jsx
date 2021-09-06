import React from "react";
// import './header.css'
import style from "./header.module.scss"
const Menus = [
  {
    nav: "Home",
    className: null,
  },
  {
    nav: "About EasyLife",
    className: null,
  },
  {
    nav: "Products",
    className: null,
  },
  {
    nav: "Digital Offers",
    className: null,
  },
  {
    nav: "Claim",
    className: null,
  },
  {
    nav: "ADC",
    className: null,
  },
  {
    nav: null,
    language: [
      {
        language: "Englisg",
        className: style.english,
      },
      {
        language: "|",
        className: style.line,
      },
      {
        language: "Bangla",
        className: style.bangla,
      },
    ],
  },
  {
    nav: 'Bars',
    className: null,
  },
  {
    nav: 'Buy Now',
    className: style.headerbutton,
  },
]



const Header = () => {


  return (
    <section>
      <div className="container">
        <nav className="navbar">
          <a href="">Brand Logo</a>
          <ul className="nav">
            {Menus && Menus.length > 0 && Menus.map((navItem, index) => (
              <li className="nav-item" key={index}>
               {navItem.nav === undefined &&  <a className={`nav-item ${navItem.className}`} href="">{navItem.nav}</a>}
                <div>
                  {navItem.language && navItem.language.length > 0 && navItem.language.map((lang,index) => (
                    <span key={index}>{lang.language}</span>
                  ))}
                </div>

              </li>
            ))}

          </ul>
        </nav>
      </div>
    </section>
  );
};
export default Header;

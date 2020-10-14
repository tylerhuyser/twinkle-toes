import React from 'react'
import './Footer.css'


export default function Footer() {

  return (
    <footer>
      <div className="footer-div">
        <p className="copyright">Copyright © TWINKLE TOES 2020</p>
        <div className="contact-info-desktop">
          <p className="contact-info">Contact<br />
          ______________________<br />
          2654 Addmont St, Brooklyn NY, 22321<br />
          347.677.3427</p>
        </div>
        <div className="contact-info-mobile">
          <p className="contact-info">Contact<br />
          ______________________<br />
          2654 Addmont St,<br /> Brooklyn, NY<br /> 22321<br />
          347.677.3427</p>
        </div>
        <img className="footer-logo" src="https://i.imgur.com/i9W8vlB.png" alt="Logo" to="/"/>
      </div>
    </footer>
  )
}

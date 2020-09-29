import React from 'react'


export default function Footer() {

  return (
    <footer>
      <div className="footer-div" style={{

        width: "100vw",
        height: "150px",
        padding: "20px",
        backgroundColor: "#90658BA0",

        fontSize: "12px",

        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-around',
        alignItems: "center",
        
      }}>
        <p style={{

          color: "white",
          
        }}>Copyright © TWINKLE TOES 2020</p>
        <div className="contact" style={{

          color: "white",
          // fontSize: "10px",
          maxWidth: "30vw",

          display: "flex",
          justifyContent: 'space-around',
          alignItems: "center",

          textAlign: "left",

          }}>
          <p>Contact<br />
          ______________________<br />
          2654 Addmont St, Brooklyn NY, 22321<br />
          347.677.3427</p>
        </div>
        <img className="bottom-logo" src="https://i.imgur.com/i9W8vlB.png" alt="Logo" to="/" style={{ 

          maxHeight: "75px",
          
        }} />
      </div>
    </footer>
  )
}

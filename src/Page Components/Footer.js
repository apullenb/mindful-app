import React from 'react';




function Footer() {
  return (
    <div className="footer" style = {footerStyle}>
      <p>@mindful | 2020</p>
    </div>
  );
}

const footerStyle = {
  boxSizing: "border-box",
  border: "1px solid black",
  textAlign : "left",
  backgroundColor: "gray",
  marginTop: "2px",
  padding: "20px"
}

export default Footer;
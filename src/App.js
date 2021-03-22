import logo from "./logo.svg";
import { worldWhite, linkedinWhite, twitterWhite, shareWhite, starWhite, pinWhite, pinterestWhite, facebookWhite } from "./images"
import "./App.css";
import React from "react";

const TagAchorLink = ({ children }) => { return <a className="label" href="https://www.w3schools.com" target="_blank">{children}</a> }
function App() {
  const [open, setOpen] = React.useState(false);
  return (
    <html>
      <header>
        <title>Travel</title>
        <div className="headerInfo">
          <img src={worldWhite} alt="World white" width="15px" height="15px" />
          <TagAchorLink>LANGUAGE</TagAchorLink>
          <TagAchorLink>EN</TagAchorLink>
          <TagAchorLink>ES</TagAchorLink>
          <a href="">
            <img src={shareWhite} alt="Share " width="15px" height="15px" />
          </a>

          <img src={facebookWhite} alt="Facebook " width="15px" height="15px" />
          <img src={twitterWhite} alt="Twitter " width="15px" height="15px" />
          <img src={linkedinWhite} alt="Linkedin " width="15px" height="15px" />
          <img src={pinterestWhite} alt="Pinterest " width="15px" height="15px" />
        </div>
      </header>
      <body >

      </body>
      <footer>

      </footer>
    </html>
  );
}

export default App;

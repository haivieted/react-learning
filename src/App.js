import { logoColor, worldWhite, linkedinWhite, twitterWhite, shareWhite, starWhite, pinWhite, pinterestWhite, facebookWhite, parallax } from "./images"
import "./App.scss";
import React from "react";
import _ from 'lodash'

const TagAchorLink = ({ href = "https://www.w3schools.com", children }) => { return <a className="label" href={href} target="_blank">{children}</a> }
const TitleComponent = (props) => {
  const { uppercase = false } = props
  const { url, label } = props.data
  return (<div style={{ color: "#727475", flex: 1, display: "flex", justifyContent: "center", margin: 5, paddingBottom: 50, position: "relative",}} >
    <div style={{

      position: "absolute",
      width: '100%',
      paddingTop: 5, 
      paddingBottom: 5, 
      paddingLeft: 20, 
      paddingRight:130
    }}>
    {!!uppercase ? label.toUpperCase() : label}
    </div>
  </div>)
}
const MenuItem = (props) => {
  const { children } = props.data
  const BaseItemMenu = ({ data }) => {
    const { url, label, children } = data
    return (
      <div className="nav-item">
        <TitleComponent data={data} />
        {
          renderChildrenIfHave(children)
        }
      </div>
    )
  }
  const renderChildrenIfHave = (children, isFirst) => {
    if (children?.length > 0) {
      return <div className="groupMenuBase" style={{
        position: "absolute",
        transform: isFirst ? undefined : 'translateX(calc(100%))',
        top: 50,
        width: '100%',
        zIndex: 1,
      }}>
        {
          _.map(children, item => {
            return <BaseItemMenu key={item.label} data={item} />
          })
        }
      </div>
    }
    return null
  }

  return (
    <div className="nav-item" style={{ flex: 1, flexDirection: "column", position: "relative" }}>
      <TitleComponent uppercase data={props.data} />
      {renderChildrenIfHave(children, true)}
    </div>
  )
}

const defaultUrl = "https://www.w3schools.com/"
const MENU_TOP_DATA = {
  home: {
    label: "Home",
    url: defaultUrl
  },
  packages: {
    label: "Packages",
    url: defaultUrl,
    children: [
      {
        label: "Search1",
        url: defaultUrl,
      },
      {
        label: "Search1",
        url: defaultUrl,
      },
      {
        label: "Tour Package",
        url: defaultUrl,
        children: [
          {
            label: "Carousel",
            url: defaultUrl,
          },
          {
            label: "Custom Maps",
            url: defaultUrl,
          },
          {
            label: "360 panaroma",
            url: defaultUrl,
          },
          {
            label: "Default",
            url: defaultUrl,
          }
        ]
      },
      {
        label: "Destination",
        url: defaultUrl,
      },
      {
        label: "Typology",
        url: defaultUrl,
      },

    ]
  },
  shop: {
    label: "Shop",
    url: defaultUrl,
    children: [
      {
        label: "Archive",
        url: defaultUrl
      },
      {
        label: "Single product",
        url: defaultUrl
      },
      {
        label: "Cart",
        url: defaultUrl
      },
      {
        label: "Checkout",
        url: defaultUrl
      },
    ]
  },
  aboutUs: {
    label: "About Us",
    url: defaultUrl,
    children: [
      {
        label: "About us",
        url: defaultUrl
      },
      {
        label: "About us 1",
        url: defaultUrl
      },
      {
        label: "About us 2",
        url: defaultUrl
      },
    ]
  },
  pages: {
    label: "Pages",
    url: defaultUrl,
    children: [
      {
        label: "About us",
        url: defaultUrl
      },
      {
        label: "About us 1",
        url: defaultUrl
      },
      {
        label: "About us 2",
        url: defaultUrl,
        children: [
          {
            label: "About us",
            url: defaultUrl
          },
          {
            label: "About us 1",
            url: defaultUrl
          },
          {
            label: "About us 2",
            url: defaultUrl
          },
        ]
      },
    ]
  },
  news: {
    label: "News",
    url: defaultUrl
  },
  contact: {
    label: "Contact",
    url: defaultUrl,
    children: [
      {
        label: "Contact 1",
        url: defaultUrl
      },
      {
        label: "Contact 2",
        url: defaultUrl
      }
    ]
  }
}
const ButtonComponent = ({ label, onclick, style }) => { return <div onClick={onclick} className="buttonComponent" style={style}>{label}</div>; }

function App() {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <header>
        <title>Travel</title>
      </header>
      <body >
      <div className="container">
      <div className="headerInfo">
          <div>
            <TagAchorLink>
              <img src={worldWhite} alt="World white" width="15px" height="15px" />
            </TagAchorLink>
            <TagAchorLink>LANGUAGE</TagAchorLink>
            <TagAchorLink>EN</TagAchorLink>
            <TagAchorLink>ES</TagAchorLink>
            <TagAchorLink>
              <img src={shareWhite} alt="Share " width="15px" height="15px" />
            </TagAchorLink>
            <TagAchorLink>
              <img src={facebookWhite} alt="Facebook " width="15px" height="15px" />
            </TagAchorLink>
            <TagAchorLink>
              <img src={twitterWhite} alt="Twitter " width="15px" height="15px" />
            </TagAchorLink>
            <TagAchorLink>
              <img src={linkedinWhite} alt="Linkedin " width="15px" height="15px" />
            </TagAchorLink>
            <TagAchorLink>
              <img src={pinterestWhite} alt="Pinterest " width="15px" height="15px" />
            </TagAchorLink>
          </div>

          <div>
            <TagAchorLink>
              <img src={starWhite} alt="Pinterest " width="15px" height="15px" />
            </TagAchorLink>

            <TagAchorLink>
              TOUR PACKAGE
          </TagAchorLink>

            <TagAchorLink>
              <img src={pinWhite} alt="Pinterest " width="15px" height="15px" />
            </TagAchorLink>

            <TagAchorLink>
              CONTACT US
          </TagAchorLink>
          </div>


        </div>
        <div className="headerMenu">
          <TagAchorLink>
            <img src={logoColor} style={{ height: 35, marginRight: 40 }} />
          </TagAchorLink>

          <MenuItem data={MENU_TOP_DATA.home}>
          </MenuItem>
          <MenuItem data={MENU_TOP_DATA.packages}>
          </MenuItem>
          <MenuItem data={MENU_TOP_DATA.shop}>
          </MenuItem>
          <MenuItem data={MENU_TOP_DATA.aboutUs}>
          </MenuItem>
          <MenuItem data={MENU_TOP_DATA.pages}>
          </MenuItem>
          <MenuItem data={MENU_TOP_DATA.news}>
          </MenuItem>
          <MenuItem data={MENU_TOP_DATA.contact}>
          </MenuItem>

          <ButtonComponent style={{ marginLeft: 40 }} label="BOOk NOW" onclick={() => alert("Hello! I am an alert box!")}>

          </ButtonComponent>
        </div>
        <div className="block1" style={{ backgroundImage: `url(${parallax})` }} ></div>
        <div className="block2"></div>
        <div className="block3"></div>
        <div className="block4"></div>
        <div className="block5"></div>
        <div className="block6"></div>
      </div>
      </body>
      <footer>
        <div className="block7"></div>
      </footer>
    </div>
  );
}

export default App;

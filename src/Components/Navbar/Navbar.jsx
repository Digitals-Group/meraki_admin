// import { Container } from "@mui/material";
// import { NavLink } from "react-router-dom";
// import { useTranslation } from "react-i18next";
import styles from "./Nabvar.module.scss";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import { ChevronIcon, SearchIcon, UserIcon } from "helpers/Icons/Icons";
import { useDispatch, useSelector } from "react-redux";
import { sideBarExpand } from "redux/sidebar/sidebar.slice";

const menuData = [
  { name: "Home", icon: <UserIcon />, eventKey: "home" },
  {
    name: "Search",
    icon: <SearchIcon />,
    eventKey: "search",
  },
];

export function Navbar() {
  const dispatch = useDispatch();
  const expanded = useSelector((state) => state.sidebar.expand);
  // const { t, i18n } = useTranslation("common");
  // const langs = [
  //   {
  //     label: "ru",
  //   },
  //   {
  //     label: "uz",
  //   },
  //   {
  //     label: "en",
  //   },
  // ];

  // const handleChangeLang = (lang) => {
  //   i18n.changeLanguage(lang);
  // };

  return (
    <SideNav expanded={expanded} className={styles.sidenav}>
      <div className={styles.expand}>
        <h1>U</h1>
        <div
          onClick={() => dispatch(sideBarExpand.setSideBarExpand())}
          className={styles.expand__icon}
        >
          <ChevronIcon />
        </div>
      </div>
      <SideNav.Nav defaultSelected="home">
        {menuData.map((elem) => (
          <NavItem
            eventKey={elem.eventKey}
            style={{ borderRight: "3px solid blue" }}
          >
            <NavIcon
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {elem.icon}
            </NavIcon>
            <NavText>{elem.name}</NavText>
          </NavItem>
        ))}
      </SideNav.Nav>
    </SideNav>
    // <header className={styles.header}>
    //   <Container>
    //     <div className={styles.box}>
    //       <NavLink to="/">
    //         <h2>Logo</h2>
    //       </NavLink>
    //       <nav>
    //         <ul>
    //           <li>
    //             <NavLink
    //               className={({ isActive }) =>
    //                 isActive ? styles.active : undefined
    //               }
    //               to="/"
    //               state={{ name: "ilyosbek" }}
    //             >
    //               {t("home")}
    //             </NavLink>
    //           </li>
    //           <li>
    //             <NavLink
    //               className={({ isActive }) =>
    //                 isActive ? styles.active : undefined
    //               }
    //               to="/blog"
    //             >
    //               {t("blog")}
    //             </NavLink>
    //           </li>
    //           <li>
    //             <NavLink
    //               className={({ isActive }) =>
    //                 isActive ? styles.active : undefined
    //               }
    //               to="/about"
    //             >
    //               {t("about")}
    //             </NavLink>
    //           </li>
    //           <li>
    //             <NavLink
    //               className={({ isActive }) =>
    //                 isActive ? styles.active : undefined
    //               }
    //               to="/products"
    //             >
    //               products
    //             </NavLink>
    //           </li>
    //         </ul>
    //       </nav>
    //       <div className={styles.langs}>
    //         <ul>
    //           {langs.map((lang) => (
    //             <li
    //               key={lang.label}
    //               onClick={() => handleChangeLang(lang.label)}
    //               style={{
    //                 cursor: "pointer",
    //                 color: i18n.language === lang.label && "red",
    //               }}
    //             >
    //               {lang.label}
    //             </li>
    //           ))}
    //         </ul>
    //       </div>
    //     </div>
    //   </Container>
    // </header>
  );
}

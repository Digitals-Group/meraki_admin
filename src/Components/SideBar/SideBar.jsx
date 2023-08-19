// import { Container } from "@mui/material";
// import { NavLink } from "react-router-dom";
// import { useTranslation } from "react-i18next";
import styles from "./SideBar.module.scss";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import { ChevronIcon, SearchIcon, UserIcon } from "helpers/Icons/Icons";
import { useDispatch, useSelector } from "react-redux";
import { sideBarExpand } from "redux/sidebar/sidebar.slice";
import { useNavigate, useParams } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { Button, Tooltip } from "@mui/material";
import Zoom from "@mui/material/Zoom";
import SettingsApplicationsRoundedIcon from "@mui/icons-material/SettingsApplicationsRounded";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";

const menuData = [
  { name: "Home", icon: <UserIcon />, eventKey: "home" },
  {
    name: "Search",
    icon: <SearchIcon />,
    eventKey: "search",
  },
];

export function SideBar() {
  const dispatch = useDispatch();
  const expanded = useSelector((state) => state.sidebar.expand);
  const navigate = useNavigate();
  const { tab_name } = useParams();
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
      <div>
        <div className={styles.expand}>
          <h1>
            {expanded ? (
              <div className={styles.expand__writer}>
                <span>U</span>
                <Typewriter
                  options={{
                    strings: ["nion !"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            ) : (
              "U"
            )}
          </h1>
          <div
            onClick={() => dispatch(sideBarExpand.setSideBarExpand())}
            className={styles.expand__icon}
          >
            <ChevronIcon />
          </div>
        </div>
        <SideNav.Nav selected={tab_name} className={styles.navbar}>
          {menuData.map((elem) => (
            <NavItem
              eventKey={elem.eventKey}
              onClick={() => navigate(`/main/${elem.eventKey}`)}
            >
              <NavIcon
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {expanded ? (
                  elem.icon
                ) : (
                  <Tooltip
                    title={elem.name}
                    placement="right"
                    arrow
                    TransitionComponent={Zoom}
                  >
                    <Button sx={{ width: "100%", height: "100%" }}>
                      {elem.icon}
                    </Button>
                  </Tooltip>
                )}
              </NavIcon>

              <NavText>{elem.name}</NavText>
            </NavItem>
          ))}
        </SideNav.Nav>
      </div>
      <div className={styles.asset}>
        <div className={styles.asset__setting}>
          <SettingsApplicationsRoundedIcon
            fontSize="large"
            sx={{ color: "#fff" }}
          />
        </div>
        <div className={styles.asset__helpers}>
          {/* <div className={styles.asset__helpers__icon}>
            <AddCircleOutlinedIcon sx={{ color: "#fff" }} fontSize="large" />
          </div>
          <div className={styles.asset__helpers__icon}>
            <AddCircleOutlinedIcon sx={{ color: "#fff" }} fontSize="large" />
          </div> */}
          {/* <div className={styles.asset__helpers__icon}>
            <AddCircleOutlinedIcon sx={{ color: "#fff" }} fontSize="large" />
          </div> */}
          {/* <div className={styles.asset__helpers__icon}>
            <AddCircleOutlinedIcon sx={{ color: "#fff" }} fontSize="large" />
          </div> */}
        </div>
      </div>
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

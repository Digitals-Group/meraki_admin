import styles from "./SideBar.module.scss";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import { ChevronIcon, UserIcon } from "helpers/Icons/Icons";
import { useDispatch, useSelector } from "react-redux";
import { sideBarExpand } from "redux/sidebar/sidebar.slice";
import { useNavigate, useParams } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { Button, Tooltip } from "@mui/material";
import Zoom from "@mui/material/Zoom";
import {
  SettingsApplicationsRounded,
  AppRegistration,
  ViewCarousel,
  Category,
  ProductionQuantityLimits,
  PhotoSizeSelectSmall,
  School,
  Logout,
} from "@mui/icons-material";

const menuData = [
  { name: "Users", icon: <UserIcon />, eventKey: "user" },
  {
    name: "Application",
    icon: <AppRegistration />,
    eventKey: "application",
  },
  {
    name: "Banner",
    icon: <ViewCarousel />,
    eventKey: "banner",
  },
  {
    name: "Category",
    icon: <Category />,
    eventKey: "category",
  },
  {
    name: "Product",
    icon: <ProductionQuantityLimits />,
    eventKey: "product",
  },
  {
    name: "Sizes",
    icon: <PhotoSizeSelectSmall />,
    eventKey: "size",
  },
  {
    name: "University",
    icon: <School />,
    eventKey: "university",
  },
];

export function SideBar() {
  const dispatch = useDispatch();
  const expanded = useSelector((state) => state.sidebar.expand);
  const navigate = useNavigate();
  const { tab_name } = useParams();

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
        <div
          className={styles.asset__setting}
          onClick={() => navigate("/settings")}
        >
          <SettingsApplicationsRounded
            fontSize="large"
            sx={{ color: "#fff" }}
          />
        </div>
        <div className={styles.asset__helpers}>
          <div
            className={styles.asset__helpers__icon}
            onClick={() => {
              localStorage.clear();
              navigate("/login");
              window.location.reload();
            }}
          >
            <Logout sx={{ color: "#fff" }} fontSize="large" />
          </div>
          {/* <div className={styles.asset__helpers__icon}>
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
  );
}

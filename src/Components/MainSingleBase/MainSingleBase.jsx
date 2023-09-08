import React from "react";
import styles from "./MainSingleBase.module.scss";
import SideNav from "@trendmicro/react-sidenav";
import { useDispatch, useSelector } from "react-redux";
import { sideBarExpand } from "redux/sidebar/sidebar.slice";

const MainSingleBase = () => {
  const expanded = useSelector((state) => state.sidebar.expand);
  const expandedSinglePage = useSelector(
    (state) => state.sidebar.expandSinglePage
  );
  const dispatch = useDispatch();
  return (
    <SideNav
      className={styles.base}
      style={{
        marginLeft: expanded ? "240px" : "64px",
        display: expandedSinglePage ? "flex" : "none",
      }}
      expanded={expandedSinglePage}
    >
      <div className={styles.base__body}>
        <div className={styles.base__body_header}>
          <button
            onClick={() => dispatch(sideBarExpand.setSideBarExpandSinglePage())}
          >
            sdsdljfsdlfsdfkj
          </button>
        </div>
        <div className={styles.base__body_content}></div>
      </div>
    </SideNav>
  );
};

export default MainSingleBase;

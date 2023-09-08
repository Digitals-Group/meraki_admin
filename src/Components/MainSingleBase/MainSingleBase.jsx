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
      }}
      expanded={expandedSinglePage}
    >
      <div className={styles.base__header}>
        <button
          onClick={() => dispatch(sideBarExpand.setSideBarExpandSinglePage())}
        >
          back
        </button>
      </div>
      <div className={styles.base__content}></div>
    </SideNav>
  );
};

export default MainSingleBase;

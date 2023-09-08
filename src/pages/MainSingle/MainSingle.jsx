import React from "react";
import styles from "./MainSingle.module.scss";
import MainSingleRelations from "Components/MainSingleRelations/MainSingleRelations";
import MainSingleBase from "Components/MainSingleBase/MainSingleBase";

const MainSingle = () => {
  return (
    <div className={styles.mainSingle}>
      <div className={styles.mainSingle__base}>
        <MainSingleBase />
      </div>
      <div className={styles.mainSingle__relations}>
        <MainSingleRelations />
      </div>
    </div>
  );
};

export default MainSingle;

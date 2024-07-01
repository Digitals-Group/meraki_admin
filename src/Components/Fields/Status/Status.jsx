import React from "react";
import styles from "./Status.module.scss";

const Status = ({ status }) => {
 return (
  <div
   className={styles.status}
   style={{ backgroundColor: status ? "blue" : "red" }}
  />
 );
};

export default Status;

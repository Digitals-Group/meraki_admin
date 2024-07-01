import React from "react";
import styles from "./Video.module.scss";

const Video = ({ url, style }) => {
 return (
  <video controls className={styles.video} style={style}>
   <source src={url} type="video/mp4" />
  </video>
 );
};

export default Video;

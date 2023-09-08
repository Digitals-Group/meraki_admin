import React from "react";
import styles from "./MainSingleRelations.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { sideBarExpand } from "redux/sidebar/sidebar.slice";

const MainSingleRelations = () => {
  const dispatch = useDispatch();
  const expandedSinglePage = useSelector(
    (state) => state.sidebar.expandSinglePage
  );
  return (
    <div>
      {!expandedSinglePage && (
        <button
          onClick={() => dispatch(sideBarExpand.setSideBarExpandSinglePage())}
        >
          hide
        </button>
      )}
      <div>sdkfjsldjklf</div>

      <div>sdkfjsldjklf</div>
    </div>
  );
};

export default MainSingleRelations;

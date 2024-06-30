import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import styles from "./SuperTabs.module.scss";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

const tabStyle = {
  fontWeight: 600,
  fontSize: "16px",
  lineHeight: "22px",
  textAlign: "right",
  color: "#000",
  backgroundColor: "#fff",
  opacity: 1,
  flex: 1,
  zIndex: 1,
  transition: "all .5s ease-in-out",
};

const activeStyle = {
  fontWeight: 600,
  fontSize: "16px",
  lineHeight: "22px",
  color: "#fff",
  backgroundColor: "#00acb5",
  flex: 1,
  zIndex: 1,
  transition: "all .5s ease-in-out",
};

const SuperTabs = ({ tabs }) => {
  const { tab_name, id } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const handleChange = (_, newValue) => {
    const currentTab = tabs.find((elem) => elem.index === newValue);
    navigate({
      pathname: `/main/${tab_name}/${id}`,
      search: tab_name !== currentTab.value ? `?relation=${currentTab.value}` : '',
    });
  };

  const currentIndex = tabs.find(
    (elem) => elem.value === searchParams.get("relation")
  )?.index ?? 0;

  return (
    <div className={styles.tabs}>
      <Tabs
        value={currentIndex}
        onChange={handleChange}
        TabIndicatorProps={{
          style: {
            height: "100%",
            background: "#FFF",
          },
        }}
        variant="scrollable"
        allowScrollButtonsMobile
        scrollButtons={false}
      >
        {tabs?.map((tab, index) => (
          <Tab
            value={tab.index}
            label={tab.label}
            key={tab.index}
            style={currentIndex === index ? activeStyle : tabStyle}
            sx={{
              whiteSpace: "noWrap",
              textTransform: "capitalize",
              padding: "0 30px",
            }}
          />
        ))}
      </Tabs>
    </div>
  );
};

export default SuperTabs;

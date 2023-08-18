import { Button, Container } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { fakeActions } from "redux/sidebar/sidebar.slice";

const MainLayout = () => {
  // const { fakeData } = useSelector((store) => store.fake);
  // const dispatch = useDispatch();
  const location = useLocation();

  return (
    <Container>
      <h1>Main</h1>
      <h3>state from location: {location?.state?.name}</h3>
      {/* <Button
        variant="contained"
        onClick={() => {
          dispatch(
            fakeActions.setSaveFakeData(
              "this is from redux, you can also check this in blog page to make sure persistence"
            )
          );
        }}
      >
        Click and save the data to the local storage by redux toolkit and redux
        persist integration
      </Button> */}

      {/* <h2>{fakeData}</h2> */}
    </Container>
  );
};

export default MainLayout;

// https://mui.com/material-ui/customization/theming/

import { createTheme } from "@mui/material";
import { rem } from "utils/pxToRem";

export default createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          "@media (max-width: 768px)": {},
          "&:hover": {},
          svg: {
            maxWidth: "20px",
            minWidth: "20px",
            maxHeight: "20px",
            minHeight: "20px",
            marginRight: 0,
          },
        },
        outlined: {
          "&:hover": {},
        },
        contained: {
          "&:hover": {},
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: rem(16),
          paddingRight: rem(16),
          "@media (min-width:1440px)": {
            maxWidth: "1248px",
            width: "100%",
          },
          "@media (min-width:1200px)": {
            paddingLeft: rem(16),
            paddingRight: rem(16),
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          maxWidth: "none",
        },
      },
    },
  },
  typography: {
    fontFamily: "Inter",
    h1: {
      fontSize: rem(56),
      fontWeight: 700,
      lineHeight: rem(64),
      color: "#fff",
      "@media (max-width: 768px)": {
        fontSize: rem(16),
        fontWeight: 400,
        lineHeight: rem(20),
        color: "#fff",
      },
    },
  },
});

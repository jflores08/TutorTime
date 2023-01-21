import { CSSProperties } from "react";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { red } from "@mui/material/colors";

declare module "@mui/material/styles" {
  // eslint-disable-next-line no-used-vars
  interface TypographyVariants {
    h7: true;
    h8: true;
    bodyLarge: true;
    bodyMedium: true;
    bodyRegular: true;
    bodySmall: true;
    bodyExtraSmall: true;
    bodyExtraExtraSmall: true;
    linkLarge: true;
    linkMedium: true;
    linkSmall: true;
    linkExtraSmall: true;
    buttonLarge: true;
    buttonSmall: true;
    buttonExtraSmall: true;
    label: true;
  }

  // allow configuration using 'createTheme'
  // eslint-disable-next-line no-unused-vars
  interface TypographyVariantsOptions {
    h7: CSSProperties;
    h8: CSSProperties;
    bodyLarge: CSSProperties;
    bodyMedium: CSSProperties;
    bodyRegular: CSSProperties;
    bodySmall: CSSProperties;
    bodyExtraSmall: CSSProperties;
    bodyExtraExtraSmall: CSSProperties;
    linkLarge: CSSProperties;
    linkMedium: CSSProperties;
    linkSmall: CSSProperties;
    linkExtraSmall: CSSProperties;
    buttonLarge: CSSProperties;
    buttonSmall: CSSProperties;
    buttonExtraSmall: CSSProperties;
    overlineLabel: CSSProperties;
  }
}
declare module "@mui/material/Typography" {
  // allow theme over rides
  // eslint-disable-next-line no-unused-vars
  interface TypographyPropsVariantOverrides {
    h7: true;
    h8: true;
    bodyLarge: true;
    bodyMedium: true;
    bodyRegular: true;
    bodySmall: true;
    bodyExtraSmall: true;
    bodyExtraExtraSmall: true;
    linkLarge: true;
    linkMedium: true;
    linkSmall: true;
    linkExtraSmall: true;
    buttonLarge: true;
    buttonSmall: true;
    buttonExtraSmall: true;
    overlineLabel: true;
  }
}

//Create a theme instance.
let theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 1024,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: "#263238",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: ["Poppins"].join(","),
    h1: {
      fontSize: "3.6rem",
    },
    h2: {
      fontSize: "2.71rem",
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: "400",
    },
    h6: {
      fontSize: "1.14rem",
    },
    h7: {
      fontWeight: "500",
      fontSize: "32px",
      letterSpacing: "1px",
    },
    h8: {
      fontWeight: "500",
      fontSize: "24px",
      letterSpacing: "1px",
    },
    bodyLarge: {
      fontWeight: "400",
      fontSize: "24px",
      letterSpacing: "1px",
    },
    bodyMedium: {
      fontWeight: "500",
      fontSize: "18px",
      letterSpacing: "1px",
    },
    bodyRegular: {
      fontWeight: "400",
      fontSize: "18px",
      letterSpacing: "1px",
    },
    bodySmall: {
      fontWeight: "400",
      fontSize: "16px",
      letterSpacing: "1px",
    },
    bodyExtraSmall: {
      fontWeight: "400",
      fontSize: "14px",
      letterSpacing: "1px",
    },
    bodyExtraExtraSmall: {
      fontWeight: "400",
      fontSize: "12px",
      letterSpacing: "1px",
    },
    linkLarge: {
      fontWeight: "600",
      fontSize: "24px",
      letterSpacing: "1px",
    },
    linkMedium: {
      fontWeight: "700",
      fontSize: "18px",
      letterSpacing: "1px",
    },
    linkSmall: {
      fontWeight: "600",
      fontSize: "16px",
      letterSpacing: "1px",
    },
    linkExtraSmall: {
      fontWeight: "600",
      fontSize: "14px",
      letterSpacing: "1px",
    },
    buttonLarge: {
      fontWeight: "400",
      fontSize: "18px",
      letterSpacing: "1px",
    },
    buttonSmall: {
      fontWeight: "400",
      fontSize: "16px",
      letterSpacing: "1px",
    },
    buttonExtraSmall: {
      fontWeight: "500",
      fontSize: "13px",
      letterSpacing: "1px",
    },
    overlineLabel: {
      fontWeight: "700",
      letterSpacing: "0px",
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;

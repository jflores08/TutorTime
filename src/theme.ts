import { CSSProperties } from "react";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { red } from "@mui/material/colors";

declare module "@mui/material/Button" {
  // eslint-disable-next-line no-unused-vars
  interface ButtonPropsVariantOverrides {
    dashed: true;
    primary: true;
    secondary: true;
    customDisabled: true; // created a customDisabled variant instead of disabled to enable mouse-pointer disabled state (this is not possible with the default disabled MUI styles)
    menuButton: true;
    pressed: true;
    signUp: true;
  }
}

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
      lg: 1285,
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
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "primary" },
          style: {
            textTransform: "none",
            width: "199px",
            height: "48px",
            backgroundColor: "#263238",
            color: "#F4FBFE",
            borderRadius: "50px",
            fontSize: "18px",
          },
        },
        {
          props: { variant: "secondary" },
          style: {
            textTransform: "none",
            width: "199px",
            height: "48px",
            color: "#263238",
            borderRadius: "50px",
            fontSize: "18px",
            fontWeight: "400",
            border: "1px solid #263238",
            "&:hover": {
              border: "1px solid #5A6859",
            },
          },
        },
        {
          props: { variant: "customDisabled" },
          style: {
            textTransform: "none",
            maxWidth: "199px",
            height: "48px",
            backgroundColor: "#D1D5DB",
            color: "#F4FBFE",
            borderRadius: "50px",
            cursor: "not-allowed",
          },
        },
        {
          props: { variant: "outlined" },
          style: {
            textTransform: "none",
            maxWidth: "199px",
            height: "48px",
            color: "Black",
            borderRadius: "50px",
          },
        },
        {
          props: { variant: "pressed" },
          style: {
            textTransform: "none",
            width: "199px",
            height: "48px",
            backgroundColor: "#424D3E",
            color: "#F4FBFE",
            borderRadius: "50px",
          },
        },
        {
          props: { variant: "menuButton" },
          style: {
            textTransform: "none",
            width: "199px",
            height: "48px",
            backgroundColor: "#1F2937",
            color: "#F4FBFE",
            borderRadius: "50px",
          },
        },
        {
          props: { variant: "signUp" },
          style: {
            textTransform: "none",
            width: "104px",
            height: "32px",
            color: "#566551",
            borderRadius: "50px",
            border: "1px solid #566551",
          },
        },
      ],

      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant !== "customDisabled" && {
            "&:hover": { backgroundColor: "#9DB794" },
          }),
          ...(ownerState.variant === "customDisabled" && {
            "&:hover": { backgroundColor: "#D1D5DB", cursor: "not-allowed" },
          }),
        }),
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;

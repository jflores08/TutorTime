// Import React components
import { FC } from "react";

//Import Next.js componenets
import Image from "next/image";
import { useTranslations } from "next-intl";

//Import MUI components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Link as MuiLink } from "@mui/material";

//Import custom components
// import Link from "../Link";
import MobileNavMenu from "./MobileNavMenu";
import { LeftNavPart } from "./LeftNavPart";

// const page_hrefs: Ipage_href[] = [
//   { textKey: "navLink 1", path: "/#" },
//   { textKey: "navLink 2", path: "/#" },
//   { textKey: "navLink 3", path: "/#" },
// ];
const page_hrefs: Ipage_href[] = [
  { textKey: "Learning Platform", path: "/#" },
  { textKey: "Community", path: "/#" },
  { textKey: "Contact Us", path: "/#" },
];
export interface Ipage_href {
  textKey: "Learning Platform" | "Community" | "Contact Us";
  path: string;
}

const ResponsiveNavBar: FC = () => {
  // Import NavBar translations
  // const t = useTranslations("NavBar");

  return (
    // <AppBar
    //   position="static"
    //   sx={{
    //     paddingTop: "20px",
    //     paddingLeft: "16px",
    //     // bgColor: "#ffffffff",
    //   }}
    //   elevation={0}
    // >
    <AppBar position="static" sx={{ bgcolor: "#FFFFFF", paddingTop: "30px" }}>
      <Container maxWidth="xl">
        <Toolbar>
          {/* Left side of the menu on desktop */}
          <LeftNavPart pages={page_hrefs} />

          {/* Right side of the menu on desktop */}
          <Stack
            direction="row-reverse"
            // alignItems="center"
            // justifyContent={"flex-end"}
            spacing="40px"
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <MuiLink target="_blank" href="/">
              <Button
                sx={{
                  display: { xs: "none", md: "flex" },
                  width: "210px",
                  height: "60px",
                  borderRadius: 50,
                  textTransform: "none",
                  fontSize: "1.14rem",
                }}
                disableElevation
                size="large"
                variant="contained"
                color="primary"
              >
                Sign Up
              </Button>
            </MuiLink>
          </Stack>

          {/* Mobile menu */}
          <Stack
            direction="row-reverse"
            alignItems="center"
            spacing="40px"
            sx={{ display: { sm: "flex", xs: "flex", md: "none" } }}
          >
            <MobileNavMenu page_hrefs={page_hrefs} />
          </Stack>
          {/* </Stack> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveNavBar;

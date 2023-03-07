import { FC } from "react";

// Import Next.js components
import Image from "next/image";

// Import mui components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Link as MuiLink } from "@mui/material";

const LeftNavPart: FC<{
  pages: { textKey: string; path: string }[];
}> = ({ pages }) => {
  return (
    <Stack
      direction="row"
      // spacing="40px"
      alignItems="center"
      //   justifyContent="center"
      sx={{ flexGrow: 1 }}
    >
      <Box
        key="appBarLogo"
        // alignItems="center"
        sx={{ width: "130px", mr: { xs: "24px", lg: "120px" } }}
      >
        <MuiLink href="/">
          <Image
            src="/logos/EruditeEndeavors-logo.png"
            alt="tutor-logo"
            width={130}
            height={46}
          ></Image>
        </MuiLink>
      </Box>
      {pages.map((link, index) => (
        <MuiLink
          href={link.path}
          underline="none"
          color={"#000000"}
          key={index}
          sx={{ pl: { xs: "0px", md: "64px", lg: "120px" } }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{
              display: { xs: "none", md: "flex" },
              mx: { xs: "0px", lg: "20px" },
            }}
          >
            {link.textKey}
          </Typography>
        </MuiLink>
      ))}
    </Stack>
  );
};

export { LeftNavPart };

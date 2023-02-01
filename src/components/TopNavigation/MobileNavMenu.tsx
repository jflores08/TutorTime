import { FC, useState } from "react";

// import { useTranslations } from "next-intl";
import Link from "next/link";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";

import { Ipage_href } from "./ResponsiveNavMenu";

const MobileNavMenu: FC<{
  page_hrefs: Ipage_href[];
}> = ({ page_hrefs }) => {
  //   const t = useTranslations("NavBar");

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: { md: "none", xs: "flex", lg: "none" },
        // alignItems: "center",
      }}
    >
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        // color="inherit"
        sx={{ color: "#1967D2" }}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        {page_hrefs.map((link, index) => (
          <Link href={link.path} key={index}>
            <MenuItem>
              <Typography textAlign="center">{link.textKey}</Typography>
            </MenuItem>
          </Link>
        ))}
        <Link
          //   underline="none"
          target="_blank"
          href="https://calendly.com/toon-equip/equip-introductie"
        >
          <MenuItem key="Request Appointment">
            <Typography textAlign="center">Request Appointment</Typography>
          </MenuItem>
        </Link>
      </Menu>
    </Box>
  );
};

export default MobileNavMenu;

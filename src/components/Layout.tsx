// Import Next.js components
import { useRouter } from "next/router";

// Import custom components
import ResponsiveNavBar from "./TopNavigation/ResponsiveNavMenu";
import Footer from "./Footer";
import { pages } from "../coreVariables";

// Import MUI components
import { Box } from "@mui/material";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const router = useRouter();

  return (
    <>
      <Box sx={{ flexGrow: 1, bgcolor: "#FFFFFF" }}>
        <ResponsiveNavBar />
      </Box>
      <main>{children}</main>
      <Footer pages={pages} />
    </>
  );
}

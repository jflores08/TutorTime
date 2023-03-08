// Import React components
import { FC } from "react";

// Import Next.js components
import Image from "next/image";
import { GetStaticPropsContext } from "next";
// import { useTranslations } from "next-intl";

// Import MUI components
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Link as MuiLink } from "@mui/material";

// Import custom components
// import Link from "./Link";
import Copyright from "./Copyright";

interface FooterProps {
  pages: {
    name: string;
    path: string;
  }[];
  bgColor?: string;
}

const footer_hrefs: Ifooter_href[] = [
  { textKey: "Home", path: "/#" },
  { textKey: "Community", path: "/#" },
  { textKey: "Contact Us", path: "/#" },
  // { textKey: "Appointemt", path: "/appointment" },
];

interface Ifooter_href {
  textKey: "Home" | "Learning Platform" | "Community" | "Contact Us" | "Appointemt";
  path: string;
}

const Footer: FC<FooterProps> = ({ pages, bgColor = "#F5F5F5" }) => {
  // Import Footer text translations
  //   const t = useTranslations("Footer");

  return (
    <Box bgcolor={bgColor}>
      <Container maxWidth="xl">
        <Grid
          container
          display="flex"
          padding="30px"
          spacing={2}
          sx={{ minHeight: "300px" }}
        >
          <Grid item xs={12} md={2}>
            <Image
              src="/logos/EruditeEndeavors-logo.png"
              alt="tutor-logo"
              width={260}
              height={92}
            ></Image>
          </Grid>
          <Grid item xs={12} md={0} lg={0} xl={0.5}></Grid>
          <Grid item xs={12} md={5} lg={5} xl={3.5}>
            <div>
              <Typography
                variant="h6"
                sx={{
                  display: {
                    xs: "block",
                    sm: "inline-block",
                    md: "inline-block",
                  },
                  mb: { xs: "25px", md: "25px" },
                }}
              >
                Erudite Endeavors Inc.
              </Typography>
            </div>
            <div>
              <MuiLink href="mailto:info@equip.money">
                <Typography
                  variant="h6"
                  sx={{
                    display: {
                      xs: "block",
                      sm: "inline-block",
                      md: "inline-block",
                    },
                    mb: { xs: "25px", md: "25px" },
                  }}
                >
                  EruditeEndeavors@gmail.com
                </Typography>
              </MuiLink>
            </div>
            <div>
              <Typography
                variant="h6"
                sx={{
                  display: {
                    xs: "block",
                    sm: "inline-block",
                    md: "inline-block",
                  },
                  mb: { xs: "25px", md: "25px" },
                }}
              >
                698 Nobel Ave
              </Typography>
            </div>
            <div>
              <Typography
                variant="h6"
                sx={{
                  display: {
                    xs: "block",
                    sm: "inline-block",
                    md: "inline-block",
                  },
                  mb: { xs: "25px", md: "25px" },
                }}
              >
                Santa Cruz, CA
              </Typography>
            </div>
            <div>
              <Typography
                variant="h6"
                sx={{
                  display: {
                    xs: "block",
                    sm: "inline-block",
                    md: "inline-block",
                  },
                  mb: { xs: "25px", md: "25px" },
                }}
              >
                91790
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4} lg={4} xl={3}>
            {footer_hrefs.map((link, index) => (
              <MuiLink href={link.path} key={index} underline="none">
                <Typography variant="h6" component="div" sx={{ mb: "25px" }}>
                  {link.textKey}
                </Typography>
              </MuiLink>
            ))}
          </Grid>
          <Grid item xs={12} md={3}>
            <MuiLink
              target="_blank"
              href="/pdf_files/Equip_Privacy_Policy_July_2022.pdf"
              style={{ textDecoration: "none" }}
            >
              <Typography variant="h6" component="div" sx={{ mb: "25px" }}>
                {"Privacy Policy"}
              </Typography>
            </MuiLink>
            <MuiLink
              target="_blank"
              href="/pdf_files/Equip_Terms_of_Service_August_2022.pdf"
              style={{ textDecoration: "none" }}
            >
              <Typography variant="h6" component="div" sx={{ mb: "25px" }}>
                {"Terms of Service"}
              </Typography>
            </MuiLink>
          </Grid>

          <Grid item xs={12}>
            <Copyright />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

// export async function getStaticProps({ locale }: GetStaticPropsContext) {
//   return {
//     props: {
//       messages: (await import(`../../messages/${locale}.json`)).default,
//     },
//   };
// }

export default Footer;

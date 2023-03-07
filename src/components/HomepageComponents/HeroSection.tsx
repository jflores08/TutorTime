// // Import react components
import { FC } from "react";

// Import MUI components
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Link as MuiLink } from "@mui/material";

// Import Custom components
import { AvatarProfileCard } from "./Avatar/AvatarProfileCard";

const HeroSection: FC<{}> = () => {
  return (
    <Box
      id="heroSectionBox"
      sx={{
        bgcolor: "#E7E9E8",
        width: "100%",
        display: "flex",
      }}
    >
      <Container
        maxWidth="xl"
        id="HeroSectionContainer"
        sx={{
          bgcolor: "#E7E9E8",
          mt: "30px",
        }}
      >
        <Grid
          container
          display="flex"
          alignItems="center"
          padding="30px"
          spacing={2}
        >
          <Grid
            item
            xs={12}
            md={6}
            sx={{ alignItems: { xs: "center", md: "flex-start" } }}
          >
            <Typography variant="h1" component="h1">
              Experienced Tutor and Graduate from UCSC
            </Typography>
            <Typography
              variant="h4"
              component="h4"
              sx={{ marginTop: "25px", marginBottom: "35px" }}
            >
              I have 5 years experience tutoring as well as 1 year experience
              teaching 5th grade and 1 year teaching programming to elementary
              school kids. I hold degrees in Environmental studies with a
              concentration in GIS and an Associate’s degree in Behavioral and
              Cognitive Science. I graduated both with honors. Additionally, I
              hold certifications in Photography, photo and video editing, as
              well as web design.
            </Typography>
            <MuiLink href="mailto:eruditeendeavors@gmail.com">
              <Button
                size="medium"
                variant="contained"
                sx={{
                  width: "50%",
                  marginTop: "10px",
                  backgroundColor: "#0072F5",
                  color: "#FFFFFF",
                  borderRadius: "10px",
                }}
              >
                Email Inquiries
              </Button>
            </MuiLink>
          </Grid>
          <Grid item md={1}></Grid>
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AvatarProfileCard />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export { HeroSection };

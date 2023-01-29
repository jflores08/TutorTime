// // Import react components
import { FC } from "react";

// Import MUI components
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const CalendarJumbotron: FC<{}> = () => {
  return (
    <Box
      id="jumbotronSectionBox"
      sx={{
        bgcolor: "#FFFFFF",
        width: "100%",
        display: "flex",
      }}
    >
      <Container
        maxWidth="xl"
        id="jumbotronSectionContainer"
        sx={{
          bgcolor: "#FFFFFF",
          mt: "30px",
        }}
      >
        <Grid
          container
          id="jumbotronSectionGrid"
          sx={{
            height: { md: "500px", sm: "250px", xs: "250px" },
          }}
        >
          <Box
            id="jumbotronBackgroundBox"
            sx={{
              backgroundImage:
                "url(https://littlevisuals.co/images/sunset.jpg)",
              width: "100%",
              ml: "24px",
              mr: "24px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Grid
              id="jumbotronMessageGrid"
              item
              xs={12}
              sm={12}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                textAlign={"center"}
                sx={{
                  fontWeight: "700",
                  fontSize: { lg: 70, md: 70, sm: 40, xs: 20 },
                  color: "#ffffffff",
                }}
              >
                Calendar
              </Typography>

              
              {/* <Box sx={{ width: "100%", justifyContent: "center" }}> */}
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
                Join For Free
              </Button>
            </Grid>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};
export { CalendarJumbotron };

// // Import react components
import { FC } from "react";

// Import MUI components
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const CalendarHeader: FC<{}> = () => {
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
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography variant="h1">CALENDAR</Typography>
      </Container>
    </Box>
  );
};
export { CalendarHeader };

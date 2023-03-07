// Import react components
import { FC } from "react";

// Import Next.js components
// import { Grid } from "@nextui-org/react";

// Import MUI components
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

// Import custom react components
import InnerHTML from 'dangerously-set-html-content'

const AppointmentMenu: FC = () => {

    const squareAppointmentScript = `<script src='https://square.site/appointments/buyer/widget/nzx3mnv7dsf78j/LHCNT5D4S3CEC.js'></script>`

  return (
    <Box
      id="priceGridSectionBox"
      sx={{
        bgcolor: "#FFFFFF",
        width: "100%",
        display: "flex",
      }}
    >
      <Container
        maxWidth="xl"
        id="priceCardGridContainer"
        sx={{
          bgcolor: "#FFFFFF",
          display: "flex",
          mt: "30px",
        }}
      >
        <Box
          id="priceCardGridBox"
          sx={{
            width: "100%",
            ml: "24px",
            mr: "24px",
          }}
        >
         <InnerHTML html={squareAppointmentScript} />
        </Box>
      </Container>
    </Box>
  );
};

export { AppointmentMenu };

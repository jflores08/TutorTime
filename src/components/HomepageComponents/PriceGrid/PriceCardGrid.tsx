// Import react components
import { FC } from "react";

// Import Next.js components
// import { Grid } from "@nextui-org/react";

// Import MUI components
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

// Import custom components
import { PriceCard } from "./PriceCard";

//Import custom data
import { priceTierData } from "../../../data/priceTierData";

const PriceCardGrid: FC = () => {
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
          <Grid container id="priceCardGrid">
            {priceTierData.map((priceCardContent, index) => (
              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                lg={4}
                key={index}
                sx={{
                  minWidth: "200px",
                  display: "flex",
                  justifyContent: "center",
                  mt: { xs: "8px" },

                  mb: "30px",
                }}
              >
                <PriceCard
                  title={priceCardContent.title}
                  subheader={priceCardContent.subheader}
                  price={priceCardContent.price}
                  description={priceCardContent.description}
                  buttonText={priceCardContent.buttonText}
                  href={priceCardContent.href}
                  buttonVariant={priceCardContent.buttonVariant}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export { PriceCardGrid };

// Import React components
import { FC } from "react";

// Import Next.js components
import Image from "next/image";

// Import MUI compments
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Link as MuiLink } from "@mui/material";
// import CardHeader from "@mui/material/CardHeader";
import Stack from "@mui/material/Stack";
// import CardCover from "@mui/joy/CardCover";
import Button from "@mui/material/Button";
// import Box from "@mui/material/Box";
import Box, { BoxProps } from "@mui/material/Box";
import { flexbox } from "@mui/system";
// Import Custom components
// import Link from "../Link";
// import NextLink from "../Link";

const CourseInfoCard: FC<{
  title: string;
  label: string;
  imageSource: string;
  studentCount: string;
  resourceURL: string;
}> = ({ title, label, imageSource, studentCount, resourceURL }) => {
  return (
    <Card
      elevation={12}
      sx={{
        maxHeight: "330px",
        maxWidth: "297px",
        borderRadius: "16px",
      }}
    >
      {/* turns the card into a Link to a resource */}
      <MuiLink href="/" underline="none" sx={{ height: "320px" }}>
        {/* <CardHeader> */}
        <Typography
          id="courseTitleText"
          variant="h6"
          component="div"
          color="#ffffffff"
          sx={{
            position: "absolute",
            fontSize: { lg: 21, md: 21, sm: 21, xs: 21 },
            mt: "10px",
            ml: "10px",
          }}
        >
          {title}
        </Typography>

        {/* Card Background */}
        <CardMedia
          component="img"
          alt="Course Image"
          height="220px"
          width="310px"
          image={imageSource}
        />

        {/* Card Footer */}
        <CardContent
          id="cardFooter"
          sx={{
            // position: "absolute",
            bgBlur: "#0f111466",
            bottom: 0,
            px: "8px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              m: 1,
            }}
          >
            <Typography
              sx={{
                color: "#000000",
                fontSize: { lg: 18, md: 18, sm: 18, xs: 18 },
              }}
            >
              {studentCount} Students
            </Typography>
            <Box>
              <Button
                sx={{
                  justifyContent: "center",
                  bgcolor: "#0072F5",
                }}
              >
                <Typography
                  sx={{
                    color: "#d1d1d1",
                    fontWeight: "700",
                    fontSize: { lg: 12, md: 12, sm: 12, xs: 12 },
                  }}
                >
                  Enroll
                </Typography>
              </Button>
            </Box>
          </Box>
        </CardContent>
      </MuiLink>
    </Card>
  );
};

export default CourseInfoCard;

{
  /* <Box
            // direction={"row"}
            sx={{
              width: "410px",
              display: "flex",
              justifynContent: "space-between",
            }}
          >
            <Typography
              sx={{
                color: "#000000",
                fontSize: { lg: 18, md: 18, sm: 18, xs: 12 },
              }}
            >
              {studentCount} Students
            </Typography>
            <Box>
              <Button
                sx={{
                  justifyContent: "center",
                  // ml: { lg: "140px", md: "100px", sm: "100px", xs: "60px" },
                  bgcolor: "#0072F5",
                }}
              >
                <Typography
                  sx={{
                    color: "#d1d1d1",
                    fontWeight: "700",
                    fontSize: { lg: 12, md: 12, sm: 12, xs: 8 },
                  }}
                >
                  Enroll
                </Typography>
              </Button>
            </Box>
          </Box> */
}

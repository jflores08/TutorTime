// Import react components
import { FC } from "react";

// Import Next.js components

// Import MUI components
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

// Import custom components
import CourseInfoCard from "./CourseInfoCard";

//Import custom data
import { courseData } from "../../../data/courseData";

const CourseCardGrid: FC = () => {
  return (
    <Box
      id="courseCardGridSectionBox"
      sx={{
        bgcolor: "#FFFFFF",
        width: "100%",
        display: "flex",
      }}
    >
      <Container
        maxWidth="xl"
        id="courseCardGridContainer"
        sx={{
          bgcolor: "#FFFFFF",
          display: "flex",
          mt: "30px",
        }}
      >
        <Box
          id="courseCardGridBox"
          sx={{
            width: "100%",
            ml: "24px",
            mr: "24px",
          }}
        >
          <Grid container id="courseInfoCardGrid">
            {courseData.map((courseContent, index) => (
              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                lg={4}
                key={index}
                sx={{
                  minWidth: "100px",
                  display: "flex",
                  justifyContent: "center",
                  mt: { xs: "8px" },

                  mb: "30px",
                }}
              >
                <CourseInfoCard
                  title={courseContent.title}
                  label={courseContent.label}
                  imageSource={courseContent.imageSource}
                  studentCount={courseContent.studentCount}
                  resourceURL={courseContent.resourceURL}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export { CourseCardGrid };

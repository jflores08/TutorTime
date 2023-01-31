// Import Next.js components
import type { NextPage } from "next";

// Import custom comtonents
import { CourseCardGrid } from "../src/components/HomepageComponents/CourseGrid/CourseCardGrid";
import { Calendar } from "../src/components/BookAnAppointmentFlow/components/calendar";
import { CalendarJumbotron } from "../src/components/BookAnAppointmentFlow/components/calendarJumbotron";
import Layout from "../src/components/Layout";
import { PriceCardGrid } from "../src/components/HomepageComponents/PriceGrid/PriceCardGrid";
import { Typography } from "@mui/material";
import { CalendarHeader } from "../src/components/BookAnAppointmentFlow/components/CalendarHeader";

const Appointment: NextPage = () => {
  return (
    <Layout>
      {/* Jumbotron */}
      <CalendarJumbotron />

      {/* Jumbotron */}
      {/* <Calendar /> */}
      <CalendarHeader />
      <Typography
        sx={{ display: "flex", justifyContent: "center" }}
        variant="h1"
      >
        Calendar
      </Typography>

      {/* 3 Displaying Product Cards */}
      <CourseCardGrid />

      {/* PriceCards */}
      <PriceCardGrid />
    </Layout>
  );
};

export default Appointment;

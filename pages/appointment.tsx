// Import Next.js components
import type { NextPage } from "next";

// Import custom comtonents
import { CourseCardGrid } from "../src/components/HomepageComponents/CourseGrid/CourseCardGrid";
import { Calendar } from "../src/components/BookAnAppointmentFlow/components/calendar";
import { CalendarJumbotron } from "../src/components/BookAnAppointmentFlow/components/calendarJumbotron";
import Layout from "../src/components/Layout";
import { PriceCardGrid } from "../src/components/HomepageComponents/PriceGrid/PriceCardGrid";

const Appointment: NextPage = () => {
  return (
    <Layout>
      {/* Jumbotron */}
      <CalendarJumbotron />

      {/* Jumbotron */}
      <Calendar />

      {/* 3 Displaying Product Cards */}
      <CourseCardGrid />

      {/* PriceCards */}
      <PriceCardGrid />
    </Layout>
  );
};

export default Appointment;

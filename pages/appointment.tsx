// Import Next.js components
import type { NextPage } from "next";

// Import custom comtonents
import { CourseCardGrid } from "../src/components/HomepageComponents/CourseGrid/CourseCardGrid";
import { AppointmentJumbotron } from "../src/components/BookAnAppointmentFlow/AppointmentJumbotron";
import Layout from "../src/components/Layout";
import { PriceCardGrid } from "../src/components/HomepageComponents/PriceGrid/PriceCardGrid";
import { AppointmentMenu } from "../src/components/BookAnAppointmentFlow/AppointmentMenu";

const Appointment: NextPage = () => {
  return (
    <Layout>
      {/* Jumbotron */}
      <AppointmentJumbotron />

      {/* 3 Displaying Product Cards */}
      <CourseCardGrid />

      {/* PriceCards */}
      <PriceCardGrid />

      {/* Appointment */}
      <AppointmentMenu />
    </Layout>
  );
};

export default Appointment;

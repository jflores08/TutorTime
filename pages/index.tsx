// Import Next.js components
import type { NextPage } from "next";

// Import custom comtonents
import { CourseCardGrid } from "../src/components/HomepageComponents/CourseGrid/CourseCardGrid";
import { Jumbotron } from "../src/components/HomepageComponents/Jumbotron";
import Layout from "../src/components/Layout";
import { PriceCardGrid } from "../src/components/HomepageComponents/PriceGrid/PriceCardGrid";
import { HeroSection } from "../src/components/HomepageComponents/HeroSection";
import { AppointmentMenu } from "../src/components/BookAnAppointmentFlow/AppointmentMenu";
const Home: NextPage = () => {
  return (
    <Layout>
      {/* Jumbotron */}
      {/* <Jumbotron /> */}

      {/* HeroSection */}
      <HeroSection />

      {/* 3 Displaying Product Cards */}
      <CourseCardGrid />

      {/* PriceCards */}
      {/* <PriceCardGrid /> */}

      {/*Appointment Menu */}
      <AppointmentMenu />
    </Layout>
  );
};

export default Home;

// Import Next.js components
import type { NextPage } from "next";

// Import custom comtonents
import Layout from "../src/components/Layout";
import { HeroSection } from "../src/components/HomepageComponents/HeroSection";
import { CourseCardGrid } from "../src/components/HomepageComponents/CourseGrid/CourseCardGrid";
import { AppointmentMenu } from "../src/components/HomepageComponents/AppointmentMenu";

const Home: NextPage = () => {
  return (
    <Layout>
      {/* Hero Section */}

      <HeroSection />

      {/* 3 Displaying Product Cards */}
      <CourseCardGrid />

      {/* SquareAppointments */}
      <AppointmentMenu />
    </Layout>
  );
};

export default Home;

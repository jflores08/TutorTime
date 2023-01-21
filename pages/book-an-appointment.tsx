// Import Next.js components
import type { NextPage } from "next";

// Import custom comtonents
import { CourseCardGrid } from "../src/components/HomepageComponents/CourseGrid/CourseCardGrid";
import { Jumbotron } from "../src/components/HomepageComponents/Jumbotron";
import Layout from "../src/components/Layout";
import { PriceCardGrid } from "../src/components/HomepageComponents/PriceGrid/PriceCardGrid";

const Home: NextPage = () => {
  return (
    <Layout>

      {/* Jumbotron */}
      <Jumbotron />

      {/* 3 Displaying Product Cards */}
      <CourseCardGrid />

      {/* PriceCards */}
      <PriceCardGrid />

    </Layout>
  );
};

export default Home;

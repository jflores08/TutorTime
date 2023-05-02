// Import Next.js components
import type { NextPage } from "next";

// Import custom comtonents
import Layout from "../src/components/Layout";
import { BookAnAppointmentFlow } from "../src/components/BookAnAppointmentFlow";

const Appointment: NextPage = () => {
  return (
    <Layout>
      {/* Book an Appoitment Flow */}
      <BookAnAppointmentFlow />
    </Layout>
  );
};

export default Appointment;

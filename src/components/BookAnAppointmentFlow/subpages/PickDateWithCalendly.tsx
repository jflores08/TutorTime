import { FC, useEffect } from "react";

// Import mui components
import Box from "@mui/material/Box";

// Import Nextjs component
import InnerHTML from "dangerously-set-html-content";

const PickDateWithCalendly: FC<{
  calendlyLink: string;
  userEmail: string | null | undefined;
  userAnswers: any;
}> = ({ calendlyLink, userEmail, userAnswers }) => {
  const calendlyScript = `<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js"></script>`;
  const calendlyWidget = `<div class="calendly-inline-widget" data-url=${calendlyLink} style="min-width:320px;height:750px; ></div>
  <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>`;

  useEffect(() => {
    const appointmentDetails = {
      userEmail: userEmail,
      userAnswers: userAnswers,
    };

    fetch("/api/sendAppointmentDetails", {
      method: "post",
      body: JSON.stringify(appointmentDetails),
    }).then((res) => {
      if (res.status === 200) {
        console.log(
          `Email with appointment details sent successfully to ${userEmail}`
        );
      } else {
        console.error(
          "Something went wrong when sending the email with appointment details"
        );
      }
    });
  }, [userEmail, userAnswers]);

  return (
    <Box id="calendly-inline-widget-box" sx={{ mt: "-70px" }}>
      <InnerHTML html={calendlyScript} />
      <InnerHTML html={calendlyWidget} />
    </Box>
  );
};
export { PickDateWithCalendly };

import { FC, useEffect } from "react";

// Import mui components
import Box from "@mui/material/Box";

// Import Nextjs component
import InnerHTML from "dangerously-set-html-content";

// Import local components
import { AppointmentMenu } from "../AppointmentMenu";

const SquareAppointmentWidget: FC<{
 
}> = ({}) => {

  
    
  return (
    <Box id="square-inline-widget-box" sx={{ mt: "-70px" }}>
      <AppointmentMenu />
    </Box>
  );
};
export { SquareAppointmentWidget };

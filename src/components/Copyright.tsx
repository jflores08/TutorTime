// Import MUI components
import Typography from "@mui/material/Typography";

export default function Copyright() {
  return (
    <Typography variant="body1">
      {"Copyright © "}
      {new Date().getFullYear()}.
      {" Erudite Endeavors - All rights reserved"}
    </Typography>
  );
}

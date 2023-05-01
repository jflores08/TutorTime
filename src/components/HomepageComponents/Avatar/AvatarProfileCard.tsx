// Import React components
import { FC } from "react";

// Import MUI components
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";

/* JSX begins here */
const AvatarProfileCard: FC<{}> = ({}) => {
  return (
    <Box
      id="expertDisplayBox"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "600px",
        height: "300px",
      }}
    >
      <Avatar
        alt="tutor image"
        src={`/avatar/JonFlores.jpg`}
        sx={{ width: 250, height: 250, mb: "10px" }}
      />
      <Typography
        variant="h8"
        sx={{
          lineHeight: "18px",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          textAlign: "center",
        }}
      >
        Jonathan Flores
      </Typography>
      <Typography
        variant="bodyRegular"
        sx={{
          lineHeight: "36px",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          textAlign: "center",
        }}
      >
        Tutor
      </Typography>
    </Box>
  );
};

export { AvatarProfileCard };
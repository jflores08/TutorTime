// // Import react components
import * as React from "react";
import { FC } from "react";

// Import MUI components
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import dayjs, { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

const isWeekend = (date: Dayjs) => {
  const day = date.day();

  return day === 0 || day === 6;
};

//   export default function StaticDatePickerLandscape() {

const Calendar: FC<{}> = () => {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs("2023-04-07"));

  return (
    <Box
      id="calendarSectionBox"
      sx={{
        bgcolor: "#FFFFFF",
        width: "100%",
        display: "flex",
      }}
    >
      <Container
        maxWidth="xl"
        id="calendarSectionContainer"
        sx={{
          bgcolor: "#FFFFFF",
          mt: "30px",
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <StaticDatePicker
            orientation="landscape"
            openTo="day"
            value={value}
            shouldDisableDate={isWeekend}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </Container>
    </Box>
  );
};
export { Calendar };

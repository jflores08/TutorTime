// // Import react components
import * as React from "react";
import { useState } from "react";
import { FC } from "react";

// Import MUI components
import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import dayjs, { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import Badge from "@mui/material/Badge";

const isWeekend = (date: Dayjs) => {
  const day = date.day();

  return day === 0 || day === 6;
};

//   export default function StaticDatePickerLandscape() {

export const Calendar: FC<{}> = () => {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs("2023-04-07"));
  const [highlightedDays, setHighlightedDays] = useState([1, 2, 5, 12]);

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
          width: "80%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{ display: "flex", justifyContent: "center" }}
          variant="h4"
        >
          Blah Test
        </Typography>

        <LocalizationProvider dateAdapter={AdapterDayjs} id="calendarWrapper">
          <StaticDatePicker
            orientation="portrait"
            openTo="day"
            value={value}
            // shouldDisableDate={isWeekend}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
            renderDay={(day, _value, DayComponentProps) => {
              const isSelected =
                !DayComponentProps.outsideCurrentMonth &&
                highlightedDays.indexOf(day.date()) >= 0;

              return (
                <Badge
                  key={day.toString()}
                  overlap="circular"
                  badgeContent={isSelected ? "🌚" : undefined}
                >
                  <PickersDay {...DayComponentProps} />
                </Badge>
              );
            }}
          />
        </LocalizationProvider>
      </Container>
    </Box>
  );
};

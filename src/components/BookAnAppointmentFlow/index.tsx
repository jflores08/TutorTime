import { FC, useState } from "react";

// import { useTranslations } from "next-intl";
// import { useUser } from "@auth0/nextjs-auth0";

// Import MUI components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";

// Import local components
// import { QuestionDetails } from "./subpages/QuestionDetails";
// import { SelectExpertType } from "./subpages/SelectExpertType";
// import { PreferenceForSpecificExpert } from "./subpages/PreferenceForSpecificExpert";
// import { ChooseSpecificExpert } from "./subpages/ChooseSpecificExpert";
// import { PickDateWithCalendly } from "./subpages/PickDateWithCalendly";
import { PickDateWithCalendly } from "./subpages/PickDateWithCalendly";
import { NavigationButtons } from "./NavigationButtons";

const financial_planner_group_calendly_link =
  "https://calendly.com/equip-financial-planners/1-on-1-video-meeting-equip?hide_gdpr_banner=1";
const budgetcoach_group_calendly_link =
  "https://calendly.com/equip-budgetcoaches/1-on-1-video-meeting-equip?hide_gdpr_banner=1";

export interface IUserAnswers {
  questionDetails: {
    hasSpecificQuestion: boolean | null;
    questionTopics: {
      Uitgaven: boolean;
      Wonen: boolean;
      Schulden: boolean;
      Verzekeringen: boolean;
      Sparen: boolean;
      Beleggen: boolean;
      Pensioen: boolean;
      Anders: boolean;
    };
    specificQuestion: string;
  };
  expertType: "financial_planner" | "budgetcoach" | null;
  specificExpert: {
    hasPreferenceForSpecificExpert: boolean | null;
    expertDetails: {
      name: string;
      avatar: string;
      id: string;
      calendlyLink: string;
    } | null;
  };
}

/* Start of the component */
const BookAnAppointmentFlow: FC<{}> = () => {
  
     /* === VARIABLES AND FUNCTIONS TO HANDLE APPEARANCE OF "PREVIOUS" AND "NEXT" BUTTONS === */
  // State variable to track if the "Next" button is disabled (if true) or not (if false)
  const [disableNextButton, setDisableNextButton] = useState(true)
  
  /* === VARIABLES AND FUNCTIONS RELATED TO PROGRESS BAR === */
  // State variable to track which step of the flow the user is on
  const [step, setStep] = useState(0)

  // State variable to adjust the total number of steps in the flow based on the users inputs
  const [totalNumberOfSteps, setTotalNumberOfSteps] = useState(4)

   /*
   * Function to normalize the steps in the flow to a number that can used by the progress bar component
   * @param {number} step - the step in the flow the user is on
   * @param {number} totalNumberOfSteps - the total number of steps in the flow
   * @returns {number} - the normalized step number
   */
   const normalise = (step: number, totalNumberOfSteps: number) =>
   (step * 100) / totalNumberOfSteps

    // Function to go to the next step of the flow
  const handleNext = () => {
    setStep((step) => step + 1)
  }

  // Function to go back one step in the flow
  const handleBack = () => {
    setStep((step) => (step == 0 ? 0 : step - 1))
    setDisableNextButton(false)
  }

    /* === START OF JSX === */
  return (
    <Box
      id="courseCardGridSectionBox"
      sx={{
        bgcolor: "#FFFFFF",
        width: "100%",
        display: "flex",
      }}
    >
      <Container
        maxWidth="xl"
        id="courseCardGridContainer"
        sx={{
          bgcolor: "#FFFFFF",
          display: "flex",
          // flexDirection: "row",
          // alignItems: "center",
          // justifyContent: "center",
          px: "32px",
        }}
      >
        <Grid container sx={{ px: "24" }}>
          {/* HEADER */}
          <Grid item xs={12} sx={{ mt: "56px" }} id="header">
            <Typography variant="h4">title 🗓</Typography>
          </Grid>

          {/* PROGRESS BAR */}
          <Grid item xs={12} sx={{ mt: "32px", color: "#F5F5F5" }}>
            <LinearProgress 
              id="progressBar"
              variant="determinate"
              color="inherit"
              value={normalise(step, totalNumberOfSteps)}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export { BookAnAppointmentFlow };

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
import { QuestionDetails } from "./subpages/QuestionDetails";
// import { SelectExpertType } from "./subpages/SelectExpertType";
// import { PreferenceForSpecificExpert } from "./subpages/PreferenceForSpecificExpert";
// import { ChooseSpecificExpert } from "./subpages/ChooseSpecificExpert";
// import { PickDateWithCalendly } from "./subpages/PickDateWithCalendly";
import { PickDateWithCalendly } from "./subpages/PickDateWithCalendly";
import { AppointmentMenu } from "./AppointmentMenu";
import { SquareAppointmentWidget } from "./subpages/SquareAppointmentWidget";
import { NavigationButtons } from "./NavigationButtons";

const financial_planner_group_calendly_link =
  "https://calendly.com/equip-financial-planners/1-on-1-video-meeting-equip?hide_gdpr_banner=1";
const budgetcoach_group_calendly_link =
  "https://calendly.com/equip-budgetcoaches/1-on-1-video-meeting-equip?hide_gdpr_banner=1";

export interface IUserAnswers {
  questionDetails: {
    hasSpecificQuestion: boolean | null;
    questionTopics: {
      English: boolean;
      Reading: boolean;
      History: boolean;
      Math: boolean;
      Science: boolean;
      Chemistry: boolean;
      Biology: boolean;
      Other: boolean;
    };
    specificQuestion: string;
  };
  expertType: "financial_planner" | "budgetcoach" | null;
  clientInfo: {
    isReturnClient: boolean | null;
    expertDetails: {
      name: string;
      avatar: string;
      id: string;
      email: string;
    } | null;
  };
}

/* Start of the component */
const BookAnAppointmentFlow: FC<{}> = () => {
  /* === STATE VARIABLE TO TRACK THE USER'S ANSWERS === */
  const [userAnswers, setUserAnswers] = useState<IUserAnswers>({
    questionDetails: {
      hasSpecificQuestion: null,
      questionTopics: {
        English: false,
        Reading: false,
        History: false,
        Math: false,
        Science: false,
        Chemistry: false,
        Biology: false,
        Other: false,
      },
      specificQuestion: "",
    },
    expertType: null,
    clientInfo: {
      isReturnClient: null,
      expertDetails: null,
    },
  });

  /* === VARIABLES AND FUNCTIONS TO HANDLE APPEARANCE OF "PREVIOUS" AND "NEXT" BUTTONS === */
  // State variable to track if the "Next" button is disabled (if true) or not (if false)
  const [disableNextButton, setDisableNextButton] = useState(true);

  /* === VARIABLES AND FUNCTIONS RELATED TO PROGRESS BAR === */
  // State variable to track which step of the flow the user is on
  const [step, setStep] = useState(0);

  // State variable to adjust the total number of steps in the flow based on the users inputs
  const [totalNumberOfSteps, setTotalNumberOfSteps] = useState(4);

  /*
   * Function to normalize the steps in the flow to a number that can used by the progress bar component
   * @param {number} step - the step in the flow the user is on
   * @param {number} totalNumberOfSteps - the total number of steps in the flow
   * @returns {number} - the normalized step number
   */
  const normalise = (step: number, totalNumberOfSteps: number) =>
    (step * 100) / totalNumberOfSteps;

  // Function to go to the next step of the flow
  const handleNext = () => {
    setStep((step) => step + 1);
  };

  // Function to go back one step in the flow
  const handleBack = () => {
    setStep((step) => (step == 0 ? 0 : step - 1));
    setDisableNextButton(false);
  };

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
          {/* MAIN CONTENT (SUBPAGES) */}
          <Grid
            item
            xs={12}
            id="main-content"
            width={"100%"}
            sx={{
              display: "flex",
              flexDirection: "column",
              mt: "54px",
            }}
          >
            <Box sx={{ minHeight: "150px" }}>
              {/* Show screen where user can provide details about the reason / topic of their conversation */}
              {step == 0 && (
                <QuestionDetails
                  userAnswers={userAnswers}
                  setUserAnswers={setUserAnswers}
                  setDisableNextButton={setDisableNextButton}
                />
              )}
              {/* Show screen where user can choose between a budgetcoach or a financial planner */}
              {step == 1 && (
                <QuestionDetails
                  userAnswers={userAnswers}
                  setUserAnswers={setUserAnswers}
                  setDisableNextButton={setDisableNextButton}
                />
              )}
              {/* Show screen where user can use square appointments widget to pick an appointment and pay. */}
              {step === 2 && <SquareAppointmentWidget />}
              {/* Show group calendly widget if user is in step 3 and does not have a preference for a specific expert */}
              {step === 3 &&
                userAnswers.clientInfo.isReturnClient === false && (
                  <SquareAppointmentWidget />
                )}
              {/* Give user option to choose a specific expert if they indicated to want that and are in step 3 */}
              {step == 3 && userAnswers.clientInfo.isReturnClient === true && (
                <SquareAppointmentWidget />
              )}
              {/* Show selected expert's calendly widget if user is in step 4 and has selected a specific expert to speak with */}
              {/* {step === 4 &&
                userAnswers.specificExpert.hasPreferenceForSpecificExpert ===
                  true &&
                userAnswers.specificExpert.expertDetails !== null && (
                  <PickDateWithCalendly
                    calendlyLink={
                      userAnswers.specificExpert.expertDetails.calendlyLink
                    }
                  />
                )} */}
            </Box>

            {/* NAVIGATION BUTTONS */}
            <NavigationButtons
              disableNextButton={disableNextButton}
              step={step}
              handleNext={handleNext}
              handleBack={handleBack}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export { BookAnAppointmentFlow };

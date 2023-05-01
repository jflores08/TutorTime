// Import React
import { FC, ChangeEvent } from 'react'

// import { useTranslations } from 'next-intl'

// Import MUI components
import Typography from '@mui/material/Typography'
import { FormControl, FormControlLabel } from '@mui/material'
import { Radio, RadioGroup } from '@mui/material'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox'

// Import local components and interfaces
import { TextField } from '../../Inputs/TextField'
import { IUserAnswers } from '../index'

const secondQuestion= {
  "questionText": "What is your question about?",
  "checkmarkOption0": "Expenses",
  "checkmarkOption1": "Housing",
  "checkmarkOption2": "Debt",
  "checkmarkOption3": "Insurance",
  "checkmarkOption4": "Saving",
  "checkmarkOption5": "Investing",
  "checkmarkOption6": "Pension",
  "checkmarkOption7": "Other"
}

// Start component definition
const QuestionDetails: FC<{
  userAnswers: IUserAnswers
  setUserAnswers: Function
  setDisableNextButton: Function
}> = ({ userAnswers, setUserAnswers, setDisableNextButton }) => {
  // const t = useTranslations('BookAnExpertFlow.QuestionDetails')
  const questionDetails = userAnswers.questionDetails

  const handleRadioButtonChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Parse the value of the radio button from string to boolean and set it to the correct format for userAnswers state variable
    let updatedQuestionDetails = { ...questionDetails }
    if (e.target.value === 'true') {
      updatedQuestionDetails.hasSpecificQuestion = true
    } else if (e.target.value === 'false') {
      updatedQuestionDetails.hasSpecificQuestion = false
    } else {
      console.error('Error: Unknown value for radio button')
      return
    }

    // Update the state of userAnswers with the new answer
    setUserAnswers({
      ...userAnswers,
      questionDetails: updatedQuestionDetails,
    })
    setDisableNextButton(false)
  }

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    let updatedQuestionTopics = { ...questionDetails.questionTopics }
    updatedQuestionTopics[e.target.name as keyof typeof updatedQuestionTopics] =
      e.target.checked

    setUserAnswers({
      ...userAnswers,
      questionDetails: {
        ...questionDetails,
        questionTopics: updatedQuestionTopics,
      },
    })
  }

  const handleTextFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserAnswers({
      ...userAnswers,
      questionDetails: {
        ...questionDetails,
        specificQuestion: e.target.value,
      },
    })
  }

  return (
    <Box id="question-details-content">
      {/* First question */}
      <Typography variant="h6" lineHeight="36px">
        {'How can we best help you?'}
      </Typography>

      {/* Radio button answer options to first question */}
      <FormControl sx={{ mt: '24px' }}>
        <RadioGroup
          row
          aria-labelledby="question-type-options-label"
          name="question-type-options"
          value={questionDetails.hasSpecificQuestion}
          onChange={handleRadioButtonChange}
        >
          <FormControlLabel
            value={true}
            control={
              <Radio
                sx={{
                  '& .MuiSvgIcon-root': {
                    fontSize: 32,
                  },
                }}
              />
            }
            label={'I have a specific question'}
          />

          <FormControlLabel
            value={false}
            control={
              <Radio
                sx={{
                  '& .MuiSvgIcon-root': {
                    fontSize: 32,
                  },
                }}
              />
            }
            label={'I want to discuss my general financial situation with an expert'}
          />
        </RadioGroup>
      </FormControl>

      {/* Second question (optional) */}
      {questionDetails.hasSpecificQuestion && (
        <Box sx={{ mt: '10px' }}>
          <Typography
            variant="h6"
            sx={{
              mt: '42px',
              mb: '24px',
            }}
          >
            {'What is your question about?'}
          </Typography>

          {/* Checkbox answer options to second question */}
          <FormControl>
            <Box>
              <Grid container display="flex" alignItems="center">
                {Object.entries(userAnswers.questionDetails.questionTopics).map(
                  ([topic, value], index) => (
                    <Grid
                      item
                      xs={12}
                      sm={3}
                      md={3}
                      key={topic}
                      sx={{ display: 'flex' }}
                    >
                      <FormControlLabel
                        // @ts-ignore
                        label={`secondQuestion.checkmarkOption${index}`}
                        control={
                          <Checkbox
                            checked={value}
                            onChange={handleCheckboxChange}
                            name={topic}
                          />
                        }
                      />
                    </Grid>
                  )
                )}
              </Grid>
            </Box>
          </FormControl>

          {/* Third question (optional) with textfield answer option */}
          <Typography
            variant="h6"
            sx={{
              mt: '42px',
              mb: '24px',
            }}
          >
            {'What is your question?'}
          </Typography>
          <TextField
            onChange={handleTextFieldChange}
            value={questionDetails.specificQuestion}
            placeholder={'Enter your question here'}
            fullWidth={true}
            width="100%"
          />
        </Box>
      )}
    </Box>
  )
}

export { QuestionDetails }

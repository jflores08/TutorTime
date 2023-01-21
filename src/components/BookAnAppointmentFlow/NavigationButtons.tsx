import { FC, MouseEventHandler } from 'react'

// import { useTranslations } from 'next-intl'

import Grid from '@mui/material/Grid'
import MuiButton from '@mui/material/Button'

const NavigationButtons: FC<{
  disableNextButton: boolean
  step: number
  handleNext: MouseEventHandler
  handleBack: MouseEventHandler
}> = ({ disableNextButton, step, handleNext, handleBack }) => {
//   const t = useTranslations('BookAnExpertFlow.NavigationButtons')

  return (
    <Grid
      container
      id="button-grid"
      sx={{
        minHeight: '50px',
        mt: '45px',
        justifyContent: { xs: 'space-between', sm: 'flex-end' },
        ...(step === 0 && { justifyContent: 'flex-end' }),
      }}
    >
      {/* Button to go back to previous step (only show when it is not the first step) */}
      {step > 0 && (
        <Grid item>
          <MuiButton
            variant="outlined"
            onClick={handleBack}
            sx={{ width: { xs: '150px', sm: '200px' }, mr: '24px' }}
          >
            back
          </MuiButton>
        </Grid>
      )}
      {/* Button to go to next step (either disabled or functional) */}
      {/* Show enabled button when step is finished and Calendly widget is not shown */}
      {!disableNextButton && step < 3 && (
        <Grid item>
          <MuiButton
            variant="menuButton"
            onClick={handleNext}
            sx={{ width: { xs: '150px', sm: '200px' } }}
          >
            next
          </MuiButton>
        </Grid>
      )}
      {/* Show disabled button when button page is not finished yet or Calendly widget is shown */}
      {(disableNextButton || step > 2) && (
        <Grid item>
          <MuiButton
            variant="customDisabled"
            disableRipple={true}
            sx={{ width: { xs: '150px', sm: '200px' } }}
          >
            next
          </MuiButton>
        </Grid>
      )}
    </Grid>
  )
}

export { NavigationButtons }

import * as React from 'react';
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';


const IPOTimeline = ({ steps }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const activeStep = steps.length; // All steps completed visually

  return (
    <Box sx={{ width: '100%', p: 2 }}>
      <Typography variant="subtitle1" fontWeight={600} mb={2} color="#1A064F">
        IPO Timeline
      </Typography>
      <Stepper
        activeStep={activeStep}
        alternativeLabel={!isMobile}
        orientation={isMobile ? 'vertical' : 'horizontal'}
      >
        {steps.map((step, index) => (
          <Step key={index}
          sx={{
          '& .MuiStepLabel-root .Mui-completed': {
            color: '#217121', // circle color (COMPLETED)
            
          },
          '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel':
            {
              color: 'grey.500', // Just text label (COMPLETED)
            }
        }}>
          
            <StepLabel>
              <Box textAlign={isMobile ? 'left' : 'center'}>
                <Typography variant="body2" fontWeight="700" color='#000'>
                  {step.label}
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  {step.date}
                </Typography>
              </Box>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
export default IPOTimeline;

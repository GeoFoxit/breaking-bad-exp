import { Step, StepLabel, Stepper } from "@mui/material";
import React from "react";

const OccupationDisplay = ({
  occupation,
}) => {
  return (
    <Stepper orientation="vertical">
      {occupation?.map((occupationName, index) => (
        <Step key={occupationName + index}>
          <StepLabel>
            {occupationName}
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default React.memo(OccupationDisplay);
"use client";

import CustomButton from "@/app/components/button";
import { Box } from "@mui/material";

const page = () => {
  return (
    <Box
      color="primary.main"
      width={1000}
      height={1000}
      bgcolor="secondary.main"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <CustomButton
        onClick={() => alert("Button clicked!")}
        label="LOGIN"
        sx={{
          padding: "2px 30px",
        }}
        labelSx={{
          letterSpacing: "3px",
        }}
      />
    </Box>
  );
};

export default page;

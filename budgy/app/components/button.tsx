"use client";

import { Button, Typography } from "@mui/material";

interface CustomButtonProps {
  label: string;
  sx?: object;
  labelSx?: object;
  onClick?: () => void;
  disabled?: boolean;
  variant?: "text" | "outlined" | "contained";
}

const CustomButton = (props: CustomButtonProps) => {
  return (
    <Button
      onClick={props.onClick}
      variant={props.variant || "contained"}
      disabled={props.disabled}
      sx={{
        color: "text.primary",
        backgroundColor: "primary.main",
        padding: "10px 20px",
        borderRadius: "8px",
        border: "2px solid transparent",
        transition: "all 0.3s ease",

        "&:hover": {
          backgroundColor: "transparent",
          color: "primary.main",
          border: "2px solid",
          borderColor: "primary.main",
          boxShadow: "none",
        },
        ...props.sx,
      }}
    >
      <Typography
        variant="h6"
        sx={{ fontFamily: "Montserrat", fontWeight: 700, ...props.labelSx }}
      >
        {props.label}
      </Typography>
    </Button>
  );
};

export default CustomButton;

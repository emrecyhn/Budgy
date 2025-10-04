"use client";

import { Typography, Box, Chip, IconButton } from "@mui/material";
import { useState } from "react";
import PiggyBank from "@/public/piggy-green.svg";
import PiggyBankWhite from "@/public/light-piggy.svg";
import Image from "next/image";
import CustomButton from "./button";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LogoutIcon from "@mui/icons-material/Logout";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

interface HeaderProps {
  onClick?: () => void;
  mode?: "light" | "dark";
}

const Header = (props: HeaderProps) => {
  /* --------------------------------- states --------------------------------- */
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <Box
      position={"fixed"}
      top={0}
      width={"100%"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      height={80}
      bgcolor="secondary.main"
      boxShadow={"0 0 10px rgba(0,0,0,0.1)"}
      zIndex={1000}
    >
      <Box
        width={"80%"}
        height={"100%"}
        display="flex"
        alignItems="center"
        paddingX={2}
        justifyContent="space-between"
      >
        <Box display="flex" alignItems="center" gap={1}>
          <Image
            src={props.mode == "light" ? PiggyBank : PiggyBankWhite}
            width={70}
            height={70}
            alt="Piggy bank logo"
          />
          <Typography
            variant="h4"
            color="text.primary"
            fontWeight={700}
            fontFamily={"Montserrat"}
            letterSpacing={4}
          >
            BUDGY
          </Typography>
        </Box>
        <Box
          display={"flex"}
          gap={5}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Typography
            variant="h6"
            color="text.primary"
            fontWeight={200}
            fontFamily={"Montserrat"}
          >
            {isLoggedIn ? "Dashboard" : "Features"}
          </Typography>
          <Typography
            variant="h6"
            color="text.primary"
            fontWeight={200}
            fontFamily={"Montserrat"}
          >
            About
          </Typography>

          {!isLoggedIn && (
            <CustomButton
              label="Sign in"
              sx={{ borderRadius: "35px", height: "30px" }}
              labelSx={{
                fontSize: "14px",
                fontWeight: 600,
                color: "text.secondary",
              }}
            />
          )}

          <Box
            display={isLoggedIn ? "flex" : "none"}
            alignItems="center"
            gap={4}
          >
            <Chip
              icon={<PersonIcon sx={{ fontSize: 30 }} />}
              sx={{
                width: 50,
                height: 50,
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                "& .MuiChip-icon": {
                  margin: 0,
                  color: "text.primary",
                },
                "& .MuiChip-label": {
                  display: "none",
                },
              }}
            />
            <NotificationsNoneIcon
              sx={{ fontSize: 30, color: "text.primary" }}
            />
            <LogoutIcon sx={{ fontSize: 30, color: "text.primary" }} />
          </Box>
          <IconButton onClick={props.onClick} color="inherit">
            {props.mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;

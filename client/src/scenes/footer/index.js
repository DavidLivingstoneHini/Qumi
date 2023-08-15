import { useState } from "react";
import {
  Box,
  IconButton,
  InputBase,
  Typography,
  Avatar,
  Select,
  MenuItem,
  FormControl,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  DarkMode,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FlexBetween from "components/FlexBetween";
import "styles.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";


const Footer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light;
  const alt = theme.palette.background.alt;

  return (
    <Box>
    <FlexBetween padding="1.2rem 6%" backgroundColor={dark} style={{ justifyContent: "center", alignItems: "center", marginBottom: "60px"}}>
            <h5 style={{color: "white", textAlign: "center", fontSize: "15px", fontWeight: "medium"}}>&copy; Qumi 2023</h5>
    </FlexBetween>
    </Box>
  );
};

export default Footer;

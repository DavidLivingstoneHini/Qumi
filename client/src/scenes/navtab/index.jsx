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
  LightMode,
  Menu,
  Close,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setMode, setLogout } from "state";
import { useNavigate } from "react-router-dom";
import FlexBetween from "components/FlexBetween";
import Navbar from "scenes/navbar";
import "styles.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";


const Navtab = () => {
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
        <Navbar />
    <FlexBetween padding="0.2rem 6%" backgroundColor={alt} marginTop="30px" justifyContent="center" alignItems="center" marginLeft="30px" marginRight="30px">
          <div className="" style={{display: "flex", marginLeft: "430px", justifyContent: "center", alignItems: "center", marginTop: "60px"}}>
      <FlexBetween gap="1.7rem">
        <Typography
          fontWeight="medium"
          fontSize="15px"
          color="#19191a"
          onClick={() => navigate("/summary")}
          sx={{
            "&:hover": {
              color: "#61dafb",
              cursor: "pointer",
              textDecoration: "underline",
              textDecorationColor: "#61dafb"
            },
          }}
        >
          Summary
        </Typography>
        <Typography
          fontWeight="medium"
          fontSize="15px"
          color="#19191a"
          onClick={() => navigate("/responses")}
          sx={{
            "&:hover": {
              color: "#61dafb",
              cursor: "pointer",
              textDecoration: "underline",
              textDecorationColor: "#61dafb"
            },
          }}
        >
          Individual
        </Typography>
        </FlexBetween>
        </div>
    </FlexBetween>
    </Box>
  );
};

export default Navtab;

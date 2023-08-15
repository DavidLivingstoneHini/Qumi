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
  // Search,
  DarkMode,
  LightMode,
  Menu,
  Close,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setMode, setLogout } from "state";
import { useNavigate } from "react-router-dom";
import FlexBetween from "components/FlexBetween";
import "styles.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";


const Navbar = () => {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
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

  const firstName = `${user.firstName}`;
  const picturePath = `${user.picturePath}`;

  return (
    <FlexBetween padding="1rem 6%" backgroundColor={alt}>
      <FlexBetween gap="1.75rem">
        <Typography
          fontWeight="bold"
          fontSize="clamp(1rem, 2rem, 2.25rem)"
          color="primary"
          onClick={() => navigate("/qrcode")}
          sx={{
            "&:hover": {
              color: primaryLight,
              cursor: "pointer",
            },
          }}
        >
          QUMI
        </Typography>

        {isNonMobileScreens && (
          <FlexBetween
            backgroundColor={neutralLight}
            // borderRadius="9px"
            // gap="3rem"
            // padding="0.1rem 1.5rem"
          >
          </FlexBetween>
        )}
      </FlexBetween>

      {/* DESKTOP NAV */}
      {isNonMobileScreens ? (
        <FlexBetween gap="2rem">
          <div className="" style={{display: "flex", marginRight: "230px", marginTop: "70px"}}>
      <FlexBetween gap="1.7rem">
        <Typography
          fontWeight="medium"
          fontSize="15px"
          color="#19191a"
          onClick={() => navigate("/qrcode")}
          sx={{
            "&:hover": {
              color: "#61dafb",
              cursor: "pointer",
              textDecoration: "underline",
              textDecorationColor: "#61dafb"
            },
          }}
          activeStyle={{color: "red"}}
        >
          Profile Gateway
        </Typography>
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
          Responses
        </Typography>
        <Typography
          fontWeight="medium"
          fontSize="15px"
          color="#19191a"
          onClick={() => navigate("/settings")}
          sx={{
            "&:hover": {
              color: "#61dafb",
              cursor: "pointer",
              textDecoration: "underline",
              textDecorationColor: "#61dafb"
            },
          }}
        >
          Settings
        </Typography>
        </FlexBetween>
        </div>
          <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", marginRight: "-38px", backgroundColor: neutralLight, padding: "6px", borderRadius: "10px"}}>
          <div className="" style={{marginRight: "2px", borderStyle: "solid", borderWidth: "2px", borderRadius: "100px", borderColor: "white"}}><Avatar alt={firstName} src={picturePath} /></div>
          <FormControl variant="standard" value={firstName}>
            <Select
              value={firstName}
              sx={{
                backgroundColor: neutralLight,
                width: "120px",
                borderRadius: "0.25rem",
                p: "0.25rem 1rem",
                "& .MuiSvgIcon-root": {
                  pr: "0.25rem",
                  width: "5rem",
                },
                "& .MuiSelect-select:focus": {
                  backgroundColor: neutralLight,
                },
              }}
              input={<InputBase />}
            >
              <MenuItem value={firstName}>
                <Typography>{firstName}</Typography>
              </MenuItem>
              <MenuItem onClick={() => dispatch(setLogout())}>Log Out</MenuItem>
            </Select>
          </FormControl>
          </div>
        </FlexBetween>
      ) : (
        <IconButton
          onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
        >
          <Menu />
        </IconButton>
      )}

      {/* MOBILE NAV */}
      {!isNonMobileScreens && isMobileMenuToggled && (
        <Box
          position="fixed"
          right="0"
          bottom="0"
          height="100%"
          zIndex="10"
          maxWidth="500px"
          minWidth="300px"
          backgroundColor={background}
        >
          {/* CLOSE ICON */}
          <Box display="flex" justifyContent="flex-end" p="1rem">
            <IconButton
              onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
            >
              <Close />
            </IconButton>
          </Box>

          {/* MENU ITEMS */}
          <FlexBetween
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="3rem"
          >
             <Typography
          fontWeight="medium"
          fontSize="15px"
          color="#19191a"
          onClick={() => navigate("/qrcode")}
          sx={{
            "&:hover": {
              color: "#61dafb",
              cursor: "pointer",
              textDecoration: "underline",
              textDecorationColor: "#61dafb"
            },
          }}
        >
          Profile Gateway
        </Typography>
        <Typography
          fontWeight="medium"
          fontSize="15px"
          color="#19191a"
          onClick={() => navigate("/analytics")}
          sx={{
            "&:hover": {
              color: "#61dafb",
              cursor: "pointer",
              textDecoration: "underline",
              textDecorationColor: "#61dafb"
            },
          }}
        >
          All Responses
        </Typography>
        <Typography
          fontWeight="medium"
          fontSize="15px"
          color="#19191a"
          onClick={() => navigate("/settings")}
          sx={{
            "&:hover": {
              color: "#61dafb",
              cursor: "pointer",
              textDecoration: "underline",
              textDecorationColor: "#61dafb"
            },
          }}
        >
          Settings
        </Typography>
            <div className="" style={{}}><Avatar alt={firstName} src={picturePath} /></div>
            <FormControl variant="standard" value={firstName}>
              <Select
                value={firstName}
                sx={{
                  backgroundColor: neutralLight,
                  width: "150px",
                  borderRadius: "0.25rem",
                  p: "0.25rem 1rem",
                  "& .MuiSvgIcon-root": {
                    pr: "0.25rem",
                    width: "3rem",
                  },
                  "& .MuiSelect-select:focus": {
                    backgroundColor: neutralLight,
                  },
                }}
                input={<InputBase />}
              >
                <MenuItem value={firstName}>
                  <Typography>{firstName}</Typography>
                </MenuItem>
                <MenuItem onClick={() => dispatch(setLogout())}>
                  Log Out
                </MenuItem>
              </Select>
            </FormControl>
          </FlexBetween>
        </Box>
      )}
    </FlexBetween>
  );
};

export default Navbar;

import { useState } from "react";
import * as React from 'react';
import { Box, Typography, useTheme, useMediaQuery, Button } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
  const [pageType, setPageType] = useState("login");
  const theme = useTheme();
  const { palette } = useTheme();
  const isLogin = pageType === "login";
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          Queue Management System
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" variant="h5" textAlign="center" sx={{ mb: "1.5rem" }}>
          Welcome to QUMI, Queue Management System!
        </Typography>

        {/* <Box style={{dispaly: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", marginLeft: "180px"}}>
        <Button
              sx={{
                m: "2rem 0",
                paddingLeft: "2rem",
                paddingRight: "1.8rem",
                paddingTop: "0.6rem",
                paddingBottom: "0.6rem",
                borderTopLeftRadius: "60px",
                borderBottomLeftRadius: "60px",
                borderStyle: "solid",
                borderColor: "#8e918f",
                borderWidth: "1px",
                backgroundColor: "white",
                color: "#09cadb",
                "&:hover": { color: "white", backgroundColor: "#09cadb" },
              }}
            >
              Admin
            </Button>

            <Button
              sx={{
                m: "2rem 0",
                paddingLeft: "2rem",
                paddingRight: "1.8rem",
                paddingTop: "0.6rem",
                paddingBottom: "0.6rem",
                borderStyle: "solid",
                borderColor: "#8e918f",
                borderWidth: "1px",
                borderTopRightRadius: "60px",
                borderBottomRightRadius: "60px",
                backgroundColor: "white",
                color: "#09cadb",
                "&:hover": { color: "white", backgroundColor: "#09cadb" },
              }}
            >
              Staff
            </Button>
        </Box> */}
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;

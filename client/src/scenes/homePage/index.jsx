import { Box } from "@mui/material";
// import { useSelector } from "react-redux";
import "styles.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "scenes/navbar";


const HomePage = () => {
  // const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  // const { _id, picturePath } = useSelector((state) => state.user);

  return (
    <Box>
      <Navbar />
    </Box>
  );
};

export default HomePage;

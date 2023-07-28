import { Box } from "@mui/material";
// import { useSelector } from "react-redux";
import Navbar from "scenes/navbar";
import Navtab from "scenes/navtab";


const HomePage = () => {
  // const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  // const { _id, picturePath } = useSelector((state) => state.user);

  return (
    <Box>
      <Navbar />
      <Navtab />
    </Box>
  );
};

export default HomePage;

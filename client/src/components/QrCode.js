import { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { QRCodeCanvas } from "qrcode.react";
import { Avatar, Box, useMediaQuery } from "@mui/material";
import QRCode from "react-qr-code";
import { setMode, setLogout } from "state";
import "styles.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "scenes/navbar";
import Footer from "scenes/footer";

const QrCode = () => {
  const user = useSelector((state) => state.user);

  const firstName = `${user.firstName}`;
  const picturePath = `${user.picturePath}`;
  const isMobile = useMediaQuery("max-width: 768px)");

  return (
    <Box>
    <Navbar />
    {!isMobile && (
    <Box m="1.5rem 2.5rem">
      <div className="" style={{ justifyContent: "center", display: "flex", flexDirection: "column", alignItems:'center', backgroundColor: 'white', height: '20vh', borderRadius: '5px'}}>
        <p style={{fontSize: "17px", fontWeight: "bold", color: '#0bd9d9', marginTop: "18px"}}>QR Code</p>
        <p style={{marginLeft: '20px', marginRight: "20px", marginBottom: "20px"}}>Your QR Code is exclusive and intended for customer use. By sharing it with your customers, they gain access to your<br /> template and utilize their E-queue app to scan the code. This process enables them to seamlessly fill out the necessary <br />forms and join the queue efficiently.</p>
      </div>

    <div className="qrcode__container" style={{display: 'flex', flexDirection: 'column', height: '100vh', marginTop: '25px', backgroundColor: '#b8b7b4', borderRadius: '8px'}}>
      <div className="" style={{marginTop: '-18px', borderStyle: "solid", borderWidth: "3px", borderRadius: "100px", borderColor: "white"}}><Avatar alt={firstName} src={picturePath} /></div>
      <p><b>{firstName}</b></p>
      <p>Your Query Link</p><br />
      <QRCode value="https://mern-social-xi.vercel.app/responses/employee/create" />
    </div>
    </Box>
    )}

    {isMobile && (
      <Box>
      <div className="" style={{ justifyContent: "center", display: "flex", flexDirection: "column", alignItems:'center', backgroundColor: 'white', height: '20vh', borderRadius: '5px'}}>
        <p style={{fontSize: "12px", fontWeight: "bold", color: '#0bd9d9', marginTop: "18px"}}>QR Code</p>
      </div>

    <div className="qrcode__container" style={{display: 'flex', flexDirection: 'column', height: '30vh', marginTop: '15px', backgroundColor: '#b8b7b4', borderRadius: '8px'}}>
      <div className="" style={{marginTop: '-18px'}}><Avatar alt={firstName} src={picturePath} /></div>
      <p><b>{firstName}</b></p>
      <p>Your Query Link</p><br />
      <QRCode value="https://qumi.vercel.app/responses/employee/create" />
    </div>
    </Box>
    )}
    <Footer />
    </Box>
  );
};

export default QrCode;
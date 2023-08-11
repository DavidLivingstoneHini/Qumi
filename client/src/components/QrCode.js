import { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { QRCodeCanvas } from "qrcode.react";
import { Avatar, Box } from "@mui/material";
import QRCode from "react-qr-code";
import { setMode, setLogout } from "state";
import "styles.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "scenes/navbar";

const QrCode = () => {
  // const [url, setUrl] = useState("");
  // const qrRef = useRef();
  // const downloadQRCode = (e) => {
  //   e.preventDefault();
  //   let canvas = qrRef.current.querySelector("canvas");
  //   let image = canvas.toDataURL("image/png");
  //   let anchor = document.createElement("a");
  //   anchor.href = image;
  //   anchor.download = `qr-code.png`;
  //   document.body.appendChild(anchor);
  //   anchor.click();
  //   document.body.removeChild(anchor);
  //   setUrl("");
  // };
  // const qrCodeEncoder = (e) => {
  //   setUrl(e.target.value);
  // };

  // const qrcode = (
  //   <QRCodeCanvas
  //     id="qrCode"
  //     value={url}
  //     size={250}
  //     bgColor={"#ffffff"}
  //     level={"H"}
  //   />
  // );
  const user = useSelector((state) => state.user);

  const firstName = `${user.firstName}`;
  const picturePath = `${user.picturePath}`;

  return (
    <Box>
    <Navbar />
    <Box m="1.5rem 2.5rem">
      <div className="" style={{ justifyContent: "center", display: "flex", flexDirection: "column", alignItems:'center', backgroundColor: 'white', height: '20vh', borderRadius: '5px'}}>
        <p style={{fontSize: "17px", fontWeight: "bold", color: '#0bd9d9', marginTop: "18px"}}>QR Code</p>
        <p style={{marginLeft: '20px', marginRight: "20px", marginBottom: "20px"}}>Your QR Code is exclusive and intended for customer use. By sharing it with your customers, they gain access to your<br /> template and utilize their E-queue app to scan the code. This process enables them to seamlessly fill out the necessary <br />forms and join the queue efficiently.</p>
      </div>

    <div className="qrcode__container" style={{display: 'flex', flexDirection: 'column', height: '100vh', marginTop: '25px', backgroundColor: '#b8b7b4', borderRadius: '8px'}}>
      <div className="" style={{marginTop: '-18px', borderStyle: "solid", borderWidth: "3px", borderRadius: "100px", borderColor: "white"}}><Avatar alt={firstName} src={picturePath} /></div>
      <p><b>{firstName}</b></p>
      <p>Your Query Link</p><br />
      <QRCode value="https://www.youtube.com" />
      {/* <div ref={qrRef}>{qrcode}</div> */}
      {/* <div className="input__group">
        <form onSubmit={downloadQRCode}>
          <label>Enter URL</label>
          <input
            type="text"
            value={url}
            onChange={qrCodeEncoder}
            placeholder="https://yoururl.com"
            style={{padding: '13px'}}
          />
          <button style={{padding: '10px', marginLeft: '250px', marginTop: '20px'}} type="submit" disabled={!url}>
            Download QR code
          </button>
        </form>
      </div> */}
    </div>
    </Box>
    </Box>
  );
};

export default QrCode;
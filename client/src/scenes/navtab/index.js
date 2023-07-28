import * as React from "react";
import PropTypes from 'prop-types';
import QrCode from "components/QrCode";
import Settings from "components/Settings";
import Transactions from "scenes/transactions";
import "styles.css";
import {
    Box,
    Tabs,
    Typography,
    Tab,
  } from "@mui/material";

  function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
  export default function BasicTabs() {
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
            <Tab label="Profile Gateway" {...a11yProps(0)} />
            <Tab label="Responses" {...a11yProps(1)} />
            <Tab label="Settings" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel style={{ justifyContent: "center", display: "flex", alignItems:'center'}} value={value} index={0}>
        <QrCode />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Transactions />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Settings />
        </CustomTabPanel>
      </Box>
    );
  }
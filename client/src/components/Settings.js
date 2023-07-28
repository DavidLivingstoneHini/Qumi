import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Switch from '@mui/material/Switch';
// import { styled } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import BluetoothIcon from '@mui/icons-material/Bluetooth';

export default function SwitchListSecondary() {
  const [checked, setChecked] = React.useState(['wifi']);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 1800, bgcolor: 'background.paper' }}
      subheader={<ListSubheader><b style={{fontSize: '18px'}}>Settings</b></ListSubheader>}
    >
              <hr style={{marginLeft: '0px', marginRight: '0px'}} />
      <ListItem>
        <ListItemText id="create-acccount" primary="Create Staff Account" />
      </ListItem> 
      <p style={{fontSize: '13px', marginLeft: '16px', marginTop: '-13px', color: '#b3b4b5'}}>Have an account for your staff members in order to view customer data</p>
       
      <hr style={{marginLeft: '0px', marginRight: '0px',  marginTop: '15px', color: 'grey'}} />
      
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }}>Responses<br /><p style={{fontSize: '13px', marginLeft: '-1px', marginTop: '-2px', color: '#b3b4b5'}}>Have an account for your staff members in order to view customer data</p>
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ListItem>
        <ListItemText id="switch-list-label-query" primary="Allow query editing" />
        <Switch
          edge="end"
          onChange={handleToggle('query')}
          checked={checked.indexOf('query') !== -1}
          inputProps={{
            'aria-labelledby': 'switch-list-label-query',
          }}
        />
      </ListItem>

      <ListItem>
        <ListItemText id="switch-list-label-wifi" primary="Limit to 1 response" />
        <Switch
          edge="end"
          onChange={handleToggle('limit')}
          checked={checked.indexOf('limit') !== -1}
          inputProps={{
            'aria-labelledby': 'switch-list-label-limit',
          }}
        />
      </ListItem>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }}>Presentation<br /><p style={{fontSize: '13px', marginLeft: '-1px', marginTop: '-2px', color: '#b3b4b5'}}>Manage how the query and responses are presented</p>
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ListItem>
        <ListItemText id="switch-list-label-confirm" primary="Thank you, your ticket number is:" />
        <Switch
          edge="end"
          onChange={handleToggle('confirm')}
          checked={checked.indexOf('confirm') !== -1}
          inputProps={{
            'aria-labelledby': 'switch-list-label-confirm',
          }}
        />
      </ListItem>

      <ListItem>
        <ListItemText id="switch-list-label-integration" primary="Integration" />
        <Switch
          edge="end"
          onChange={handleToggle('integration')}
          checked={checked.indexOf('integration') !== -1}
          inputProps={{
            'aria-labelledby': 'switch-list-label-integration',
          }}
        />
      </ListItem>
        </AccordionDetails>
      </Accordion>
    </List>
  );
}

import * as React from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
// import PhoneIcon from '@mui/icons-material/Phone';

export default function TabsVertical() {

    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    return (
      <Tabs
        value={value} onChange={handleChange} 
        aria-label="icon label tabs example"
        // aria-label="Vertical tabs"
        orientation="vertical"
        color="danger"
        sx={{ minWidth: 300, borderRadius: 'lg' }}
      >
        <TabList>
          {/* <Tab>First tab</Tab>
          <Tab>Second tab</Tab>
          <Tab>Third tab</Tab> */}
           <Tab icon={<PhoneIcon />} label="RECENTS" />
      <Tab icon={<FavoriteIcon />} label="FAVORITES" />
      <Tab icon={<PersonPinIcon />} label="NEARBY" />
        </TabList>
        <TabPanel sx={{ p: 2, minHeight: 200 }}>
          <b>First</b> tab panel
        </TabPanel>
        <TabPanel value={1} sx={{ p: 2, minHeight: 200 }}>
          <b>Second</b> tab panel
        </TabPanel>
        <TabPanel value={2} sx={{ p: 2, minHeight: 200 }}>
          <b>Third</b> tab panel
        </TabPanel>
      </Tabs>
    );
  }
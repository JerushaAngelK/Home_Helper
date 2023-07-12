import React from 'react';
import PersistentDrawerLeft from './Drawer';
import './home.css'
import { Typography, Container, Box, List, ListItem, ListItemText } from '@material-ui/core';
import MediaCard from './Card1';
import MediaCard1 from './Card2';
import MediaCard3 from './Card4';
import MediaCard2 from './Card3';

export default function Home(){
    return(
        <div>
        <PersistentDrawerLeft style={{backgroundColor:"#A67B5B"}}/>
        {/* <h1>Hi!</h1> */}
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Welcome to Home Helper App
        </Typography>
        <div>

        <div id="yes">
        <MediaCard/>
        </div>
        <div id="no">
        <MediaCard1/>
        </div>
        <div id="yes1">
        <MediaCard2/>
        </div>
        <div id="no1">
        <MediaCard3/>
        </div>
        </div>
    <Container maxWidth="sm">
      <Box mt={50}>
        <Typography variant="body1" align="center" gutterBottom>
        {/* <br></br>
        <br></br>
        <br></br> */}
          Manage your household tasks and enhance your daily routines with our home helper application.
        </Typography>
        <Box mt={4}>
          <Typography variant="h5" component="h2" gutterBottom>
            Key Features:
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Task Management" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Calendar Integration" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Shopping and Inventory Management" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Recipe Suggestions and Meal Planning" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Smart Home Integration" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Home Maintenance and Repairs" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Energy Consumption Monitoring" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Budgeting and Expense Tracking" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Personalized Recommendations" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Home Security and Surveillance" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Home Automation Routines" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Digital Voice Assistant" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Community and Social Features" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Personal Health and Wellness" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Home Entertainment Control" />
            </ListItem>
          </List>
        </Box>
      </Box>
    </Container>



        {/* <h1>Home Helper App Features</h1>

  <h2>Task Management</h2>
  <p>Create and manage to-do lists, set reminders, and prioritize tasks for various areas of the house such as cleaning, cooking, shopping, and maintenance.</p>

  <h2>Calendar Integration</h2>
  <p>Sync with your calendar to provide reminders for appointments, events, and important dates. Schedule and manage tasks efficiently.</p>

  <h2>Shopping and Inventory Management</h2>
  <p>Create shopping lists, track inventory, and receive notifications when items need restocking. Integration with online grocery services.</p> */}

  {/* <h2>Recipe Suggestions and Meal Planning</h2>
  <p>Access a collection of recipes, including dietary preferences and restrictions. Plan meals for the week and generate shopping lists based on selected recipes.</p> */}

  {/* <h2>Smart Home Integration</h2>
  <p>Connect with compatible smart home devices to control lights, thermostats, locks, and appliances. Manage and monitor devices from a centralized interface.</p>

  <h2>Home Maintenance and Repairs</h2>
  <p>Offer tips, guides, and reminders for routine maintenance tasks like HVAC filter replacement, gutter cleaning, and more. Access local service providers.</p>

  <h2>Energy Consumption Monitoring</h2>
  <p>Track and analyze energy usage patterns. Receive suggestions for reducing energy consumption and saving costs.</p>

  <h2>Budgeting and Expense Tracking</h2>
  <p>Track expenses, set budgets, and gain insights into spending habits. Generate reports and visualizations for financial planning.</p> */}

  {/* <h2>Personalized Recommendations</h2>
  <p>Offer personalized suggestions for home decor, organization techniques, cleaning products, and more based on user preferences and data.</p> */}

  {/* <h2>Home Security and Surveillance</h2>
  <p>Integrate with home security systems, cameras, and sensors. Receive real-time alerts, video feeds, and remote access for monitoring and controlling security features.</p> */}

  {/* <h2>Home Automation Routines</h2>
  <p>Create customized automation routines, such as turning off lights and locking doors at bedtime or adjusting the thermostat based on occupancy.</p>

  <h2>Digital Voice Assistant</h2>
  <p>Incorporate a voice-activated assistant for hands-free control and interaction with the home helper app.</p>

  <h2>Community and Social Features</h2>
  <p>Connect with a community of homeowners or users with similar interests. Share tips, exchange ideas, and seek advice.</p>

  <h2>Personal Health and Wellness</h2>
  <p>Access features related to personal health and wellness, such as workout routines, meditation guides, sleep tracking, and hydration reminders.</p>

  <h2>Home Entertainment Control</h2>
  <p>Integrate with entertainment systems, streaming services, and smart TVs. Control media playback, recommend content, and manage home theater settings.</p> */}

        </div>

    )
}
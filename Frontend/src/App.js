import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import Home from './pages/home';
import { BrowserRouter ,Routes,Route, Switch } from 'react-router-dom';
import Register from './pages/Signup';
import TemporaryDrawer from './components/Drawer';
import PrimarySearchAppBar from './pages/home';
import PersistentDrawerLeft from './components/Drawer';
import Task from './pages/TaskManagement';
import Message from './pages/Message';
import Notification from './pages/Notifications';
import { ThemeProvider } from '@material-ui/core/styles';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import React, { useState } from "react";
import CustomMonthLayout from './pages/Calender';
import CheckboxList from './pages/Maintainence';
import Inventory from './pages/Inventory';
import ButtonBaseDemo from './pages/Security';
import FloatingActionButtons from './components/Float';
import TabsVertical from './components/Floating';
import CustomizedSnackbars from './components/Floating';
import Budget from './pages/Budgets';
import Energy from './pages/Energy';
import LoginF from './components/sample';
import InputAdornments from './components/sample';
import { Provider } from 'react-redux';
import store from './components/Store';
import ListEmployeeComponent from './components/ListTask';
import CreateEmployeeComponent from './components/CreateTask';
import UpdateEmployeeComponent from './components/UpdateTask';
import ViewEmployeeComponent from './components/ViewTask';
import Homes from './pages/View';
import AddProduct from './pages/Add';
import FeedForm from './components/Noti';
import EditProduct from './pages/Edit';
import Smart from './pages/SmartIntegration';

function App() {

  // const [toggleDark, settoggleDark] = useState(false);
  // const myTheme = createTheme({

  //     // Theme settings
  //     palette: {
  //         type: toggleDark ? "dark" : "light",
  //     },
  // });


  return (
    <Provider store={store}>
    <div className="App">
      {/* <ThemeProvider theme={myTheme}>
    <Home toggleDark={toggleDark} settoggleDark={settoggleDark}/>
    </ThemeProvider> */}
    {/* <BrowserRouter> */}
       <Routes>
      <Route path="/" element={<LoginF/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/signup" element={<Register/>}/>
      {/* <Route path="/Login" element={<Login/>}/> */}
      <Route path="/Login" element={<LoginF/>}/>
      <Route path="/task" element={<Task/>}/>
      <Route path="/smart" element={<Smart/>}/>
      <Route path="/message" element={<Message/>}/>
      {/* <Route path="/noti" element={<Notification/>}/> */}
      <Route path="/noti" element={<FeedForm/>}/>
      <Route path="/cal" element={<CustomMonthLayout/>}/>
      <Route path="/main" element={<CheckboxList/>}/>
      {/* <Route path="/invent" element={<Inventory/>}/> */}
      <Route path="/invent" element={<Homes/>}/>
      <Route path="/security" element={<ButtonBaseDemo/>}/>
      {/* <Route path="/float" element={<TabsVertical/>}/> */}
      <Route path="/float" element={<CustomizedSnackbars/>}/>
      <Route path="/progress" element={<Budget/>}/>
      <Route path="/energy" element={<Energy/>}/>
      <Route path="/addProduct" element={<AddProduct/>}/>
      <Route path="/editProduct" element={<EditProduct/>}/>
      </Routes>
     
    </div>
    </Provider>
  );
}

export default App;

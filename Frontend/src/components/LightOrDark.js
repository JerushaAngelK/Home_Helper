// // import * as React from 'react';
// // import IconButton from '@mui/material/IconButton';
// // import Box from '@mui/material/Box';
// // import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
// // import Brightness4Icon from '@mui/icons-material/Brightness4';
// // import Brightness7Icon from '@mui/icons-material/Brightness7';
// // import Home from '../pages/home';
// // const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

// // function MyApp() {
// //   const theme = useTheme();
// //   const colorMode = React.useContext(ColorModeContext);
// //   return (
// //     <Box
// //       sx={{
// //         display: 'flex',
// //         width: '100%',
// //         alignItems: 'center',
// //         justifyContent: 'center',
// //         bgcolor: 'background.default',
// //         color: 'text.primary',
// //         borderRadius: 1,
// //         p: 3,
// //       }}
// //     >
// //       {theme.palette.mode} mode
// //       <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
// //         {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
// //       </IconButton>
// //     </Box>
// //   );
// // }

// // export default function ToggleColorMode() {
// //   const [mode, setMode] = React.useState('light');
// //   const colorMode = React.useMemo(
// //     () => ({
// //       toggleColorMode: () => {
// //         setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
// //       },
// //     }),
// //     [],
// //   );

// //   const theme = React.useMemo(
// //     () =>
// //       createTheme({
// //         palette: {
// //           mode,
// //         },
// //       }),
// //     [mode],
// //   );

// //   return (
// //     <ColorModeContext.Provider value={colorMode}>
// //       <ThemeProvider theme={theme}>
// //         <MyApp />
// //       </ThemeProvider>
// //     </ColorModeContext.Provider>
// //   );
// // }


// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
// import CardHeader from "@material-ui/core/CardHeader";
// import CardMedia from "@material-ui/core/CardMedia";
// import CardContent from "@material-ui/core/CardContent";
// import CardActions from "@material-ui/core/CardActions";
// import Avatar from "@material-ui/core/Avatar";
// import IconButton from "@material-ui/core/IconButton";
// import Typography from "@material-ui/core/Typography";
// import { red } from "@material-ui/core/colors";
// import FavoriteIcon from "@material-ui/icons/Favorite";
// import ShareIcon from "@material-ui/icons/Share";
// import Grid from "@material-ui/core/Grid";
// import MoreVertIcon from "@material-ui/icons/MoreVert";
// import React from "react";
// import Button from "@material-ui/core/Button";
// import MobileStepper from "@material-ui/core/MobileStepper";
// import Paper from "@material-ui/core/Paper";
// import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
// import Typography from "@material-ui/core/Typography";
// import { useTheme } from "@material-ui/core/styles";
// import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";

// const MyCollection = [
//     {
//         label: "Renovations",
//         imgPath:
//             "https://media.geeksforgeeks.org/wp-content/uploads/20210208000010/1.png",
//     },
//     {
//         label: "Decorations",
//         imgPath:
//             "https://media.geeksforgeeks.org/wp-content/uploads/20210208000009/2.png",
//     },
//     {
//         label: "Maintainence",
//         imgPath:
//             "https://media.geeksforgeeks.org/wp-content/uploads/20210208000008/3.png",
//     },
// ];
 
// // const Slide = () => 
// function Slide(){
//     const CollectionSize = MyCollection.length;
//     const theme = useTheme();
//     const [index, setActiveStep] = React.useState(0);
     
//      // Function to go to the next picture
//     const goToNextPicture = () => {
//         setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     };
 
//     return (
//         <div
//             style={{
//                 marginLeft: "40%",
//             }}
//         >
//             <h2>Our Achievements</h2>
//             <div
//                 style={{
//                     maxWidth: 400,
//                     flexGrow: 1,
//                 }}
//             >
//                 <Paper
//                     square
//                     elevation={0}
//                     style={{
//                         height: 50,
//                         display: "flex",
//                         paddingLeft: theme.spacing(4),
//                         backgroundColor: theme.palette.background.default,
//                         alignItems: "center",
//                     }}
//                 >
//                     <Typography>{MyCollection[index].label}</Typography>
//                 </Paper>
//                 <img
//                     src={MyCollection[index].imgPath}
//                     style={{
//                         height: 255,
//                         width: "100%",
//                         maxWidth: 400,
//                         display: "block",
//                         overflow: "hidden",
//                     }}
//                     alt={MyCollection[index].label}
//                 />
//                 <MobileStepper
//                     variant="text"
//                     position="static"
//                     index={index}
//                     steps={CollectionSize}
//                     nextButton={
//                         <Button
//                             size="small"
//                             onClick={goToNextPicture}
//                             disabled={index === CollectionSize - 1}
//                         >
//                             Next
//                             {theme.direction !== "rtl" ? (
//                                 <KeyboardArrowRight />
//                             ) : (
//                                 <KeyboardArrowLeft />
//                             )}
//                         </Button>
//                     }
//                 />
//             </div>
//         </div>
//     );
// };
// // function Slides(){
// //     return(

// //     )
// // }
// export default Slide;
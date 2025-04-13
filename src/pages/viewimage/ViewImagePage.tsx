// import {
//   Card,
//   CardActions,
//   CardContent,
//   CardHeader,
//   CardMedia,
//   Divider,
//   Grid,
//   Paper,
//   Typography,
//   Box,
//   Container,
//   keyframes,
// } from "@mui/material";
// import { LoadingButton } from "@mui/lab";
// import React, { useContext, useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import ToggleSwitch from "../../components/ToggleSwitch";
// import TopNavigation from "../../components/TopNavigation";
// import GeneralController from "../../controllers/general.controller";
// import AppCtx, { TRANSLATION_KEYS } from "../../store/app-state-context";
// import { ObjectDetectionFromImageResponseType } from "../../types/common/common.types";
// import { motion } from "framer-motion";

// const gradientBackground = keyframes`
//   0% { background-position: 0% 50%; }
//   50% { background-position: 100% 50%; }
//   100% { background-position: 0% 50%; }
// `;

// const pulse = keyframes`
//   0% { transform: scale(1); }
//   50% { transform: scale(1.05); }
//   100% { transform: scale(1); }
// `;

// export default function PreviewImage() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const ctx = useContext(AppCtx);
//   const [rawurl, setRawURL] = useState("");
//   const [imgObj, setImgObj] = useState(new File([], "tempfile"));
//   const [toggledObject, setToggledObject] = useState(true);
//   const [isLoading, setIsLoading] = useState(false);
//   const [apiResponse, setApiResponse] =
//     useState<ObjectDetectionFromImageResponseType>({
//       image_name: "",
//       detections: [],
//     });
//   const [detectionsReady, setDetectionsReady] = useState(false);

//   const t = (key: TRANSLATION_KEYS) =>
//     ctx.translations[ctx.nativeLanguage]
//       ? ctx.translations[ctx.nativeLanguage][key]
//       : ctx.translations["en"][key];

//   useEffect(() => {
//     if (!location.state) {
//       navigate("/");
//     } else {
//       setRawURL(location.state.rawurl);
//       setImgObj(location.state.img);
//     }
//   }, [location.state, navigate]);

//   useEffect(() => {
//     if (detectionsReady) {
//       setDetectionsReady(false); // Reset state to force re-render
//       setDetectionsReady(true);
//     }
//   }, [ctx.favouriteLanguages, detectionsReady]);

//   const handleToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setToggledObject(event.target.checked);
//   };

//   const goScan = async (event: React.MouseEvent<HTMLButtonElement>) => {
//     event.preventDefault();
//     if (toggledObject) {
//       setIsLoading(true);
//       console.log(
//         "Requesting detections with languages:",
//         Array.from(ctx.favouriteLanguages)
//       );
//       const data = await GeneralController.getDetectionsInImage(
//         imgObj,
//         Array.from(ctx.favouriteLanguages),
//         ctx.nativeLanguage
//       );
//       console.log("API Response:", data);
//       setApiResponse(data);
//       setIsLoading(false);
//       setDetectionsReady(true);
//     } else {
//       navigate("/scantext");
//     }
//   };

//   return (
//     <>
//       <TopNavigation />
//       {/* Full-screen animated background transitioning from blue to red */}
//       <Box
//         sx={{
//           position: "fixed",
//           top: 0,
//           left: 0,
//           width: "100vw",
//           height: "100vh",
//           zIndex: -1,
//           background: "linear-gradient(45deg, #1e3c72, #2a5298, #f5af19, #f12711)",
//           backgroundSize: "400% 400%",
//           animation: `${gradientBackground} 15s ease infinite`,
//           transition: "background 1s ease-in-out",
//         }}
//       />
//       <Container sx={{ minHeight: "100vh", py: 4 }}>
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//           <Card
//             sx={{
//               maxWidth: 600,
//               m: "auto",
//               mt: 4,
//               p: 2,
//               borderRadius: 4,
//               boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
//               background: "rgba(255, 255, 255, 0.9)",
//               backdropFilter: "blur(10px)",
//               transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
//               "&:hover": {
//                 transform: "translateY(-5px)",
//                 boxShadow: "0 12px 40px rgba(0,0,0,0.2)",
//               },
//             }}
//           >
//             <CardHeader
//               action={
//                 <motion.div whileHover={{ scale: 1.1 }}>
//                   <ToggleSwitch name="toggleObject" onChange={handleToggle} />
//                 </motion.div>
//               }
//               titleTypographyProps={{
//                 variant: "h5",
//                 fontWeight: 700,
//                 color: "primary.main",
//                 fontFamily: "'Poppins', sans-serif",
//               }}
//               subheaderTypographyProps={{
//                 variant: "body2",
//                 color: "text.secondary",
//                 fontFamily: "'Poppins', sans-serif",
//               }}
//               title={t("READY_TO_SCAN")}
//               subheader={t("CHOOSE_TEXT_OR_OBJECT_DETECTION")}
//             />
//             <Divider sx={{ borderColor: "rgba(255,255,255,0.3)" }} />
//             <motion.div
//               whileHover={{ scale: 1.02 }}
//               transition={{ type: "spring", stiffness: 300 }}
//             >
//               <CardMedia
//                 component="img"
//                 image={rawurl}
//                 alt="A Photo"
//                 sx={{
//                   maxHeight: 400,
//                   objectFit: "cover",
//                   borderRadius: 2,
//                   mt: 2,
//                   border: "3px solid rgba(255,255,255,0.2)",
//                   boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
//                 }}
//               />
//             </motion.div>
//             <CardActions
//               sx={{ display: "flex", justifyContent: "center", mt: 3 }}
//             >
//               <LoadingButton
//                 size="large"
//                 color="secondary"
//                 variant="contained"
//                 loading={isLoading}
//                 onClick={goScan}
//                 sx={{
//                   borderRadius: 50,
//                   px: 4,
//                   py: 1.5,
//                   background:
//                     "linear-gradient(45deg, #6a11cb 0%, #2575fc 100%)",
//                   color: "white",
//                   fontWeight: 700,
//                   letterSpacing: 1.1,
//                   transition: "all 0.3s",
//                   "&:hover": {
//                     background:
//                       "linear-gradient(45deg, #2575fc 0%, #6a11cb 100%)",
//                     animation: `${pulse} 1.5s infinite`,
//                   },
//                   "&.MuiLoadingButton-loading": {
//                     background:
//                       "linear-gradient(45deg, #4a148c 0%, #1a237e 100%)",
//                   },
//                 }}
//               >
//                 {t("SCAN")}
//               </LoadingButton>
//             </CardActions>
//           </Card>
//         </motion.div>

//         {detectionsReady &&
//           apiResponse.detections.map((detectionWithTranslation, index) => (
//             <motion.div
//               key={detectionWithTranslation.mid}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1, duration: 0.5 }}
//             >
//               <Card
//                 sx={{
//                   m: 2,
//                   p: 2,
//                   borderRadius: 3,
//                   background: "rgba(255,255,255,0.8)",
//                   backdropFilter: "blur(8px)",
//                   boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
//                   transition: "all 0.3s",
//                   "&:hover": {
//                     transform: "translateY(-3px)",
//                     boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
//                   },
//                 }}
//               >
//                 <CardContent>
//                   <Box sx={{ p: 2 }}>
//                     <Typography
//                       variant="h6"
//                       fontWeight="bold"
//                       sx={{
//                         background:
//                           "linear-gradient(45deg, #ff6b6b 0%, #ff8e53 100%)",
//                         WebkitBackgroundClip: "text",
//                         WebkitTextFillColor: "transparent",
//                         mb: 2,
//                       }}
//                     >
//                       Object Details
//                     </Typography>
//                     <Grid container spacing={2}>
//                       {detectionWithTranslation.translations.map(
//                         (trans, idx) => (
//                           <Grid item xs={12} key={trans.language}>
//                             <motion.div
//                               whileHover={{ scale: 1.02 }}
//                               transition={{ type: "spring", stiffness: 200 }}
//                             >
//                               <Paper
//                                 sx={{
//                                   p: 2,
//                                   background: `linear-gradient(45deg, ${
//                                     idx % 2 === 0 ? "#f6d365" : "#84fab0"
//                                   } 0%, ${
//                                     idx % 2 === 0 ? "#fda085" : "#8fd3f4"
//                                   } 100%)`,
//                                   borderRadius: 2,
//                                   position: "relative",
//                                   overflow: "hidden",
//                                   "&:before": {
//                                     content: '""',
//                                     position: "absolute",
//                                     top: 0,
//                                     left: "-100%",
//                                     width: "200%",
//                                     height: "100%",
//                                     background:
//                                       "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
//                                     transition: "left 0.6s",
//                                   },
//                                   "&:hover:before": {
//                                     left: "100%",
//                                   },
//                                 }}
//                               >
//                                 <Typography
//                                   variant="h6"
//                                   fontWeight={600}
//                                   sx={{ color: "#2c3e50" }}
//                                 >
//                                   {trans.translation}
//                                 </Typography>
//                                 {detectionWithTranslation.descriptions?.map(
//                                   (desc) =>
//                                     desc.language === trans.language ? (
//                                       <Typography
//                                         key={desc.language}
//                                         variant="body1"
//                                         sx={{ color: "#34495e", mt: 1 }}
//                                       >
//                                         {desc.description}
//                                       </Typography>
//                                     ) : null
//                                 )}
//                                 <Typography
//                                   variant="caption"
//                                   sx={{
//                                     color: "#7f8c8d",
//                                     display: "block",
//                                     mt: 1,
//                                   }}
//                                 >
//                                   ({ctx.availableLanguages[trans.language]})
//                                 </Typography>
//                               </Paper>
//                             </motion.div>
//                           </Grid>
//                         )
//                       )}
//                     </Grid>
//                   </Box>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//       </Container>
//     </>
//   );
// }

import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Grid,
  Paper,
  Typography,
  Box,
  Container,
  keyframes,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ToggleSwitch from "../../components/ToggleSwitch";
import TopNavigation from "../../components/TopNavigation";
import GeneralController from "../../controllers/general.controller";
import AppCtx, { TRANSLATION_KEYS } from "../../store/app-state-context";
import { ObjectDetectionFromImageResponseType } from "../../types/common/common.types";
import { motion } from "framer-motion";

const gradientBackground = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

export default function PreviewImage() {
  const location = useLocation();
  const navigate = useNavigate();
  const ctx = useContext(AppCtx);
  const [rawurl, setRawURL] = useState("");
  const [imgObj, setImgObj] = useState(new File([], "tempfile"));
  const [toggledObject, setToggledObject] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [apiResponse, setApiResponse] =
    useState<ObjectDetectionFromImageResponseType>({
      image_name: "",
      detections: [],
    });
  const [detectionsReady, setDetectionsReady] = useState(false);

  const t = (key: TRANSLATION_KEYS) =>
    ctx.translations[ctx.nativeLanguage]
      ? ctx.translations[ctx.nativeLanguage][key]
      : ctx.translations["en"][key];

  useEffect(() => {
    if (!location.state) {
      navigate("/");
    } else {
      setRawURL(location.state.rawurl);
      setImgObj(location.state.img);
    }
  }, [location.state, navigate]);

  useEffect(() => {
    if (detectionsReady) {
      setDetectionsReady(false); // Reset state to force re-render
      setDetectionsReady(true);
    }
  }, [ctx.favouriteLanguages, detectionsReady]);

  const handleToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setToggledObject(event.target.checked);
  };

  const goScan = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (toggledObject) {
      setIsLoading(true);
      console.log(
        "Requesting detections with languages:",
        Array.from(ctx.favouriteLanguages)
      );
      const data = await GeneralController.getDetectionsInImage(
        imgObj,
        Array.from(ctx.favouriteLanguages),
        ctx.nativeLanguage
      );
      console.log("API Response:", data);
      setApiResponse(data);
      setIsLoading(false);
      setDetectionsReady(true);
    } else {
      navigate("/scantext");
    }
  };

  return (
    <>
      <TopNavigation />
      {/* Full-screen animated background transitioning from blue to red */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: -1,
          background:
            "linear-gradient(45deg, #1e3c72, #2a5298, #f5af19, #f12711)",
          backgroundSize: "400% 400%",
          animation: `${gradientBackground} 15s ease infinite`,
          transition: "background 1s ease-in-out",
        }}
      />
      <Container sx={{ minHeight: "100vh", py: 4 }}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Card
            sx={{
              maxWidth: 600,
              m: "auto",
              mt: 4,
              p: 2,
              borderRadius: 4,
              boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
              background: "rgba(255, 255, 255, 0.9)",
              backdropFilter: "blur(10px)",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 12px 40px rgba(0,0,0,0.2)",
              },
            }}
          >
            <CardHeader
              action={
                <motion.div whileHover={{ scale: 1.1 }}>
                  <ToggleSwitch name="toggleObject" onChange={handleToggle} />
                </motion.div>
              }
              titleTypographyProps={{
                variant: "h5",
                fontWeight: 700,
                color: "primary.main",
                fontFamily: "'Poppins', sans-serif",
              }}
              subheaderTypographyProps={{
                variant: "body2",
                color: "text.secondary",
                fontFamily: "'Poppins', sans-serif",
              }}
              title={t("READY_TO_SCAN")}
              subheader={t("CHOOSE_TEXT_OR_OBJECT_DETECTION")}
            />
            <Divider sx={{ borderColor: "rgba(255,255,255,0.3)" }} />
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <CardMedia
                component="img"
                image={rawurl}
                alt="A Photo"
                sx={{
                  maxHeight: 400,
                  objectFit: "cover",
                  borderRadius: 2,
                  mt: 2,
                  border: "3px solid rgba(255,255,255,0.2)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                }}
              />
            </motion.div>
            <CardActions
              sx={{ display: "flex", justifyContent: "center", mt: 3 }}
            >
              <LoadingButton
                size="large"
                color="secondary"
                variant="contained"
                loading={isLoading}
                onClick={goScan}
                sx={{
                  borderRadius: 50,
                  px: 4,
                  py: 1.5,
                  background:
                    "linear-gradient(45deg, #6a11cb 0%, #2575fc 100%)",
                  color: "white",
                  fontWeight: 700,
                  letterSpacing: 1.1,
                  transition: "all 0.3s",
                  "&:hover": {
                    background:
                      "linear-gradient(45deg, #2575fc 0%, #6a11cb 100%)",
                    animation: `${pulse} 1.5s infinite`,
                  },
                  "&.MuiLoadingButton-loading": {
                    background:
                      "linear-gradient(45deg, #4a148c 0%, #1a237e 100%)",
                  },
                }}
              >
                {t("SCAN")}
              </LoadingButton>
            </CardActions>
          </Card>
        </motion.div>

        {detectionsReady &&
          apiResponse.detections.map((detectionWithTranslation, index) => (
            <motion.div
              key={detectionWithTranslation.mid}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card
                sx={{
                  m: 2,
                  p: 2,
                  borderRadius: 3,
                  background: "rgba(255,255,255,0.8)",
                  backdropFilter: "blur(8px)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                  transition: "all 0.3s",
                  "&:hover": {
                    transform: "translateY(-3px)",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                  },
                }}
              >
                <CardContent>
                  <Box sx={{ p: 2 }}>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      sx={{
                        background:
                          "linear-gradient(45deg, #ff6b6b 0%, #ff8e53 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        mb: 2,
                      }}
                    >
                      Object Details
                    </Typography>
                    <Grid container spacing={2}>
                      {detectionWithTranslation.translations.map(
                        (trans, idx) => (
                          <Grid item xs={12} key={trans.language}>
                            <motion.div
                              whileHover={{ scale: 1.02 }}
                              transition={{ type: "spring", stiffness: 200 }}
                            >
                              {/* <Paper
                                sx={{
                                  p: 2,
                                  background: `linear-gradient(45deg, ${
                                    idx % 5 === 0
                                      ? "#f6d365"
                                      : idx % 5 === 1
                                      ? "#84fab0"
                                      : idx % 5 === 2
                                      ? "#96e6a1"
                                      : idx % 5 === 3
                                      ? "#fbc2eb"
                                      : "#8ec5fc"
                                  } 0%, ${
                                    idx % 5 === 0
                                      ? "#fda085"
                                      : idx % 5 === 1
                                      ? "#8fd3f4"
                                      : idx % 5 === 2
                                      ? "#d4fc79"
                                      : idx % 5 === 3
                                      ? "#a6c1ee"
                                      : "#e0c3fc"
                                  } 100%)`,
                                  borderRadius: 2,
                                  position: "relative",
                                  overflow: "hidden",
                                  "&:before": {
                                    content: '""',
                                    position: "absolute",
                                    top: 0,
                                    left: "-100%",
                                    width: "200%",
                                    height: "100%",
                                    background:
                                      "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
                                    transition: "left 0.6s",
                                  },
                                  "&:hover:before": {
                                    left: "100%",
                                  },
                                }}
                              >
                                <Typography
                                  variant="h6"
                                  fontWeight={600}
                                  sx={{ color: "#2c3e50" }}
                                >
                                  {trans.translation}
                                </Typography>
                                {detectionWithTranslation.descriptions?.map(
                                  (desc) =>
                                    desc.language === trans.language ? (
                                      <Typography
                                        key={desc.language}
                                        variant="body1"
                                        sx={{ color: "#34495e", mt: 1 }}
                                      >
                                        {desc.description}
                                      </Typography>
                                    ) : null
                                )}
                                <Typography
                                  variant="caption"
                                  sx={{
                                    color: "#7f8c8d",
                                    display: "block",
                                    mt: 1,
                                  }}
                                >
                                  ({ctx.availableLanguages[trans.language]})
                                </Typography>
                              </Paper> */}
                              <Paper
                                sx={{
                                  p: 2,
                                  background: `linear-gradient(45deg, ${
                                    idx % 5 === 0
                                      ? "#f6d365"
                                      : idx % 5 === 1
                                      ? "#84fab0"
                                      : idx % 5 === 2
                                      ?   "#ff9a9e"
                                      : idx % 5 === 3
                                      ? "#96e6a1"
                                      : "#8ec5fc"
                                  } 0%, ${
                                    idx % 5 === 0
                                      ? "#fda085"
                                      : idx % 5 === 1
                                      ? "#8fd3f4"
                                      : idx % 5 === 2
                                      ?  "#fad0c4"
                                      : idx % 5 === 3
                                      ? "#d4fc79"
                                      : "#e0c3fc"
                                  } 100%)`,
                                  borderRadius: 2,
                                  position: "relative",
                                  overflow: "hidden",
                                  "&:before": {
                                    content: '""',
                                    position: "absolute",
                                    top: 0,
                                    left: "-100%",
                                    width: "200%",
                                    height: "100%",
                                    background:
                                      "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
                                    transition: "left 0.6s",
                                  },
                                  "&:hover:before": {
                                    left: "100%",
                                  },
                                }}
                              >
                                <Typography
                                  variant="h6"
                                  fontWeight={600}
                                  sx={{ color: "#2c3e50" }}
                                >
                                  {trans.translation}
                                </Typography>
                                {detectionWithTranslation.descriptions?.map(
                                  (desc) =>
                                    desc.language === trans.language ? (
                                      <Typography
                                        key={desc.language}
                                        variant="body1"
                                        sx={{ color: "#34495e", mt: 1 }}
                                      >
                                        {desc.description}
                                      </Typography>
                                    ) : null
                                )}
                                <Typography
                                  variant="caption"
                                  sx={{
                                    color: "#7f8c8d",
                                    display: "block",
                                    mt: 1,
                                  }}
                                >
                                  ({ctx.availableLanguages[trans.language]})
                                </Typography>
                              </Paper>
                            </motion.div>
                          </Grid>
                        )
                      )}
                    </Grid>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          ))}
      </Container>
    </>
  );
}
